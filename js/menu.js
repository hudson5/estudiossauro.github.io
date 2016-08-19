$(document).ready(function () {

	//show navigation after the fold

	$(window).scroll(function(){
		var viewportHeight = $(window).height();
		if (document.body.scrollTop >= viewportHeight) {
			$("nav").css('opacity','1');
		}
		else {
			$("nav").css('opacity','0');
		}
	}); //end show navigation

	// animate the hamburger menu

	$(".menu").click(function(){
		$(".top-bar").toggleClass("top-bar-hover");
		$(".middle-bar").toggleClass("middle-bar-hover");
		$(".bottom-bar").toggleClass("bottom-bar-hover");
		var menuContent = $(".menu-content").css("opacity");
		
		// show menu
		if (menuContent === "0") {
			// $(".menu-content").css("display","block");
			$(".menu-content").css("opacity","1");
			$(".menu-content").css("transform","translateY(0%)");
			$("nav").css("box-shadow","0px 18px 30px 0px rgba(0,0,0,0)");
			// $(".menu-content").css("z-index","9");
			$("body").css("overflow","hidden");			
		//hide menu
		} else {
			$(".menu-content").css("opacity","0");
			$(".menu-content").css("transform","translateY(-100vh)");
			$("nav").css("box-shadow","0px 18px 30px 0px rgba(0,0,0,0.09)");
			// $(".menu-content").delay(300).css("z-index","-2");
			$("body").css("overflow","auto");
		}
	});// end hamburger menu

}); // end document.ready

//.bottom-bar-hover {
//	transform: rotate(-45deg) translateY(-1px);
//}
//
//.middle-bar-hover {
//	transform: scale(0);
//}
//
//.top-bar-hover {
//	transform: rotate(45deg) translateY(1px);
//}
