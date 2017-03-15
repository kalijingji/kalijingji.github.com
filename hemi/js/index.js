$(document).ready(function(){
	
//	首页
	$(".activity_nav li:not(:first-child) .goods").hide();
	$(".activity_nav li").click(function(){
//		console.log($(this).index());		
		$(this).css({"color":"#f2473d","border-bottom":"4px solid #F2473D"}).siblings().css({"color":"#3e3a39","border-bottom-width":"0"});	
		$(this).children().show().parent().siblings().children().hide();
	});
//	var h = $(window).scrollTop(); 
	$(window).bind("scroll", function(){ 
        var h = $(this).scrollTop(); // 当前窗口的滚动距离
//      console.log(h);
//      if(h > 550){
//      	$(".top").hide();
//      }else{
//      	$(".top").show();
//      }
  	});
  	
  	
  	
//	云购记录
	$(".all_box .all:not(:first-child)").hide();
	$(".shopping_nav li span").click(function(){
		$(this).css({"color":"#f2473d","border-bottom":"4px solid #F2473D"}).parent().siblings().children().css({"color":"#3e3a39","border-bottom-width":"0"});	
		var n = $(this).parent().index();
		$(".all_box .all").eq(n).show().siblings().hide();
	
	});
	
});
