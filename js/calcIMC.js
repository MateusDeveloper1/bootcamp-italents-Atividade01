class CalculaIMC {
  constructor(altura, peso) {
    this.altura = altura;
    this.peso = peso;
  }

  calcular() {
    const alturaMetros = this.altura / 100;
    const imc = this.peso / (alturaMetros * alturaMetros);
    return imc;
  }
}

export default CalculaIMC;
