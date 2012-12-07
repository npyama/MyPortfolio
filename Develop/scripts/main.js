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
$('#nav_thumb #no01').click(function() { flipsnap.moveToPoint(0); });
$('#nav_thumb #no02').click(function() { flipsnap.moveToPoint(1); });
$('#nav_thumb #no03').click(function() { flipsnap.moveToPoint(2); });
$('#nav_thumb #no04').click(function() { flipsnap.moveToPoint(3); });
$('#nav_thumb #no05').click(function() { flipsnap.moveToPoint(4); });
$('#nav_thumb #no06').click(function() { flipsnap.moveToPoint(5); });
$('#nav_thumb #no07').click(function() { flipsnap.moveToPoint(6); });
$('#nav_thumb #no08').click(function() { flipsnap.moveToPoint(7); });
$('#nav_thumb #no09').click(function() { flipsnap.moveToPoint(8); });
$('#nav_thumb #no10').click(function() { flipsnap.moveToPoint(9); });
$('#nav_thumb #no11').click(function() { flipsnap.moveToPoint(10); });
$('#nav_thumb #no12').click(function() { flipsnap.moveToPoint(11); });
$('#nav_thumb #no13').click(function() { flipsnap.moveToPoint(12); });
$('#nav_thumb #no14').click(function() { flipsnap.moveToPoint(13); });
$('#nav_thumb #no15').click(function() { flipsnap.moveToPoint(14); });
$('#nav_thumb #no16').click(function() { flipsnap.moveToPoint(15); });
$('#nav_thumb #no17').click(function() { flipsnap.moveToPoint(16); });


$('#category #no01').click(function() { flipsnap.moveToPoint(0); });
$('#category #no02').click(function() { flipsnap.moveToPoint(1); });
$('#category #no03').click(function() { flipsnap.moveToPoint(2); });
$('#category #no04').click(function() { flipsnap.moveToPoint(3); });
$('#category #no05').click(function() { flipsnap.moveToPoint(4); });
$('#category #no06').click(function() { flipsnap.moveToPoint(5); });
$('#category #no07').click(function() { flipsnap.moveToPoint(6); });
$('#category #no08').click(function() { flipsnap.moveToPoint(7); });
$('#category #no09').click(function() { flipsnap.moveToPoint(8); });
$('#category #no10').click(function() { flipsnap.moveToPoint(9); });
$('#category #no11').click(function() { flipsnap.moveToPoint(10); });
$('#category #no12').click(function() { flipsnap.moveToPoint(11); });
$('#category #no13').click(function() { flipsnap.moveToPoint(12); });
$('#category #no14').click(function() { flipsnap.moveToPoint(13); });
$('#category #no15').click(function() { flipsnap.moveToPoint(14); });
$('#category #no16').click(function() { flipsnap.moveToPoint(15); });
$('#category #no17').click(function() { flipsnap.moveToPoint(16); });






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
$("#bg").toggle(function () {
	$("#nav_tablet").animate({ 
	left: "0%"
	}, { duration:300, easing: 'easeInOutQuint', });
	},function () {
	$("#nav_tablet").animate({ 
	left: "-20%"
	}, { duration:300, easing: 'easeInOutQuint', });
});



$("#nav_area").hover(
  function () {
	$("#nav_web").animate({ 
	left: "0%"
	}, { duration:300, easing: 'easeInOutQuint', });

  }
);


$("#nav_web").hover(
  function () {  },
  function () {
	$("#nav_web").animate({ 
	left: "-16%"
	}, { duration:300, easing: 'easeInOutQuint', });
  }
);







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

 	$(this).animate({ 
	opacity: "0.3"
	}, { duration:200, easing: 'linear', });
	$("#modal").fadeIn(210);	
	$(this).animate({ 
	opacity: "1"
	}, { duration:200, easing: 'linear', });


});

$("#modal_close").click(function() {
 	$(this).animate({ 
	opacity: "0.3"
	}, { duration:200, easing: 'linear', });
	$(this).animate({ 
	opacity: "1"
	}, { duration:200, easing: 'linear', });
    $("#modal").fadeOut(250, function() {});


});



/****************************************
	index表示
****************************************/

$("#toindex").click(function() {
 	$(this).animate({ 
	opacity: "0.3"
	}, { duration:200, easing: 'linear', });
   $("#index_thumb_01").show(1, function() { });
   $("#index_thumb_02").show(1, function() { });
   $("#index_thumb_03").show(1, function() { });
	$(this).animate({ 
	opacity: "1"
	}, { duration:200, easing: 'linear', });   $("#index").show(1, function() { });


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

 	$(this).animate({ 
	opacity: "0.3"
	}, { duration:200, easing: 'linear', });
	
	$(this).animate({ 
	opacity: "1"
	}, { duration:200, easing: 'linear', });   $("#index").show(1, function() { });

    $("#index").animate({ 
	top: "-90%"
	}, { duration:300, easing: 'easeInOutQuint', });

	$("#index_thumb_01").animate({ 
	marginLeft: "100%"
	}, { duration:1, easing: 'easeInOutQuint', });
	$("#index_thumb_02").animate({ 
	marginLeft: "100%"
	}, { duration:1, easing: 'easeInOutQuint', });
	$("#index_thumb_03").animate({ 
	marginLeft: "100%"
	}, { duration:1, easing: 'easeInOutQuint', });

   $("#index_thumb_01").hide(2, function() { });
   $("#index_thumb_02").hide(2, function() { });
   $("#index_thumb_03").hide(2, function() { });
   $("#index").hide(500, function() { });


});




/****************************************
	contact表示
****************************************/

$("#tocontact").click(function() {
 	$(this).animate({ 
	opacity: "0.3"
	}, { duration:200, easing: 'linear', });
	$(this).animate({ 
	opacity: "1"
	}, { duration:200, easing: 'linear', });   $("#contact").show(1, function() { });

	$("#contact").animate({ 
	bottom: "0%"
	}, { duration:300, easing: 'easeInOutQuint', });
});




$("#contact img").click(function() {

 	$(this).animate({ 
	opacity: "0.3"
	}, { duration:200, easing: 'linear', });
	
	$(this).animate({ 
	opacity: "1"
	}, { duration:200, easing: 'linear', });   $("#index").show(1, function() { });

    $("#contact").animate({ 
	bottom: "-100%"
	}, { duration:300, easing: 'easeInOutQuint', });
   $("#contact").hide(500, function() { });


});



});






