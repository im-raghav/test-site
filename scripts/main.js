let myImage = document.querySelector("img")
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg') {
        myImage.setAttribute ('src','images/image2.jpg');
    } else {
        myImage.setAttribute ('src','images/image2.jpg');
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'New York is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'New York is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}