//---Business Logic---
var numbersArray = [];
var arrayBeep = []

function createNumber(inputNum) {
  var number = parseInt(inputNum);
  for(var i= 0; i<= number; i++){
    numbersArray.push(i);

  }

  numbersArray.splice(numbersArray.indexOf(0), 1, "Beep!");
  numbersArray.splice(numbersArray.indexOf(1), 1, "Boop!");
  return numbersArray;

  // return number;

  // if(numbersArray[i]=== "0"){
  //   numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "Beep")
  //     arrayBeep.push();
  //     debugger





}




//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = ($("input#number").val());
    var result = createNumber(inputNum);
    console.log(result);
    // console.log(numbersArray);

    $(".outputNumbers").html(numbersArray);
    // console.log(inputNum);

    $(".output").show();



  });

});
