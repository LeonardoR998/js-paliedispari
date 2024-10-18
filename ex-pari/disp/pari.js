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
// SE il numero è minore o maggiore dello userNumber
if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
  // - stampo il messaggio (Numero non valido. Devi inserire un numero da 1 a 5.)
  console.log("Numero non valido. Devi inserire un numero da 1 a 5.");
  // ALTRIMENTI
} else {
  // Generiamo il numero casuale per il computer
  const computerNumber = generateRandomNumber();
  console.log(`Il numero del computer è: ${computerNumber}`);

  // Sommiamo i due numeri
  const total = userNumber + computerNumber;
  // - stampo il risultato
  console.log(`La somma è: ${total}`);

  // Determiniamo se la somma è pari o dispari
  const sumIsEven = isEven(total);

  // Dichiarare chi ha vinto

  if (
    (sumIsEven && userChoice === "pari") ||
    (!sumIsEven && userChoice === "dispari")
  ) {
    console.log("Hai vinto!");
  } else {
    console.log("Hai perso!");
  }
}
