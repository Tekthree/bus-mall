# bus-mall
This is Bus Mall lab

## Instructions

- Display three products at a time side by side.

- The User is to vote by click on the Item they would potentially buy if given the oppertunity 

- The user gets 25 votes, then is show in percent which items were voted on most.

- Make site engaging 

## User Stories


As a user, I want to have clear instuctions on what the objective is, so that I don't waste time trying to solve unintentional puzzles

As a user, I want to vote then see the results in a clear visual represention, so that I dont have to do math or read more than I have to. 

As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.

As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.

As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.


## Task

- Create a constructor function that creates an object associated with each product, and has the following properties:
  - Name of the product
  - File path of image

- Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

- Attach an event listener to the section of the HTML page where the images are going to be displayed.

- Once the users ‘clicks’ a product, generate three new products for the user to pick from.

- In the constructor function define a property to hold the number of times a product has been clicked.

- After every selection by the viewer, update the newly added property to reflect if it was clicked.

- By default, the user should be presented with 25 rounds of voting before ending the session.

- Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

- Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

- After voting rounds have been completed, remove the event listeners on the product.

- Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.
