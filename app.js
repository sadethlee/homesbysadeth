const video = document.querySelector("video");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute("autoplay");
  video.pause();
}

var burger = document.querySelector('.burger');
var nav = document.querySelector('#' + burger.dataset.target);
var header = document.querySelector('.headroom');

//Bulma responsive nav
burger.addEventListener('click', function(){
  burger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

//Headroom (using Animate.css styles)
var headroom = new Headroom(header, {
  offset: 105,
  tolerance: 5,
  classes: {
    initial: "animated",
    pinned: "slideInDown",//custom: slideDown
    unpinned: "slideOutUp"//custom: slideUp
  }
});
headroom.init();
