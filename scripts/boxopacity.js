// Ajoutez votre script à l'intérieur de l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez toutes les boîtes
    var boxes = document.querySelectorAll('.box');

    // Attachez un gestionnaire d'événements à chaque boîte
    boxes.forEach(function (box) {
      box.addEventListener('mouseover', function () {
        // Réduire l'opacité des autres boîtes
        boxes.forEach(function (otherBox) {
          if (otherBox !== box) {
            otherBox.style.opacity = 0.6;
          }
        });
      });

      // Rétablir l'opacité normale lorsqu'on quitte la boîte
      box.addEventListener('mouseout', function () {
        boxes.forEach(function (otherBox) {
          otherBox.style.opacity = 1;
        });
      });
    });
  });