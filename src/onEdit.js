function onEdit(e){
  var range = e.range;
  //range.setNote('Last modified: ' + new Date());
  Logger.log('Valor editado: ' + e.value);
  Logger.log('Valor antigo: ' + e.oldValue);
  Logger.log("Linha editada : "+ e.range.getRow() + " | " + "coluna editada: " + e.range.getColumn());

  var interval = e.range;
  var value = e.value;
  var spreadsheet = e.source;

  if(interval.getColumn() == 4 && value == 'Goiânia'){
    spreadsheet.getSheetByName('home').getRange("A"+interval.getRow() + " :F"+interval.getRow()).setBackground("blue");
  }

}
