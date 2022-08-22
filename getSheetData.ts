export const spreadsheetId: string = '1uMeAQFG_-ye1soytgeOtA2Y76bpTQ6WdUDYn7Zc_auQ';

 export async function getSheetRows() {
  const ss = await SpreadsheetApp.openById(spreadsheetId); 
  const sheet = await ss.getSheetByName(sheetName);
  const values_obj = await sheet.getDataRange().getValues();
  return values_obj;
};

