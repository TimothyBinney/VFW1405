var quizFunction = function(){
	
var weapons = [
	{title: "Sword", description: "You are a warrior a ferocious beast!"},
	{title: "Fists", description: "You are a rigid frontline brawler!"},
	{title: "Daggers", description: "You take the enemy from behind with stealth and agility!"},
	{title: "Bow", description: "You attack from afar with little sound so you keep your cover!"},
	{title: "Gun", description: "You attack lazily from afar while drinking mead with a powerful arsenil"},
	{title: "Wand", description: "You are a magic wielding wizard who demolishes or heals friend and foe from afar!"},
];	
	
	var quizWindow = Ti.UI.createWindow({
  		backgroundColor: 'white'
});
	var textField = Ti.UI.createTextField({
  	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	color: 'blue',
  	top: 40, 
  	left: 10,
  	width: "100%", 
  	height: 60
});

	var titleView = Ti.UI.createView({
		backgroundColor: "white",
		top: textField.top + textField.height + 10,
		width: "100%",
		left: 10,
		height: 30,
	});

	var titleInfo = Ti.UI.createLabel({
		text: "Choose Your Weapon!"
	});

var getClass = function(){
	
	var weapon = textField.value;
	
	var classWindow = Ti.UI.createView({
		backgroundColor: "white",
		top: titleView.top + titleView.height + 30,
		width: "100%" 
	});
	
	var classView = Ti.UI.createLabel({
		text:"You have chosen the " + weapon + " for your weapon! God Speed Crusader!",
	});
	classWindow.add(classView);
	quizWindow.add(classWindow);
	
};
	var textButton = Ti.UI.createView({
		backgroundColor: "#23ba00",
		width: "100%",
		bottom: 0,
		height: 50,
	});
	
	var textButtonLabel = Ti.UI.createLabel({
		text: "Choose!"
	});
	
textButton.addEventListener("click", getClass);

textButton.add(textButtonLabel);
titleView.add(titleInfo);
quizWindow.add(titleView, textField, textButton);
mainNav.openWindow(quizWindow);
};
textFieldButton.addEventListener("click", quizFunction);

