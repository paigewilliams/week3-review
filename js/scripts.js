//---Business Logic---
var numbersArray = [];

function createNumber(inputNum) {
  var number = parseInt(inputNum);
  // return number;

  for(var i= 0; i<= number; i++){
    numbersArray.push(i);
    // debugger
  }

  console.log(numbersArray);
}
//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = ($("input#number").val());
    var result = createNumber(inputNum);
    console.log(result);
    console.log(numbersArray);

    $(".outputNumbers").html(numbersArray);
    // console.log(inputNum);

    $(".output").show();



  });

});
