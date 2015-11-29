var $$ = function (id) {
	return document.getElementById(id);
}
window.onload = function () {
	var btnSelect = $$("select-city");
	var curSelect = btnSelect.getElementsByTagName("span")[0];
	var oSelect = btnSelect.getElementsByTagName("select")[0];
	var aOption = btnSelect.getElementsByTagName("option");
	oSelect.onchange = function () {
	var text=oSelect.options[oSelect.selectedIndex].text;
	curSelect.innerHTML = text;
}
}

var $$1 = function (id) {
	return document.getElementById(id);
}
window.onload = function () {
	var btnSelect = $$1("select-distinct");
	var curSelect = btnSelect.getElementsByTagName("span")[0];
	var oSelect = btnSelect.getElementsByTagName("select")[0];
	var aOption = btnSelect.getElementsByTagName("option");
	oSelect.onchange = function () {
	var text=oSelect.options[oSelect.selectedIndex].text;
	curSelect.innerHTML = text;
}
}