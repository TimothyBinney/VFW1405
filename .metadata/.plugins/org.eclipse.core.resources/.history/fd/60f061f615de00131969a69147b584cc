// Json Data

var weapons = {
	"Melee":{
		"theTitle": "Melee Weapons",
		"weaponList": [
		{
			"title": "Sword",
			"description": "A brute force weapon used for hacking and slashing."
		},	
		{	"title": "Dagger",	
			"description": "A small subtle weapon used from various weak points on an enemey for sudden devasting blows to vital organs."
		},
		{	"title": "Fists",
			"description": "A true warrior uses only his fists to deal blunt damage to a worthy foe."	
		}
		
	]
},
	"Ranged":{
		"theTitle": "Ranged Weapons",
		"weaponList": [
		{
			"title": "Bow",
			"description": "A silent ranged weapon for skilled warriors to attack vital spots on an enemy with light armor."
		},	
		{	"title": "Gun",	
			"description": "A loud all be it powerful ranged weapon used to blow enemies with the heaviest of armor away."
		},
		{	"title": "Wand",
			"description": "A mystical and terrifying weapon wielded by only the intellectually capable and magically inclined warrior to cast spells on enemies."	
		}
		
	]
	}	
};


// Main Code
var weaponTable = Ti.UI.createTableView({
	top: titleView.top + titleView.height + 10,
});

if (Ti.Platform.name === "iPhone OS"){
	weaponTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}


var meleeSection = Ti.UI.createTableViewSection({
	headerTitle: weapons.Melee.theTitle,
	footerTitle: "For Adventurer's of close range combat!"
});

var rangedSection = Ti.UI.createTableViewSection({
	headerTitle: weapons.Ranged.theTitle,
	footerTitle: "For Adventurer's to damage from afar!"
});

// Description Info For Row Listener Function
var getInfo = function(){
	var infoWindow = Ti.UI.createWindow({
		title: this.title,
		backGroundColor: "#fff",
	});
	var infoText = Ti.UI.createLabel({
		text: this.description,
	});
	infoWindow.add(infoText);
	navWindow.openWindow(infoWindow);
};

// For Loops Making Table Rows
for(var i=0, j=weapons.Ranged.weaponList.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: weapons.Ranged.weaponList[i].title,
		hasChild: true
	});
	rangedSection.add(theRow);
	theRow.addEventListener("click", getInfo);
};

for(var i=0, j=weapons.Melee.weaponList.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: weapons.Melee.weaponList[i].title,
		hasChild: true
	});
	meleeSection.add(theRow);
	theRow.addEventListener("click", getInfo);
};

var weaponSections = [rangedSection, meleeSection];

weaponTable.setData(weaponSections);
navWindow.add(weaponTable);
