// arrays
// push, pop, shift, unshift, sort, reverse, includes, join, slice,

// splice()

var colors = ["orange", "blue", "red", "green", "yellow"];

// splice - to add or remove an item from array at a sepecific index.
document.write(colors + "<br>");

colors.splice(2, 2, "brown", "purple");

document.write(colors + "<br>");


// alert(value);
// document.write(value);
// console.log(value);
// document.getElementById("id").innerHTML = value;

//numeric sort
var num = [23, 18, 3, 29, 33, 42, 7, 12];
document.write(num + "<br>");
// to perform numeric sort we need to pass a function in the sort function argument.
// syntax - array.sort(function(a,b){return a-b});
num.sort(function (a, b) { return b - a });
document.write(num + "<br>");

var search = colors.includes("brown");
document.write(search + "<br>");

// array.filter();
var filteredArray = colors.find(function (item, index) {
    return item.length > 4;
});

document.write(filteredArray + "<br>");


// forEach()

colors.forEach(function (item, index) {
    colors[index] = "$" + item;
})

document.write(colors + "<br>");


var colorsCopy = colors.map(function (item, index) {
    return "&" + item;
})

document.write(colors + "<br>");
document.write(colorsCopy + "<br>");


var reducedVal = num.reduce(function (accVal, currVal) {
    return accVal + currVal
})

document.write(reducedVal + "<br>");


// Promises 

let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);


async function executePromise() {
    var a = await myPromise();
}

// promise has three states - pending, resolved, rejected.

async function getUsers() {
    var response = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" });
    console.log(await response.json());
}

getUsers();




