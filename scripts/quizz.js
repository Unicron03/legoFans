var currentQuestion = 1;
var totalQuestions = 10;
var points = 0.0;
var goodAnswer = 0;

var questFreeze = false;

var verifButton = document.getElementById("verifButton");
var imgButton = document.getElementById("imgButton");
verifButton.style.visibility = "hidden";

function nextImage() {
    checkAnswer();

    // Passer à la question suivante
    currentQuestion++;
    if(currentQuestion == totalQuestions) {
        verifButton.style.visibility = "visible";
        imgButton.style.visibility = "hidden";
    }

    // Charger la nouvelle image
    var image = document.getElementById('legoImage');
    image.src = '../assets/quizz/question' + currentQuestion + '.png';

    // Effacer la réponse précédente
    document.getElementById('userAnswer').value = '';
}

function checkAnswer() {
    // Récupérer la réponse de l'utilisateur
    var userAnswer = document.getElementById('userAnswer').value;

    // Comparer la réponse avec la solution
    var isCorrect = checkCorrectness(userAnswer, currentQuestion);
}

function checkCorrectness(userAnswer, questionNumber) {
    var correctAnswers = [1953, 3128, 2883, 1353, 675, 3778, 2314, 5201, 1921, 6785];
    if(parseInt(userAnswer) === correctAnswers[questionNumber - 1]) {
        points++;
        goodAnswer++;
    } else if(parseInt(userAnswer)<correctAnswers[questionNumber-1]*1.15 && parseInt(userAnswer)>correctAnswers[questionNumber-1]*0.75) {
        points = points + 0.5;
    }
}

function affVerifButton() {
    if(questFreeze==false){
        checkAnswer();
        questFreeze = true;
    }
    if(currentQuestion==totalQuestions) {
        alert("Vous avez donné " + goodAnswer + " bonnes réponses exactes ! Score : " + points + "/10")
    }
}