$(function() {
	//Activity 5 - Part 3 : JQuery functions starts here
	$("#square_part3").css(
		{
			width: "100px",
			height: "100px",
			marginTop: "10px",
			marginLeft: "10px"
		}
	);


	$("#start_part3").click(function() {
		var squareStyle = $("#square_part3").get(0).style;
		var newStyle = {
			width: (parseInt(squareStyle.width.replace("px", ""))+100)+"px",
			height: (parseInt(squareStyle.height.replace("px", ""))+100)+"px",
			marginTop: (parseInt(squareStyle.marginTop.replace("px", ""))+100)+"px",
			marginLeft: (parseInt(squareStyle.marginLeft.replace("px", ""))+100)+"px"
		};

		$("#square_part3").animate(newStyle, 500);
	});

	//Activity 5 - Part 2 : JQuery functions starts here
	$("#square_part2").css(
		{
			"background-color": "lightblue",
			"width": "100px",
			"height": "100px",
			"margin-top": "10px",
			"margin-left": "10px",
			"border-weight": "20px",
			"border-color": "blue",
			"border-style": "solid"
		}
	);

	$("#start_part2").click(function() {
		var sqr = $("#square_part2");
		sqr.animate({width: "500px"}, 500);
		sqr.animate({height: "500px"}, 500);
		sqr.animate({marginLeft: "300px"}, 500);
		sqr.animate({width: "550px", height: "550px",borderWidth: "20px", opacity: "0.50"}, 500);
	});
	//Activity 5 - Part 1 : JQuery functions starts here

	$("a").click(function() {
		var e = $(this);

		e.next("p").toggle(300);

		$("a").each(function(){
			if($(this)[0] != e[0]) {
				if($(this).next("p").is(":visible")) {
					$(this).next("p").toggle(300);
				}
			} 
		});
	});
	
});