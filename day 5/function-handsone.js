// fjunciton is a block of code desinggnesd to perform a particular task
// functuon payfee(payment)  --> payfee is a fuction that take payment a pay 
// functiuon functionName() {};
//fumction is a keyword
function greet() {
    console.log("Hello, my name is  Deepak");
    console.log("I am leaving Javascript functiuons.")
    // block end here
}
// function call --> write name of fuctuion (greet) with parenthesis {}
greet();

// fucntion with parensthesis
function greetWithName(name) {
    //name is a parensthesis
    console.log("Hello, my name is " + name);
}
greetWithName("Deepak");

// fuction with multiple parameters
function greetWithFullName(firstName, lastName) {
    console.log("Hello, my full name is " + firstName + " " + lastName);
    console.log(`Hello, my full name is  ${firstName}  ${lastName}`); 
}

greetWithFullName("Deepak", "pooja");

// function with return value
function addNumbers(a,b) {
    return a+b;
}
let x = addNumbers(10,20);
console.log("The sum is: " + x);

//sub function 

function subtractNumbers(a,b) {
    return a-b
}
let y = subtractNumbers(5,4);
console.log("The subtract is " + y);