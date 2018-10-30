//---Business Logic---

function createNumbers(number) {
  var numbersArray = [];

  for(var i= 0; i<= number; i++){
    if (i % 3 === 0 && i !== 0){
      numbersArray.push("I'm sorry Dave, I'm afraid I can't do that.")
    }
    else if ( i.toString().includes(1)) {
      numbersArray.push("Boop")
    }
    else if (i.toString().includes(0)) {
      numbersArray.push("Beep")
    }
    else {
      numbersArray.push(i)
    }
  }
  return numbersArray.join(", ");

}




  // for (var i = 0; i < numbersArray.length; i ++){
  //
  //   if (numbersArray[i] === 0){
  //     numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "beep!")
  //   }
  //   if (numbersArray[i] === 1){
  //     numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "boop!")
  //   }
  //   if (numbersArray[i] % 3 == 0){
  //     numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "I'm sorry Dave, I'm afraid I can't do that.")
  //   }
  //   if(numbersArray[i] === 10 ){
  //     numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "beep!")
  //   }
  //   if(numbersArray[i] >= 11 && numbersArray[i] %10 == 1){
  //     numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "boop!")
  //   }
  //   if(numbersArray[i] > 19 && numbersArray[i] %10 == 0){
  //     numbersArray.splice(numbersArray.indexOf(numbersArray[i]), 1, "beep!")
  //   }
  //
  //
  // }


//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = parseInt($("input#number").val());
    var result = createNumbers(inputNum);
    console.log(result);
    // console.log(numbersArray);
    // result.forEach(function(num){
    $("#outputList").text(result);
    // })
    // $("#outputList").text(numbersArray);
    // console.log(inputNum);

    $(".output").show();



  });

});
