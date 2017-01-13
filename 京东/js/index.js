 var index = 0;
 var first_img = document.getElementById("first_img");
 var last_img = document.getElementById("last_img");
 var imgWidth = first_img.width;
    var b = false;
    var img = document.getElementById("img");
    var tempStatrX = 0;
    img.addEventListener("touchstart",function (e) {
        tempStatrX = e.touches[0].clientX;
        b = true;
        seT();
    });
    img.addEventListener("touchmove",function (e) {
            img.style.marginLeft = (-(index) * imgWidth +e.touches[0].clientX)  - imgWidth/2 + "px";
    });
    img.addEventListener("touchend",function (e) {
        var s = parseInt(e.changedTouches[0].clientX - tempStatrX);
        if(s <= -150){
            index ++;
            if(index >= 8){
                index = 1;
            }
        }
        if(s >= 150){
            index --;
            if(index <= 0){
                index = 8;
            }
        }
        img.style.marginLeft = -index * imgWidth + "px";
        b = false;
        seT();
    });
    seT();
    function seT() {
        if(b){
            if(it){
                clearInterval(it);
            }
        }else {
            it = setInterval(function () {
                img.style.marginLeft = -index * imgWidth + "px";
                index ++;
                if(index > 9){
                    index = 0;
                }
            },3000);
        }
    }
//<script type="text/javascript">
//			var jd_carousel_img = document.getElementsByClassName("jd_carousel_img")[0];
//			var sd = document.getElementsByClassName("sd");
//			var n=0,m=0,s=0,k=0;
//			jd_carousel_img.addEventListener("touchstart",function(e){
//				s = e.touches[0].clientX;
//				n += s;		
//				m = s-m;
//				sd[0].value = m;
//			});
//			jd_carousel_img.addEventListener("touchmove",function(e){				
//				k = e.touches[0].clientX;			
//				sd[1].value = k;
//				if(k-s<0){
//					this.style.marginLeft=k-n+"px";
//				}else if(k-s>0){
//					this.style.marginLeft=k-m+"px";
//					console.log(m-k)
//				}
//				
//			})
//			
//		</script>