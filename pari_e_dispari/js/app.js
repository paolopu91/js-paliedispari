/*
Pari e Dispari
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

Passaggi da fare:
-Chiedere all'utente di scegliere tra pari o dispari
-Chiedere all'utente di inserite un numero da 1 a 5
-generare un numero random  per il Bot usando una funzione(compreso tra 1 e 5)
-Sommare il numero utente e il numero del bot
-dare il risultato della somma
-vedere se la somma è pari o dispari
-Dichiarare il vincitore.
*/

const myButton = document.getElementById('myButton');
// al click sul button il nostro gioco inizierà a funzionare
myButton.addEventListener("click", function() {

//divido il mio campo di gioco in due col per facilitare la visione dei numeri al giocatore
const titoloPlayer = document.getElementById('UTENTE')
titoloPlayer.innerHTML = `<h2 class="text-center text-primary">PLAYER</h2>`
const titoloBot = document.getElementById('BOT')
titoloBot.innerHTML = `<h2 class="text-center text-danger">BOT</h2>`

//Chiedo all'utente di inserire la sua preferenza di gioco
const askUtentePariDispari = prompt ("Cosa scegli? Pari o Dispari?")
console.log(askUtentePariDispari);

// chiedere al player di scegliere un numero tra 1 e 5
let askUtenteNumero = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
console.log(askUtenteNumero)
askUtenteNumero.innerHTML

let numeroBot =

function numeroRandomBot (numeroBot){
    const numeroBotCasuale = Math.round(Math.random() * 5)+1;

    
    return numeroBotCasuale
    
}


})