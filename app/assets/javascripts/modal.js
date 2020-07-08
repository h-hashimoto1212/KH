const modal_open = document.getElementsByClassName('modal_open');
const modal_close = document.getElementsByClassName('modal_close')[0];
const modal = document.getElementsByClassName('modal')[0];
const modal_item = document.getElementsByClassName('modal_item')[0];

function modalOpen(e){
  modal.style.display = 'flex';
  console.log(modal_open[e].dataset.live)
  if (modal_open[e].dataset.target) {
    const movID = modal_open[e].dataset.target;
    var width = modal_item.clientWidth;
    var height = width * (9/16)
    console.log(width)
    modal_item.innerHTML = '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+movID+'?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';
  }
  if (modal_open[e].dataset.live == "true") {
    const liveID = modal_open[e].dataset.id;
    const title = modal_open[e].dataset.title;
    const description = modal_open[e].dataset.description;
    modal_item.innerHTML = `<p class="modal_text">データを削除します。よろしいですか？</p>
                            <p class="modal_text note">※削除したデータの復元はできません。</p>
                            <p class="modal_title">`+title+`</p>
                            <p class="modal_description">`+description+`</p>
                            <div class="modal_selection">
                              <div class="btn cancel">キャンセル</div>
                              <div class="btn confirm">
                                <a rel="nofollow" data-method="delete" href="/lives/`+liveID+`">
                                  <p>削除する</p>
                                </a>
                              </div>
                            </div>`
    const cancel = document.getElementsByClassName('cancel')[0];
    cancel.addEventListener('click', function(){
      modal.style.display = 'none';
      modal_item.innerHTML = '';
    });
  }
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

