var userChoice = "";
var currentQuestion = 1;
var totalQuestions = 10;
var goodAnswer = 0;

var questFreeze = false;

var verifButton = document.getElementById("verifButton");
var imgButton = document.getElementById("imgButton");
verifButton.style.visibility = "hidden";

function nextImage() {
    if(document.getElementById("imgButton").style.cursor === "pointer") {
        checkCorrectness(document.getElementById(userChoice).value, currentQuestion);

        // Passer à la question suivante
        currentQuestion++;
        if(currentQuestion == totalQuestions) {
            verifButton.style.visibility = "visible";
            verifButton.style.marginTop = "15px";
            verifButton.style.marginBottom = "0px";
            imgButton.style.visibility = "hidden";
        }

        // Charger la nouvelle image
        var image = document.getElementById('legoImage');
        image.src = '../assets/quizz/question' + currentQuestion + '.png';

        // Charger les propositions
        var proposition = [[1953], [2601, 3128, 2842], [2883, 2657, 3310], [1016, 1218, 1353], [675, 892, 513], 
            [3778, 3469, 3942], [2014, 2314, 2514], [5201, 5469, 5703], [1689, 2158, 1921], [6412, 6785, 6859]];
        for(var i = 1; i <= 3; i++) {
            document.getElementById("reponse"+i).value = proposition[currentQuestion-1][i-1];
        }

        clearColorButton();
    }
}

function checkCorrectness(userAnswer, questionNumber) {
    var correctAnswers = [1953, 3128, 2883, 1353, 675, 3778, 2314, 5201, 1921, 6785];
    if(parseInt(userAnswer) === correctAnswers[questionNumber - 1]) {
        goodAnswer++;
    }
}

function affVerifButton() {
    if(questFreeze == false && document.getElementById("imgButton").style.cursor === "pointer") {
        checkCorrectness(document.getElementById(userChoice).value, currentQuestion);
        questFreeze = true;
    }
    if(currentQuestion == totalQuestions) {
        alert("Vous avez donné " + goodAnswer + " bonnes réponses ! Score : " + goodAnswer + "/10");
    }
}

function clearColorButton() {
    for(var i = 1; i <= 3; i++) {
        document.getElementById("reponse"+i).style.backgroundColor = "rgba(153, 204, 51)";
        document.getElementById("reponse"+i).style.color = "rgba(239, 239, 239)";
    }
    document.getElementById("imgButton").style.backgroundColor = "rgba(190, 190, 190)";
    document.getElementById("imgButton").style.cursor = "default";
}

function updResponse(elementId) {
    clearColorButton();
    document.getElementById(elementId).style.color = "rgba(0, 0, 0)";
    document.getElementById(elementId).style.backgroundColor = "rgba(255, 255, 255)";
    userChoice = elementId;
    document.getElementById("imgButton").style.backgroundColor = "rgba(239, 239, 239)";
    document.getElementById("imgButton").style.cursor = "pointer";
}