function paySlipSender() {
  var spreadsheet = SpreadsheetApp.getActive().getSheetByName("List");
  var dataRange = spreadsheet.getRange("A2:D");

  var dataValues = dataRange.getValues();

  Logger.log(dataRange);
  for (var i = 0; i < dataValues.length; i++) {
    var employeeData = dataValues[i];
    var name = employeeData[1];
    var salary = employeeData[3];
    var email = employeeData[2];

    // Check if the row has non-empty values in all columns
    if (name && salary && email) {
      var payslipMessageContent = createPayslipMessage(name, salary);

      // Logger.log(dataRange[i]);
      // Logger.log(email);
      MailApp.sendEmail(email, "Payslip", payslipMessageContent);

      var statusCell = spreadsheet.getRange("E" + (i + 2));
      statusCell.setValue("Success");
    }
  }
}

function createPayslipMessage(name, salary) {
  var message = `Hi ${name}\n`;
  message += "Your salary for the month of June has been deposited!\n";
  message += `Payable: ${salary}\n`;

  message += "Thanks";
  return message;
}
