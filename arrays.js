// Array - Array is an index based collection of items.
// when an array is created, browser will allocate a memory to that array and each item will be stored on particular index.
// and index will start from 0;

// syntax to declare an array.
// modern syntax - var arrayName = [],
// traditional syntax - var arrayName = new Array();

var cars = ["Maruti", "Porsche", "Tata", "Hyundai", "Ford"];
document.write(cars + "<br>");
console.log(cars);

// to get single value from an array we can use index number.
// syntax - arrayName[indexNumber]
console.log(cars[2]);

// to update a value on a particular index.
// syntax - arrayName[indexNumber] = "value";
cars[2] = "KIA"

document.write(cars + "<br>");
console.log(cars);

// to get the length of an array we can use length property.
// syntax = arranName.length;

var arrLength = cars.length;
document.write(arrLength + "<br>");


var names = [];
function addName() {
    var val1 = document.getElementById("text1").value;
    var indexNum = names.length;
    names[indexNum] = val1;
    document.getElementById("output").innerHTML = names;
}


//array methods

// array.push() - to insert a value at last index in an array.

function addItem() {
    var val1 = document.getElementById("text1").value;
    names.push(val1);
    document.getElementById("output").innerHTML = names;
    document.getElementById("text1").value = "";
}

// array.pop() - to remove value from last index.

function removeItem() {
    names.pop();
    document.getElementById("output").innerHTML = names;
}


// array.unshift() - to insert a value at 0 index in an array.
function addItemUnshift() {
    var val1 = document.getElementById("text1").value;
    names.unshift(val1);
    document.getElementById("output").innerHTML = names;
    document.getElementById("text1").value = "";
}

// array.shift() - to remove value from 0 index.
function removeItemShift() {
    names.shift();
    document.getElementById("output").innerHTML = names;
}

//array.sort() - for string values it will sort the array in alphabetical order.
var colors = ["orange", "blue", "purple", "magenta", "red", "green"];

document.write(colors + "<br>")
colors.sort();
document.write(colors + "<br>")

//array.sort() - To do a numeric sorting in ascending or descending we need to add a function parameter to sort(). eg- 
// sort(function(a,b){return a-b}) - numeric sort function.
var count = [23, 4, 45, 18, 29, 32, 8, 39, 2];
document.write(count + "<br>")
count.sort(function (a, b) { return b - a });
document.write(count + "<br>")


//array.slice() - slice method is used to slice out a portion from the array using start and end index as parameters.
var slicedArr = colors.slice(1, 4);
document.write(slicedArr + "<br>");


// array.splice(index, deleteCount, valuesTobeadded) to add or remove value from a specific index number in an array.
colors.splice(1, 2, "Yellow", "brown");
document.write(colors + "<br>");


// array.join() - it is used to change the separator of items in an array.
var newArr = colors.join(" | ");
document.write(newArr + "<br>");


// array.concat() - it is used to combine the value of arrays or multiple arrays.

var combinedArr = colors.concat(count, "hello");
document.write(combinedArr + "<br>");

