
let containerDom = document.getElementById('container');
let numberArray = [];



function generatoreNumeriCasuali (min , max){

    let numberChoosen = Math.floor(Math.random() * (max - min + 1) * min);

    return numberChoosen;
}

function genNumeriCasualiUnici (numberlist, min, max){

    let isTrue = false;

    let newNumber;

    while (!isTrue){
        newNumber = generatoreNumeriCasuali(min, max);
        if (!numberlist.includes(newNumber)){
            isTrue = true;
        }
    }

    return newNumber;

}

for(let i = 0; i < 5; i++){

    const newNumber = genNumeriCasualiUnici(numberArray, 1, 100);

    numberArray.push(newNumber);

}

let newNumberArray = numberArray.join(',').replaceAll(',', ' ').split();

containerDom.innerHTML = newNumberArray;

setTimeout(function(){
    
    containerDom.classList.add("d-none");

}, 3000)


setTimeout(function () {

    
    const numberChoose = newArrayValid();

    const numeriGiusti = checkNumberChoose(numberArray, numberChoose);

    containerDom.classList.remove("d-none");

    containerDom.innerHTML = `Hai indovinato ${numeriGiusti.length}: ${numeriGiusti} `;
    
}, 4000)

function checkNumberChoose(numeriDaIndovinare, numeriUser){

    let numeriIndovinati = [];

    for (let i = 0; i < 5 ; i++){
        const verifiedNumber = numeriUser[i];
        if (numeriDaIndovinare.includes(verifiedNumber)){
            numeriIndovinati.push(verifiedNumber);
        }
    } 
    

    return numeriIndovinati;

    
}


function newArrayValid(){
    const numberUser = [];

    while (numberUser.length < 5) {
        const numberChoosen = parseInt(prompt('Inseriesci un numero'));

        if (!numberUser.includes(numberChoosen)) {
            numberUser.push(numberChoosen);
        }
    }

    return numberUser;
}