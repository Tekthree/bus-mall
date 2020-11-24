'use strick'
//Global vaiables 
var imagesArray = [];
var randomNumberArray = [];
var totalVotes = 0;
// why cant I use getElementsByClassName....fustrating...spent about a hour troubleshooting 
var imgWrap = document.getElementById('images-wrapper');
var imagesOne = document.getElementById('one-images');
var imagesTwo = document.getElementById('two-images');
var imagesThree = document.getElementById('three-images');
var resultsArea = document.getElementById('results');
var allNames = [];
var votesArray = [];


// constructor function for products
var Images = function(name,path='jpg'){
  this.filepath = `./img/${name}.${path}`;
  this.title = name;
  this.alt = name;
  this.votes = 0;
  this.views = 0;
  imagesArray.push(this);
  

}


// make all the object instances

// function checkForInstantiation(){
//   if(localStorage.getItem(imagesArray) === null){
//     var lsImages = localStorage.getItem('imagesArray');
//     imagesArray = JSON.parse(lsImages);

//   }else{
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

//   }




// }





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

  // console.log(imagesArray[firstImages].title);
  // console.log(imagesArray[secondImages].title);
  // console.log(imagesArray[thirdImages].title);
  // console.log(imagesOne.src);
  
}  


// function for checking to see if targeted title matches on of the titles in the image array]
// removing event listner
function voteEvent(e){
  var clickedOnTitle = e.target.title;

  //Increment votes
  for(var i=0; i < imagesArray.length; i++){
    if(clickedOnTitle === imagesArray[i].title){
      imagesArray[i].votes++;
      
    }
    
  }

  //tally total votes
  totalVotes++;

  
  if(totalVotes === 25){
    imgWrap.removeEventListener('click', voteEvent);
    document.getElementById("main").style.gridTemplateColumns = "2fr .8fr .8fr .8fr";
    makeChartVariable();
    makeChart();
    imageLs();
  }

  // console.log(totalVotes);

  document.getElementById('results').innerText = `the total votes are ${totalVotes}`;



  // render more images to html
  renderImages();

}

// Event listener for the Image Wrapper
imgWrap.addEventListener('click', voteEvent)




renderImages();



// Loop over imagesArray and fill allnames array with titles
function makeChartVariable(){
  for(var i = 0 ; i < imagesArray.length ; i++){
    allNames.push(imagesArray[i].title);
    votesArray.push(imagesArray[i].votes);
  
  }


}


function imageLs(){
  var stringImages = JSON.stringify(imagesArray);
  localStorage.setItem('lsImages',stringImages);
}





function makeChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: allNames,
          datasets: [{
              label: '# of Votes',
              data: votesArray,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)',
                  'rgb(255, 255, 255)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });




}

// checkForInstantiation()