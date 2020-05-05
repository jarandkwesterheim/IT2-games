

//slideshow
var imgBox = document.querySelector('.img-box');

var imgSrcArr = ['../Vedlegg_V18/intro1.jpg','../Vedlegg_V18/intro2.jpg','../Vedlegg_V18/intro3.jpg','../Vedlegg_V18/intro4.jpg']
var imgIndex = 0;


function slideshowNext() {
  imgIndex++;
  setBackground()
}
function slideshowPrev() {
  imgIndex = imgIndex-1;
  setBackground()
}

function setBackground() {
  imgBox.style.backgroundImage = 'url('+imgSrcArr[Math.abs(imgIndex)%4]+')';
}
setBackground();
