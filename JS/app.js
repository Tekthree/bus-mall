'use strick'

var imagesArray = [];
var randomNumberArray = [];
var totalVotes = 0;
var imgWrap = document.getElementsByClassName('images-wrapper');
var images = document.getElementsByClassName('one-images');
var imagesTwo = document.getElementsByClassName('two-images');
var imagesThree = document.getElementsByClassName('three-images');



var Images = function(name,path='jpg'){
  this.title = name;
  this.filepath = `./img/${name}.${path}`;
  this.title = name;
  this.alt = name;
  this.votes = 0;
  this.views = 0;
  imagesArray.push(this);
  

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





// makineg sure the random number are unique and the array is only 3 in length
function makeUniqueRandomNums(){
  // clear array
  randomNumberArray = [];

  var getrandomNumber = makeRandomNumber();

  // check to see if array include that random number
  while(randomNumberArray.includes(getrandomNumber)){
    getrandomNumber = makeRandomNumber();
  }
  // add random number to begining of array
  randomNumberArray.unshift(getrandomNumber);

// check to see if array include that random number
  while(randomNumberArray.includes(getrandomNumber)){
    getrandomNumber = makeRandomNumber();
  }
  // add random number to begining of array
  randomNumberArray.unshift(getrandomNumber);

// check to see if array include that random number
  while(randomNumberArray.includes(getrandomNumber)){
    getrandomNumber = makeRandomNumber();
  }
  // add random number to begining of array
  randomNumberArray.unshift(getrandomNumber);

  

  // remove the last so the array is only three in length
  while(randomNumberArray.length > 3){
    randomNumberArray.pop();
  }

  // console.log(randomNumberArray);
 
}




// make the random number
function makeRandomNumber(){
  return Math.floor(Math.random() * imagesArray.length);

}

makeUniqueRandomNums();

// assign random number to images and render to the html page
var renderImages = function (){
  makeUniqueRandomNums();
  var firstImages = randomNumberArray[0];
  var secondImages = randomNumberArray[1];
  var thirdImages = randomNumberArray[3];

  images.src = imagesArray[firstImages].filepath;
  images.title = imagesArray[firstImages].title;
  images.alt = imagesArray[firstImages].alt;
  imagesArray[firstImages].views++;



  imagesTwo.src = imageArray[secondImages].filepath;
  imagesTwo.title = imagesArray[secondImages].title;
  imagesTwo.alt = imagesArray[secondImages].alt;
  imagesArray[secondImages].views++;






  imagesThree.src = imagesThree[thirdImages].filepath;
  imagesThree.title = imagesArray[thirdImages].title;
  imagesThree.alt = imagesArray[thirdImages].alt;
  imagesArray[firstImages].views++;
  
}  








function randomImage(){

}