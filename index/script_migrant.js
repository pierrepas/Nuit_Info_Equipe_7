$(document).ready(function ()
{
	var compteurdanger = 0;
	var statsmigrants = '{ "Name":"El diablo", "Score":"0" , "pos_x":"100","pos_y":"300" }';
	var img = $("<img src='images/lol.jpg' width='256px' height='100px'/>");
	var migrant = $("<div/>").attr("id","migrant");
	migrant.append(img);
	var jsonstatsmigrants = JSON.parse(statsmigrants);
	var score = $("<div/>").attr("id","score");
	var divdangers = [];
	var dangers = [];
	score.html(jsonstatsmigrants.Score);
	$("main").append(score);
	$("body").append(migrant);
	
	
	$("body").keypress(function(e)
	{
		if(document.getElementById("sol") == null)
		{
			console.log($("#sol"));
			var sol = $("<div/>").attr("id","sol");
			$("body").append(sol);
			$("body").keypress(function(e)
			{
				if(e.keyCode == 122)
				{
					console.log("mdr");
					monteMigrant();
					setTimeout(function(){baisseMigrant()},1000);
				}
			});
			start();
		}
	});
	
	function monteMigrant()
	{
		var migrant = $("main");
		migrant.css({'margin-bottom':'0px'})
	}
	
	function baisseMigrant()
	{
		var migrant = $("#migrant");
		migrant.css({'padding-bottom':'150px'})
	}
	
	function refreshScore()
	{
		var score = $("#score");
		score.html("Score : "+jsonstatsmigrants.Score);
	}
	
	function danger()
	{
		var danger = { "id": compteurdanger, "position": window.innerWidth };
		dangers.push(danger);
		
		var img = $("<img src='images/requin.jpg' width='50px' height='50px'/>");
		var divdanger = $("<div/>").attr("class","danger").attr("id",compteurdanger);
		divdanger.css({top : 299, left:danger["position"], position:'absolute'});
		divdangers.push(divdanger);
		divdanger.append(img);
		$("body").append(divdanger);
		
		compteurdanger++;
	}
	
	function refreshDanger()
	{
		// console.log(divdangers);
		// console.log(dangers);
		for(i in dangers)
		{
			if(dangers[i].position != null)
			{
				// console.log(dangers[i]);
				// console.log(dangers[i]["id"]);
				// console.log(dangers[i]["position"]);
				dangers[i]["position"] = dangers[i]["position"] - 10;
				divdangers[i].css({top : 299, left:dangers[i]["position"], position:'absolute'});
				
				// if(divdangers[i].css({top : 180, left:dangers[i]["position"], position:'absolute'}))
					
			}
			
		}
	}
	
	function start()
	{
		again();
	}
	
	function again()
	{
		// console.log("mdr");
		jsonstatsmigrants.Score = parseInt(jsonstatsmigrants.Score) + 1;
		refreshScore();
		var rand = parseInt(Math.random() * 50);
		// console.log(rand);
		if(rand == 1)
			danger();
		refreshDanger();
		setTimeout(function(){again()},100);
		
	}
});
	