//---Business Logic---
var numbersArray = [];

  var createArray = function(inputNum) {
    var numberToArray = inputNum.split("");
    // console.log(numberToArray);
    return numberToArray;
    // debugger;
  }








//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = $("input#number").val();



    $(".outputNumbers").text(inputNum);
    console.log(inputNum);

    var result = createArray(inputNum);
    console.log(result);

    $(".output").show();



  });

});
