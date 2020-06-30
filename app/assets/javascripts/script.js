function wait(waitMsec) {
  var startMsec = new Date();
  while (new Date() - startMsec < waitMsec);
}

const loader = document.querySelector('#loader');
const title = document.querySelector('#title_bg');
const contents = document.querySelector('.contents');

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

const header = document.querySelector('header');
const header_left = document.querySelector('.header_left');
const main = document.querySelector('main');

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


const modal_open = document.querySelectorAll('.modal_open');
const modal_close = document.querySelector('.modal_close');
const modal = document.querySelector('.modal');
const modal_item = document.querySelector('.modal_item');

function modalOpen(e){
  modal.style.display = 'flex';
  const movID = modal_open[e].dataset.target;
  modal_item.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+movID+'?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';
};
for (i = 0; i < modal_open.length; i++) {
  modal_open[i].addEventListener('click', modalOpen.bind(this, i));
}

function modalClose(e){
  if (e.target == modal || e.target == modal_close)
  {
    modal.style.display = 'none';
    modal_item.innerHTML = '';
  }
};
window.addEventListener('click', modalClose);

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

const home_button = document.querySelector('.home_button');
home_button.addEventListener('click', function(){
  smoothScroll('.top', 500);
});

const news_button = document.querySelector('.news_button');
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