function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitExpense(formObject) {
  var amount = formObject.amount;
  var description = formObject.description;
  var category = formObject.category;
  var date = formObject.date;
  var isExpense = formObject.incomeExpense

  Logger.log("Amount: " + amount);
  Logger.log("Description: " + description);
  Logger.log("Category: " + category);
  Logger.log("Date: " + date);
  Logger.log("Is Expense: " + isExpense);

  // TODO: add data to a Google Sheet
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //sheet.appendRow([name, email]);

  // TODO: Reopen the expense input page (this isn't working)
  // TODO: message or something "completed successfully"
  return HtmlService.createHtmlOutputFromFile('index');
}