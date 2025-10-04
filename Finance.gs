// TODO: Break into modules

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
  setupSheetAddExpense(addExpenseSheet);

  var dashboardSheet = ss.insertSheet("Dashboard");
  setupSheetDashboard(dashboardSheet);

  var dataSheet = ss.insertSheet("Data");
  setupSheetData(dataSheet);

  var settingsSheet = ss.insertSheet("Settings");
  setupSheetSettings(settingsSheet);
}

function setupSheetAddExpense(addExpenseSheet) {
  SpreadsheetApp.getUi().alert("Setting up add expense sheet...")
  // TODO: implement
}

function setupSheetDashboard(dashboardSheet) {
  SpreadsheetApp.getUi().alert("Setting up dashboard sheet...")
  // TODO: implement
}

function setupSheetData(dataSheet) {
  SpreadsheetApp.getUi().alert("Setting up data sheet...")
  // TODO: just have user manually turn this into a table?
  // - Have an alert dialog to instruct.
  // - Format > convert to table.
  // - Name it as well?  or future finding/use.
  // - isIncome type also isn't setting correctly (checkbox).
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = [
    ['Date', 'Amount','Category','Description','isIncome'],
    ['10/04/2025','$0.00','Test','Test Expense','FALSE'],
    ['10/04/2025','$0.00','Test','Test Income','TRUE'],
  ];
  const startRow = 1;
  const startCol = 1;
  const range = sheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);
}

function setupSheetSettings(settingsSheet) {
  SpreadsheetApp.getUi().alert("Setting up settings sheet...")
  // TODO: implement
}

// Test function
function insertDate() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = sheet.getRange('B2');
  cell.setValue(new Date());
}

// TODO: Function to add expense (Both sidebar + from add expense sheet)

// TODO: Function for automated data entry from external sources?

// TODO: Functions for data analysis, display on dashboard