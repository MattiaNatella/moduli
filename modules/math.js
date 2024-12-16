const somma = (a,b) => a + b;
const sottrazione = (a,b) => a - b;
const moltiplicazione = (a,b) => a * b;
const divisione = (a,b) => a / b;

//alla fine del file esportiamo il modulo creato, e ce ne può essere solo uno per file di module.exports

module.exports = {
  somma,
  sottrazione,
  moltiplicazione,
  divisione
}