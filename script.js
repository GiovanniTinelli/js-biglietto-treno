// Chiedi all'utente il numero di chilometri che vuole percorrere
const km = (prompt("Quanti chilometri vuoi fare?"));

// Chiedi all'utente l'età del passeggero
const eta = (prompt("Quanti anni hai?"));

// Calcola il prezzo del biglietto
let prezzo = km * 0.21;

// Applica lo sconto del 20% per i minorenni e lo sconto del 40% per agli over 65
if (eta < 18) {
  prezzo * 0.8;
}
else if (eta >= 65) {
  prezzo * 0.6;
}

// Arrotonda il prezzo finale a due decimali
const prezzoScontato = prezzo.toFixed(2);

// Stampa il prezzo finale
console.log(" Il prezzo del biglietto è " + prezzoScontato + " euro.");
const biglietto = " il prezzo del biglietto è " + prezzoScontato + " euro.";

document.getElementById(header).innerHTML=biglietto;
