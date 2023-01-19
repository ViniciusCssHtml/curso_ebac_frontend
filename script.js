const campoA = document.querySelector("#campo-a");
console.log(typeof campoA);
const campoB = document.querySelector("#campo-b");
console.log(campoB);
const btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", function (campoA, campoB) {
  if (campoA > campoB) {
    return alert("é menor");
  } else if (campoA === campoB) {
    return alert("é igual");
  } else {
    return alert("é menor");
  }
});
