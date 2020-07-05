function wait(waitMsec) {
  var startMsec = new Date();
  while (new Date() - startMsec < waitMsec);
}

const loader = document.getElementById('loader');
const title = document.getElementById('title_bg');
const contents = document.getElementsByClassName('contents')[0];

function loaded(){
  loader.classList.add('hidden');
  title.classList.add('fadeout');
  const fout_title = document.querySelector('#title_bg.fadeout');
  fout_title.addEventListener('transitionend', function(){
    title.classList.add('hidden');
  });
}
setTimeout(loaded, 3000);

window.addEventListener('load', loaded);

const header = document.getElementsByTagName('header')[0];
const header_left = document.getElementsByClassName('header_left')[0];
const main = document.getElementsByTagName('main')[0];

// function headerFix(){
//   var scrPos = window.pageYOffset;
//   var header_height = header.offsetHeight;
//   if (scrPos >= header_height){
//     header.classList.add('fixed');
//     header_left.classList.add('hidden');
//     main.style.marginTop = 'calc( 50vh + ' + header_height + 'px';
//   } else {
//     header.classList.remove('fixed');
//     header_left.classList.remove('hidden');
//     main.removeAttribute('style');
//   }
// }
// window.addEventListener('scroll', headerFix);


//smoothScroll Functions

function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPos = target.getBoundingClientRect().top;
  var startPos = window.pageYOffset - header.offsetHeight;
  var distance = targetPos;
  var startTime = null;
  function animation(currentTime,){
    if (startTime === null) startTime = currentTime;
    var time = currentTime - startTime;
    var run = ease(time, startPos, distance, duration);
    window.scrollTo(0,run);
    if(time < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  };
  requestAnimationFrame(animation);
}

const home_button = document.getElementsByClassName('home_button')[0];
home_button.addEventListener('click', function(){
  smoothScroll('.top', 500);
});

const news_button = document.getElementsByClassName('news_button')[0];
news_button.addEventListener('click', function(){
  smoothScroll('.news', 500);
});

const about_button = document.querySelector('.about_button');
about_button.addEventListener('click', function(){
  smoothScroll('.about', 500);
});

const works_button = document.querySelector('.works_button');
works_button.addEventListener('click', function(){
  smoothScroll('.works', 500);
});