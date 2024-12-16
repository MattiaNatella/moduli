//importazione modulo AXIOS tramite sintassi CommonJS

const axios = require('axios')
console.log(axios)

//per importare le funzioni che si trovano nel modulo math.js lo devo prima esportare, vedi file math.js

const operazioni = require('./modules/math') // importo TUTTO il modulo in un oggetto, SI PUò OMETTERE ANCHE L'ESTENSIONE DEL FILE

console.log(operazioni.somma(5,6))

const {somma, moltiplicazione} = require('./modules/math') //importo SOLO le funzioni che mi interessano in questo caso ovvero SOMMA e MOLTIPLICAZIONE destrutturando il modulo

console.log(moltiplicazione(5,5))

console.log(operazioni)

//CON L'IMPORT SINGOLO POSSO DARE IL NOME IN MODO ARBITRARIO

const mioSaluto = require('./modules/saluto')

console.log(mioSaluto('Gianni'))

//ALCUNI MODULI SONO INTEGRATI DENTRO NODE, tipo IL MODULO CONSOLE.LOG

const {log} = require('console')

log(mioSaluto('Giacomo'))

//possiamo anche esportare ed importare degli array

