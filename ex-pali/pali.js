// ! TRACCIA //
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// ! ELABORAZIONE //

// Chiediamo all'utente di inserire una parola
const userInput = prompt("Inserisci una parola:");

if (userInput) {
  // SE la parola inserita è palindroma //
  if (isPalindrome(userInput)) {
    // - stampo il messaggio (è palindroma)
    console.log(`${userInput} è palindroma.`);
    // ALTRIMENTI stampo il messaggio (non è palindroma)
  } else {
    console.log(`${userInput} non è palindroma.`);
  }
}
