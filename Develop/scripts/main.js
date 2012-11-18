$(function(){


//URLバー隠し
setTimeout(function(){  window.scrollTo(0,1);},1000); 
$(function(){
	window.scrollTo(0,1);
});


//フリック
/*
(function () {
	Flipsnap('#bg .flipsnap');
})(); 
*/

/*
var $pointer = $('#explain div');
var flipsnap = Flipsnap('.flipsnap');

flipsnap.element.addEventListener('fsmoveend', function() {
    $pointer.filter('.current').removeClass('current');
    $pointer.eq(flipsnap.currentPoint).addClass('current');
    $("#explain div").css("opacity", "0");
    $("#explain .current").css("opacity", "1");
}, false);
*/

var $pointer = $('#explain div');
var flipsnap = Flipsnap('.flipsnap');

flipsnap.element.addEventListener('fsmoveend', function() {
    $pointer.filter('.current').css("opacity","0");
    $pointer.filter('.current').removeClass('current');
    $pointer.eq(flipsnap.currentPoint).addClass('current');
    $pointer.eq(flipsnap.currentPoint).css("opacity","1");
}, false);


//nav_thumb リンク
$('#nav_thumb #no01').click(function() {
    flipsnap.moveToPoint(0);
});

$('#nav_thumb #no02').click(function() {
    flipsnap.moveToPoint(1);
});

$('#nav_thumb #no03').click(function() {
    flipsnap.moveToPoint(2);
});

//カスタムスクロールバー
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


$("#bg").toggle(function () {
	$("#explain").css("display", "block")
	},function () {
	$("#explain").css("display", "none");
});

/*

$("#bg #no01").toggle(function () {
	$("#explain #no01").css("display", "block")
	},function () {
	$("#explain #no01").css("display", "none");
});


$("#bg #no02").toggle(function () {
	$("#explain #no02").css("display", "block")
	},function () {
	$("#explain #no02").css("display", "none");
});


$("#bg #no03").toggle(function () {
	$("#explain #no03").css("display", "block")
	},function () {
	$("#explain #no03").css("display", "none");
});

*/


	
});






