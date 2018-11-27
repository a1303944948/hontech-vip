document.writeln("<header>");
document.writeln("	<div class=\'header_logo\'><img src=\'image/logos.jpg\'></div>");
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
		if(arrObj[i].parentid == 0){
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
			headerMenuList[q].children[1].onmouseover = function(){
				this.style.color = 'rgba(0,0,0,0.7)';
			};
			headerMenuList[q].children[1].onmouseout = function(){
				this.style.color = 'rgba(0,0,0,0.3)';
			};
		})(i)
	}
	var divClear = creat('div');
	divClear.className  = 'clear';
	headerMenu.appendChild(divClear);
	//菜单栏二级菜单渲染
}
headerMenuFun(menuObject);