//TRAINING FOR DISASTER SIMULATOR
window.alert ('Welcome to survival 101');
let experienceTraining = true;
while (experienceTraining){
    let experienceTrainingAnswer = window.prompt ("It is much more likely for an experienced traveler to be successful in an unfamiliar situation. Is it likely that ");
    if (experienceTrainingAnswer == 'yes' || experienceTrainingAnswer == 'Yes'){
        window.alert('Correct');
        experienceTraining =false;
    }
    else {
        window.alert('Incorrect');
    }
}
confirm("Click okay to return to Vacation Roullette");
window.location.href = "C:/Users/Eric/Documents/devCodeCamp/diceGame2/index.html"


    

