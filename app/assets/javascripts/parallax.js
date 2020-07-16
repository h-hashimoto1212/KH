
function defaultParallax(){
  const parallax = document.querySelectorAll('.parallax');
  var scrPos = window.pageYOffset;
  for(i = 0; i < parallax.length; i++){
    var posX = scrPos * parallax[i].dataset.ratex;
    var posY = -(scrPos * parallax[i].dataset.ratey);
    parallax[i].style.transform = 'translate3D('+posX+'px, '+posY+'px, 0px)';
  }
}
window.addEventListener('scroll', defaultParallax);

// const bgBlack = document.getElementsByClassName('bg_black')[0];
// const bgHeight = bgBlack.offsetHeight;

// function bgParallax(){
//   const rate = 0.2;
//   var scrollAmount = window.pageYOffset;
//   var bgScroll = -(scrollAmount * rate);
//   bgBlack.style.height = bgHeight - bgScroll + 'px';
//   bgBlack.style.transform = 'translateY('+bgScroll+'px)';
// }
// window.addEventListener('scroll', bgParallax);

// function newsParallax(){
//   var para_text = document.querySelectorAll('.paratext');
//   const news = document.querySelector('.news');
//   var startPos = window.innerHeight / 2;
//   var textPos = {};
//   for(i = 0; i < para_text.length; i++){
//     textPos[i] = para_text[i].getBoundingClientRect().top;
//     if(textPos[i] < startPos && textPos[i] > 0 )
//     {
//       // console.log(textPos[i]);
//       para_text[i].style.transform = 'translateX('+ -(textPos[i]) * 3 +'px)';
//     }
//   }
// }
// document.addEventListener('scroll', newsParallax);