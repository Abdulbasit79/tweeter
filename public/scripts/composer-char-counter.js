$(document).ready(function () {
  $("textarea").on("input", function () {
    const numbers = 140;
    const inputLength = $(this).val().length;
    $(this)
      .nextAll(".counter")
      .text(numbers - inputLength);
    if (numbers - inputLength < 0) {
      $(this).nextAll(".counter").css("color", "red");
    } else {
      $(this).nextAll(".counter").css("color", "grey");
    }
  });
});
