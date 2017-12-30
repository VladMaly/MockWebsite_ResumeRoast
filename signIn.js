function revealPassword(idName) {
	var el = document.getElementById(idName);
	el.setAttribute('type', 'text');
}

function concealPassword(idName) {
	var el = document.getElementById(idName);
	el.setAttribute('type', 'password');
}