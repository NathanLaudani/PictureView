

var imagePicData = new Array(7);
var locationData = new Array(7);
var captionData = new Array(7);

var fButtonListener
var bButtonListener

var whichPic = 0;

imagePicData [0] = "../images/flower1.jpg";
imagePicData [1] = "../images/flower2.jpg";
imagePicData [2] = "../images/flower3.jpg";
imagePicData [3] = "../images/icecrystals.jpg";
imagePicData [4] = "../images/petal1.jpg";
imagePicData [5] = "../images/petal2.jpg";
imagePicData [6] = "../images/petal3.jpg";

locationData [0] = "Milford, MA";
locationData [1] = "Milford, MA";
locationData [2] = "Milford, MA";
locationData [3] = "Southborough, MA";
locationData [4] = "Milford, MA";
locationData [5] = "Milford, MA";
locationData [6] = "Milford, MA";

captionData[0] = "A photo of a droopy flower in my house";
captionData[1] = "A picture showing a soft rose";
captionData[2] = "These are a small group of roses";
captionData[3] = "These ice crystals are beautiful close up";
captionData[4] = "A ton of small petals";
captionData[5] = "Some more of the petals close up";
captionData[6] = "Three of the the petals. Notice the tiny veins";


window.onload = function() {

whichPic = 0;
document.getElementById("picImgBox").src(imagePicData[whichPic]);

 fButtonListener = document.getElementById("forwardButton");
 bButtonListener = document.getElementById("backButton");

 fButtonListener.addEventListener('click', function(event){
 	++whichPic;
 	if whichPic >= imagePicData.length ){
 	whichPic = 0;
 }

document.getElementById("locationStation").innerHTML = locationData[whichPic];
document.getElementById("picImgBox").src = imagePicData[whichPic];
document.getElementById("captionLoc").innerHTML = captionData[whichPic];

 });

 bButtonListener.addEventListener('click', function(event){
 	whichPic+whichPic-1;
 	if (whichPic < 0){
		whichPic = imagePicData.length-1;
 	}

 	document.getElementById("locationStation").innerHTML = locationData[whichPic];
	document.getElementById("picImgBox").src = imagePicData[whichPic];
	document.getElementById("captionLoc").innerHTML = captionData[whichPic];
 	
 });





};






