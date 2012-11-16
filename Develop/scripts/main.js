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