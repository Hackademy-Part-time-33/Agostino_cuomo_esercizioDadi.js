/* TRACCIA 1 */

//Math.floor(Math.random() * (7 - 1) + 1);

let NumeroLanci =parseInt(prompt("Scegli il numero di lanci del dado"));


function Lancio(Numero) {
    let Somma =0;
    for(let i=0 ; i<Numero; i++ ){
       let esito = Math.floor(Math.random() * (7 - 1) + 1);
        console.log("Il Lancio è: " + esito); 
        Somma += Numero;
    }
console.log("la somma è: " + Somma);
 return Somma;
}
console.log("Dadi Player 1");
Lancio(NumeroLanci);
console.log("Dadi Player 2");
Lancio(NumeroLanci);



/*  TRACCIA 2 */

function Numeri(N) {
    for(let i =0; i<=N; i++){

   if(i %5== 0 && i %3==0){
        console.log(`FlizzBuzz`);
   } else if (i %5== 0 ){
    console.log("Buzz");
   }else if(i %3== 0){
    console.log("Flizz");
   }  else {
    console.log(i);
   }
  
    }
  
}
Numeri(16);


/* TRACCIA 3 */

let numero =prompt("scegli un numero per sapere il numero dei caratteri");
function conta(n){
console.log("La somma dei numeri è: " + n.length);
}
conta(numero);

/* TRACCIA 4 */
let distributore = parseInt(prompt(`Scegli la bevanda n/(1) Acqua n/(2) Coca-Cola n/(3) Birra `));

while(distributore != 1 && distributore != 2 && distributore != 3){
 distributore = parseInt(prompt(`Scegli la bevanda n/(1) Acqua n/(2) Coca-Cola n/(3) Birra `));
}

function Bibita (N) {
    if(N == 1){
        console.log(`Hai selezionato l'Acqua`);
    } else if(N == 2) {
    console.log(`Hai selezionato la Coca-Cola`);
    } else if(N == 3){
        console.log(`Hai selezionato la Birra`);
    }
}
Bibita(distributore);