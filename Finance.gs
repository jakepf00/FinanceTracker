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
  var ui = SpreadsheetApp.getUi();

  var response = ui.alert(
    'Confirm Action',
    'Are you sure you want to proceed with this action? Other sheet data may be lost.',
    ui.ButtonSet.OK_CANCEL
  );

  // Process the user's response
  if (response != ui.Button.OK) {
    return;
  }
  
  // Continue creating template
  ui.alert("Creating template...")

  // TODO: create these items
  // Create tabs - add expense, dashboard, data, settings
  // Create tables
}

// Test function
function insertDate() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = sheet.getRange('B2');
  cell.setValue(new Date());
}

// Function to add expense (Both sidebar + from add expense sheet)

// Function for automated data entry from external sources?

// Functions for data analysis, display on dashboard