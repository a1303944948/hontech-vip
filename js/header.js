document.writeln("<header>");
document.writeln("	<div class=\'header_logo\' onclick=\"location.href='index.html'\"><img src=\'image/logos.jpg\'></div>");
document.writeln("	<div class=\'header_adorn\'><div class=\'header_adorn_item\'></div><div class=\'header_adorn_item\'></div><div class=\'header_adorn_item\'></div></div>");
document.writeln("	<div class=\'header_menu\'></div>");
document.writeln("	<div class=\'header_user\'></div>");
document.writeln("	<div class=\'clear\'></div>");
document.writeln("</header>");
document.writeln("<div class=\'header\'></div>");

function headerMenuFun(arrObj){
	console.log(arrObj);
	var headerMenu = c('header_menu')[0];
	var arrList = [];
	//菜单栏一级菜单渲染
	for(var i = 0; i < arrObj.length; i++){
		if(arrObj[i].parentid == 0&&arrObj[i].stop == 1){
			var div = creat('div');
			var img = creat('img');
			var span = creat('span');
			div.className = 'header_menu_list';
			div.setAttribute('data-menuid',arrObj[i].menuid);
			img.src = arrObj[i].icon;
			span.innerHTML = arrObj[i].menuname;
			div.appendChild(img);
			div.appendChild(span);
			headerMenu.appendChild(div);
		}
	}
	var headerMenuList = c('header_menu_list');
	for(var i = 0; i < headerMenuList.length; i++){
		(function(q){
			headerMenuList[q].onmouseover = function(){
				this.children[1].style.color = 'rgba(0,0,0,0.7)';
			};
			headerMenuList[q].onmouseout = function(){
				this.children[1].style.color = 'rgba(0,0,0,0.3)';
			};
		})(i)
	}
	var divClear = creat('div');
	divClear.className  = 'clear';
	headerMenu.appendChild(divClear);
	//菜单栏二级菜单渲染
	var headerMenuList = c('header_menu_list');
	for(var i = 0; i < headerMenuList.length; i++){
		var ul = creat('ul');
		ul.className = "header_menu_list_ul";
		for(var j = 0; j < arrObj.length; j++){
			if(headerMenuList[i].dataset.menuid == arrObj[j].parentid){
				var li = creat('li');
				var a = creat('a');
				a.innerHTML = arrObj[j].menuname;
				a.href = arrObj[j].src + "?menuid=" + arrObj[j].menuid;
				li.appendChild(a);
				ul.appendChild(li);
			}
		}
		headerMenuList[i].appendChild(ul);
	}
	console.log(headerMenuList);
}
headerMenuFun(menuObject);