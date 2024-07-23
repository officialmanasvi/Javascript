// datatypes in javascript
// primitive datatypes
// string, number, boolean, undefined, null

// variables - variables are containers which can hold a value.
// we can declare variables in the following manner.
// we can declare variables using three keywords - var, let and const
// naming conventions for variable names - we can use numbers, underscore, dollarsign and alphabets values in a variable name.
// but the name cannot start with number.
// best practice is to use camel case alphabets only in variable name.

var firstName = "Vikas";
// output methods
// alert method
// alert(firstName);

// document.write()
document.write(firstName);

// get element from the dom.
document.getElementById("para").innerHTML = firstName;

// console
console.log(firstName);


var num1 = 52;
var num2 = 23;

var result = num1 + num2;
console.log(result);

// the addition operator is also used for concatination of string values e.g;
var userFirstName = "Vipin";
var userLastName = "Kumar";

var fullName = userFirstName + " " + userLastName;
console.log(fullName)

// implicit conversion example
var newNum1 = "23";
var newNum2 = "34";
var newResult = newNum1 * newNum2;
console.log(newResult);

// prompt()
// var userVal1 = prompt("please enter a number", 28);

// var userVal2 = prompt("enter another number", 15);

// // explicit conversion of string to Number we can user Number(val);

// var userResult = Number(userVal1) + Number(userVal2);
// console.log(userResult);


// functions - function is a set of instructions to perform a particular task.

// function declaration - we can use "function" keyword to create a function.

function studentName() {
    var a = 2;
    var b = 4;
    var c = a + b;
    console.log(c);
}

// calling a function
studentName();

// parameterized function - a functino with parameter

function fullNameOfStudent(fname, lname) {
    console.log(fname + " " + lname);
}

fullNameOfStudent("Aman", "Sharma");


// return function - a function which returns a value;

function getSum() {
    return (
        1 + 1
    )
}
console.log(getSum())
getSum();

// selfInvoking function
(function () {
    console.log("self invoking function")
})()


// variables - variable is container used to hold the value.
// variable declaration.
// variables can be declared using var, let and const keywords.
// variable name can consist alphabets, numbers, underscore and moneysign ($). But variable name cannot start with number.
// best practice is to use camel case alphabets

var myName = "Vipin Kumar";

// datatypes = datatypes in javascript are - string, number, boolean, undefined, null.

var a = "1@afljkijf2";
var b = 23 + 23;
var c = true;
var d = null;
console.log(typeof (d));

// difference among var, let and const
var stuName; // variable declared but not initialised.
var empName = "Vipin"; // initalised variable, a variable which has a value.

stuName = "Sameer"; // updating the value of a variable.

//let 
let empAge;
empAge = 44;

var empName = "new name"; // variable created using var keyword can be recreated with the same name.

console.log(empName);
// let empAge = 32; variable declared using let keyword cannot be redeclared using same name.

// const

const companyName = "Netmax";
// a variable declared using const keyword has to initialized and it is a constant varible, its value cannot be updated.
// companyName = "new company";

// let is blocked scope variable.


// var data1 = "data 1";
// function checkData() {
//     data1 = "data udpated";
//     console.log(data1);
// }
// checkData();

// console.log(data1);


// let data2 = "data 2";
// function checkData2() {
//     let data2;
//     data2 = "data udpated 2";
//     console.log(data2);
// }
// checkData2();
// console.log(data2);











