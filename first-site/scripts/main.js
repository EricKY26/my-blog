// var myHeading = document.querySelector('h1');
// myHeading.textContent='Hello World!';
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/moon-over-the-mountain-landscape.jpg') {
        myImage.setAttribute('src', 'images/mountains-with-lake-majestic-landscape.jpg');
    } else {
        myImage.setAttribute('src', 'images/moon-over-the-mountain-landscape.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'WebDev is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'WevDev is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}