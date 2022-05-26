/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Passaggi da fare:
-creare una variabile per chiedere all'utente una parola da inserire
-creare un array in cui pushare la parola dell'utente (questa parte è opzionale)
-creare la nostra funzione (function()) per capire se la parola inserita dall'utente è palindroma.
-se è palindroma stampare il risultato
-se non è palindroma riportare un errore
*/

// chiedi all'utente di inserire una parola
const askUtente = prompt("Inserisci una parola Palindroma");

//Ho creato un allert per spiegare all'utente cosa significa palindrom
alert("Si definisce palindrom una parola che si può leggere da sinistra verso destra e da destra verso sinistra")
console.log(askUtente);

// creare il mio array per inserire all'interno le parole palindrome
const contenitorePalindromo = [];

// la mia funzione dovrà verificare che la parola inserita dall'utente sia Palindroma
function parolaPalindroma (parola){

    let parolaInversa = parola.split("").reverse().join("");

    if(parola == parolaInversa){
        console.log('La parola è Palindroma,bravo!')
    } else{
        console.log('La parola non è Palindroma, riprova!')
    }
    return parolaInversa;
}
console.log(parolaPalindroma(askUtente));