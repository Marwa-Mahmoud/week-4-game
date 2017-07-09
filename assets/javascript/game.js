
$(document).ready(function() {

	//These variables are global to all the game rounds
	var numbers = [];
	var wins = 0;
	var losses = 0;

	for (var i = 19; i <= 120; i++){
		numbers.push(i);
	}
	//These variable are reset with every new round
	var crystalsNumbers = [];
	var randomNumber = 0;
	var totalScore = 0;


	var restartRound = function(){
		//resetting this round variables
		crystalsNumbers = [];
		totalScore = 0;
		randomNumber = numbers[Math.floor(Math.random()* numbers.length)];

		console.log(randomNumber);
		console.log(totalScore);

		$("#random-number").text(randomNumber);
		$("#total-score").text(totalScore);
		$("#crystal-number").text("");

 
 		//function to create four unique random numbers
		var generateCrystalsNumbers = function(){

			var limit = 4,
    		amount = 4,
    		lower_bound = 1,
    		upper_bound = 12,
    		unique_random_numbers = [];

			if (amount > limit) limit = amount; 
			while (unique_random_numbers.length < limit) {
    			var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
    			if (unique_random_numbers.indexOf(random_number) == -1) { 
        		unique_random_numbers.push( random_number );
    			}
			}

			return unique_random_numbers;
		}

		//function to assign each of the four crystals a unique number
		var assignCrystalsNumbers = function(arr){
			$("#crystal1").attr("data-number", arr[0]);
			$("#crystal2").attr("data-number", arr[1]);
			$("#crystal3").attr("data-number", arr[2]);
			$("#crystal4").attr("data-number", arr[3]);
		}

		crystalsNumbers = generateCrystalsNumbers();
		assignCrystalsNumbers(crystalsNumbers);

		console.log(crystalsNumbers);
	}//end of restartRound

	//calling restartRound will execute once the page is ready
	restartRound()

	//function to check the total score and see if win or lose
	var checkResult = function(){
		if(totalScore === randomNumber){
			//alert("You Win!");
			wins++;
			$("#result").text("You Win!");
			$("#wins").text("Wins: "+wins);
			console.log(wins + "  "+ losses);
			restartRound();

		}
		else if(totalScore > randomNumber){
			//alert("You Lose!");
			losses++;
			$("#result").text("You lose!");
			$("#losses").text("Losses: "+losses);
			console.log(wins + "  "+ losses);
			restartRound();
		}

	}

	$("#crystal1").on("click", function(){
		$("#crystal-number").text($(this).attr("data-number"));
		totalScore += parseInt($(this).attr("data-number"));
		console.log(totalScore);
		$("#total-score").text(totalScore);
		checkResult();
	});

	$("#crystal2").on("click", function(){
		$("#crystal-number").text($(this).attr("data-number"));
		totalScore += parseInt($(this).attr("data-number"));
		$("#total-score").text(totalScore);
		checkResult();
	});

	$("#crystal3").on("click", function(){
		$("#crystal-number").text($(this).attr("data-number"));
		totalScore += parseInt($(this).attr("data-number"));
		$("#total-score").text(totalScore);
		checkResult();
	});

	$("#crystal4").on("click", function(){
		$("#crystal-number").text($(this).attr("data-number"));
		totalScore += parseInt($(this).attr("data-number"));
		$("#total-score").text(totalScore);
		checkResult();
	});

});


 


