
$(document).ready(function(){
  $(".pointer").click(function(){
    $(".hiddenQuiz").toggle();
    $(".Genesis").toggle();
  });
});
$(document).ready(function(){
  $("#submit").click(function(){
    $(".finals").toggle();
    $(".showResult").toggle();
  var answer1= $("input[name='question1']:checked").val();
  var answer2= $("input[name='question2']:checked").val();
  var answer3= $("input[name='question3']:checked").val();
  var answer4= $("input[name='question4']:checked").val();
  var answer5= $("input[name='question5']:checked").val();
  var result = 0;

if (answer1== "true")
{
  result = result+ 20;
}
if (answer2=="true"){
  result = result +20;
}
if (answer3=="true"){
  result = result +20;
}
if (answer4=="true"){
  result = result +20;
}
if (answer5=="true"){
  result = result +20;
}
$("#finalResult").text(result + "%");

if(result >= 80){
  $("#resultMessage").text("You have passed congratulations!");
}
else if(result>=50 && result<80){
  $("#resultMessage").text("You have passed fairly!");
}
else if(result<50){
  $("#resultMessage").text("You have failed miserably my friend! You have brought shame upon your father! Repeat the test immediately!");
}
});
});
