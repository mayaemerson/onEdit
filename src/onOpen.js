function onOpen(e) {
  var app = SpreadsheetApp;
  var ui = app.getUi();
  ui.alert(e.source.getSheets()[0].getName());
  ui.createMenu("Menu").addItem("onEdit", "onEdit").addToUi();
}
