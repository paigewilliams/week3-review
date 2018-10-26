//---Business Logic---
var numbersArray = [];

function countToNumber(number){
  createArray();
  
  for (var i = 0; createArray.length; i ++){
    if (createArray[i] > createArray){
      numbersArray.push(createArray[i]);
    }
  }
  return numbersArray;
  console.log(numbersArray)
}

  var createArray = function(inputNum) {
    var numberToArray = parseInt(inputNum);
    return numberToArray;
    debugger
  }


  // function replace0(arrayofNumbers){
  //   var array = createArray(number)
  //   for (var = 0; i < arrayWit)
  // }








  // var arrayToIndvNum = function(numbertoArray){
  //   createArray.forEach(function(numbertoArray){
  //     parseInt();
  //     debugger
  //   })
  //   return arrayToIndvNum;
  //   console.log(arrayToIndvNum);
  //
  //   createArray();
  // }



//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = ($("input#number").val());
    var result = countToNumber(inputNum);
    console.log(result);

    $(".outputNumbers").html(result);
    // console.log(inputNum);

    $(".output").show();



  });

});
