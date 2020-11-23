'use strick'

var imagesArray = [];
var randomNumberArray = [];
var totalVotes = 0;
var imgWrap = document.getElementById('images-wrapper');
var imagesOne = document.getElementById('one-images');
var imagesTwo = document.getElementById('two-images');
var imagesThree = document.getElementById('three-images');



var Images = function(name,path='jpg'){
  this.title = name;
  this.filepath = `./img/${name}.${path}`;
  this.title = name;
  this.alt = name;
  this.votes = 0;
  this.views = 0;
  imagesArray.push(this);
  

}


// make all the object instances
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





// assign random number to images and render to the html page
var renderImages = function (){
  makeUniqueRandomNums();

  

  var firstImages = randomNumberArray[0];
  var secondImages = randomNumberArray[1];
  var thirdImages = randomNumberArray[2];

  imagesOne.src = imagesArray[firstImages].filepath;
  imagesOne.title = imagesArray[firstImages].title;
  imagesOne.alt = imagesArray[firstImages].alt;
  imagesArray[firstImages].views++;

  imagesTwo.src = imagesArray[secondImages].filepath;
  imagesTwo.title = imagesArray[secondImages].title;
  imagesTwo.alt = imagesArray[secondImages].alt;
  imagesArray[secondImages].views++;

  imagesThree.src = imagesArray[thirdImages].filepath;
  imagesThree.title = imagesArray[thirdImages].title;
  imagesThree.alt = imagesArray[thirdImages].alt;
  imagesArray[thirdImages].views++;

  console.log(imagesArray[firstImages].filepath);
  console.log(imagesOne.src);
  
}  




// imgWrap.addEventListener('click', voteImages);


renderImages();
