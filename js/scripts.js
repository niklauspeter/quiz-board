


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
  var answer2= $("input[name='question2']:checked").val();
  var answer2= $("input[name='question2']:checked").val();
  var answer2= $("input[name='question2']:checked").val();
  var result = 0;

  if (answer1== "true")
{
  result = result+ 20;
}
if (answer2=="true"){
  result = result +20;
}
alert(result);
});
});
