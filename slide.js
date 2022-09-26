window.onscroll = function () {
  
  this.oldScroll = this.scrollY;
}
var video = document.querySelectorAll('video');
var video1 = document.querySelector('.video1');
var video2 = document.querySelector('.video2');
let oldValue = 0
let newValue = 0

window.addEventListener('scroll', () => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    video1.style.display = 'none';
    video2.style.display = 'block';
    video2.play(this);
   

  } else if (oldValue > newValue) {
    video1.style.display = 'block';
    video2.style.display = 'none';
    video1.play(this);
   

  }

  oldValue = newValue;
});


var timer = null;
window.addEventListener('scroll', function () {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    video1.pause(this);
    video2.pause(this);
  }, 10);
}, false);