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
	$("a").click(function(e) {
		hideShow($(this));
	});

	function hideShow(e) {
		var ans = ["This is the first answer", "This is the second answer", "This is the third answer"];
		var displayAns = "";
		var id = e[0].id;

		if($("p").length > 0) {
			$("p").each(function(i) {
				if($("p")[i] == e.next("p")[0]) 
					return true;
				
				$("p").hide(500);
			});
		}

		if (id.includes("1")) 
			displayAns = ans[0];
		else if (id.includes("2")) 
			displayAns = ans[1];
		else 
			displayAns = ans[2];
		

		if(e.next("p")[0] == null) {
				e.after("<p style='display: none; color: green;'>"+displayAns+"</p>");
				e.next("p").show(300);
		} else {
			if(e.next("p").is(":visible")) 
				e.next("p").hide(500);
			else 
				e.next("p").show(500);
			
		}
		
	}
});