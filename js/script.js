import CalculaIMC from "./CalcIMC.js";
import imcDefinicoes from "./imc.js";

const btn = document.querySelector(".btn-calc");
const result = document.getElementById("result");
const inputAltura = document.querySelector(".numero-altura");
const inputPeso = document.querySelector(".numero-peso");

inputAltura.addEventListener("input", () => desabilitaErro());
inputPeso.addEventListener("input", () => desabilitaErro());

inputAltura.addEventListener("keypress", (e) => {
  const char = String.fromCharCode(e.keyCode);

  if (char === "." || char === ",") {
    e.preventDefault();
  }
});

btn.addEventListener("click", () => {
  const altura = document.querySelector("#input-altura").value;
  const peso = document.querySelector("#input-peso").value;

  if (altura <= 0 || peso <= 0) {
    result.innerText = "Insira um valor válido";
    return;
  }

  const calc = new CalculaIMC(altura, peso);
  const resultadoIMC = calc.calcular().toFixed(2);

  const faixaAtual = imcDefinicoes.find(
    (faixa) => resultadoIMC >= faixa.min && resultadoIMC <= faixa.max
  );
  if (faixaAtual) {
    result.innerText = `Seu IMC é: ${resultadoIMC} e ${faixaAtual.categoria}`;
  }
});

function desabilitaErro() {
  result.innerText = "";
}
