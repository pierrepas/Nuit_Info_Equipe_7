var text = '{ "personnages" : [' +
'{ "Name":"Militaire" , "pos_x":"200","pos_y":"300", "question":"Excusez moi monsieur, qu\'est-ce qui se passe, est-ce que je peux vous aider ?", "reponse":"Qu\'est ce que vous fouttez ici vous voyiez pas que c\'est la guerre ?  Les forces rebelles ont encerclé la ville, la  ville va tomber entre leur main ! Alors décampez d\'ici et planquez vous chez vous en espérants qu\'ils ne vous voyent pas !" },' +
'{ "Name":"Rebel" , "pos_x":"150","pos_y":"300", "Excusez moi monsieur, qu\'est ce qui se passe ici ?" },' +
'{ "Name":"El diablo" , "pos_x":"100","pos_y":"300", "question":"donde esta el diablo ?", "reponse":"Muy bien" } ]}';
var obj = JSON.parse(text);
var persoprincipal = '{ "personnage" : [' +'{ "id":"perso1" , "firstName":"John" , "lastName":"Cena", "age":"18", "pos_x":"150","pos_y":"70" } ]}';
var jsonperso = JSON.parse(persoprincipal);