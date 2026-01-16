console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6
const changepos = (item, pos) => (pos <= 6 ? item.style.setProperty('grid-column', pos) : null);


// Create position variables for each penguin and set them all to 1
let pos1 = 1;
let pos2 = 1;
let pos3 = 1;


// Query selectors for all buttons and penguins go here
const btn1 = document.querySelector("#tux-button");
const penguin1 = document.querySelector("#tux-penguin");
const btn2 = document.querySelector("#daisy-button");
const penguin2 = document.querySelector("#daisy-penguin");
const btn3 = document.querySelector("#rocky-button");
const penguin3 = document.querySelector("#rocky-penguin");
const winner = document.querySelector("#winner");


// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function

function movepenguin1 () {
    pos1 += 1;
    changepos (penguin1,pos1);
}



// Write the function that moves Daisy forward
function movepenguin2 () {
    pos2 += 1;
    changepos (penguin2,pos2);
}


// Write the function that moves Rocky forward
function movepenguin3 () {
    pos3 += 1;
    changepos (penguin3,pos3);
}


// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
function checkwinner1 () {
    if (pos1 > 5) {
        winner.textContent = `tux won!`
    }
};
function checkwinner2 () {
    if (pos2 > 5) {
        winner.textContent = `daisy won!`
    }
};
function checkwinner3 () {
    if (pos3 > 5) {
        winner.textContent = `rocky won!`
    }
};


// Add event listeners for each button
// Each button should trigger its own movement function
btn1.addEventListener("click",movepenguin1);
btn1.addEventListener("click",checkwinner1);
btn2.addEventListener("click",movepenguin2);
btn2.addEventListener("click",checkwinner2);
btn3.addEventListener("click",movepenguin3);
btn3.addEventListener("click",checkwinner3);
