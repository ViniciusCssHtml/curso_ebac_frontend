$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    const tarefa = $("#tarefa").val();
    const resultado = $(".resultado");
    const result = $(`<li class="result">${tarefa}</li>`).appendTo(resultado);
    $(result).click(function () {
      $(this).addClass("resultclick");
    });
    $("#tarefa").val("");
  });
});
