let submit = document.getElementById('submitButton');

submit.onclick = function(element) {
  var input = document.getElementById('inputText');
  

};


function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText); //Make this into images?
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function updateImages(imageURLs) {
  var output = document.getElementByClass('images')
  // Add images
}
