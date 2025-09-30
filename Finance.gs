/*
// Add menu to the UI
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Jacob Menu')
    .addItem('Insert the date', 'insertDate')
    .addToUi();
}
*/

// Test function
function insertDate() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = sheet.getRange('B2');
  cell.setValue(new Date());
}

// Function to set up sheet?
// Create tabs - dashboard, data, settings
// Create tables
// Add UI elements for add expense, ...

// Function to add expense
// Sidebar?

// Function for automated data entry from external sources?

// Functions for data analysis, display on dashboard
