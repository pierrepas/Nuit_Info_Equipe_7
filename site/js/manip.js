$(document).ready(function() {
	var text = '{ "personnages" : [' +
'{ "firstName":"John" , "lastName":"Doe", "age":"18", "pos_x":"200","pos_y":"300" },' +
'{ "firstName":"Anna" , "lastName":"Smith", "age":"18", "pos_x":"400","pos_y":"200" },' +
'{ "firstName":"Peter" , "lastName":"Jones", "age":"18", "pos_x":"150","pos_y":"300" } ]}';
	var obj = JSON.parse(text);
	console.log(obj.personnages);
	$.each(obj.personnages, function (key, val) {
        var img = $('<svg width="10" height="10"><circle cx="5" cy="5" r="2" stroke="red" stroke-width="4" fill="red" /></svg>');
		var div = $('<div class="perso" id='+key+'>').css("position", "absolute");                    
		var x = val.pos_x + 'px';
		var y = val.pos_y + 'px';
		div.css("left", x);
		div.css("top", y);
		div.append(img);
		$(" .container ").append(div);
    });
});