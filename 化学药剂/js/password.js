var inp1 = document.getElementsByClassName("inp1");
var inp2 = document.getElementsByClassName("inp2")[0];
var inp3 = document.getElementsByClassName("inp3")[0];
var  p = document.getElementsByTagName("p");
inp3.onclick=function(){
	btn();
}
function btn(){
	if (inp1[0].value<6||inp1[0].value>18) {
		p[0].style.display = "block";
		return false;
	} else{
		p[0].style.display = "none";
	};
	var emil = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if (!emil.test(inp1[1].value)) {
		p[1].style.display = "block";
		return false;
	} else{
		p[1].style.display = "none";
	};
	if (inp3.value!="c9zkm") {
		p[2].style.display = "block";
		return false;
	} else{
		p[2].style.display = "none";
	};
	return true;
}
