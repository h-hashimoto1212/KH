/////////image and preview section

const deleteImageButtons = document.getElementsByClassName('delete-btn');

function removeImage(i){
  var inputToDelete = document.getElementById(`live_images_attributes_${i}_file`);
  var previewToDelete = document.getElementsByClassName('thumb')[i];
  var destroyer = document.getElementById(`live_images_attributes_${i}__destroy`);
  inputToDelete.value = '';
  previewToDelete.innerHTML = '';
  destroyer.checked = true;
}
for (i = 0 ; i < deleteImageButtons.length ; i++){
  deleteImageButtons[i].index = i;
  deleteImageButtons[i].addEventListener('click', function(){
    removeImage(this.index)
  });
}

const previewContainer = document.getElementsByClassName('thumb');
const imageInput = document.getElementsByClassName('image-input');


function buildHTML(image){
  var html =  `
              <img height="200" src="${image}">
              `
  return html;
}

function showPreview(input, i){
  console.log(input.files[0]);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.addEventListener('load', function (e) {
      var image = e.target.result;
      previewContainer[i].innerHTML = buildHTML(image, i, input.files[0].name);
    })
    reader.readAsDataURL(input.files[0]);
  }
}
for (i = 0 ; i < imageInput.length ; i++){
  imageInput[i].index = i;
  imageInput[i].addEventListener('change', function(){
    var destroyer = document.getElementById(`live_images_attributes_${this.index}__destroy`);
    destroyer.checked = false;
    showPreview(this, this.index);
  });
};

////////////////multiple days section

const detailArea = document.getElementsByClassName('detail-area')[0];
var detailItem = document.getElementsByClassName('detail-area-item');
const detailAddButton = document.getElementsByClassName('add-details')[0].children[0];
var deleteDetailButtons = document.getElementsByClassName('delete-details');
var detailID;

function buildDetailField(i){
  var html = `
  <div class="detail-area-item" id="detail-${i}">
    <div class="input-area">
      <label for="live_details_attributes_${i}_date">開催日</label>
      <input type="date" name="live[details_attributes][${i}][date]" id="live_details_attributes_${i}_date">
    </div>
    <div class="input-area">
      <label for="live_details_attributes_${i}_place">開催地</label>
      <input type="text" name="live[details_attributes][${i}][place]" id="live_details_attributes_${i}_place">
    </div>
    <div class="input-area">
      <label for="live_details_attributes_${i}_place_link">リンク(開催地)</label>
      <input type="text" name="live[details_attributes][${i}][place_link]" id="live_details_attributes_${i}_place_link">
    </div>
    <div class="input-area open_start">
      <div class="time">
        <label for="live_details_attributes_${i}_open_time">Open</label>
        <input type="time" name="live[details_attributes][${i}][open_time]" id="live_details_attributes_${i}_open_time">
      </div>
      <div class="time">
        <label for="live_details_attributes_${i}_start_time">Start</label>
        <input type="time" name="live[details_attributes][${i}][start_time]" id="live_details_attributes_${i}_start_time">
      </div>
    </div>
    <div class="input-area">
      <label for="live_details_attributes_${i}_ex_description">追記</label>
      <input type="text" name="live[details_attributes][${i}][ex_description]" id="live_details_attributes_${i}_ex_description">
    </div>
    <label class="delete-details">
      <input name="live[details_attributes][${i}][_destroy]" type="hidden" value="0"><input class="hidden-field detail_delete" type="checkbox" value="1" name="live[details_attributes][${i}][_destroy]" id="live_details_attributes_${i}__destroy">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"></path></svg>
    </label>
    <div class="line"></div>
  </div>
  `
  return html;
}
function addDetailField(i){
  detailArea.insertAdjacentHTML("beforeend",buildDetailField(i));
  initializeDeleteteAndAdd();
}
detailAddButton.addEventListener('click', function(){
  detailID += 1;
  addDetailField(detailID);
  console.log(detailID);
})

function removeDetail(i){
  document.getElementById(`live_details_attributes_${i}_date`).value = '';
  document.getElementById(`live_details_attributes_${i}_place`).value = '';
  document.getElementById(`live_details_attributes_${i}_place_link`).value = '';
  document.getElementById(`live_details_attributes_${i}_open_time`).value = '';
  document.getElementById(`live_details_attributes_${i}_start_time`).value = '';
  document.getElementById(`live_details_attributes_${i}_ex_description`).value = '';
  var formToDelete = document.getElementById(`detail-${i}`);
  var destroyer = document.getElementById(`live_details_attributes_${i}__destroy`);
  destroyer.checked = true;
  formToDelete.style.transform = "scaleY(0)";
  formToDelete.addEventListener('transitionend', function(){
    formToDelete.classList.add('hidden');
  })
}

function initializeDeleteteAndAdd(){
  for (i = 0 ; i < deleteDetailButtons.length ; i++){
    deleteDetailButtons[i].index = i;
    deleteDetailButtons[i].addEventListener('click', function(){
      removeDetail(this.index);
    });
  }
  detailID = detailItem.length - 1;
}
document.addEventListener('load', initializeDeleteteAndAdd());