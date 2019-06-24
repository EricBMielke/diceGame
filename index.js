// DISASTER VACATION SIMULATOR

//Functionality

function rollDice(numberOfSides){
    let randomNumber = Math.floor((Math.random() * (numberOfSides) + 1));
    return randomNumber
}

function rollWeightedDice (numberOfSides){
    if (numberOfSides === 3){
        //logic to enter what user inputs and have it assign point value to overall survivalRank
    }
    else if(numberOfSides === 10){
        //logic to assign overall life/death results
    }
    else{
        //specifically for error handling - should return user to rollDice fucntion
    }
}

//Gameplay
window.alert ('Welcome to the most dangerous game ever played');
let DangerValue = 0;
let resultOfContinent = rollDice(7);
    if (resultOfContinent === 1){
        window.alert ('Antartica. Danger value = 10');
        DangerValue = 10;
    }
    else if (resultOfContinent === 2){
        window.alert ('Africa. Danger value = 7');
        DangerValue = 7;
    }
    else if (resultOfContinent === 3){
        window.alert ('Asia. Danger value = 4');
        DangerValue = 4;
    }
    else if (resultOfContinent === 4){
        window.alert ('Australia. Danger value = 5');
        DangerValue = 5;
    }
    else if (resultOfContinent === 5){
        window.alert ('Europe. Danger value = 3');
        DangerValue = 3;
    }
    else if (resultOfContinent === 6){
        window.alert ('North America. Danger value = 4');
        DangerValue = 4;
    }
    else {
        window.alert ('South America. Danger value = 6');
        DangerValue = 6;
    }
resultOfSeason = rollDice(4);
    if (resultOfContinent === 1 && resultOfSeason === 1){
        window.alert ('Winter in Antartica. Goodbye.');
        location.reload();
    }
    else if (resultOfSeason === 1) {
        window.alert ('Winter. Danger value = 8');
        DangerValue = DangerValue + 8;
    }
    else if (resultOfSeason === 2) {
        window.alert ('Fall. Danger value = 3');
        DangerValue = DangerValue + 5;
    }
    else if (resultOfSeason === 3) {
        window.alert ('Summer. Danger value = 1');
        DangerValue = DangerValue + 1;
    }
    else {
        window.alert ('Spring. Danger value = 3');
        DangerValue = DangerValue + 3;
    }



