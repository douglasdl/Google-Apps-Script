// Function to load a customized menu in the toolbar
function onOpen() {   
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [{name: "Sub Menu 1", functionName: "myFunc1"},
                     {name: "Sub Menu 2", functionName: "myFunc2"}
                    ];  
  ss.addMenu("Novo MENU", menuEntries);  
}


// Functions to be called on click each menu item
function myFunc1() {
  //
}

function myFunc2() {
  //
}
