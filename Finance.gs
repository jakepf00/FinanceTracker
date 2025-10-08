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

  // Add text to cells
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = [
    ['Date',''],
    ['Amount',''],
    ['Category',''],
    ['Description',''],
    ['Is Income',''],
    ['Submit',''],
  ];
  const startRow = 1;
  const startCol = 1;
  const range = sheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);

  // Date field
  // TODO: default to today
  var cells = sheet.getRange(1, 2);
  const rule = SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build();
  cells.setDataValidation(rule);
  // Currency for amount
  cells = sheet.getRange(2, 2);
  cells.setNumberFormat("$#,##0.00");
  // TODO: dropdown (pupulated from settings) for category
  // Add checkboxes
  // TODO: add onEdit for submit checkbox to call submit function
  cells = sheet.getRange(5, 2, 2, 1);
  cells.insertCheckboxes();

  // Formatting
  range.setBorder(true, true, true, true, true, true, "black", SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  sheet.setHiddenGridlines(true);
}

function setupSheetDashboard(dashboardSheet) {
  SpreadsheetApp.getUi().alert("Setting up dashboard sheet...")
  // TODO: implement
}

function setupSheetData(dataSheet) {
  // TODO: make non-editable? Or some sort of confirm changes thing?
  SpreadsheetApp.getUi().alert("Setting up data sheet...")
  // TODO: just have user manually turn this into a table?
  // - Have an alert dialog to instruct.
  // - Format > convert to table.
  // - Name it as well?  or future finding/use.
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

  cells = sheet.getRange(2, 5, 2, 1);
  cells.insertCheckboxes();
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