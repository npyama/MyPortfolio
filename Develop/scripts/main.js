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






