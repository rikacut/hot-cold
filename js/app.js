$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- clone html---*/
  	var pageClone = $("html").clone();
  	var y=0;

  	/*--- Make array---*/
  	var numberArray = [];

	/*--- New Game ---*/
	$(".new").click(function(){
		$("html").html(pageClone);
	});

  	/*--- Generate random numbers ---*/
	var x = Math.floor((Math.random() * 100) + 1);
	console.log(x);

	/*--- Make it count ---*/
	var counter = 0

	/*--- Store what user has typed ---*/
	$(".button").click(function(e){
		e.preventDefault();
		y = $(".text").val();
		console.log(y);

		var yesNo="";
		
		for (var i = 0; i < numberArray.length; i++) {
			console.log(numberArray);
			if (numberArray[i]==y){
			alert("You've already entered this number");
			yesNo = "True";
			};

		};
		
		if (isNaN(y)){
			alert("Please enter a numerical value");
		}

		else if (yesNo == ""){
		numberArray.push(y);
		guessIfs(x,y);
		counter++;
		$("#count").html(counter);
		console.log(counter);
		$("#guessList").append("<li>"+y+"</li>");
		};
	});

	/*--- Compare x and y ---*/
	var guessIfs = function(x,y){
		if (y==x){
			$("#feedback").html("Right On");
		}

		else if (Math.abs(y-x)>=50){
		$("#feedback").html("Ice Cold");
		} 

		else if (Math.abs(y-x)>=30){
		$("#feedback").html("Cold");
		}
	
		else if (Math.abs(y-x)>=20){
		$("#feedback").html("Warm");
		}

		else if (Math.abs(y-x)>=10){
		$("#feedback").html("Hot");
		} 

		else if (Math.abs(y-x)>=1){
		$("#feedback").html("Very Hot");
		}

		else {
		console.log("not the same");
		}

	};
	
		/*--- Append all the guesses ---
		$("#guessList").append(<li>y</li>);
	}
	*/




});


