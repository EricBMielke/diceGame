//TRAINING FOR DISASTER SIMULATOR
window.alert ('Welcome to survival 101');
let experienceTraining = true;
while (experienceTraining){
    let experienceTrainingAnswer = window.prompt ("It is much more likely for an experienced traveler to be successful in an unfamiliar situation. Is it likely that when someone has more experience, they are able to handle the situation? ");
    if (experienceTrainingAnswer == 'yes' || experienceTrainingAnswer == 'Yes'){
        window.alert('Correct');
        experienceTraining =false;
    }
    else {
        window.alert('Incorrect');
    }
}
let vetTraining = true;
while (vetTraining){
    let experienceTrainingAnswer = window.prompt ("Are veterans more likely to survive high-stress situations than the common person?");
    if (experienceTrainingAnswer == 'yes' || experienceTrainingAnswer == 'Yes'){
        window.alert('Correct');
        vetTraining =false;
    }
    else {
        window.alert('Incorrect');
    }
}
confirm("Click okay to return to Vacation Roullette");
window.location.href = "C:/Users/Eric/Documents/devCodeCamp/diceGame2/index.html"


    

