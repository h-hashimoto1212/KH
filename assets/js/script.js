const loader = document.querySelector('#loader');
const title = document.querySelector('#title_bg');
const contents = document.querySelector('.contents');

// function loaded(){
//   loader.classList.add('hidden');
//   title.classList.add('fadeout');
//   const fout_title = document.querySelector('#title_bg.fadeout');
//   fout_title.addEventListener('transitionend', function(){
//     contents.classList.remove('hidden');
//     contents.classList.add('fadein');
//   });
// }
// setTimeout(loaded, 3000);

// window.addEventListener('load', loaded);

const header = document.querySelector('header');
const header_left = document.querySelector('.header_left');
const main = document.querySelector('main');


function headerFix(){
  var scrPos = window.pageYOffset;
  var header_height = header.offsetHeight;
  if (scrPos > header_height){
    header.classList.add('fixed');
    header_left.classList.add('hidden');
    main.style.marginTop = header_height + 'px';
  } else {
    header.classList.remove('fixed');
    header_left.classList.remove('hidden');
    main.removeAttribute('style');
  }
}

window.addEventListener('scroll', headerFix);

const modal_open = document.querySelectorAll('.modal_open');
const modal_close = document.querySelector('.modal_close');
const modal = document.querySelector('.modal');
const modal_item = document.querySelector('.modal_item');

// function modalOpen(i){
//   modal.style.display = 'flex';
// };

for (i = 0; i < modal_open.length; i++) {
  modal_open[i].addEventListener('click', function(e) {
    modal.style.display = 'flex';
    const movID = modal_open[e].dataset.target;
    modal_item.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+movID+'?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';
  }.bind(this, i));
}

// modal_open.addEventListener('click', modalOpen);

function modalClose(){
  modal.style.display = 'none';
  modal_item.innerHTML = '';
};
modal_close.addEventListener('click', modalClose);

function clickOutside(e){
  if (e.target == modal)
  {
    modal.style.display = 'none';
    modal_item.innerHTML = '';
  }
}
window.addEventListener('click', clickOutside);

// var scroll = new SmoothScroll('a[href*="#"]');

// var scroll = new SmoothScroll('a[href*="#"]', {
//   easing: 'easeInOutQuad',
// 	speed: 200,
// 	speedAsDuration: true
// });