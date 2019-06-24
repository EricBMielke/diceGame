// DISASTER VACATION SIMULATOR

//Functionality

function rollDice(numberOfSides){
    let randomNumber = Math.floor((Math.random() * (numberOfSides) + 1));
    return randomNumber
}

function rollWeightedDice (numberOfSides){
 

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
resultOfAccommodation = rollDice(6);
    if (resultOfAccommodation === 1){
        window.alert ('5 star hotel. Danger value = 1');
        DangerValue = DangerValue + 1;
    }
    else if (resultOfAccommodation === 2) {
        window.alert ('Backpackers Tent. Danger value = 6');
        DangerValue = DangerValue + 6;
    }
    else if (resultOfAccommodation === 3) {
        window.alert ('Couch surfing. Danger value = 7');
        DangerValue = DangerValue + 8;
    }
    else if (resultOfAccommodation === 4) {
        window.alert ('Hostel. Danger value = 5');
        DangerValue = DangerValue + 5;
    }
    else if (resultOfAccommodation === 5) {
        window.alert ('Visiting a friend. Danger value = 1');
        DangerValue = DangerValue + 8;
    }
    else {
        window.alert ('No plans on where to sleep. Danger value = 8');
        DangerValue = DangerValue + 8;
    }
resultOfDisaster = rollDice(12);
    if (resultOfDisaster === 1){
        window.alert ('Wind kicks up to 12 mph from the northwest. Danger value = 1');
        DangerValue = DangerValue + 1;
    }
    else if (resultOfDisaster === 2){
        window.alert ('Abducted by terrorist organization. Danger value = 10');
        DangerValue = DangerValue + 10;
    }
    else if (resultOfDisaster === 3){
        window.alert ('Outbreak of yellow fever. Danger value = 3');
        DangerValue = DangerValue + 3;
    }
    else if (resultOfDisaster === 4){
        window.alert ('Earthquake in the countryside. Danger value = 5');
        DangerValue = DangerValue + 5;
    }
    else if (resultOfDisaster === 5){
        window.alert ('Tornado. Danger value = 6');
        DangerValue = DangerValue + 6;
    }
    else if (resultOfDisaster === 6){
        window.alert ('Ate undercooked meat. Danger value = 2');
        DangerValue = DangerValue + 2;
    }
    else if (resultOfDisaster === 7){
        window.alert ('Broken leg from car accident. Danger value = 2');
        DangerValue = DangerValue + 2; 
    }
    else if (resultOfDisaster === 8){
        window.alert ('No disaster on your trip. Danger value = 0');
        DangerValue = DangerValue + 0;
    }
    else if (resultOfDisaster === 9){
        window.alert ('Attacked by jungle cat. Danger value = 5');
        DangerValue = DangerValue + 5;
    }
    else if (resultOfDisaster === 10){
        window.alert ('Moped wipeout. Danger value = 2');
        DangerValue = DangerValue + 2;
    }
    else if (resultOfDisaster === 11){
        window.alert ('Bar fight with the locals. Danger value = 3');
        DangerValue = DangerValue + 3;
    }
    else{
        window.alert('Cattle impedes traffic. Danger value = 2');
        DangerValue = DangerValue + 2;
    }
window.alert('Your current level of danger is ' + DangerValue + ' of 40.');
let experience = window.prompt('On a scale of 1-3, how experienced of a traveler are you?');
    if (experience == "1" && DangerValue > 22){
        DangerValue = DangerValue * (rollDice(10) / 5) * 1.5;
    }
    else if (experience == "2" && DangerValue > 22){
        DangerValue = DangerValue * (rollDice(10) / 5) * 1;
    }
    else if (experience == "3" && DangerValue > 22){
        DangerValue = DangerValue * (rollDice(10) / 5) * .3;
    }
    else if (experience == "1" && DangerValue < 22){
        DangerValue = DangerValue * (rollDice(10) / 5) * 1.5;
        }
    else if (experience == "2" && DangerValue < 22){
        DangerValue = DangerValue * (rollDice(10) / 5) * 1;
        }
    else if (experience == "3" && DangerValue < 22){
        DangerValue = DangerValue * (rollDice(10) / 5) * .3;
        }
    else {
        DangerValue = DangerValue * (rollDice(10) / 5) * 1;
    }

window.alert('Based on experince, your new level of danger is ' + DangerValue + ' of 40. Click okay to determine your fate');


