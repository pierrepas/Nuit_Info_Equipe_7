$( ".perso" ).click(function() {
	console.log($(this).attr("id"));
	var id = $(this).attr("id");
    $.each(obj.personnages, function (key, val) {
    	if (key == id)
    		console.log(val.message);
    });
});