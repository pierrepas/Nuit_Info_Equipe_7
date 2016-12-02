var text = '{ "personnages" : [' +

'{ "Name":"Serpent" , "pos_x":"200","pos_y":"400", "questions":['+
	'{"question":"Bonjour, je ne sais pas où aller … vous pouvez m\'aider ?!!!" , '+
		'"true":"J\'ai quelque chose pour vous, rendez-vous au quai départ pour Richland dans 1h. [Conquis par ces propos vous partez en direction des quais]",' +
		'"false":"Je n\'ai rien pour vous… dégagez !! [Ne sachant pas où aller vous vous êtes trop rapproché de la zone de combat et vous êtes mort]",'+
		'"luck":"0.8"},'+
	'{"question":"A l\'aide, s\'il vous plait ... " ,' +
		'"true":"Je peux vous arranger un voyage pour Richland … [Conquis par ces propos vous suivez le serpent]",' +
		'"false":"Je n\'ai rien pour vous… dégagez !! [Ne sachant pas où aller vous vous êtes trop rapproché de la zone de combat et vous êtes mort]",'+
		'"luck":"0.8"},'+

'{ "Name":"Renard" , "pos_x":"800","pos_y":"400", "questions":['+
	'{"question":"Bonjour, je ne sais pas où aller … vous pouvez m\'aider ?!!!" , '+
		'"true":"J\'ai quelque chose pour vous, rendez-vous au quai départ pour Richland dans 1h. [Conquis par ces propos vous partez en direction des quais]",' +
		'"false":"Je n\'ai rien pour vous... dégagez !! [Ne sachant pas où aller vous vous êtes trop rapproché de la zone de combat et vous êtes mort]",'+
		'"luck":"0"},'+
	'{"question":"*A l\'aide, s\'il vous plait ... " ,'+ 
		'"true":"Je peux vous arranger un voyage pour Richland … [Conquis par ces propos vous suivez le renard]",' +
		'"false":" Je n\'ai rien pour vous... dégagez !! [Ne sachant pas où aller vous vous êtes trop rapproché de la zone de combat et vous êtes mort]",'+
		'"luck":"0"},'+
']},' +

'{ "Name":"Ripoux" , "pos_x":"1200","pos_y":"400", "questions":['+
	'{"question":"Bonjour, je ne sais pas où aller... vous pouvez m\'aider ?!!!" , '+
		'"true":"J\'ai quelque chose pour vous, rendez-vous au quai départ pour Richland dans 1h. [Conquis par ces propos vous partez en direction des quais]",' +
		'"false":"Je n\'ai rien pour vous... dégagez !! [Ne sachant pas où aller vous vous êtes trop rapproché de la zone de combat et vous êtes mort]",'+
		'"luck":"0.7"},'+
	'{"question":"A l\'aide, s\'il vous plait ... " ,'+ 
		'"true":"Je peux vous arranger un voyage pour Richland … [Conquis par ces propos vous suivez le renard]",' +
		'"false":"Je n\'ai rien pour vous… dégagez !! [Ne sachant pas où aller vous vous êtes trop rapproché de la zone de combat et vous êtes mort]",'+
		'"luck":"0.9"}'+
']}' +
']}';

var obj = JSON.parse(text);
var persoprincipal = '{ "personnage" : [' +'{ "id":"perso1" , "firstName":"John" , "lastName":"Cena", "age":"18", "pos_x":"150","pos_y":"70", "question":"Que ce passe t\'il ?" } ]}';
var jsonperso = JSON.parse(persoprincipal);