function dashboardSheetSetup(dashboardSheet) {
  // TODO: Format these cells as currency
  const data = [
    ['2025','Category...'],
    ['Month','Total Spend'],
    ['January','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=1),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['February','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=2),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['March','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=3),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['April','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=4),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['May','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=5),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['June','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=6),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['July','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=7),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['August','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=8),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['September','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=9),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['October','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=10),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['November','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=11),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
    ['December','=SUMIFS(Data!B:B,Data!E:E,FALSE,INDEX(MONTH(Data!A:A)=12),TRUE,INDEX(YEAR(Data!A:A)=A1),TRUE)'],
  ];
  const startRow = 1;
  const startCol = 1;
  const range = dashboardSheet.getRange(startRow, startCol, data.length, data[0].length);
  range.setValues(data);

  // Currency formatting
  var cells = dashboardSheet.getRange("B3:B14");
  cells.setNumberFormat("$#,##0.00");

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
  var dropdownCell = dashboardSheet.getRange("A1");
  var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(yearsArray)
      .setAllowInvalid(false) // Prevents users from entering values not in the list
      .build();
  dropdownCell.setDataValidation(rule);
  // TODO: Make this dropdown actually change the displayed data
}