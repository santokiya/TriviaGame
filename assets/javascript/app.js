var audio = new Audio("assets/sounds/clock-ticking-5")
    var score;
    score = 0;
    alert("Quiz Time!!!")

    var question1;
    question1 = prompt("What is the meaning of life?")
      if(question1 == "")  {
        score++;
        alert("You are correct! Score is: "+ score)
      }

      else {
        alert("Incorrect! Score is: "+ score)
      }


    var question2;
    question2 = prompt("Are you seeking a way?")
      if(question2 == "")  {
        score++;
        alert("You are correct! Score is: "+ score)
      }

      else {
        alert("Incorrect! Score is: "+ score)
      }
    
    var question3;
    question3 = prompt("Is this the way?")
        if(question3 == "")  {
          score++;
          alert("You are correct! Your Score is: "+ score)
        }

        else {
          alert("Incorrect!  Score is: "+ score)
        }
      if(score == 3) {
          alert("Your score is: "+score+" You won!!")
      else {
          alert("Your score is: "+score+" Better Luck Next Time!")
        } 
            }
      } 


//audio for each screen
var audio = new Audio("raven.mp3");

//  Step 2:
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

//  Step 3:
//  Fill in the blanks to these functions.
function fiveSeconds() {

  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}

function tenSeconds() {

  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

  //  The following line will play the audio file we linked to above:
  audio.play();