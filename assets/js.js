//***INITILIAZTION OF GAME***//
//This is the event listener for clicking start game button
$(document).ready(function(){
    $("#startBtn").click(pageSetUp)
});
//***INITILIAZTION OF GAME***//

//***FUNCTION FOR REPLACING STARTING PAGE AND DISPLAYING FIRST QUESTION***//
function pageSetUp () {
        //removes the start button
        $(document).ready(function(){
            $("#btnContainer").remove()
        });

        $(document).ready(function(){
            //adds new 4 divs to the "cardContainer"
            $("#cardContainer").append( questionDiv1,questionDiv2,questionDiv3,questionDiv4);
        });



        //***TITLE REPLACEMENT/CARD TITLE REPLACEMENT***//
        //below dynamically changes the page title and the title of each card to correspond with the question you are on

        
            $("#Title").text(q1.title);
            $(document).ready(function() {
            $("#cardtitle1").text(q1a1.cardtitle);
        });

        $(document).ready(function() {
            $("#cardtitle2").text(q1a2.cardtitle)


        $(document).ready(function() {
            $("#cardtitle3").text(q1a3.cardtitle)
        });

        $(document).ready(function() {
            $("#cardtitle4").text(q1a4.cardtitle)
        });
        //***TITLE REPLACEMENT/CARD TITLE REPLACEMENT***//


        //***CARD BODY REPLACEMENT***//
        //Below does the same thing as above, but replaces all the card texts
        $(document).ready(function() {
            $("#cardtext1").text(q1a1.cardtext)
        });
        $(document).ready(function() {
            $("#cardtext2").text(q1a2.cardtext)
        });
        $(document).ready(function() {
            $("#cardtext3").text(q1a3.cardtext)
        });
        $(document).ready(function() {
            $("#cardtext4").text(q1a4.cardtext)
        });
        //***CARD BODY REPLACEMENT***//   


    })}; 



// //TODO: IF PLAYER ANSWERS RIGHT OR WRONG GAME SHOULD LET THEM KNOW

    

// // TODO: SET VARIABLES THAT HOLD PLAYER CHOICE AND PLAYER SCORE, player choices could be stored into an array and checked against correct answers.
//     // var questionsList =[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]
//     // var correctAnswers = [2,1,3,2,1,2,4,4,3,2]
//     // var playerAnswers = []
//     // var playerAnswersRT =""

// //below are var for each card, eahc is unique so i can watch for the users answers exactly.
    var questionDiv1 = '<div class="card m-5" style="width: 18rem;"><div class="card-body"><h5 id= cardtitle1 class="card-title">Special title treatment</h5><p id= cardtext1 class="card-text">With supporting text below as a natural lead-in to additional content.</p><button id="a1btn" class="btn btn-primary" >Select</button></div></div>'
    var questionDiv2 = '<div class="card m-5" style="width: 18rem;"><div class="card-body"><h5 id= cardtitle2 class="card-title">Special title treatment</h5><p id= cardtext2 class="card-text">With supporting text below as a natural lead-in to additional content.</p><button id="a2btn" class="btn btn-primary" >Select</button></div></div>'
    var questionDiv3 = '<div class="card m-5" style="width: 18rem;"><div class="card-body"><h5 id= cardtitle3 class="card-title">Special title treatment</h5><p id= cardtext3 class="card-text">With supporting text below as a natural lead-in to additional content.</p><button id="a3btn" href="#" class="btn btn-primary" >Select</button></div></div>'
    var questionDiv4 = '<div class="card m-5" style="width: 18rem;"><div class="card-body"><h5 id= cardtitle4 class="card-title">Special title treatment</h5><p id= cardtext4 class="card-text">With supporting text below as a natural lead-in to additional content.</p><button id="a4btn" href="#" class="btn btn-primary" >Select</button></div></div>'

// //**QUESTION AND ANSWER VARIABLE LIST***//
// // each independent variable for a question, and each question has 3 possible answers and 1 right answer.
// //Ive set the questions themselves as an array and further defined the info on each possible answer
var q1 = {title:"Question 1, What is 1+1?", containing: [q1a1,q1a2,q1a3,q1a4]}
    var q1a1= {cardtitle:"Answer #1", cardtext:"1, Duh",};
    var q1a2= {cardtitle:"Answer #2", cardtext:"2, Of course"};
    var q1a3= {cardtitle:"Answer #3", cardtext:"3?"};
    var q1a4= {cardtitle:"Answer #4", cardtext:"4, For sure"};
var q2 = {title:"Question 2, What is 2+2?", containing: [q2a1,q2a2,q2a3,q2a4]}
    var q2a1= {cardtitle:"Answer #1", cardtext:"4, Duh"};
    var q2a2= {cardtitle:"Answer #2", cardtext:"27, Of course"};
    var q2a3= {cardtitle:"Answer #3", cardtext:"355?"};
    var q2a4= {cardtitle:"Answer #4", cardtext:"44, For sure"};
var q3 = {title:"Question 3, What is 3+3?", containing: [q3a1,q3a2,q3a3,q3a4]}
    var q3a1= {cardtitle:"Answer #1", cardtext:"10, Duh"};
    var q3a2= {cardtitle:"Answer #2", cardtext:"22, Of course"};
    var q3a3= {cardtitle:"Answer #3", cardtext:"6?"};
    var q3a4= {cardtitle:"Answer #4", cardtext:"45, For sure"};
var q4 = {title:"Question 4, What is 4+4?", containing: [q4a1,q4a2,q4a3,q4a4]} 
    var q4a1= {cardtitle:"Answer #1", cardtext:"18, Duh"};
    var q4a2= {cardtitle:"Answer #2", cardtext:"8, Of course"};
    var q4a3= {cardtitle:"Answer #3", cardtext:"38?"};
    var q4a4= {cardtitle:"Answer #4", cardtext:"48, For sure"};
var q5 = {title:"Question 5, What is 5+5?", containing: [q5a1,q5a2,q5a3,q5a4]}
    var q5a1= {cardtitle:"Answer #1", cardtext:"10, Duh"};
    var q5a2= {cardtitle:"Answer #2", cardtext:"28, Of course"};
    var q5a3= {cardtitle:"Answer #3", cardtext:"32?"};
    var q5a4= {cardtitle:"Answer #4", cardtext:"40, For sure"};
var q6 = {title:"Question 6, What is 6+6?", containing: [q6a1,q6a2,q6a3,q6a4]}
    var q6a1= {cardtitle:"Answer #1", cardtext:"11, Duh"};
    var q6a2= {cardtitle:"Answer #2", cardtext:"12, Of course"};
    var q6a3= {cardtitle:"Answer #3", cardtext:"13?"};
    var q6a4= {cardtitle:"Answer #4", cardtext:"14, For sure"};
var q7 = {title:"Question 7, What is 7+7?", containing: [q7a1,q7a2,q7a3,q7a4]}
    var q7a1= {cardtitle:"Answer #1", cardtext:"1/2, Duh"};
    var q7a2= {cardtitle:"Answer #2", cardtext:"22, Of course"};
    var q7a3= {cardtitle:"Answer #3", cardtext:"83?"};
    var q7a4= {cardtitle:"Answer #4", cardtext:"14, For sure"};
var q8 = {title:"Question 8, What is 8+8?", containing: [q8a1,q8a2,q8a3,q8a4]}
    var q8a1= {cardtitle:"Answer #1", cardtext:"11, Duh"};
    var q8a2= {cardtitle:"Answer #2", cardtext:"216, Of course"};
    var q8a3= {cardtitle:"Answer #3", cardtext:"36?"};
    var q8a4= {cardtitle:"Answer #4", cardtext:"16, For sure"};
var q9 = {title:"Question 9, What is 9+9?", containing: [q9a1,q9a2,q9a3,q9a4]}
    var q9a1= {cardtitle:"Answer #1", cardtext:"1, Duh"};
    var q9a2= {cardtitle:"Answer #2", cardtext:"8, Of course"};
    var q9a3= {cardtitle:"Answer #3", cardtext:"18?"};
    var q9a4= {cardtitle:"Answer #4", cardtext:"19, For sure"};
var q10 = {title:"Question 10, What is 10+10?", containing: [q10a1,q10a2,q10a3,q10a4]}
    var q10a1= {cardtitle:"Answer #1", cardtext:"01, Duh"};
    var q10a2= {cardtitle:"Answer #2", cardtext:"20, Of course"};
    var q10a3= {cardtitle:"Answer #3", cardtext:"03?"};
    var q10a4= {cardtitle:"Answer #4", cardtext:"004, For sure"};
// //**QUESTION AND ANSWER VARIABLE LIST***//


//     // TODO: HIGHSCORES SHOULD HAVE A CLEAR HIGHSCORES BUTTON
// //TODO: CALCULATE SCORE BASED ON TIME LEFT AND ANSWERS RIGHT, THEN CHECK THE SCORE AGAINST CURRENT HISCORES TO SEE IF ITS ELIGBLE TO BE ADDED. IF SO ADD TO HISCORES LIST

