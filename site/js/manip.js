var text = '{ "personnages" : [' +
'{ "firstName":"John" , "lastName":"Doe", "age":"18", "pos_x":"200","pos_y":"300", "message":"comment vas tu ?" },' +
'{ "firstName":"Anna" , "lastName":"Smith", "age":"18", "pos_x":"400","pos_y":"200", "message":"qui es tu ?" },' +
'{ "firstName":"Peter" , "lastName":"Jones", "age":"18", "pos_x":"150","pos_y":"300", "message":"lol" } ]}';
var obj = JSON.parse(text);
var persoprincipal = '{ "personnage" : [' +'{ "id":"perso1" , "firstName":"John" , "lastName":"Cena", "age":"18", "pos_x":"150","pos_y":"70" } ]}';
var jsonperso = JSON.parse(persoprincipal);

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

