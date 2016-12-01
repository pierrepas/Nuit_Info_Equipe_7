

$(document).ready(function(){
	$("#logo").hide();
	$(".page").hide();
	$("a").click(function(){
		// console.log(this.hasClass("nav"));
		if ($(this).hasClass("nav")) {
		var uneClass = $(this).attr('class');
		var notWantedString = " nav"
		var success = uneClass.replace(notWantedString, '');
		var ceSpan =  $("span."+success);
		var first = $("#First");
		var logo = $("#logo");
		console.log(success);
		console.log(ceSpan);

		first.animate({height:'100%'});
		$("section span").not(ceSpan).hide();
		$("section span").not(ceSpan).removeAttr("id");
		/*var test = ceSpan.css("display");
		console.log(test);*/
		ceSpan.show();
	    ceSpan.attr("id","Full");
	    setTimeout("$('#First').animate({height:'50px'});", 800);   
	    logo.show();	
	    setTimeout("$('#logo').hide();", 1200);  
	    //setTimeout(function(){ alert("Hello"); }, 3000); 
	}
	});

	$(".project").hover(function(){
		var overlay = $(this).find(".overlay");
		overlay.slideDown();
		overlay.css("display","-webkit-box");
		$(this).css({'cursor':'pointer'});
		console.log(overlay);


	});
	$(".project").mouseleave(function(){
		$(this).find(".overlay").slideUp();

	});

	$(".project").click(function(){
		var text = $(this).find(".textProject");
		var entreprise = $(this).find(".entreprise");
		entreprise.hide();
		text.slideDown();	
	});

});	