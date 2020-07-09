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

