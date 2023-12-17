var app = angular.module('app', ['ngAnimate']);

app.controller('mainCtrl', function ($scope) {
  $scope.starwarsBoxes = [{
  category: "starwars",
  name: 'Faucon Millenium',
	title: 'Buy now',
	link: "https://www.lego.com/fr-fr/product/millennium-falcon-75257",
  texts: [
    "Le faucon millenium est un set Star Wars.",
    "Nombres de pièces : 1353",
    "Âge recommandé : 9+",
    "Prix : 169,99 €",
    "Nombres de figurines : 7",
    "Numéro d'article : #75257"],
  image: '../assets/img/star-wars/faucon.png',
  bg: '../assets/img/bg/star-wars.jpg',
	video: '../assets/video/faucon.mp4' },{
		
	category: "starwars",
  name: 'Le Chasseur X-Wing',
	title: 'Buy now',
	link: "https://www.lego.com/fr-fr/product/x-wing-starfighter-75355",
  texts: [
    "Le Chasseur X-Wing est un set Star Wars.",
    "Nombres de pièces : 1953",
    "Âge recommandé : 18+",
    "Prix : 239,99 €",
    "Nombres de figurines : 2",
    "Numéro d'article : #75355"],
  image: '../assets/img/star-wars/x-wing.png',
  vector: "../assets/img/vector/x-wing.png",
  bg: '../assets/img/bg/star-wars.jpg',
	video: '../assets/video/x-wing.mp4' },{
  
	category: "starwars",
  name: 'Classe Venator',
	title: 'Buy now',
	link: "https://www.lego.com/fr-fr/product/tdb-lsw-2023-24-75367",
  texts: [
    "Le Classe Venator est un set Star Wars.",
    "Nombres de pièces : 5374",
    "Âge recommandé : 18+",
    "Prix : 649,99 €",
    "Nombres de figurines : 2",
    "Numéro d'article : #75367"],
  image: '../assets/img/star-wars/venator.png',
  vector: "../assets/img/vector/venator.png",
  bg: '../assets/img/bg/star-wars.jpg',
	video: '../assets/video/venator.mp4' },{
	
	category: "starwars",
  name: 'At-At',
	title: 'Buy now',
	link: "https://www.lego.com/fr-fr/product/at-at-75313",
  texts: [
    "Le At-At est un set Star Wars.",
    "Nombres de pièces : 6785",
    "Âge recommandé : 18+",
    "Prix : 849,99 €",
    "Nombres de figurines : 9",
    "Numéro d'article : #75313"],
	image: '../assets/img/star-wars/at-at.png',
  vector: "../assets/img/vector/at-at.png",
  bg: '../assets/img/bg/star-wars.jpg',
	video: '../assets/video/at-at.mp4' },{
	
	category: "starwars",
  name: 'Razor Crest',
	title: 'Buy nom',
	link: "https://www.lego.com/fr-fr/product/the-razor-crest-75331",
  texts: [
    "Le Razor Crest est un set Star Wars.",
    "Nombres de pièces : 6187",
    "Âge recommandé : 18+",
    "Prix : 599,99 €",
    "Nombres de figurines : 5",
    "Numéro d'article : #75331"],
	image: '../assets/img/star-wars/razor-crest.png',
  vector: "../assets/img/vector/razor-crest.png",
  bg: '../assets/img/bg/star-wars.jpg',
	video: '../assets/video/razor-crest.mp4' },{

	category: "starwars",
  name: 'R2-D2',
	title: 'Buy nom',
	link: "https://www.lego.com/fr-fr/product/r2-d2-75308",
  texts: [
    "R2-D2 est un set Star Wars.",
    "Nombres de pièces : 2314",
    "Âge recommandé : 18+",
    "Prix : 239,99 €",
    "Nombres de figurines : 1",
    "Numéro d'article : #75308"],
	image: '../assets/img/star-wars/r2d2.png',
  vector: "../assets/img/vector/r2-d2.png",
  bg: '../assets/img/bg/star-wars.jpg',
	video: '../assets/video/r2d2.mp4' }];

  $scope.marvelBoxes = [{
  category: "marvel",  
  name: 'La tour des Avengers',
    title: 'Buy now',
    link: "https://www.lego.com/fr-fr/product/avengers-tower-76269",
    texts: [
      "La tour des Avengers est un set Marvel.",
      "Nombres de pièces : 5201",
      "Âge recommandé : 18+",
      "Prix : 499,99 €",
      "Nombres de figurines : 31",
      "Numéro d'article : #76269"],
    image: '../assets/img/marvel/avengers.png',
    vector: "../assets/img/vector/avengers-tower.png",
    bg: '../assets/img/bg/marvel.jpg',
    video: '../assets/video/marvel/avengers.mp4' },{
      
    category: "marvel",
    name: 'L’armure Hulkbuster',
    title: 'Buy now',
    link: "https://www.lego.com/fr-fr/product/hulkbuster-76210",
    texts: [
      "L'armure Hulkbuster est un set Marvel.",
      "Nombres de pièces : 4049",
      "Âge recommandé : 18+",
      "Prix : 549,99 €",
      "Nombres de figurines : 1",
      "Numéro d'article : #76210"],
    image: '../assets/img/marvel/hulkbuster.png',
    vector: "../assets/img/vector/hulkbuster.png",
    bg: '../assets/img/bg/marvel.jpg',
    video: '../assets/video/marvel/hulkbuster.mp4' },{
      
    category: "marvel",
    name: 'Le bouclier de Captain America',
    title: 'Buy now',
    link: "https://www.lego.com/fr-fr/product/captain-america-s-shield-76262",
    texts: [
      "Le bouclier de Captain America est un set Marvel.",
      "Nombres de pièces : 3128",
      "Âge recommandé : 18+",
      "Prix : 209,99 €",
      "Numéro d'article : #76262"],
    image: '../assets/img/marvel/shield.png',
    bg: '../assets/img/bg/marvel.jpg',
    video: '../assets/video/marvel/shield.mp4' },{
      
    category: "marvel",
    name: 'Le Saint des Saints',
    title: 'Buy now',
    link: "https://www.lego.com/fr-fr/product/sanctum-sanctorum-76218",
    texts: [
      "Le Saint des Saints est un set Marvel.",
      "Nombres de pièces : 2708",
      "Âge recommandé : 18+",
      "Prix : 249,99 €",
      "Nombres de figurines : 8",
      "Numéro d'article : #76218"],
    image: '../assets/img/marvel/strange.png',
    bg: '../assets/img/bg/marvel.jpg',
    video: '../assets/video/marvel/strange.mp4' },{
      
    category: "marvel",
    name: 'Black Panther',
    title: 'Buy now',
    link: "https://www.lego.com/fr-fr/product/black-panther-76215",
    texts: [
      "Black Panther est un set Marvel.",
      "Nombres de pièces : 2961",
      "Âge recommandé : 18+",
      "Prix : 349,99 €",
      "Numéro d'article : #76215"],
    image: '../assets/img/marvel/panther.png',
    vector: "../assets/img/vector/black-panther.png",
    bg: '../assets/img/bg/marvel.jpg',
    video: '../assets/video/marvel/panther.mp4' },{
      
    category: "marvel",
    name: 'Le Nano Gant de l’infini',
    title: 'Buy now',
    link: "https://www.lego.com/fr-fr/product/nano-gauntlet-76223",
    texts: [
      "Le Nano Gant de l'infini est un set Marvel.",
      "Nombres de pièces : 675",
      "Âge recommandé : 18+",
      "Prix : 69,99 €",
      "Numéro d'article : #76223"],
    image: '../assets/img/marvel/gauntlet.png',
    bg: '../assets/img/bg/marvel.jpg',
    video: '../assets/video/marvel/gauntlet.mp4' },{
      
    category: "marvel",
    name: 'The Amazing Spider-Man',
    title: 'Buy now',
    link: "https://www.lego.com/fr-fr/product/the-amazing-spider-man-31209",
    texts: [
      "The Amazing Spider-Man est un set Marvel.",
      "Nombres de pièces : 2099",
      "Âge recommandé : 18+",
      "Prix : 199,99 €",
      "Numéro d'article : #31209"],
    image: '../assets/img/marvel/spidy.png',
    bg: '../assets/img/bg/marvel.jpg',
    video: '../assets/video/marvel/spidy.mp4' }];

    $scope.technicBoxes = [{
    category: "technic",  
    name: 'Bulldozer',
      title: 'Buy now',
      link: "https://www.lego.com/fr-fr/product/app-controlled-cat-d11-bulldozer-42131",
      texts: [
        "Le Bulldozer est un set Technic.",
        "Nombres de pièces : 3854",
        "Âge recommandé : 18+",
        "Prix : 499,99 €",
        "Numéro d'article : #42131"],
      image: '../assets/img/technic/bulldozer.png',
      vector: "../assets/img/vector/bulldozer.png",
      bg: '../assets/img/bg/technic.png',
      video: '../assets/video/technic/bulldozer.mp4' },{

      category: "technic",
      name: 'Ferrari Daytona SP3',
      title: 'Buy now',
      link: "https://www.lego.com/fr-fr/product/ferrari-daytona-sp3-42143",
      texts: [
        "La Ferrari Daytona SP3 est un set Technic.",
        "Nombres de pièces : 3778",
        "Âge recommandé : 18+",
        "Prix : 449,99 €",
        "Numéro d'article : #42143"],
      image: '../assets/img/technic/ferrari.png',
      vector: "../assets/img/vector/ferrari.png",
      bg: '../assets/img/bg/technic.png',
      video: '../assets/video/technic/ferrari.mp4' },{

      category: "technic",
      name: 'Lamborghini Sian FKP 37',
      title: 'Buy now',
      link: "https://www.lego.com/fr-fr/product/lamborghini-sian-fkp-37-42115",
      texts: [
        "La Lamborghini Sian FKP 37 est un set Technic.",
        "Nombres de pièces : 3696",
        "Âge recommandé : 18+",
        "Prix : 449,99 €",
        "Numéro d'article : #42115"],
      image: '../assets/img/technic/lambo.png',
      bg: '../assets/img/bg/technic.png',
      video: '../assets/video/technic/lambo.mp4' },{

      category: "technic",
      name: 'La grue sur chenilles Liebherr LR 13000',
      title: 'Buy now',
      link: "https://www.lego.com/fr-fr/product/liebherr-crawler-crane-lr-13000-42146",
      texts: [
        "La grue sur chenilles Liebherr LR 13000 est un set Technic.",
        "Nombres de pièces : 2883",
        "Âge recommandé : 18+",
        "Prix : 679,99 €",
        "Numéro d'article : #42146"],
      image: '../assets/img/technic/grue.png',
      bg: '../assets/img/bg/technic.png',
      video: '../assets/video/technic/grue.mp4' },{

      category: "technic",
      name: 'BMW M 1000 RR',
      title: 'Buy now',
      link: "https://www.lego.com/fr-fr/product/bmw-m-1000-rr-42130",
      texts: [
        "La BMW M 1000 RR est un set Technic.",
        "Nombres de pièces : 1921",
        "Âge recommandé : 18+",
        "Prix : 249,99 €",
        "Numéro d'article : #42130"],
      image: '../assets/img/technic/moto.png',
      vector: "../assets/img/vector/bmw.png",
      bg: '../assets/img/bg/technic.png',
      video: '../assets/video/technic/moto.mp4' },{

      category: "technic",
      name: 'PEUGEOT 9X8 24H Le Mans Hybrid Hypercar',
      title: 'Buy now',
      link: "https://www.lego.com/fr-fr/product/peugeot-9x8-24h-le-mans-hybrid-hypercar-42156",
      texts: [
        "La PEUGEOT 9X8 24H Le Mans Hybrid Hypercar est un set Technic.",
        "Nombres de pièces : 1775",
        "Âge recommandé : 18+",
        "Prix : 199,99 €",
        "Numéro d'article : #42156"],
      image: '../assets/img/technic/peugeot.png',
      bg: '../assets/img/bg/technic.png',
      video: '../assets/video/technic/peugeot.mp4' }];

  $scope.selected = [];
  $scope.selectBox = function (item, position) {
    $scope.selected = [{
      	item: item,
      	position: position }];

	  	$scope.selectedVideo = item.video; // Ajoutez cette ligne pour stocker l'URL de la vidéo sélectionnée
    $scope.$apply();
  };

  $scope.clearSelection = function () {
  $scope.selected = [];
	scope.selectedVideo = ""; // Réinitialisez l'URL de la vidéo lorsque vous effacez la sélection
  };

  $scope.switchPage = function (direction) {
    if ($scope.selected.length && $scope.selected[0].item) {
      var currentIndex, totalItems;
  
      // Déterminer la catégorie actuelle
      var currentCategory = $scope.selected[0].item.category; // Assurez-vous que vous avez une propriété "category" dans vos objets de carte
  
      // Sélectionner la catégorie et les cartes appropriées en fonction de la catégorie actuelle
      var currentCategoryBoxes, nextCategory, nextCategoryBoxes, previousCategoryBoxes;
  
      switch (currentCategory) {
        case 'starwars':
          currentCategoryBoxes = $scope.starwarsBoxes;
          nextCategory = 'marvel';
          nextCategoryBoxes = $scope.marvelBoxes;
          previousCategoryBoxes = $scope.technicBoxes;
          break;
        case 'marvel':
          currentCategoryBoxes = $scope.marvelBoxes;
          nextCategory = 'technic';
          nextCategoryBoxes = $scope.technicBoxes;
          previousCategoryBoxes = $scope.starwarsBoxes;
          break;
        case 'technic':
          // Vous pouvez choisir de ne pas implémenter de passage à une autre catégorie depuis la dernière catégorie
          currentCategoryBoxes = $scope.technicBoxes;
          nextCategory = 'starwars';
          nextCategoryBoxes = $scope.starwarsBoxes;
          previousCategoryBoxes = $scope.marvelBoxes;
          break;
        default:
          return;
      }
  
      currentIndex = currentCategoryBoxes.indexOf($scope.selected[0].item);
      totalItems = currentCategoryBoxes.length;
  
      if (direction === 'next' && currentIndex < totalItems - 1) {
        // Passer à la carte suivante de la même catégorie
        $scope.selectBox(currentCategoryBoxes[currentIndex + 1], {});
      } else if (direction === 'next' && currentIndex === totalItems - 1) {
        // Passer à la première carte de la catégorie suivante
        $scope.selectBox(nextCategoryBoxes[0], {});
      } else if (direction === 'prev' && currentIndex > 0) {
        // Passer à la carte précédente de la même catégorie
        $scope.selectBox(currentCategoryBoxes[currentIndex - 1], {});
      } else if (direction === 'prev' && currentIndex === 0) {
        // Passer à la dernière carte de la catégorie précédente
        $scope.selectBox(previousCategoryBoxes[previousCategoryBoxes.length - 1], {});
      }
    }
  };
});

app.directive('box', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      onSelect: "=",
      item: "=" },

    controllerAs: 'box',
    controller: function () {
      var box = this;

      box.goFullscreen = function (e) {
        box.onSelect(box.item, e.target.getBoundingClientRect());
      };
    },
    link: function (scope, element) {
      element.bind('click', scope.box.goFullscreen);
      element.css({
        'background-image': 'url(' + scope.box.item.image + ')' });

    } };

});

app.directive('bigBox', function ($timeout) {
  return {
    restrict: 'AE',
    scope: {},
    bindToController: {
      position: "=",
      selected: "=",
      onSelect: "=" },

    controllerAs: 'box',
    controller: function () {
      var box = this;
    },
    link: function (scope, element) {
      var css = {};
      for (var key in scope.box.position) {
        css[key] = scope.box.position[key] + 'px';
      }

      element.css(css);

      $timeout(function () {
        element.css({
          top: '50%',
          left: '10%' });

        element.addClass('image-out');
      }, 200);

      $timeout(function () {
        element.css({
          width: '80%',
          height: '100%' });

      }, 500);

      $timeout(function () {
        element.addClass('show');
      }, 800);
    } };
});