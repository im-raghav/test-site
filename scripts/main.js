let myImage = document.querySelector("img")
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg') {
        myImage.setAttribute ('src','images/image2.jpg');
    } else {
        myImage.setAttribute ('src','images/image2.jpg');
    }

}
