//---Business Logic---

function createNumbers(number) {
  var numbersArray = [];

  for(var i= 0; i<= number; i++){
    if (i % 3 === 0 && i !== 0){
      numbersArray.push("I'm sorry Dave, I'm afraid I can't do that.")
    }
    else if (i.toString().includes(1)) {
      numbersArray.push("Boop!")
    }
    else if (i.toString().includes(0)) {
      numbersArray.push("Beep!")
    }
    else {
      numbersArray.push(i)
    }
  }
  return numbersArray.join(", ");
}

//---User Interface Logic---
$(document).ready(function(){
  $("form#numberEnter").submit(function(event){
    event.preventDefault();
    var inputNum = parseInt($("input#number").val());
    var result = createNumbers(inputNum);
    $("#outputList").html(result);
    $(".output").show();
  });
});
