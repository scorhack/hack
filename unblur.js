var imageEnding = {
  "p6-img": "0.jpg?ivVNyOOeaPMSv8F69aRMWg%3d%3d",
  "p4-img": "0.jpg?0cYX2nMnbAFsmU4J0uqKew%3d%3d",
  "p2-img": "0.jpg?hdT%2bMdxCXdwQukwYpkUCAg%3d%3d",
};
var doc = null;


function getImageEnding() {
  var imgs = doc.getElementsByTagName("img");

  for (img of imgs) {
	  var imgLink = img.src;
	  // find the ? sign, and backtrack to 0.jpg?<something>
	  if (imgLink.indexOf("?") < 4) {
		  return continue;
	  }

    var server = imgLink.slice(9, 15);
    console.log(server);

    if (undefined(imageEnding[server]) && imgLink.charAt(imgLink.indexOf("?") - 5) === "0") {
      imageEnding[server] = imgLink.slice(imgLink.indexOf("?") - 5, imgLink.length);
    }
  }
}

function updateImages() {
  getImageEnding();

	for (i of doc.querySelectorAll("img[src]")) {
    if (i.src.indexOf("?") < 4) {
		  return continue;
	  }

    var server = imgLink.slice(9, 15);

		i.src = i.src.slice(0, i.src.indexOf("?") - 5) + imageEnding[server];
	}
}

function prepareFrame() {
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", window.location.href); //"https://www.scor.dk/Profiler/Profil/2392623/CBen");
	ifrm.style.width = "100%";
	ifrm.style.height = "100%";
	ifrm.style.position = "fixed";
  ifrm.style.top = "0";
  ifrm.style.left = "0";
  ifrm.style.zIndex = "100";
	ifrm.onload = "updateImages()";
	document.body.appendChild(ifrm);
  doc = ifrm.contentDocument || ifrm.contentWindow.document;
}


prepareFrame();

setTimeout(function(){
	alert("Hvis du skulle have lyst til at kontakte mig, skal du være velkommen til at sende en snap til: kloster1992");
}, 2000);
