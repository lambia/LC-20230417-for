// for (let i = 0; i < 10; i++) {
  
//     // i++ vuol dire =>    i = i +1;
    
//     let numeroDaVisualizzare = (i+1) * 2;

//     console.log(`Contatore vale: ${i} - Noi stampiamo: ${numeroDaVisualizzare} - Contatore vale ancora: ${i}`,  );
    
// }

// console.log("Tabellina del 2");

// for (let i = 2; i <= 20; i = i+2) {
//     console.log(i);
// }

// let datoEsatto = false;

// while(datoEsatto == false) {
//     let x = prompt("Inserisci un dato");
//     if(x!=null && x.length>0) {
//         datoEsatto = true;
//     }
// }

const contentitore = document.getElementById("container");
const ul = document.querySelector("ul.list");

for (let contatore = 0; contatore < 100; contatore++) {

    let ilNostroIndice = contatore + 1; //così 0 diventa 1, e 99 diventa 100

    let numero = ilNostroIndice * 3; //così 1 diventa 3, e 100 diventa 300

    // contentitore.innerHTML = contentitore.innerHTML + `<div class="box">${numero}</div>`;
    contentitore.innerHTML += `<div class="box">${numero}</div>`;

    const nuovoElementoInLista = document.createElement('li'); //Creo un list-item
    nuovoElementoInLista.append(numero); //Append il numero al list-item
    ul.append(nuovoElementoInLista); //Append il list-item alla unordered list
    
}

console.log( contentitore.innerHTML );

// for (let contatore = 100; contatore > 0; contatore--) {

//     let numero = contatore * 3; //così 1 diventa 3, e 100 diventa 300

//     // contentitore.innerHTML = contentitore.innerHTML + `<div class="box">${numero}</div>`;
//     contentitore.innerHTML += `<div class="box">${numero}</div>`;

//     const nuovoElementoInLista = document.createElement('li'); //Creo un list-item
//     nuovoElementoInLista.append(numero); //Append il numero al list-item
//     ul.append(nuovoElementoInLista); //Append il list-item alla unordered list
    
// }