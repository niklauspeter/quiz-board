


$(document).ready(function(){
  $(".pointer").click(function(){
    $(".hiddenQuiz").show();
  });
});
$(document).ready(function(){
  alert("run");
  $("#submit").click(function(){
  var answer1= $("input[name='question1']:checked").val();
  var answer2= $("input[name='question2']:checked").val();
  var answer3= $("input[name='question3']:checked").val();
  var answer4= $("input[name='question4']:checked").val();
  var answer5= $("input[name='question5']:checked").val();
  var answer6= $("input[name='question6']:checked").val();
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
if (answer6=="true"){
  result = result +20;
}
alert(result);
});
});
