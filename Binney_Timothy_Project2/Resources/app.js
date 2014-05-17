
var mainWindow = Ti.UI.createWindow({
	title: "Weapons of War",
	backgroundColor: "gray"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var titleView = Ti.UI.createView({
	height: 65,
	backGroundColor: "#fff",
	top: 0,
});

var loadFile = require ("weapons");


navWindow.add(titleView);
navWindow.open();