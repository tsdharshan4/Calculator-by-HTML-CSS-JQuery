$(document).ready(function () {
  $(".btn-light").click(function () {
    if ($("input").hasClass("clearAll")) {
      if ($(this).hasClass("btn-num")) {
        $("input").val("");
      }
      if ($(this).hasClass("btn-act")) {
        $("input").removeClass("clearAll");
      }
    }
    var current_val = $("input").val();
    var val = $(this).data("val");

    $("input").val(current_val + val);
    console.log($("#inputbar").val());
  });

  $("#backspace").click(function () {
    var inputText = $("input").val();
    $("input").val(inputText.substr(0, inputText.length - 1));
  });

  $("#allclear").click(function () {
    $("input").val("");
  });

  $("#calcRes").click(function () {
    var val = $("input").val();
    console.log(val);
    var res = eval(val);
    console.log(res);
    $("input").val(res);
  });
});
