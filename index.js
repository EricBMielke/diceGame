//DISASTER VACATION SIMULATOR

//Dice rolling && weighted dice rolling functions
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
function runGame(){
    let dangerValue = 0;
    let firstDangerValue = false;
    clearExtraRow();
    let resultOfContinent = rollDice(7);
    dangerValue = determineContinent(dangerValue, resultOfContinent);
    let resultOfSeason = rollDice(4);
    dangerValue = determineSeason (dangerValue,resultOfSeason);
    let resultOfAccommodation = rollDice(6);
    dangerValue = determineAccomodation (dangerValue, resultOfAccommodation);
    let resultOfDisaster = rollDice(12);
    dangerValue = determineDisaster (dangerValue, resultOfDisaster);
    if (document.getElementById('expTravCheck').checked == true){
        dangerValue = experiencedTraveler (dangerValue);
    }
    if (document.getElementById('vetCheck').checked == true){
        dangerValue = dangerValue / 2;

    }
    dangerValue = luckyPersonCheck(dangerValue, resultOfContinent, resultOfSeason, resultOfAccommodation, resultOfDisaster);
    dangerValue = rollWeightedDice(dangerValue);
    document.getElementById("Welcome").innerHTML = "And how you fared";
    document.getElementById("overallScore").innerHTML = dangerValue;
    

    // if (replayPrompt == "yes" || replayPrompt == "Yes"){
    //     firstDangerValue = dangerValue;
    //     runGame ('Replay');
    // }
    // else {
    //     firstDangerValue = false;
    //     let trainingMode = window.prompt ("Would you like to enter training mode");
    //     if (trainingMode == 'yes' || trainingMode == 'Yes'){
    //         window.location.href = "C:/Users/Eric/Documents/devCodeCamp/diceGame/training.html"

    //     }
    // }
    // if (firstDangerValue){
    //     if (firstDangerValue > dangerValue){
    //         window.alert('Your fate did not improve from the previous attempt.');
    //     }
    //     else {
    //         window.alert('Better score than your last vacation. You are getting better at this thing!');
    //     }
    // }
    document.getElementById("dangerNumber").innerHTML = dangerValue;
    overallResult(dangerValue);

}

function determineContinent(dangerValue, resultOfContinent){
    var table = document.getElementById("overallTable");
    if (resultOfContinent === 1){
        dangerValue += 10;
        var row1 = table.insertRow(1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Continent";
        cell2.innerHTML = "Antartica";
        cell3.innerHTML = "10";


    }
    else if (resultOfContinent === 2){
        dangerValue += 7;
        var row1 = table.insertRow(1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Continent";
        cell2.innerHTML = "Africa";
        cell3.innerHTML = "7";
    }
    else if (resultOfContinent === 3){
        dangerValue += 4;
        var row1 = table.insertRow(1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Continent";
        cell2.innerHTML = "Asia";
        cell3.innerHTML = "4";
    }
    else if (resultOfContinent === 4){
        dangerValue += 5;
        var row1 = table.insertRow(1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Continent";
        cell2.innerHTML = "Australia";
        cell3.innerHTML = "5";
    }
    else if (resultOfContinent === 5){
        dangerValue += 3;
        var row1 = table.insertRow(1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Continent";
        cell2.innerHTML = "Europe";
        cell3.innerHTML = "3";
    }
    else if (resultOfContinent === 6){
        dangerValue += 4;
        var row1 = table.insertRow(1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Continent";
        cell2.innerHTML = "North America";
        cell3.innerHTML = "4";
    }
    else {
        dangerValue += 6;
        var row1 = table.insertRow(1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Continent";
        cell2.innerHTML = "South America";
        cell3.innerHTML = "6";
    }
    return dangerValue;
}

function determineSeason (dangerValue, resultOfSeason){
    var table = document.getElementById("overallTable");
    if (resultOfSeason === 1) {
        dangerValue = dangerValue + 8;
        var row1 = table.insertRow(2);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Season";
        cell2.innerHTML = "Winter";
        cell3.innerHTML = "8";
    }
    else if (resultOfSeason === 2) {
        dangerValue = dangerValue + 3;
        var row1 = table.insertRow(2);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Season";
        cell2.innerHTML = "Fall";
        cell3.innerHTML = "3";
    }
    else if (resultOfSeason === 3) {
        dangerValue = dangerValue + 1;
        var row1 = table.insertRow(2);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Season";
        cell2.innerHTML = "Summer";
        cell3.innerHTML = "1";
    }
    else {
        dangerValue = dangerValue + 3;
        var row1 = table.insertRow(2);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Season";
        cell2.innerHTML = "Spring";
        cell3.innerHTML = "3";
    }
    return dangerValue;
}

function determineAccomodation(dangerValue, resultOfAccommodation){
    var table = document.getElementById("overallTable");
    if (resultOfAccommodation === 1){
        dangerValue = dangerValue + 1;
        var row1 = table.insertRow(3);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Accommodation";
        cell2.innerHTML = "5 star hotel";
        cell3.innerHTML = "1";
    }
    else if (resultOfAccommodation === 2) {
        dangerValue = dangerValue + 6;
        var row1 = table.insertRow(3);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Accommodation";
        cell2.innerHTML = "Backpackers Tent";
        cell3.innerHTML = "6";
    }
    else if (resultOfAccommodation === 3) {
        dangerValue = dangerValue + 7;
        var row1 = table.insertRow(3);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Accommodation";
        cell2.innerHTML = "Couch surfing";
        cell3.innerHTML = "7";
    }
    else if (resultOfAccommodation === 4) {
        dangerValue = dangerValue + 5;
        var row1 = table.insertRow(3);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Accommodation";
        cell2.innerHTML = "Hostel";
        cell3.innerHTML = "5";
    }
    else if (resultOfAccommodation === 5) {
        dangerValue = dangerValue + 1;
        var row1 = table.insertRow(3);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Accommodation";
        cell2.innerHTML = "Visiting a friend";
        cell3.innerHTML = "1";
    }
    else {
        dangerValue = dangerValue + 8;
        var row1 = table.insertRow(3);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Accommodation";
        cell2.innerHTML = "No plans on where to sleep";
        cell3.innerHTML = "8";
    }
    return dangerValue;
}

function determineDisaster (dangerValue, resultOfDisaster){
        var table = document.getElementById("overallTable");
        if (resultOfDisaster === 1){
        dangerValue = dangerValue + 1;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Wind kicks up to 12 mph from the northwest";
        cell3.innerHTML = "1";
    }
    else if (resultOfDisaster === 2){
        dangerValue = dangerValue + 10;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Abducted by terrorist organization";
        cell3.innerHTML = "10";
    }
    else if (resultOfDisaster === 3){
        dangerValue = dangerValue + 3;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Outbreak of yellow fever";
        cell3.innerHTML = "3";
        
    }
    else if (resultOfDisaster === 4){
        dangerValue = dangerValue + 5;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Earthquake in the countryside";
        cell3.innerHTML = "5";
    }
    else if (resultOfDisaster === 5){
        dangerValue = dangerValue + 6;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Tornado";
        cell3.innerHTML = "6";
    }
    else if (resultOfDisaster === 6){
        dangerValue = dangerValue + 2;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Ate undercooked meat";
        cell3.innerHTML = "2";
    }
    else if (resultOfDisaster === 7){
        dangerValue = dangerValue + 2; 
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Broken leg from car accident";
        cell3.innerHTML = "2";
    }
    else if (resultOfDisaster === 8){
        dangerValue = dangerValue + 0;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "No disaster on your trip";
        cell3.innerHTML = "0";
    }
    else if (resultOfDisaster === 9){
        dangerValue = dangerValue + 5;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Attacked by jungle cat";
        cell3.innerHTML = "5";
    }
    else if (resultOfDisaster === 10){
        dangerValue = dangerValue + 2;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Moped wipeout";
        cell3.innerHTML = "2";
    }
    else if (resultOfDisaster === 11){
        dangerValue = dangerValue + 3;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Bar fight with the locals";
        cell3.innerHTML = "3";
    }
    else{
        dangerValue = dangerValue + 2;
        var row1 = table.insertRow(4);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        cell1.innerHTML = "Disaster";
        cell2.innerHTML = "Cattle impedes traffic";
        cell3.innerHTML = "2";
    }
    return dangerValue;
}

function experiencedTraveler (dangerValue){
    dangerValue = dangerValue * (rollDice(10) / 5) * 1.2;
    return dangerValue; 
}

function luckyPersonCheck (dangerValue, resultOfDisaster, resultOfAccommodation, resultOfContinent, resultOfSeason){
    if (resultOfDisaster == resultOfAccommodation || resultOfAccommodation == resultOfSeason || resultOfSeason == resultOfDisaster || resultOfContinent == resultOfSeason || resultOfContinent == resultOfDisaster || resultOfContinent == resultOfAccommodation ) {
    window.alert('And you are one lucky individual');
    document.getElementById("luckMultiplier").innerHTML = 'But wait, you rolled doubles in the game, you must be lucky, you are prepared for the worst, your Danger Value is cut in half';
    dangerValue = dangerValue / 2;
    }
    return dangerValue;
}

function overallResult (dangerValue){

    if (dangerValue < 5){
    document.getElementById("whatHappened").innerHTML = 'Result: You miraculously made it out alive. Recovery time: 1 day';
    }
    else if (5 < dangerValue && dangerValue< 10){
    document.getElementById("whatHappened").innerHTML = 'Result: One broken arm is not awful. You live to fight another day. Recovery time: 6 weeks.';
    }
    else if (10 < dangerValue && dangerValue < 15){
    document.getElementById("whatHappened").innerHTML = 'Result: Alive, but scarred. You suffered traumatic brain injuries and have partial memory loss. Recovery time: Years of therapy';
    }
    else if (15 < dangerValue && dangerValue < 20){
     document.getElementById("whatHappened").innerHTML = 'Result: Loss of legs coupled with  severe speach impediment. Recovery time: Full recovery is an impossibility.';
    }
    else if (20 < dangerValue && dangerValue < 25){
    document.getElementById("whatHappened").innerHTML = 'Result: Admitted into the hospital, 2 days in a coma. Died.';
    }
    else if (25 < dangerValue && dangerValue < 30){
    document.getElementById("whatHappened").innerHTML = 'Result: Complication with recovery surgery, 2 weeks in the ICU. Died.';
    }
    else if (30 < dangerValue && dangerValue < 35){
    document.getElementById("whatHappened").innerHTML = 'Result: Brain hemorhagging. One month of vision impairment, followed by 1 month of muscle distrophy. Died.';
    }
    else {
    document.getElementById("whatHappened").innerHTML = 'Result: Months of agonizing fighting to overcome the injuries that were suffered.  Died.';
    }
    return dangerValue;
}

function oneFinalAttempt (){
    var response = document.getElementById("retryInput").value;
    let valueToGrab = document.getElementById("dangerNumber").innerHTML;
    if (response == 'yes' || response == 'Yes'){
    let weight = [0.0,0.5,1.0,1.50,2.00]
    let weightedArray = rollDice(weight.length);
    let weightedValue = weight [weightedArray-1];
    dangerValue = weightedValue * valueToGrab;
    runGame('retry');
    return dangerValue;
    }
    else{
    console.log ('Thanks for playing');
    }
}
function clearExtraRow(){
    var table = document.getElementById("overallTable");
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
}
function vetThank (){
    var checkBox = document.getElementById("vetCheck");
    if (checkBox.checked == true){
        window.alert ('Thank you for your service');
    }
}

function needTraining (){
    var checkBox = document.getElementById("needTraining");
    if (checkBox.checked == true){
        window.location.href = "C:/Users/Eric/Documents/devCodeCamp/diceGame2/training.html"
    }

}
