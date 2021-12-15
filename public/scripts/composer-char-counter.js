const maxLength = 140;
let counter = $(".counter")

$(document).ready(function () {
  console.log('Doc Is Ready')

  $("#tweet-text").keyup(function () {
    let charCount = $(this).val().length
    let charRemaining = maxLength - charCount;

    if(charRemaining < 0){
      $("output").addClass("maxCharColor")
      $("output").text(charRemaining);
    } else{
      $("output").removeClass("maxCharColor")
      $("output").text(charRemaining)
    }

   
  });
});








