var mainWin = Ti.UI.createWindow({
	backgroundColor: "gray",
	title: "Main Menu"
});

var mainNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var galButton = Ti.UI.createView ({
	backgroundColor: "#23ba00",
	top: 30,
	height: 50,
	width: 100,
});

var galButtonText = Ti.UI.createLabel({
	text: "Image Gallery",
	textAlign: "center",
	color: "#fff",
});

var sectionButton = Ti.UI.createView ({
	backgroundColor: "#23ba00",
	top:galButton.top + galButton.height + 10,
	height: 50,
	width: 100,
});

var sectionButtonText = Ti.UI.createLabel({
	text: "Weapon Sections",
	textAlign: "center",
	color: "#fff",
});


var textFieldButton = Ti.UI.createView ({
	backgroundColor: "#23ba00",
	top:sectionButton.top + sectionButton.height + 10,
	height: 50,
	width: 100,
});

var textFieldButtonText = Ti.UI.createLabel({
	text: "Text Field",
	textAlign: "center",
	color: "#fff",
});


var loadJs = require ("gallery");
var loadJs2 = require ("sections");
var loadJs3 = require ("research");


sectionButton.add(sectionButtonText);
textFieldButton.add(textFieldButtonText);
galButton.add(galButtonText);
mainWin.add(galButton, sectionButton, textFieldButton);
mainNav.open();
