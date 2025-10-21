// TODO: Separate module for each sheet setup?

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

function dashboardSheetSetup(dashboardSheet) {
  const data = [
    ['Monthly Spending','2025'],
    ['Month','Total Spend'],
    ['January','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['February','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['March','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['April','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['May','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['June','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['July','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['August','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['September','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['October','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['November','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
    ['December','=SUMIF(Data!E2:E,FALSE,Data!B2:B)'],
  ];
  const startRow = 1;
  const startCol = 1;
  const range = dashboardSheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);

  // TODO: Filter by month/year
  // TODO: Categories - dropdown selection?
  // TODO: Income chart
  // TODO: Formatting?
}

function updateYearDropdown() {
  dashboardSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dashboard");
  dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

  // Get dropdown values
  const dateValues = dataSheet.getRange(2, 1, dataSheet.getLastRow(), 1).getValues();
  const uniqueYears = new Set();
  dateValues.forEach(row => {
    const cellValue = row[0]; // Each row from getValues() is an array, even for a single column
    if (cellValue instanceof Date) {
      const year = cellValue.getFullYear();
      uniqueYears.add(year);
    }
  });
  const yearsArray = Array.from(uniqueYears);
  // TODO: Sort the years array?

  // Set dropdown cell validation rule
  var dropdownCell = dashboardSheet.getRange("B1");
  var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(yearsArray)
      .setAllowInvalid(false) // Prevents users from entering values not in the list
      .build();
  dropdownCell.setDataValidation(rule);
  // TODO: Make this dropdown actually change the displayed data
}

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

function settingsSheetSetup(settingsSheet) {
  // TODO: implement
}