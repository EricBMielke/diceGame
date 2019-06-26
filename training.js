//TRAINING FOR DISASTER SIMULATOR
window.alert ('Welcome to survival 101');
let continentTraining = true;
while (continentTraining){
    let continentTrainingAnswer = window.prompt ("The median value for most of the continents is 6, if you have a continent with a danger value of 8, should you pick again? (yes/no)");
    if (continentTrainingAnswer == "yes" || continentTrainingAnswer == "Yes"){
        window.alert ('Correct');
        continentTraining = false;
    }
    else {
        window.alert ('Incorrect');
    }
}
let experienceTraining = true;
while (experienceTraining){
    let experienceTrainingAnswer = window.prompt ("It is much more likely for an experienced traveler to be successful in an unfamiliar situation. If an individual has 10 experience or 3 experience, who is more likely to be successful? (3/10)");
    if (experienceTrainingAnswer == '10'){
        window.alert('Correct');
        experienceTraining =false;
    }
    else {
        window.alert('Incorrect');
    }
}
confirm("Click okay to return to Vacation Roullette");
window.location.href = "C:/Users/Eric/Documents/devCodeCamp/diceGame2/index.html"


    

