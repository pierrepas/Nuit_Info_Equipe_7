$( ".perso" ).click(function() {
	console.log($(this).attr("id"));
	var id = $(this).attr("id");
    $.each(obj.personnages, function (key, val) {
    	if (key == id)
	    	$("#dialog").empty();
    		$("#dialog").append("<p id='textdialog'>"+val.message+"</p>");
    		console.log(val.message);
    });
});