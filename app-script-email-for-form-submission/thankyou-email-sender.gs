function sendThankYouEmail() {
  const formResponsesSheet =
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = formResponsesSheet.getDataRange();
  const data = dataRange.getValues();

  const lastRowIndex = dataRange.getLastRow();
  const lastResponse = data[lastRowIndex - 1];

  const name = lastResponse[1];
  const email = lastResponse[2];

  const subject = "Thank you for submitting the form";
  const body = `Dear ${name},\n\nThank you for submitting the form. We appreciate your participation.\n\nBest regards,\nShailee Marahatta`;

  MailApp.sendEmail(email, subject, body);
  Logger.log(email, subject, body);
}
