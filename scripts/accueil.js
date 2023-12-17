var imageDefilante = 0;

var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var maintenant = new Date().getTime();
    var distance = countDownDate - maintenant;

    var jours = Math.floor(distance / (1000*60*60*24));
    var heures = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var secondes = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("jours").innerHTML = jours+":";
    document.getElementById("heures").innerHTML = heures+":";
    document.getElementById("minutes").innerHTML = minutes+":";
    document.getElementById("secondes").innerHTML = secondes;
},1000);

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

const boule1 = document.getElementById("boule1");
const boule2 = document.getElementById("boule2");
const boule3 = document.getElementById("boule3");
const boule4 = document.getElementById("boule4");
const boule5 = document.getElementById("boule5");
const boule6 = document.getElementById("boule6");
const boule7 = document.getElementById("boule7");
const boule8 = document.getElementById("boule8");

var bouleDeNeige1 = setInterval(function(){
    var positionNeige = entierAleatoire(5, 95);
    var TailleNeige = entierAleatoire(0, 1) + (entierAleatoire(0, 10)/10);
    var AnimationNeige = entierAleatoire(3, 5);
    var boule = entierAleatoire(1, 5);
    if (boule===1){
        boule1.style.left=positionNeige + "%";
        boule1.style.scale=TailleNeige;
        boule1.style.animationDuration = AnimationNeige + "s";
    } else if (boule===2){
        boule2.style.left=positionNeige + "%";
        boule2.style.scale=TailleNeige;
        boule2.style.animationDuration = AnimationNeige + "s";
    } else if (boule===3){
        boule3.style.left=positionNeige + "%";
        boule3.style.scale=TailleNeige;
        boule3.style.animationDuration = AnimationNeige + "s";
    } else if (boule===4){
        boule4.style.left=positionNeige + "%";
        boule4.style.scale=TailleNeige;
        boule4.style.animationDuration = AnimationNeige + "s";
    } else if (boule===5){
        boule5.style.left=positionNeige + "%";
        boule5.style.scale=TailleNeige;
        boule5.style.animationDuration = AnimationNeige + "s";
    } else if (boule===6){
        boule6.style.left=positionNeige + "%";
        boule6.style.scale=TailleNeige;
        boule6.style.animationDuration = AnimationNeige + "s";
    } else if (boule===7){
        boule7.style.left=positionNeige + "%";
        boule7.style.scale=TailleNeige;
        boule7.style.animationDuration = AnimationNeige + "s";
    } else if (boule===8){
        boule8.style.left=positionNeige + "%";
        boule8.style.scale=TailleNeige;
        boule8.style.animation.duration = AnimationNeige + "s";
    }
},100);

