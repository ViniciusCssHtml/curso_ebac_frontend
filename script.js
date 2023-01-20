const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  let formEvalido = false;
  event.preventDefault();

  const numA = document.getElementById("campo-a").value;
  const numB = document.getElementById("campo-b").value;
  const validacao = numB > numA;

  formEvalido = validacao;
  if (formEvalido) {
    return alert("Formulário Válido");
  } else {
    return alert("Formulário Inválido");
  }
});

console.log(form);
