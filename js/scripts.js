console.log('Hello from js/scripts.js!');

var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i = 1; i <= 8; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

/* Wiring up the filter button */

btn.onclick = function() {
  var btnClass = btn.getAttribute('class');
  if(btnClass === 'normal-filter') {
    btn.setAttribute('class','filter-1');
    btn.textContent = 'Inverted';
    overlay.style.backgroundColor = 'rgba(255,255,255,1)';
  }
else if (btnClass === 'filter-1') {
  btn.setAttribute('class','filter-2');
  btn.textContent = 'Psychadelic';
  overlay.style.backgroundColor = 'rgba(0,0,255,1)';
}
else if (btnClass === 'filter-2') {
  btn.setAttribute('class','filter-3');
  btn.textContent = 'Merry Christmas!';
  overlay.style.backgroundColor = 'rgba(255,0,0,1)';
}
  else {
    btn.setAttribute('class','normal-filter');
    btn.textContent = 'Normal';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
