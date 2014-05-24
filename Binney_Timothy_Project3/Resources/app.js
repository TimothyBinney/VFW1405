
var mainWin = Ti.UI.createWindow({
	backgroundColor: "gray",
	title: "Main Menu"
});

var mainNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var galButton = Ti.UI.createView ({
	backgroundColor: "#23ba00",
	align: "center",
	height: 50,
	width: 100
});

var galButtonText = Ti.UI.createLabel({
	text: "Image Gallery",
	textAlign: "center",
	color: "#fff",
});

var loadJs = require ("gallery");

galButton.add(galButtonText);
mainWin.add(galButton);
mainNav.open();
