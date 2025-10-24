function dataSheetSetup(dataSheet) {
  // TODO: make non-editable? Or some sort of confirm changes thing?
  // TODO: just have user manually turn this into a table?
  // - Have an alert dialog to instruct.
  // - Format > convert to table.
  // - Name it as well?  or future finding/use.
  const data = [
    ['Date', 'Amount','Category','Description','isIncome'],
    ['10/04/2025','$0.00','Test','Test Expense','FALSE'],
    ['10/04/2025','$0.00','Test','Test Income','TRUE'],
  ];
  const startRow = 1;
  const startCol = 1;
  const range = dataSheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);

  cells = dataSheet.getRange(2, 5, 2, 1);
  cells.insertCheckboxes();
}