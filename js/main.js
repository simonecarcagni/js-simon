
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
    


    let numberWritten = prompt(`Inserisci i numeri appena visti`);
    

    containerDom.classList.add("d-none");

    if (numberWritten == newNumberArray2) {
        alert(`Ha vinto il giocatore`);
    } else {
        alert(`Ha perso il giocatore`)
    }

}, 3000)





