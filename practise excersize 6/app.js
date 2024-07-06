//exercise 6.1
//1. Create a function that takes two parameters, adds the parameters together,
//and returns the result.

function addNumbers(a, b) {
    return a+ b;
  }
  let result = addNumbers(8, 5);
  console.log(result);  

  //2. Set up two different variables with two different values.

  let variables="Nadia";
  let variables1=20;

 // 3. Use your function on the two variables, and output the result using
//console.log

let variables2="Nadia";
console.log(variables2);

let variables3=20;
console.log(variables3);

//4. Create a second call to the function using two more numbers as arguments
//sent to the function.


function addNumbers(a, b) {
    return a + b;
  }
  
  let result1 = addNumbers(9, 5);
  console.log(result1);  
  
  let result2 = addNumbers(8, 2);
  console.log(result2);  

  function subNumber(a,b){
    return a-b;
  }
   let result3=subNumber(9,7)
console.log(result3)

// exercise 6.2

// 1. Create an array of descriptive words.

let descriptiveWords = ["Vibrant","Serenene","Rugged", "Elegant","Quirky",]
    // console.log(descriptiveWords)

    // 2. Create a function that contains a prompt asking the user for a name.

    // let userName =prompt("enter your name");
// alert("userName")

// 3. Select a random value from the array using Math.random.

function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    return descriptiveWords[randomIndex];
  }

//   4. Output into the console the prompt value and the randomly selected array
//   value.
  
  let descriptiveWords1 = ["amazing", "awesome", "cool", "fantastic", "incredible", "magnificent", "outstanding", "remarkable", "spectacular", "superb"];

  function getName() {
    let userName = prompt("Please enter your name:");
    return userName;
  }
  
  function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    return descriptiveWords[randomIndex];
  }
  
  let name = getName();
  let randomWord = getRandomWord();
  
  console.log(`Hello, ${name}! You are ${randomWord}!`);

//   5. Invoke the function.

// its means call your function

// exercise 6.3

// 1. Set up two variables containing number values.
  let num1=7;
  let num2=8;

//   2. Set up a variable to hold an operator, either + or -.

let varibleoperater="+"
let varibleoperater1="-"


// 3. Create a function that retrieves the two values and the operator string value
// within its parameters. Use those values with a condition to check if the
// operator is + or -, and add or subtract the values accordingly (remember if
// not presented with a valid operator, the function should default to addition).

function calculate(num1, num2, operator) {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else {
      return num1 + num2; 
    }
  }
  let operator="+"
  let result0 = calculate(8, 9, operator);
console.log(result0); 


let operator1="-"
  let result01 = calculate(8, 9, operator1);
console.log(result01); 

let operator2="*"
  let result02 = calculate(8, 9, operator2);
console.log(result02); 

// 4. Within console.log(), call the function using your variables and output
// the response to the console.

let num3 = 20;
let num4 = 10;
let operator00 = "+";

function calculate(num3, num4, operator00) {
  if (operator00 === "+") {
    return num3 + num4;
  } else if (operator00 === "-") {
    return num3 - num4;
  } else {
    return num3 + num4; 
  }
}

console.log(calculate(num1, num2, operator)); 
// 5. Update the operator value to be the other operator type—either plus or
// minus—and call to the function again with the new updated arguments.

let num5 = 60;
let num6= 30;
let operator001 = "+";

function calculate(num5, num6, operator001) {
  if (operator001 === "+") {
    return num5 + num6;
  } else if (operator001 === "-") {
    return num5 - num6;
  } else {
    return num5 + num6; 
  }
}
console .log(calculate(num5,num6,operator001));





