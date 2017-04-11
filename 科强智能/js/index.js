
$(function(){
	function css(){
    var sheight = $(window).height();
	var sheight1 = $(".header").height();
	var sheight2 = $(".imga").height();
	var xheight =sheight-sheight1-sheight2-40;
	
	$(".imga").hover(function(){
//	$(this).find("a").stop().animate({marginLeft: "-40",}, 100);		
	},function(){
//	$(this).find("a").stop().animate({marginLeft: "0",}, 100);			
	})

	if(sheight < 620) {
		$(".imga").css("height",400)
			
		}else {
			$(".imga").css("height",xheight);
		}
    setTimeout(css)
	}
	css();
});
