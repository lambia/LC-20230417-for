const contentitore = document.getElementById("container");

// Contatore = numero
for (let numero = 1; numero <= 100; numero++) {
    
    /* SOLUZIONE - ELSE-IF */
    let messaggio = numero;
    let classe = "";
    // // if (numero % 3 == 0 && numero % 5 == 0) {
    if (numero % 15 == 0) {
        messaggio = "FizzBuzz";
        classe = "blu";
    } else if (numero % 3 == 0) {
        messaggio = "Fizz";
        classe = "rosso";
    } else if (numero % 5 == 0) {
        messaggio = "Buzz";
        classe = "verde";
    }

    
    /* POSSIBILE ALTERNATIVA MENO EFFICIENTE - TRIPLO IF */
    // let messaggio = "";
    // if(numero % 3 == 0) {
        //     messaggio += "Fizz";
    // }
    // if (numero % 5 == 0) {
        //     messaggio += "Buzz";
    // }
    // if(numero % 3 != 0 && numero % 5 != 0) {
    //     messaggio = numero;
    // }


    // PARTE FINALE, SCRITTURA SU DOM

    // contentitore.innerHTML += `<div class="box ${classe}">${messaggio}</div>`;

    const nuovoBox = document.createElement('div'); //Creo un div
    nuovoBox.className = `box ${classe}`;
    // nuovoBox.style.backgroundColor = "red";
    // nuovoBox.append(messaggio); //Inserisci il messaggio alla fine del contenuto del box
    nuovoBox.innerText = messaggio;

    contentitore.append(nuovoBox); //Append il list-item alla unordered list

    console.log(messaggio);
    
}