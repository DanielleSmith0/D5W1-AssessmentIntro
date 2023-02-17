// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE

// let season = "winter"
// const food = "sushi"
// // You can also use '' or ``
// let color = "red"
// let Age = 21;
// let chiliIsSpicy = true;
// let spinachIsFruit = false;

// color = "green"

// let pizza = undefined;
// let pineapple = null;

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE

let codingLanguages = ["javascript", "java", "python", "swift"];


/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE

codingLanguages[2];


/*
    Copy the array using one of the arrays built in functions, and call it 'codingLanguage2.'
*/

//CODE HERE

let codingLanguage2 = codingLanguages.slice(0, codingLanguages.length);
console.log(codingLanguage2);

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE

codingLanguage2.push("C#");
console.log(codingLanguage2);

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE

instruments.pop();

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE

instruments.shift();

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE

instruments.unshift("guitar");


/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE

instruments.splice(2, 1, "glockenspiel");

console.log(instruments);

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// if(){
//     else if(){
        
//     }else{

//     }
// }

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE

if(num % 2 === 0) {
    console.log(num);
}else{
    console.log("num is not an even number");
}


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE

if(score <= 10){
    console.log("Failed");
}else if(score > 10 && score < 41) {
    console.log("the grade is C.");
}else if(score > 40 && score < 71) {
    console.log("The grade is B.");
}else{
    console.log("the grade is A.");
}


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// for(Starting i; condition; i increment){

// }

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE

let total = 0

for(let i = 0; i < price.length; i++){
    total += price[i];
}

console.log(total)

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let average = total / price.length;

console.log(average);

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE

for(let i = 0; i < colors.length; i++){
    if(colors[i] === "red"){
        console.log("apple");
    }else if(colors[i] === "green"){
        console.log("melon");
    }else if(colors[i] === "yellow"){
        console.log("banana");
    }
}

// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning - design, purpose of application, etc.
    -- Analysis of Requirements - breakingdown plan to know what you need to build it.
    -- Design - User interface, make it friendly. What do you want it to look like?
    -- Implementation - coding!
    -- Testing & Integration - making sure it works.
    -- Maintain - watch website for errors.
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git - version control.
        -- github - snapshot storage website.
        -- git init - initializes repo so it can be stored elsewhere.
        -- git clone - copies from the server.
        -- git status - to verify if there's anything that needs to be added in.
        -- git add - adding a change to staging area.
        -- git commit - committing it
        -- git push - pushes copy of commit to github
    - How to push git to github
*/

