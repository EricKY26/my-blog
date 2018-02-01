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