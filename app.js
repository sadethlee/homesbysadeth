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

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
      $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function() {
  // When arrow is clicked
  $("body,html").animate({
          scrollTop: 0 // Scroll to top of body
      },
      500
  );
});
