const btnNumero = document.querySelectorAll(".numero");
const btnoperador = document.querySelectorAll(".operador");
const btnIgual = document.querySelector(".igual");
const btnLimpar = document.querySelector(".span-duas");
const opercaoAnterior = document.querySelector(".anterior");
const opercaoAtual = document.querySelector(".atual");

class Calculador {
  constructor(anterior, atual) {
    this.opercaoAnterior = anterior;
    this.opercaoAtual = atual;
    this.clear();
  }

  clear() {
    this.atual = "";
    this.anterior = "";
    this.operador = undefined;
  }
  updateTela() {
    this.opercaoAnterior.innerText = this.anterior;
    this.opercaoAtual.innerText = this.atual;
  }
  clearAtual() {
    this.atual = "";
  }
  adicionarNumero(numero) {
    if (this.atual.includes(".") && numero == ".") return;
    console.log(this.anterior);
    this.atual += numero;
  }
  guardar() {
    this.anterior += this.atual;
    this.atual = "";
  }
  escolherOperador(operador) {
    if(this.anterior.includes(operador)) return;
    this.operador = operador;
    this.anterior += this.operador;
    this.atual = "";
  }

  calcular() {
    let resultado = this.anterior;
    resultado += this.atual;
    this.anterior = eval(resultado);
  }
}

const calculador = new Calculador(opercaoAnterior, opercaoAtual);

btnLimpar.addEventListener("click", () => {
  calculador.clear();
  calculador.updateTela();
});
for (const numero of btnNumero) {
  numero.addEventListener("click", () => {
    calculador.adicionarNumero(numero.innerText);
    calculador.updateTela();
  });
}
for (const operador of btnoperador) {
  operador.addEventListener("click", () => {
    calculador.guardar();
    calculador.escolherOperador(operador.innerText);
    calculador.updateTela();
  });
}
btnIgual.addEventListener("click", () => {
  calculador.calcular();
  calculador.clearAtual();
  calculador.updateTela();
});
