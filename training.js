//TRAINING FOR DISASTER SIMULATOR
window.alert ('Welcome to survival 101');
let continentTraining = true;
while (continentTraining){
    let continentTrainingAnswer = window.prompt ("The median value for most of the continents is 6, if you have a continent with a danger value of 8, should you pick again? (yes/no)");
    if (continentTrainingAnswer == "yes" || continentTrainingAnswer == "Yes"){
        window.alert ('Correct')
        continentTraining = false;
    }
    else {
        window.alert ('Incorrect');
    }

}