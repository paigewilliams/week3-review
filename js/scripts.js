//---Business Logic---
var numbersArray = [];
var arrayBeep = []

function createNumbers(inputNum) {
  var number = parseInt(inputNum);
  for(var i= 0; i<= number; i++){
    numbersArray.push(i);
    console.log(numbersArray);
    }
  // debugger
  for (var i = 0; i < numbersArray.length; i ++){
    if (numbersArray[i] === 0){
      numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "beep")
    }
    // debugger
    if (numbersArray[i] === 1){
      numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "boop")
    }

    

    // debugger
    // return numbersArray.join(", ");

  }

  return numbersArray;

  // numbersArray.splice(numbersArray.indexOf(0), 1, "Beep!");
  // numbersArray.splice(numbersArray.indexOf(1), 1, "Boop!");

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
    var result = createNumbers(inputNum);
    console.log(result);
    // console.log(numbersArray);

    $(".outputNumbers").text(numbersArray);
    // console.log(inputNum);

    $(".output").show();



  });

});
