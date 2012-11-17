$(function(){


//URLバー隠し
setTimeout(function(){  window.scrollTo(0,1);},1000); 
$(function(){
	window.scrollTo(0,1);
});


//フリック
(function () {
	Flipsnap('#bg .flipsnap');
})(); 





//カスタムスクロールバー
/*
(function($){
	$(document).ready(function(){
		$("#nav_thumb").mCustomScrollbar();
	});
})(jQuery);
*/

(function($){
    $(window).load(function(){
      $("#nav_thumb").mCustomScrollbar();
      $("div[rel='with-custom-scrollbar']").mCustomScrollbar({
        autoDraggerLength:false
      });
      $("#content-1").mCustomScrollbar({
        mouseWheel:false,
        scrollButtons:{
          enable:true
        }
      });
    });
  })(jQuery);





//nav,explain表示
/*	
	$("#bg").onclick(function() {
	$(this).css("display", "dis")
			.css("color", "blue");
	});
	
	
	$("#nav_next_arrow").hover(function() {
		$("#nav_box").animate(
		{ 
		paddingTop: "0px",
		paddingBottom: "100px",
		}
		, 1500 );
	});
*/


$("#bg").toggle(function () {
	$("nav").css("display", "block")
	},function () {
	$("nav").css("display", "none");
});



	
});






