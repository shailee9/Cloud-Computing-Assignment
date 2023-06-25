function paySlipSender() {
  var spreadsheet = SpreadsheetApp.getActive().getSheetByName("List");
  var dataRange = spreadsheet.getRange("A2:D6").getValues();

  Logger.log(dataRange);
  for (var i = 0; i < dataRange.length; i++) {
    var employeeData = dataRange[i];
    var Name = employeeData[1];
    var salary = employeeData[3];
    var email = employeeData[2];
    var payslipMessageContent = payslipMessage(Name, salary);
    // Logger.log(dataRange[i]);
    //Logger.log(email);
    MailApp.sendEmail(email, "Payslip", payslipMessageContent);

    var statusCell = spreadsheet.getRange("E" + (i + 2));
    statusCell.setValue("Success");
  }
}

function payslipMessage(Name, salary) {
  var message = "Hi " + Name + "\n";
  message += "Your salary for the month of june has been deposited!\n";
  message += "Payable: " + salary + "\n";

  message += "Thanks";
  return message;
}
