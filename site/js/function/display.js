var img = $('<svg width="10" height="10"><circle cx="5" cy="5" r="2" stroke="blue" stroke-width="4" fill="blue" /></svg>');
console.log(jsonperso.personnage[0]);
var div = $('<div class="perso" id='+jsonperso.personnage[0].id+'>').css("position", "absolute");                    
var x = jsonperso.personnage[0].pos_x + 'px';
var y = jsonperso.personnage[0].pos_y + 'px';
div.css("left", x);
div.css("top", y);
div.append(img);
$(" .container ").append(div);
	
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
