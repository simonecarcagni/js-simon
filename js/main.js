
let containerDom = document.getElementById('container');
let numberArray = [];



function generatoreNumeriCasuali (min , max){

    let numberChoosen = Math.floor(Math.random() * (max - min + 1) * min);

    return numberChoosen;
}

for(let i = 0; i < 5; i++){

    let newNumber = generatoreNumeriCasuali(1, 100);

    numberArray.push(newNumber);

}

let newNumberArray = numberArray.join(',')

let newNumberArray2 = newNumberArray.replaceAll(',' , ' ')

let newNumberArray3 = newNumberArray2.split();

console.log(newNumberArray3);

containerDom.innerHTML = newNumberArray2;

setTimeout(function(){
    
    containerDom.classList.add("d-none");

    

}, 3000)


setTimeout(function () {

    let numberWritten = prompt(`Inserisci i numeri appena visti`);

    if (numberWritten == newNumberArray2) {
        console.log(`Ha vinto il giocatore`);
    } else {
        console.log(`Ha perso il giocatore`);
    }

}, 5000)




