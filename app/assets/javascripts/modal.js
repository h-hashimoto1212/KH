const modal_open = document.getElementsByClassName('modal_open');
const modal_close = document.getElementsByClassName('modal_close')[0];
const modal = document.getElementsByClassName('modal')[0];
const modal_item = document.getElementsByClassName('modal_item')[0];

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

