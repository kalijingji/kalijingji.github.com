var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"];			
			var debark_ver = document.getElementsByClassName("debark_ver")[0];
			debark_ver.addEventListener('click',function(){
				debark_ver.value=null;
				move();
			});
			// 随机生成验证码
			function move(){
				var random;
				for(var i = 0;i<4;i++){
					random = Math.floor(Math.random()*arr.length);	
					debark_ver.value+=arr[random];
				}				
			}
			
			//验证用户名
			//密码
			var debark_verify = document.getElementsByClassName("debark_verify");
			var shadow = document.getElementsByClassName("shadow");
			var verify = document.getElementsByClassName("verify")[0];
			var debark_ver = document.getElementsByClassName("debark_ver")[0];
			debark_verify[2].addEventListener('click',function(){
				//用户名验证
				var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				if (!phone.test(debark_verify[0].value)) {
					shadow[0].style.display="block";
					return false;
				} else{
					shadow[0].style.display="none";
				};
				//密码验证
				var pasword = /^[a-zA-Z]\w{5,17}$/;
				if(!pasword.test(debark_verify[1].value)){
					shadow[1].style.display="block";
					return false;
				}else{
					shadow[1].style.display="none";
				};
				//验证码验证
				if (verify.value!=debark_ver.value) {
					shadow[2].style.display="block";
					return false;
				} else{
					shadow[2].style.display="none";
				}
				 return true;
			})
			