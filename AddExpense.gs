function addExpenseSheetSetup(addExpenseSheet) {
  // Add text to cells
  const data = [
    ['Date',new Date(new Date().setHours(0, 0, 0, 0))],
    ['Amount',''],
    ['Category',''],
    ['Description',''],
    ['Is Income',''],
    ['Submit',''],
  ];
  const startRow = 1;
  const startCol = 1;
  const range = addExpenseSheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);

  // Date field
  var cells = addExpenseSheet.getRange(1, 2);
  const rule = SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build();
  cells.setDataValidation(rule);
  // Currency for amount
  cells = addExpenseSheet.getRange(2, 2);
  cells.setNumberFormat("$#,##0.00");
  // TODO: dropdown (pupulated from settings) for category
  // Add checkboxes
  cells = addExpenseSheet.getRange(5, 2, 2, 1);
  cells.insertCheckboxes();

  // Formatting
  range.setBorder(true, true, true, true, true, true, "black", SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  addExpenseSheet.setHiddenGridlines(true);
}

// TODO: Submit expense from side bar?
function showAddExpenseSidebar() {
  var sidebarHtml = HtmlService.createHtmlOutputFromFile('AddExpenseSidebar').setTitle('Add Expense');
  SpreadsheetApp.getUi().showSidebar(sidebarHtml);
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