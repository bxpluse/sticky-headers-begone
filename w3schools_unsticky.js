var elementId = "topnav";

function injectCSS(s) {
	var node = document.createElement('style');
	node.appendChild(document.createTextNode(s));
	document.body.appendChild(node);
}

function resetHeader(){
	var scrollBarPosition = window.scrollY || window.pageYOffset ||window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
	if(scrollBarPosition === 0){
		document.getElementById(elementId).style.display = null;
	} else{
		document.getElementById(elementId).style.display = "none";
	}
}

resetHeader();

window.onscroll = function (e) {  
	resetHeader();	
}
