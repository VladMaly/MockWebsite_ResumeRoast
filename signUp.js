var selectTemporaryImage = 0;

/*window.addEventListener('load', onLoad, false);
function onLoad() {
	var tempImgages = document.getElementsByClassName("temp-img");
	for (var i = 0; i < tempImgages.length; i++) {
		var className = "tempImg" + i;
		tempImgages[i].className += " " + className;
		tempImgages[i].onClick = function () { onClickImg(className) };
	}
}*/

function validateSignUp() {
	if (document.getElementById("inputElementPassword").value == document.getElementById("inputElementPasswordConfirm").value ) {
		return true;
	}
	document.getElementById("error").innerHTML = "Passwords must match!";
	return false;
}

function onChangeValidateSignUp() {
	if (document.getElementById("inputElementPassword").value == document.getElementById("inputElementPasswordConfirm").value ) {
		document.getElementById("error").innerHTML = "";
	}
}

function revealPassword(idName) {
	var el = document.getElementById(idName);
	el.setAttribute('type', 'text');
}

function concealPassword(idName) {
	var el = document.getElementById(idName);
	el.setAttribute('type', 'password');
}

function onClickImg(tempImgString) {
	var tempImgages = document.getElementsByClassName("temp-img");
	for (var i = 0; i < tempImgages.length; i++) {
		var classList = tempImgages[i].className;
		if (hasClass(tempImgages[i], tempImgString) == true) {
			if (hasClass(tempImgages[i], "temp-img-selected") == false) {
				tempImgages[i].classList.add("temp-img-selected");
			}
		}
		else {
			if (hasClass(tempImgages[i], "temp-img-selected") == true) {
				/*tempImgages[i].className.replace(/\btemp-img-selected\b/,'');*/
				tempImgages[i].classList.remove("temp-img-selected"); 
			}
		}
	}
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}