var text = '{ "personnages" : [' +
'{ "firstName":"John" , "lastName":"Doe", "age":"18", "pos_x":"200","pos_y":"300", "message":"comment vas tu ?" },' +
'{ "firstName":"Anna" , "lastName":"Smith", "age":"18", "pos_x":"400","pos_y":"200", "message":"qui es tu ?" },' +
'{ "firstName":"Peter" , "lastName":"Jones", "age":"18", "pos_x":"150","pos_y":"300", "message":"lol" } ]}';
var obj = JSON.parse(text);
var persoprincipal = '{ "personnage" : [' +'{ "id":"perso1" , "firstName":"John" , "lastName":"Cena", "age":"18", "pos_x":"150","pos_y":"70" } ]}';
var jsonperso = JSON.parse(persoprincipal);