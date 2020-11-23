'use strick'

var allImages = [];
var randomNumberArray = [];
var totalVotes = 0;
var imgWrap = document.getElementsByClassName('images-wrapper');
var images = document.getElementsByClassName('one-images');
var imagesTwo = document.getElementsByClassName('two-images');
var imagesThree = document.getElementsByClassName('three-images');

var ProductImages = function(name,path=jpg){
  this.title = name;
  this.filepath = `./img/${name}.${path}`;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  imageArray.push(this);

}


function getImageWrapper(){

  
}  


new Images('bag');
new Images('banana');
new Images('bathroom');
new Images('boots');
new Images('breakfast');
new Images('bubblegum');
new Images('chair');
new Images('cthulhu');
new Images('dog-duck');
new Images('dragon');
new Images('pen');
new Images('pet-sweep');
new Images('scissors');
new Images('shark');
new Images('sweep');
new Images('tauntaun');
new Images('unicorn');
new Images('usb','gif');
new Images('water-can');
new Images('wine-glass');


function randomImage(){

}