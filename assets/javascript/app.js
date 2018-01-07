$(document).ready(function() {
	$("#quiz").hide();
	$("#results").hide();	
	
	$("#startButton").click(function() {
		$(this).hide();
		$("#quiz").show();
		
		// start timer
		var seconds=20;
		var counter=setInterval(timer, 1000);
		
		function timer() {
			seconds=seconds-1;
			if (seconds<=0) {
				clearInterval(counter);
				showResults();
			};
		
		$("#timer").html("Timer: " + seconds + " left");
		}
	});

var q = 0;

// results of the quiz 
var correctAns=0;
var incorrectAns=0;
var noAns=0;

function showResults() {
	$("#startQuiz").hide();
	$("#results").show();
	$("#correctAns").append(correctAns);
	$("#incorrectAns").append(incorrectAns);
	$("#noAns").append(noAns);
}
	
function startQuiz() {
	
	$("#quiz").append(quiz[q].question);
		
	$("#choices").append('<input type="radio" name="question" value="1">').append(quiz[q].choice1);
	$("#choices").append('<input type="radio" name="question" value="2">').append(quiz[q].choice2);
	$("#choices").append('<input type="radio" name="question" value="3">').append(quiz[q].choice3);
	$("#choices").append('<input type="radio" name="question" value="4">').append(quiz[q].choice4);

	// move on to the next questions until all questions are answered
	$("#next").click(function() {
		
		// compare the input to actual answer and verify correct, incorrect, unanswered
		var userInput = $('input[name="question"]:checked').val();
		var actualAns = (quiz[q].answer);
		
		//increment each result by 1 according to the input given
		if (userInput==actualAns) {
			correctAns++;
		}
		else if (userInput==undefined) {
			noAns++;
		}
		else {
			incorrectAns++;
		};
		
		// increment the questions by 1
		 q++;
	
		$("#quiz").empty();
		$("#choices").empty();
		
		$("#quiz").append(quiz[q].question);
		
		$("#choices").append('<input type="radio" name="question" value="1">').append(quiz[q].choice1);
		$("#choices").append('<input type="radio" name="question" value="2">').append(quiz[q].choice2);
		$("#choices").append('<input type="radio" name="question" value="3">').append(quiz[q].choice3);
		$("#choices").append('<input type="radio" name="question" value="4">').append(quiz[q].choice4);
			
	});		
}; 

var quiz = [
	{
		"question" : "Where did the popularization of the term 'techno', as far as music, come from?",
		"choice1" : "Short for technological music",
		"choice2" : "German group Kraftwerk",
		"choice3" : "A song name from a Detroit House record",
		"choice4" : "Japanese for future",
		"answer" : 3
	},

	{
		"question" : "What country can be attributed as the earliest origin of 20th and 21st century pop/electronic music?",
		"choice1" : "Germany",
		"choice2" : "Egypt",
		"choice3" : "USA",
		"choice4" : "Japan",
		"answer" : 2
	},

	{
		"question" : "What does the word 'karaoke' mean?",
		"choice1" : "Empty orchestra",
		"choice2" : "Hand to mouth",
		"choice3" : "Tone deaf",
		"choice4" : "Singing party",
		"answer" : 1
	},

	{
		"question" : "The narrative for Star Wars was borrowed from?",
		"choice1" : "Actual events in World War II",
		"choice2" : "Roger Corman's Battle Beyond the Stars",
		"choice3" : "Edward Albee's Who's Afraid of Virginia Woolf?",
		"choice4" : "Akira Kurosawa's Hidden Fortress",
		"answer" : 4
	},

	{
		"question" : "Who wrote the lyrics: 'the pain was enough to make a shy, bald, Buddhist reflect And plan a mass murder' ?",
		"choice1" : "The Smiths",
		"choice2" : "Megadeth",
		"choice3" : "Taylor Swift",
		"choice4" : "Mayhem",
		"answer" : 1
	},

	{
		"question" : "At what age did actor River Phoenix die?",
		"choice1" : "19",
		"choice2" : "35",
		"choice3" : "26",
		"choice4" : "17",
		"answer" : 3
	},

	{
		"question" : "Where did the name Rocket Raccoon come from?",
		"choice1" : "The boxer",   
		"choice2" : "A Beatles song",
		"choice3" : "Bill Manlo's pet",
		"choice4" : "The first Russian raccoon to go to space",
		"answer" : 1
	},

	{
		"question" : "The red pepper in Korean cuisine was actually acquired via trade from the________?",
		"choice1" : "Chinese",
		"choice2" : "Mongolians",
		"choice3" : "Dutch",
		"choice4" : "Mexicans",
		"answer" : 3
	},

	{
		"question" : "In Pokemon, what actual city is Pallet town based on?",
		"choice1" : "Sagamihara",
		"choice2" : "Machida",
		"choice3" : "Hiroshima",
		"choice4" : "Yokohama",
		"answer" : 2
	},
	
];
 

startQuiz();

}); 