

// Question function

function Question(text, choices, answer) {
	this.text=text;
	this.choices = choices;
	this.answer = answer;

}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}

// quiz controller.  First create a current function 
//with attributes

function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this. questionIndex = 0;
}
// Need to write 2 functions..  
//Need a function to get the index of current questions 
//and one function to check if the quiz has ended
//third function is the guess function.  If the current answer=
//that of the answer selected by the player.

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];

}
Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;

Quiz.prototype.guess = function(answer) {
	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score ++;
	}
								}
							}
//questions to populate the questions etc.
function polulate()	{
		if(quiz.isEnded()) {
			//showw scores
			}	
		else	
			//show question
			var element = document.getElementByID("question");
			element.innHTML = quiz.getQuestionIndex.text
		}
var questions = [
			new Question("What is vocal fry?", ["singing until you die", "a side at Chick Fil'A ", "aka glottal fry is the lowest vocal register", "inhaling a massive amount of smoke and straining your larynx"])
			new Question("Who is Bob?", ["A", "B", "C", "D"])
			new Question("Why are there fluffy clouds?", ["A", "B", "C", "D"])
			new Question("Which is better dying or living?", ["A", "B", "C", "D"])

	];

var quiz = new Quiz(questions);

populate();








