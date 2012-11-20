$(function(){


/****************************************
	URLバー隠し
****************************************/
setTimeout(function(){  window.scrollTo(0,1);},1000); 
$(function(){
	window.scrollTo(0,1);
});



/****************************************
	フリック
****************************************/
var $pointer = $('#explain div');
var flipsnap = Flipsnap('.flipsnap');

flipsnap.element.addEventListener('fsmoveend', function() {
    $pointer.filter('.current').css("opacity","0");
    $pointer.filter('.current').removeClass('current');
    $pointer.eq(flipsnap.currentPoint).addClass('current');
    $pointer.eq(flipsnap.currentPoint).css("opacity","1");
}, false);




/****************************************
	タップ判定
****************************************/
$('#nav_thumb img').click(function() {
	$(this).animate({ 
	opacity: "0.3"
	}, { duration:200, easing: 'linear', });
	$(this).animate({ 
	opacity: "1"
	}, { duration:200, easing: 'linear', });

});



/****************************************
	nav_thumb index_thumb リンク
****************************************/
$('#nav_thumb #no01').click(function() {
    flipsnap.moveToPoint(0);

});

$('#nav_thumb #no02').click(function() {
    flipsnap.moveToPoint(1);
});

$('#nav_thumb #no03').click(function() {
    flipsnap.moveToPoint(2);
});



$('#index #no01').click(function() {
    flipsnap.moveToPoint(0);
});

$('#index #no02').click(function() {
    flipsnap.moveToPoint(1);
});

$('#index #no03').click(function() {
    flipsnap.moveToPoint(2);
});




/****************************************
	カスタムスクロールバー
****************************************/
(function($){
    $(window).load(function(){
      $("#nav_thumb").mCustomScrollbar();
      $("div[rel='with-custom-scrollbar']").mCustomScrollbar({
        autoDraggerLength:false
      });
      $("#nav_thumb-1").mCustomScrollbar({
        mouseWheel:true,
        scrollButtons:{
          enable:true
        }
      });
    });
  })(jQuery);




/*
$(window).load(function() {
    $("#mcs_container").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes");
});
*/

/****************************************
	nav,explain表示
****************************************/
$("#icon_tag").toggle(function () {
	$("nav").animate({ 
	left: "0%"
	}, { duration:300, easing: 'easeInOutQuint', });
	},function () {
	$("nav").animate({ 
	left: "-20%"
	}, { duration:300, easing: 'easeInOutQuint', });
});


$("#bg").toggle(function () {
    $("#explain").show(1, function() { });
	$("#explain").animate({ 
	right: "0%"
	}, { duration:300, easing: 'easeInOutQuint', });
	},function () {
	$("#explain").animate({ 
	right: "-55%"
	}, { duration:300, easing: 'easeInOutQuint', });
    $("#explain").hide(1, function() { });

});





/****************************************
	modalwindow表示
****************************************/

$("#toaboutme").click(function() {
    $("#modal").fadeIn(210);
});

$("#modal_close").click(function() {
    $("#modal").fadeOut(250, function() {
    });

});



/****************************************
	index表示
****************************************/

$("#toindex").click(function() {
   $("#index").show(1, function() { });
   $("#index_thumb_01").show(1, function() { });
   $("#index_thumb_02").show(1, function() { });
   $("#index_thumb_03").show(1, function() { });


	$("#index").animate({ 
	top: "0%"
	}, { duration:300, easing: 'easeInOutQuint', });

	$("#index_thumb_01").animate({ 
	marginLeft: "0%"
	}, { duration:500, easing: 'easeInOutQuint', });
	$("#index_thumb_02").animate({ 
	marginLeft: "0%"
	}, { duration:550, easing: 'easeInOutQuint', });
	$("#index_thumb_03").animate({ 
	marginLeft: "0%"
	}, { duration:600, easing: 'easeInOutQuint', });



});




$("#index img").click(function() {
    $("#index").animate({ 
	top: "-80%"
	}, { duration:300, easing: 'easeInOutQuint', });

	$("#index_thumb_01").animate({ 
	marginLeft: "100%"
	}, { duration:500, easing: 'easeInOutQuint', });
	$("#index_thumb_02").animate({ 
	marginLeft: "100%"
	}, { duration:400, easing: 'easeInOutQuint', });
	$("#index_thumb_03").animate({ 
	marginLeft: "100%"
	}, { duration:300, easing: 'easeInOutQuint', });

   $("#index_thumb_01").hide(1, function() { });
   $("#index_thumb_02").hide(1, function() { });
   $("#index_thumb_03").hide(1, function() { });
   $("#index").hide(200, function() { });




});






});






