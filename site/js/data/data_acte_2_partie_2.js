var text = '{ "personnages" : [' +

'{ "Name":"La mer" , "pos_x":"200","pos_y":"400", "questions":['+
	'{"question":"Pousser les autres: Chacun pour soi, vous poussez les gens en difficulté hors du bateau. Ils tombent dans la mer déchainée, mais le bateau est moins chargé. [Le voyage continue pour vous]" , '+
		'"true":"Le bateau se stabilise",' +
		'"false":"Nauffrage du bateau, vous mourrez. [Vous êtes mort]",'+
		'"luck":"0.9"},'+
	'{"question":"Sauver les autres: Vous tenter de ratrapper les gens qui sont sur le point de tomber du navire et les ramenez à bord." ,' +
		'"true":"Le bateau et malmené par l\'ocean, mais de manière presque miraculeuse vu son état, arrive à rester à flot.",' +
		'"false":"Le bateau ne supporte par l\'épreuve des vagues et chavire. Vous vous retrouvez au milieu de la mer, dans l\'eau froide, sans cote à l\'horizon.",'+
		'"luck":"0.7"},'+
	'{"question":"Attendre" , '+
		'"true":"Vous voyiez des gens qui tombent à l\'eau mais vous tenez bon. Quelques heures après la tempéte cesse et le calme revient sur la mer. Il y a un peu plus de place sur le bateau.",' + '"false":"Le bateau ne supporte par l\'épreuve des vagues et chavire. Vous vous retrouvez au milieu de la mer, dans l\'eau froide, sans cote à l\'horizon.",'+
		'"luck":"0.8"},'+
	'{"question":"*A l\'aide, s\'il vous plait ... " ,'+ 
		'"true":"Je peux vous arranger un voyage pour Richland … [Conquis par ces propos vous suivez le renard]",' +
		'"false":" Je n\'ai rien pour vous... dégagez !! [Ne sachant pas où aller vous vous êtes trop rapproché de la zone de combat et vous êtes mort]",'+
		'"luck":"0"},'+
']}' +
']}';

var obj = JSON.parse(text);
var persoprincipal = '{ "personnage" : [' +'{ "id":"perso1" , "firstName":"John" , "lastName":"Cena", "age":"18", "pos_x":"150","pos_y":"70", "question":"Que ce passe t\'il ?" } ]}';
var jsonperso = JSON.parse(persoprincipal);