//---Business Logic---
var numbersArray = [];









//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = $("input#number").val();

    $(".outputNumbers").text(inputNum);
    console.log(inputNum);
    $(".output").show();
  });

});
