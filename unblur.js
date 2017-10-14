var imageEnding = "";

function getImageEnding() {
	var profileImg = document.getElementsByClassName("ProfilePictureLarge")[0];
	var imgLink = profileImg.src;
	// find the ? sign, and backtrack to 0.jpg?<something>
	if (imgLink.indexOf("?") < 4) {
		return false;
	}
	imageEnding = imgLink.slice(imgLink.indexOf("?") - 5, imgLink.length);
	return true;
}

function updateImages() {
	if (imageEnding === "" || !getImageEnding()) {
		return;
	}

	for (i of document.querySelectorAll("img[src]")) {
		i.src = i.src.slice(0, (i.src.indexOf("?") > -1 ? i.src.indexOf("?") : i.src.length + 1) - 5) + imageEnding;
	}
}

function prepareFrame() {
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", window.location.href); //"https://www.scor.dk/Profiler/Profil/2392623/CBen");
	ifrm.style.width = "100%";
	ifrm.style.height = "100%";
	ifrm.style.position = "absolute";
  ifrm.style.zIndex = "100";
	ifrm.onload = "updateImages()";
	document.body.appendChild(ifrm);
}


prepareFrame();

setTimeout(function(){
	alert("Hvis du skulle have lyst til at kontakte mig, skal i v%aelig;re velkommen til at sende en snap til: kloster1992");
}, 2000);
