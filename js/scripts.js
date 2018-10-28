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

  for(var i= 0; i<= inputNum; i++){
    numbersArray.push(i);
    console.log(numbersArray);
  }


  var beepReplaceZero = [];
  for (var i = 0; i <= numbersArray.length; i ++){
   var numbersToString = numbersArray.join('');
   console.log(numbersToString);
    if (numbersToString[i].includes(zero)){
       beepReplaceZero.push("Beep");
   }
   else {
     beepReplaceZero.push(i)
   }
   // debugger
   console.log(beepReplaceZero);

 }
}



   // var beepReplaceZero = numbersToString.replace(/0/gi, "Beep!");
   // console.log(beepReplaceZero);
   //
   // var boopReplaceOne = numbersToString.replace(/1/gi, "Boop!")
   // console.log(boopReplaceOne)

   // var beepReplaceZeroArray = beepReplaceZero.split(",")
   // console.log(beepReplaceZeroArray);


   // for (var i = 0; i<= numbersToString.length; i ++ ){
   // var BeepReplaceZero = numbersToString.replace("Beep");
   // console.log(BeepReplaceZero);
   // }

   // var stringToNewArray = numbersToString.split();
   // console.log(stringToNewArray);

   // if (numbersToString.includes(zero)){
   //   console.log("working");
   //
   // }
   //  for (var i = 0; i <= numbersArray.length; i ++){
   //    // debugger
   //    if (numbersArray.includes(zero)){
   //      numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "Beep!")
   //       // debugger
   //    }
   // //     else if (numbersArray.includes(one)){
   // //       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "Boop!")
   // //     }
   // //     else if (numbersArray[i] % 3 == 0){
   // //       numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "I'm sorry Dave, I'm afraid I can't do that.")
   // //     }
   //  }
   //  return numbersArray;
        // return numbersToString;



    // console.log(numbersArray.includes(digit));


    // console.log(numbersArray);





//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = parseInt($("input#number").val());

    var result = createNumbers(inputNum);
    // console.log(typeof inputNum);
    // console.log(numbersArray);
    result.forEach(function(num){
    $("#outputList").append('<li>' + num + '</li>');
    })
    $("#outputList").text(numbersArray);
    // console.log(inputNum);

    $(".output").show();



  });

});
