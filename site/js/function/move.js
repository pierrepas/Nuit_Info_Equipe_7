function seDeplacer(direction)
{
	var perso = $("#persoprincipal");
	var container = $('.container');
	
	switch(direction)
	{
		case "up": 
			if(persolol.pos_y > 20)
				persolol.pos_y -= 10;					
			break;
		case "left": 
			if(persolol.pos_x > 20)
				persolol.pos_x -= 10;
			break;
		case "right": 
			if(persolol.pos_x < container.width() - 10)
				persolol.pos_x += 10;
			break;
		case "down": 
			if(persolol.pos_y < container.height() - 10)
				persolol.pos_y += 10;
			break;
	}
	perso.css({top : persolol.pos_y, left: persolol.pos_x, position:'absolute'});
}

$("body").keypress(function(e)
{
	if(e.keyCode == 122 || e.keyCode == 90)
		seDeplacer("up");
	else if(e.keyCode == 113 || e.keyCode == 81)
		seDeplacer("left");
	else if(e.keyCode == 100 || e.keyCode == 68)
		seDeplacer("right");
	else if(e.keyCode == 115 || e.keyCode == 83)
		seDeplacer("down");
});

