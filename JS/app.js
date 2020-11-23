'use strick'

var imagesArray = [];
var randomNumberArray = [];
var totalVotes = 0;
// why cant I use getElementsByClassName....fustrating...spent about a hour troubleshooting 
var imgWrap = document.getElementById('images-wrapper');
var imagesOne = document.getElementById('one-images');
var imagesTwo = document.getElementById('two-images');
var imagesThree = document.getElementById('three-images');
var resultsArea = document.getElementById('results');



var Images = function(name,path='jpg'){
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
new Images('sweep','png');
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

  
  // assign variables for each random number in array
  var firstImages = randomNumberArray[0];
  var secondImages = randomNumberArray[1];
  var thirdImages = randomNumberArray[2];

  // rewrite what images are in the html, with the random numbers in random num array
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

  console.log(imagesArray[firstImages].title);
  console.log(imagesArray[secondImages].title);
  console.log(imagesArray[thirdImages].title);
  // console.log(imagesOne.src);
  
}  


// function for checking to see if targeted title matches on of the titles in the image array]
// removing event listner
function voteEvent(e){
  var clickedOnTitle = e.target.title;

  for(var i=0; i > imagesArray.length; i++){
    if(clickedOnTitle === imagesArray[i].title){
      imagesArray[i].votes++;
      
      
      
    }
    
  }

  //Get article, create new p element, fill it with voted title and append to child
  var resultsId = document.getElementById('article');
  // console.log(resultsId);
  var pElement = document.createElement('p');
  pElement.innerText = `this item was voted on: ${clickedOnTitle}`;
  resultsId.appendChild(pElement);
  totalVotes++;

  // console.log(totalVotes)
  if(totalVotes === 25){
    imgWrap.removeEventListener('click', voteEvent);
  }

  console.log(totalVotes);

  document.getElementById('results').innerText = `the total votes are ${totalVotes}`;



  // render more images to html
  renderImages();

}

// Event listener for the Image Wrapper
imgWrap.addEventListener('click', voteEvent)




renderImages();
