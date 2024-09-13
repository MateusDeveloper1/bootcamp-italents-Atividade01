import messages from "./messages.js";

const [
  imcBaixo,
  imcNormal,
  imcAcima,
  imcObesidadeI,
  imcObesidadeII,
  imcObesidadeIII,
] = messages;

const imcDefinicoes = [
  {
    categoria: imcBaixo,
    min: 0,
    max: 18.4,
  },
  {
    categoria: imcNormal,
    min: 18.5,
    max: 24.9,
  },
  {
    categoria: imcAcima,
    min: 25,
    max: 29.9,
  },
  {
    categoria: imcObesidadeI,
    min: 30,
    max: 34.9,
  },
  {
    categoria: imcObesidadeII,
    min: 35,
    max: 40,
  },
  {
    categoria: imcObesidadeIII,
    min: 40.9,
    max: Infinity,
  },
];

export default imcDefinicoes;
