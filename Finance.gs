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
  // TODO: implement
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