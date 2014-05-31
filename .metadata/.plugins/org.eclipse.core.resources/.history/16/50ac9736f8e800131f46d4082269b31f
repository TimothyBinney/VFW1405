var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Images");
	var imagesFile = imagesFolder.getDirectoryListing();

var makeGallery = function(){

	var phoneWidth = Ti.Platform.displayCaps.platformWidth;
	var phoneHeight = Ti.Platform.displayCaps.platformHeight;
	var margin = 10;
	var rows = 4;
	var objectWidth = (phoneWidth / rows) - margin*2;
	var objectHeight = (phoneHeight / 8) - margin;
	
	
	var galleryWindow = Ti.UI.createWindow({
		title: "Gallery",
	});

	
	var galleryView = Ti.UI.createScrollView({
		backgroundColor: "#fff",
		layout: "horizontal",
		width: phoneWidth,
		contentWidth: phoneWidth,
		showVerticalScrollIndicator: true,
	});
	
	for(var i=0; i<imagesFile.length; i++){
		var imageViews = Ti.UI.createImageView({
		image: "Images/" + imagesFile[i],
		borderRadius: 4,
		top: margin,
		left: margin,
		right: margin,
		width: objectWidth,
		height: objectHeight,
		names: imagesFile[i],
		});
	console.log(imageViews.image);
	galleryView.add(imageViews);
};

var getImage = function(event){
	var imageWindow = Ti.UI.createWindow({
	title: event.source.names,
	backgroundColor: "#fff",
	});


var largeImage = Ti.UI.createImageView({
	image: event.source.image,
});

imageWindow.add(largeImage);
mainNav.openWindow(imageWindow);
};

galleryView.addEventListener("click", getImage);

galleryWindow.add(galleryView);
mainNav.openWindow(galleryWindow);
};

galButton.addEventListener("click", makeGallery);
