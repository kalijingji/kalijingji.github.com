	var jd_carousel_img = document.getElementsByClassName("jd_carousel_img")[0];
			var img = jd_carousel_img.getElementsByTagName("li");
                 var imgWidth=img[0].offsetWidth;
                 var i=0,allWidth=(img.length-2)*imgWidth;              
                 	function time(){
                 	i+=1;
                    if (i%imgWidth==0) {
                        setTimeout(time,1000);
                    }else{
                        jd_carousel_img.style.marginLeft=-i+"px";
                         setTimeout(time,5);
                    }                   
                    if (i==allWidth) {
                        i=0;
                    }                    
                 	}
                   time();