//var menuState = "None";
//Possible : 'None' , 'Upload Resume', 'Edit Profile Info', 'Upload Photo Avatar'

function previewFile() {
   var preview = document.getElementById('previewImg');
   /*var file    = document.querySelector('input[type=file]').files[0];*/
   var file = document.getElementById('openImg').files[0];
   var reader = new FileReader();

   reader.onloadend = function () {
       preview.src = reader.result;
   }

   if (file) {
       reader.readAsDataURL(file); //reads the data as a URL
   } else {
       preview.src = "";
   }

   let fileName = file.name;
   if (fileName !== "") { 
    var ext = fileName.split('.').pop();
    var validationMessage = document.getElementById('validationMessageImg');
    if(ext=="png" || ext=="jpg") {
      validationMessage.innerHTML = "The chosen image meets the standards!";
      validationMessage.style.color = "green";
      preview.style.display = "initial";
    } else{
      validationMessage.innerHTML = "The image has to be png or jpg!";
      validationMessage.style.color = "red";
    }
  }
 }

function uploadPdf() {
  var uploadPdfFile = document.getElementById('resumeUpload').files[0];
  let fileName = uploadPdfFile.name;

  if (fileName !== "") { 
    var ext = fileName.split('.').pop();
    var validationMessage = document.getElementById('validationMessagePdf');
    if(ext=="pdf") {
        validationMessage.innerHTML = "Chosen file is indeed an pdf!";
        validationMessage.style.color = "green";
        var pdfPreview = document.getElementById('previewPdf');

        var reader2 = new FileReader();

        reader2.onloadend = function () {
            pdfPreview.src = reader2.result;
        }

        if (uploadPdfFile) {
            reader2.readAsDataURL(uploadPdfFile); //reads the data as a URL
        } else {
            pdfPreview.src = "";
        }
    } else{
      validationMessage.innerHTML = "Chosen file is not a pdf!";
      validationMessage.style.color = "red";
    }
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    //  event listeners on change
    var file = document.getElementById('openImg');
    file.addEventListener("change", function() {
        previewFile();
    });

    var uploadPdfElement = document.getElementById('resumeUpload');
    uploadPdfElement.addEventListener("change", function() {
        uploadPdf();
    });
  }
};

var editState = "read";

function editReadStateChange () {
    var editReadButton = document.getElementById('editReadButton');
    if (editState == "read") {
        // make into edit state
        editState = "edit";
        editReadButton.value = "Submit Changes";
        var selectableViews = document.getElementsByClassName('editReadField');
        for (let i = 0; i < selectableViews.length; i++) {
            let parent = selectableViews[i].parentElement;
            let newInput = document.createElement('input');
            newInput.classList =  "editReadField";
            newInput.type = "text";
            newInput.value = selectableViews[i].innerHTML;
            parent.removeChild(selectableViews[i]);
            parent.appendChild(newInput);
        }
    }
    else {
        // make into read state
        editState = "read";
        editReadButton.value = "Edit";
        var selectableViews = document.getElementsByClassName('editReadField');
        for (let i = 0; i < selectableViews.length; i++) {
            let parent = selectableViews[i].parentElement;
            let newSpan = document.createElement('span');
            newSpan.innerHTML = selectableViews[i].value;
            newSpan.classList =  "editReadField";
            parent.removeChild(selectableViews[i]);
            parent.appendChild(newSpan);
        }
    }
};