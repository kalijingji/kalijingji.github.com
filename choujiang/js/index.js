jQuery(document).ready(function($) {
	$("#demo_click").click(function() {
		var arr=[-60,-120,-180,-240,-300,-360];
		var arrs=[2,3,4,5,6,1];
		var n = Math.floor(Math.random()*6);
		var number = arr[n]+"deg"; 
		$(".demo_box_chirdren").attr("style","-webkit-animation:circle .5s infinite linear");
		times=setInterval(function(){
			$(".demo_box_chirdren").attr("style","transform: rotate3d(0, 0, 1,"+number+");-webkit-animation:inherit");
			clearInterval(times);
			//alert(arrs[n]);
		},1000)
		
	});
});