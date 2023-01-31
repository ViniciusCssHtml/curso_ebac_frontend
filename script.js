const form = document.getElementById("form");
let formEvalido = false;

function validaForm() {
  let campoA = document.getElementById("campo-a");
  let campoB = document.getElementById("campo-b");
  let formEvalido = campoB.value > campoA.value;
  if (formEvalido) {
    alert("Está certo!");
    campoA.value = "";
    campoB.value = "";
  } else {
    alert("Está errado!");
    campoA.value = "";
    campoB.value = "";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validaForm();
});
