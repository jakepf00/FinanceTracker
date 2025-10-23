// TODO: Break into modules
// Data functions? submit expense (+ built in functions? onOpen, onEdit...)
// Analysis module

// Add menu to the UI
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Expense Menu')
    .addItem('Add Expense', 'showAddExpenseSidebar')
    .addItem('Set up new sheet', 'createFinanceTemplate')
    .addToUi();
}

function showAddExpenseSidebar() {
  var sidebarHtml = HtmlService.createHtmlOutputFromFile('AddExpenseSidebar').setTitle('Add Expense');
  SpreadsheetApp.getUi().showSidebar(sidebarHtml);
}

function createFinanceTemplate() {
  // Confirm action
  var response = SpreadsheetApp.getUi().alert(
    'Confirm Action',
    'Are you sure you want to proceed with this action? Other sheet data may be lost.',
    SpreadsheetApp.getUi().ButtonSet.OK_CANCEL
  );
  // Process the user's response
  if (response != SpreadsheetApp.getUi().Button.OK) {
    return;
  }
  
  // Create and set up sheets
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var addExpenseSheet = ss.insertSheet("Add Expense");
  var dashboardSheet = ss.insertSheet("Dashboard");
  var dataSheet = ss.insertSheet("Data");
  var settingsSheet = ss.insertSheet("Settings");
  addExpenseSheetSetup(addExpenseSheet);
  dashboardSheetSetup(dashboardSheet);
  dataSheetSetup(dataSheet);
  settingsSheetSetup(settingsSheet);
  updateYearDropdown();
}

function onEdit(e) {
  const range = e.range;
  const sheet = range.getSheet();

  if (sheet.getName() === "Add Expense" && range.getColumn() === 2 && range.getRow() === 6 && e.value === "TRUE") {
    // Submit checkbox has been selected in 'Add Expense' sheet
    // TODO: Extra data validation (something has been entered)
    Logger.log("Submitting expense...");
    var date = sheet.getRange("B1").getValue();
    var amount = sheet.getRange("B2").getValue();
    var category = sheet.getRange("B3").getValue();
    var description = sheet.getRange("B4").getValue();
    var isIncome = sheet.getRange("B5").getValue();
    submitExpense(date, amount, category, description, isIncome);
    
    // Clear form
    const blankData = [[new Date(new Date().setHours(0, 0, 0, 0))],[''],[''],[''],['FALSE'],['FALSE'],];
    sheet.getRange(1, 2, blankData.length, blankData[0].length).setValues(blankData);
  }
}

function submitExpense(date, amount, category, description, isIncome) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("Data");
  sheet.insertRowsAfter(1, 1);
  const data = [[date, amount, category, description, isIncome],];
  const startRow = 2;
  const startCol = 1;
  const range = sheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);

  updateYearDropdown();
}

// TODO: Submit expense from side bar?

// TODO: Function for automated data entry from external sources?

// TODO: Functions for data analysis, display on dashboard