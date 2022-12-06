let currentQuestion = 0;    //variable to iterate through the questions
let score = 0;             //keeps track of how many are correct
let hintsUsed = 0;         //number of hints used
let hintsLeft = 2;         //number of hints left
let questions = [
   {
	"question": "1. In what song do we learn of John Laurens' death (technically)?",
	"a": "The Story of Tonight",
	"b": "The Story of Tonight Reprise",
	"c": "Tomorrow There'll Be More of Us",
	"d": "John Laurens Interlude",
	"image":"quizimages/q1.jpg",
	"answer": "c",
   "hint": "John Laurens dies in the song between Dear Theodosia and Non-Stop."
   },
   {
	"question": "2. How many songs does the king appear in?",
	"a": "2",
	"b": "3",
	"c": "4",
	"d": "5",
	"image":"quizimages/q2.jpg",
	"answer": "c",
   "hint": "The King appears in more songs than just his solos. "
   },
   {
   "question": "3. Why was Thomas Jefferson in France?",
   "a": "As a representative for America",
   "b": "That's where he was born",
   "c": "To get help from the French for the American Revolution",
   "d": "To get drunk and party",
   "image":"quizimages/q3.jpg",
   "answer": "a",
   "hint": "Thomas Jefferson is an American republican who went on to become president. "
   },
   {
   "question": "4. Complete the line: and they say I'm a francophile",
   "a": "Diametric'ly opposed, foes",
   "b": "At least they know I know where France is",
   "c": "Oh my God. Tear this dude apart",
   "d": "That's one less thing to worry about",
   "image":"quizimages/q4.jpg",
   "answer": "b",
   "hint": "Thomas Jefferson sings this line in the Election of 1800. "
   },
   {
   "question": "5. Who fought for Hamilton?",
   "a": "George Washington, Thomas Jefferson, James Madison, Aaron Burr",
   "b": "John Laurens, Hercules Mulligan, Marquis de Lafayette,",
   "c": "John Laurens, Hercules Mulligan, Marquis de Lafayette, Aaron Burr",
   "d": "Thomas Jefferson, James Madison, Aaron Burr",
   "image":"quizimages/q5.jpg",
   "answer": "b",
   "hint": "These three characters sing the line 'we fought for him'. "
   },
   {
   "question": "6. Which of these names is not shared by two characters?",
   "a": "Philip",
   "b": "James",
   "c": "John",
   "d": "George",
   "image":"quizimages/q6.jpg",
   "answer": "a",
   "hint": "This is a character played by Anthony Ramos in the original production. "
   },
   {
   "question": "7. Although impoverished, Hamilton grows up to be",
   "a": "A general and grandfather",
   "b": "A banker and a father",
   "c": "A cheater and a liar",
   "d": "A hero and a scholar",
   "image":"quizimages/q7.jpg",
   "answer": "d",
   "hint": "And a scotsman dropped in the middle of a forgotten spot, in the caribbean by providence impoverished in squaller grow up to be a ..."
   },
   {
   "question": "8. What is the longest song in Hamilton?",
   "a": "Non-Stop",
   "b": "My Shot",
   "c": "Satisfied",
   "d": "Who Lives, Who Dies, Who Tells Your Story",
   "image":"quizimages/q8.jpg",
   "answer": "a",
   "hint": "This is the song in which Hamilton asks for Burr's help to defend the new U.S. constitution. "
   },
   {
   "question": '9. How old was Philip Hamilton turning during "Take a Break"?',
   "a": "10",
   "b": "9",
   "c": "8",
   "d": "7",
   "image":"quizimages/q9.jpg",
   "answer": "b",
   "hint": "I wrote this poem just to show it / And I just turned ___ / You can write rhymes but you can't write mine / What!"
   },
   {
   "question": "10. Who starts singing in 'It's Quiet Uptown?",
   "a": "Alexander Hamilton",
   "b": "Eliza Hamilton",
   "c": "Angelica Schuyler",
   "d": "Aaron Burr",
   "image":"quizimages/q10.jpg",
   "answer": "c",
   "hint": "A line sung by the first person that sings: The Hamiltons move uptown / And learn to live with the unimaginable. "
   },
   {
   "question": "11. Finish the line: Fools who run their mouths off wind up dead",
   "a": "How lucky we are to be alive right now",
   "b": "What'll you fall for",
   "c": "Running out of time?",
   "d": "Yo yo yo yo yo! What time is it?",
   "image":"quizimages/q11.jpg",
   "answer": "d",
   "hint": "The next line is sung by John Laurens. This is in Aaron Burr, sir. "
   },
   {
   "question": "12. Who is the first to die onstage in Hamilton?",
   "a": "John Laurens",
   "b": "Philip Hamilton",
   "c": "Peter Lytton",
   "d": "The Bullet",
   "image":"quizimages/q12.jpg",
   "answer": "d",
   "hint": "This death is ironic. "
   },

 ];

 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	 img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;

    //document.getElementById("hintdisplay").innerHTML = hintsLeft;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans === questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
   
       message = "Correct!!!! Your score is " + score + " / " + questions.length + " (Click anywhere to continue.)";
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
      
    // display score 
    document.getElementById("score").innerHTML = score + " / " + questions.length;
   
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       if(score < 3){
         message = "Well that didn't go well...";
       }else if(score >= 4 && score <= 9){
          message = "Good try. Maybe you go watch Hamilton again.";
       }else if(score == 10 || score == 11){
         message = "Wow! You're a true Hamilton fan!";
       }else{
         message = "You got all of them right!!";
       }
    } else {
       loadQuestion();
    }
    
    // show the lightbox
      document.getElementById("lightbox").style.display = "block";
      document.getElementById("message").innerHTML = message;
  
 }  // markIt

 function instructions(){
   document.getElementById("lightbox3").style.display = "block";
   document.getElementById("iconmessage").innerHTML = "See how well you really know 'Hamilton'! If you need a hint, click the lightbulb button. Choose wisely though, you only get two hints. Otherwise, click the right answer (a, b, c, or d). Good luck!";
 }

 function hints(){
   document.getElementById("lightbox3").style.display = "block";
   hintsUsed++;
   hintsLeft--;
   if(hintsUsed < 3){
   document.getElementById("iconmessage").innerHTML = questions[currentQuestion].hint;
   document.getElementById("hintdisplay").innerHTML = hintsLeft;
   }else{
      document.getElementById("hintdisplay").innerHTML = 0;
      document.getElementById("iconmessage").innerHTML = "You have run out of hints. Take a guess. Good luck :)";
   }
}
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("lightbox3").style.display = "none";
 } // closeLightbox
 
 
 
 
 
 
 
 
 
 
 
 
   
