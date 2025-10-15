function addExpenseSheetSetup(addExpenseSheet) {
  // Add text to cells
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
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
  const range = sheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);

  // Date field
  var cells = sheet.getRange(1, 2);
  const rule = SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build();
  cells.setDataValidation(rule);
  // Currency for amount
  cells = sheet.getRange(2, 2);
  cells.setNumberFormat("$#,##0.00");
  // TODO: dropdown (pupulated from settings) for category
  // Add checkboxes
  cells = sheet.getRange(5, 2, 2, 1);
  cells.insertCheckboxes();

  // Formatting
  range.setBorder(true, true, true, true, true, true, "black", SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  sheet.setHiddenGridlines(true);
}

function dashboardSheetSetup(dashboardSheet) {
  // TODO: implement
}

function dataSheetSetup(dataSheet) {
  // TODO: make non-editable? Or some sort of confirm changes thing?
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

function settingsSheetSetup(settingsSheet) {
  // TODO: implement
}