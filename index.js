//DISASTER VACATION SIMULATOR

//Functionality & variable declaration
function rollDice(numberOfSides){
    let randomNumber = Math.floor((Math.random() * (numberOfSides) + 1));
    return randomNumber
}

function rollWeightedDice(dangerValue){
    //5-Sided dice roll <-- based off the weight.arrays length of 5 different strings
    if (dangerValue > 20) {
        let weight = [0.70,0.90,1.10,1.30,1.50]
        let weightedArray = rollDice(weight.length);
        let weightedValue = weight [weightedArray-1];
        dangerValue = weightedValue * dangerValue;
        return dangerValue;
    }
    else {
        let weight = [0.50,0.70,0.90,1.10,1.30]
        let weightedArray = rollDice(weight.length);
        let weightedValue = weight [weightedArray- 1];
        dangerValue = weightedValue * dangerValue;
        return dangerValue;
    }
}

//Gameplay
function runGame(str){
    let dangerValue = 0;

    window.alert ('Welcome to the most dangerous game ever played');
    let resultOfContinent = rollDice(7);
    dangerValue = determineContinent(dangerValue, resultOfContinent);
    let reselectPrompt = window.prompt ("Do you want to pick another country?");
    if (reselectPrompt == 'yes' || reselectPrompt == "Yes"){
        resultOfContinent = rollDice(7);
        dangerValue = updateCountry (dangerValue, resultOfContinent);
    }
    let resultOfSeason = rollDice(4);
    dangerValue = determineSeason (dangerValue,resultOfSeason);
    let resultOfAccommodation = rollDice(6);
    dangerValue = determineAccomodation (dangerValue, resultOfAccommodation);
    let resultOfDisaster = rollDice(12);
    dangerValue = determineDisaster (dangerValue, resultOfDisaster);
    window.alert('Your current level of danger is ' + dangerValue + '.');
    let experience = window.prompt('On a scale of 1-3, how experienced of a traveler are you?');
    dangerValue = experiencedTraveler (dangerValue, experience);
    let veteranStatus = window.prompt ("Are you a retired military veteran?");
    if ( veteranStatus == "yes" || veteranStatus == "Yes") {
        dangerValue = 1;
    }
    window.alert('Based on experience, your new level of danger is ' + dangerValue + '. Click okay to determine your fate');
    window.alert('Here comes one of your final chances to get lucky');
    dangerValue = rollWeightedDice(dangerValue);
    window.alert('Your overall danger score is ' + dangerValue);
    dangerValue = luckyPersonCheck(dangerValue, resultOfContinent, resultOfSeason, resultOfAccommodation, resultOfDisaster);
    dangerValue = overallResult (dangerValue);

}

function determineContinent(dangerValue, resultOfContinent){
    if (resultOfContinent === 1){
        window.alert ('Antartica. Danger value = 10');
        dangerValue += 10;
    }
    else if (resultOfContinent === 2){
        window.alert ('Africa. Danger value = 7');
        dangerValue += 7;
    }
    else if (resultOfContinent === 3){
        window.alert ('Asia. Danger value = 4');
        dangerValue += 4;
    }
    else if (resultOfContinent === 4){
        window.alert ('Australia. Danger value = 5');
        dangerValue += 5;
    }
    else if (resultOfContinent === 5){
        window.alert ('Europe. Danger value = 3');
        dangerValue += 3;
    }
    else if (resultOfContinent === 6){
        window.alert ('North America. Danger value = 4');
        dangerValue += 4;
    }
    else {
        window.alert ('South America. Danger value = 6');
        dangerValue += 6;
    }
    return dangerValue;
}

function updateCountry (dangerValue, resultOfContinent){
    if (resultOfContinent === 1){
        window.alert ('Antartica. Danger value = 10');
        dangerValue = 10;
    }
    else if (resultOfContinent === 2){
        window.alert ('Africa. Danger value = 7');
        dangerValue = 7;
    }
    else if (resultOfContinent === 3){
        window.alert ('Asia. Danger value = 4');
        dangerValue = 4;
    }
    else if (resultOfContinent === 4){
        window.alert ('Australia. Danger value = 5');
        dangerValue = 5;
    }
    else if (resultOfContinent === 5){
        window.alert ('Europe. Danger value = 3');
        dangerValue = 3;
    }
    else if (resultOfContinent === 6){
        window.alert ('North America. Danger value = 4');
        dangerValue = 4;
    }
    else{
        window.alert ('South America. Danger value = 6');
        dangerValue = 6;
    }
    return dangerValue;
}

function determineSeason (dangerValue, resultOfSeason){
    if (resultOfSeason === 1) {
        window.alert ('Winter. Danger value = 8');
        dangerValue = dangerValue + 8;
    }
    else if (resultOfSeason === 2) {
        window.alert ('Fall. Danger value = 3');
        dangerValue = dangerValue + 3;
    }
    else if (resultOfSeason === 3) {
        window.alert ('Summer. Danger value = 1');
        dangerValue = dangerValue + 1;
    }
    else {
        window.alert ('Spring. Danger value = 3');
        dangerValue = dangerValue + 3;
    }
    return dangerValue;
}

function determineAccomodation(dangerValue, resultOfAccommodation){
    if (resultOfAccommodation === 1){
        window.alert ('5 star hotel. Danger value = 1');
        dangerValue = dangerValue + 1;
    }
    else if (resultOfAccommodation === 2) {
        window.alert ('Backpackers Tent. Danger value = 6');
        dangerValue = dangerValue + 6;
    }
    else if (resultOfAccommodation === 3) {
        window.alert ('Couch surfing. Danger value = 7');
        dangerValue = dangerValue + 7;
    }
    else if (resultOfAccommodation === 4) {
        window.alert ('Hostel. Danger value = 5');
        dangerValue = dangerValue + 5;
    }
    else if (resultOfAccommodation === 5) {
        window.alert ('Visiting a friend. Danger value = 1');
        dangerValue = dangerValue + 1;
    }
    else {
        window.alert ('No plans on where to sleep. Danger value = 8');
        dangerValue = dangerValue + 8;
    }
    return dangerValue;
}

function determineDisaster (dangerValue, resultOfDisaster){
        if (resultOfDisaster === 1){
        window.alert ('Wind kicks up to 12 mph from the northwest. Danger value = 1');
        dangerValue = dangerValue + 1;
    }
    else if (resultOfDisaster === 2){
        window.alert ('Abducted by terrorist organization. Danger value = 10');
        dangerValue = dangerValue + 10;
    }
    else if (resultOfDisaster === 3){
        window.alert ('Outbreak of yellow fever. Danger value = 3');
        dangerValue = dangerValue + 3;
    }
    else if (resultOfDisaster === 4){
        window.alert ('Earthquake in the countryside. Danger value = 5');
        dangerValue = dangerValue + 5;
    }
    else if (resultOfDisaster === 5){
        window.alert ('Tornado. Danger value = 6');
        dangerValue = dangerValue + 6;
    }
    else if (resultOfDisaster === 6){
        window.alert ('Ate undercooked meat. Danger value = 2');
        dangerValue = dangerValue + 2;
    }
    else if (resultOfDisaster === 7){
        window.alert ('Broken leg from car accident. Danger value = 2');
        dangerValue = dangerValue + 2; 
    }
    else if (resultOfDisaster === 8){
        window.alert ('No disaster on your trip. Danger value = 0');
        dangerValue = dangerValue + 0;
    }
    else if (resultOfDisaster === 9){
        window.alert ('Attacked by jungle cat. Danger value = 5');
        dangerValue = dangerValue + 5;
    }
    else if (resultOfDisaster === 10){
        window.alert ('Moped wipeout. Danger value = 2');
        dangerValue = dangerValue + 2;
    }
    else if (resultOfDisaster === 11){
        window.alert ('Bar fight with the locals. Danger value = 3');
        dangerValue = dangerValue + 3;
    }
    else{
        window.alert('Cattle impedes traffic. Danger value = 2');
        dangerValue = dangerValue + 2;
    }
    return dangerValue;
}

function experiencedTraveler (dangerValue, experience){
    if (experience == "1"){
        dangerValue = dangerValue * (rollDice(10) / 5) * 1.2;
    }
    else if (experience == "2"){
        dangerValue = dangerValue * (rollDice(10) / 5) * 1;
    }
    else if (experience == "3"){
        dangerValue = dangerValue * (rollDice(10) / 5) * .8;
    }
    else {
        dangerValue = dangerValue * (rollDice(10) / 5) * 1;
    }
    return dangerValue; 
}

function luckyPersonCheck (dangerValue, resultOfDisaster, resultOfAccommodation, resultOfContinent, resultOfSeason){
    if (resultOfDisaster == resultOfAccommodation || resultOfAccommodation == resultOfSeason || resultOfSeason == resultOfDisaster || resultOfContinent == resultOfSeason || resultOfContinent == resultOfDisaster || resultOfContinent == resultOfAccommodation ) {
    window.alert ("But wait, you rolled doubles in the game, you must be lucky, you are prepared for the worst, your Danger Value is cut in half");
    dangerValue = dangerValue / 2;
    window.alert('Your new overall danger score is ' + dangerValue);
    }
    return dangerValue;
}

function overallResult (dangerValue){

    if (dangerValue < 5){
    window.alert ('You miraculously made it out alive. Recovery time: 1 day.')
    }
    else if (5 < dangerValue && dangerValue< 10){
    window.alert ('One broken arm is not awful. You live to fight another day. Recovery time: 6 weeks.');
    }
    else if (10 < dangerValue && dangerValue < 15){
    window.alert ('Alive, but scarred. You suffered traumatic brain injuries and have partial memory loss. Recovery time: Years of therapy');
    }
    else if (15 < dangerValue && dangerValue < 20){
    window.alert ('Loss of legs coupled with  severe speach impediment. Recovery time: Full recovery is an impossibility.');
    }
    else if (20 < dangerValue && dangerValue < 25){
    window.alert ('Admitted into the hospital, 2 days in a coma. Died.');
    }
    else if (25 < dangerValue && dangerValue < 30){
    window.alert ('Complication with recovery surgery, 2 weeks in the ICU. Died.');
    }
    else if (30 < dangerValue && dangerValue < 35){
    window.alert ('Brain hemorhagging. One month of vision impairment, followed by 1 month of muscle distrophy. Died. ');   
    }
    else {
    window.alert ('Months of agonizing fighting to overcome the injuries that were suffered.  Died.')
    }
    return dangerValue;
}

let hereWeGo = runGame ('Let us begin');