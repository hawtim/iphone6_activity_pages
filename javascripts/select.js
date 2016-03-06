var $$ = function (id) {
	return document.getElementById(id);
}
// 获得选择的城市
function getSelectCity(){
	// 获得城市选择列表的id
	var btnSelect = $$("select-city");
	var curSelect = btnSelect.getElementsByTagName("span")[0];
	var oSelect = btnSelect.getElementsByTagName("select")[0];
	var aOption = btnSelect.getElementsByTagName("option");
	console.log(curSelect.innerHTML);
	console.log(oSelect.options[oSelect.selectedIndex].value);
	// 选项改变时，将选项值写入span标签中
	oSelect.onchange = function () {
	var text=oSelect.options[oSelect.selectedIndex].text;
	curSelect.innerHTML = text;
	console.log(curSelect.innerHTML);
	console.log(oSelect.options[oSelect.selectedIndex].value);
}
}
// 获得选择的地区
function getSelectDistinct() {
	// 获得地区选择列表的id
	var btnSelect = $$("select-distinct");
	var curSelect = btnSelect.getElementsByTagName("span")[0];
	var oSelect = btnSelect.getElementsByTagName("select")[0];
	var aOption = btnSelect.getElementsByTagName("option");
	console.log(oSelect.options[oSelect.selectedIndex].value);
	console.log(curSelect.innerHTML);
	// 选项改变时，将选项值写入span标签中
	oSelect.onchange = function () {
		var text=oSelect.options[oSelect.selectedIndex].text;
		curSelect.innerHTML = text;
		console.log(oSelect.options[oSelect.selectedIndex].value);
		console.log(curSelect.innerHTML);
	}
}
// 选择不同的城市改变不同的地区
// function changeDistinct(){
// 	var btnSelect = $$("select-city");
// 	var curSelect = btnSelect.getElementsByTagName("span")[0];
// 	console.log("changeDistinct");
// 	var oSelect = btnSelect.getElementsByTagName("select")[0];
// 	var aOption = btnSelect.getElementsByTagName("option");
// 	var btnSelectDistinct = $$("select-distinct");
// 	var curSelectDistinct = btnSelectDistinct.getElementsByTagName("span")[0];
// 	var oSelectSH = btnSelectDistinct.getElementsByTagName("select")[0];
// 	var oSelectSZ = btnSelectDistinct.getElementsByTagName("select")[1];
// 	// 和上面两个函数里的匿名函数onchange = function冲突了
// 	oSelect.onchange = function () {
// 		for(var i=0; i<oSelect.options.length; ++i) {
// 		console.log(oSelect.options[i].value);
//  	   	}
// 	    if(oSelect.options[oSelect.selectedIndex].value == "sz"){
// 			oSelectSH.style.display = "none";
// 			oSelectSZ.style.display = "block";
// 			curSelectDistinct.innerHTML = "福田区";
// 			// var oSelect2 = btnSelectDistinct.getElementsByTagName("select")[1];
// 			console.log(curSelectDistinct);
// 			console.log(oSelectSH);
// 			console.log(oSelectSZ);
// 			console.log(oSelect.options[oSelect.selectedIndex]);
// 			// 当深圳被选中时display属性变化
// 			// oSelectSZ的选项值变化时，立即执行该匿名函数
// 			var text=oSelectSZ.options[oSelectSZ.selectedIndex].text;
// 			console.log(oSelectSZ.options[oSelectSZ.selectedIndex].value);
// 			curSelectDistinct.innerHTML = text;
// 	    	}
// 	}
// }




function addLoadEvent(func){
	var oldonload = window.onload;
	//把现有的window.onload事件处理函数的值存入局部变量oldonload中
	if(typeof window.onload !='function'){
		window.onload = func;
		//如果没有绑定任何函数，就像平时一样添加新函数
	}else{
		window.onload = function(){
		//如果已经绑定，就把新函数追加到现有指令的末尾
			oldonload();
			func();
		}
	}
}

addLoadEvent(getSelectCity);
addLoadEvent(getSelectDistinct);
// addLoadEvent(changeDistinct);

