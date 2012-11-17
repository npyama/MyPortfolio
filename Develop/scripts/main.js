$(function(){
	$("#nav_prev_arrow").hover(function() {
		$("#nav_box").animate(
		{ 
		paddingTop: "100px",
		paddingBottom: "0px",
		}
		, 1500 );
	});
	$("#nav_next_arrow").hover(function() {
		$("#nav_box").animate(
		{ 
		paddingTop: "0px",
		paddingBottom: "100px",
		}
		, 1500 );
	});



$("li").toggle(
  function () {
    $(this).css("list-style-type", "disc")
           .css("color", "blue");
  },function () {
    $(this).css({"list-style-type":"", "color":""});
  });




//1000ミリ秒の遅延を設定しているのはページの読込が完了するまでの十分な時間として設定してます。
setTimeout(function(){  window.scrollTo(0,1);},1000);
 
//jQueryなどだとページ読込み完了時に呼んでやるのもありです。
$(function(){
window.scrollTo(0,1);
});



	
});




$(function(){
	var $container = $('.container','#flick');
	var $item = $('.item','#flick');
	$(window).bind(('orientationchange resize load'), function(){
		var windowWidth = (!(window.innerWidth)) ? document.documentElement.clientWidth : window.innerWidth;
		
		$item.css({width : windowWidth});
		$container.css({width : windowWidth})
	});

	$("#flick").flick({});
});