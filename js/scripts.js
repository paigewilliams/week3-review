//---Business Logic---
// var numbersArray = [];
//
// function createNumbers(inputNum) {
//   var number = parseInt(inputNum);
//   for(var i= 0; i<= number; i++){
//     numbersArray.push(i);
//     }
//
//   for (var i = 0; i < numbersArray.length; i ++){
//
//     if (numbersArray[i] === 0){
//       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "beep!")
//     }
//     if (numbersArray[i] === 1){
//       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "boop!")
//     }
//     if (numbersArray[i] % 3 == 0){
//       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "I'm sorry Dave, I'm afraid I can't do that.")
//     }
//     if(numbersArray[i] === 10 ){
//       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "beep!")
//     }
//     if(numbersArray[i] >= 11 && numbersArray[i] %11 == 0){
//       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "boop!")
//     }
//     if(numbersArray[i] > 19 && numbersArray[i] %10 == 0){
//       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "boop!")
//     }
//
//
//   }
//
//   return numbersArray;
//
// }
//



//---Version 2 Business Logic
var zero = 0;
var one = 1;
var numbersArray = [];
function createNumbers(inputNum) {
  // var number = parseInt(inputNum);
  for(var i= 0; i<= inputNum; i++){
    numbersArray.push(i);
    }
    for (var i = 0; i < numbersArray.length; i ++){
      if (numbersArray.includes(zero)){
        // console.log("zero");
        numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "boop!")
        debugger
      }
      if (numbersArray.includes(one)){
        // console.log("one");
        numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "beep!")

      }
      // console.log(numbersArray.includes(digit));
    }
    return numbersArray;
    console.log(numbersArray);
  }

    // console.log(numbersArray);





//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = ($("input#number").val());
    var result = createNumbers(inputNum);
    // console.log(result);
    // console.log(numbersArray);
    result.forEach(function(num){
    $("#outputList").append('<li>' + num + '</li>');
    })
    // $("#outputList").text(numbersArray);
    // console.log(inputNum);

    $(".output").show();



  });

});
