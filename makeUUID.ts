import { getSheetRows } from "./getSheetData";

async function makeUuidMain() {
  //タイマー実行予定
  await makeUuid('経験者の声');
  await makeUuid('事業部紹介');
  await makeUuid('求人情報');
}

// UUIDを追記するセルを確認
async function makeUuid(sheetName: string) {
  console.log('start makeUuid to', sheetName);
  const values_obj =  getSheetRows;

  let row: number = 2;

  if(values_obj) {
    
    for(let count = 0; count < values_obj.length-1; count++){
      let uuidColum: string = sheet.getRange('A' + row);
      if(uuidColum.isBlank()){
        uuidColum.setValue(getUuid())
      };
      row++;
    };
  };
}



