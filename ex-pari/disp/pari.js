// ! TRACCIA //

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// ! ELABORAZIONE //

// Funzione per generare un numero casuale da 1 a 5
function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function isEven(num) {
  return num % 2 === 0;
}

// Chiediamo all'utente di scegliere pari o dispari e di inserire un numero
const userChoice = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"), 10);

// Verifichiamo se il numero è valido

// Generiamo il numero casuale per il computer

// Sommiamo i due numeri

// Determiniamo se la somma è pari o dispari

// Dichiarare chi ha vinto
