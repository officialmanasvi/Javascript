// loops - loops are used to iterate over a piece of code until a condition is matched or it reaches the end point.

// types of loops in javascript - for, while and do while


// for loop
// for(initialization; condition; increment/decrement){

//}
for (var a = 1; a <= 10; a++) {
    if (a === 5) {
        document.write("five" + "<br>");
        continue; // to continue the loop to next step;
        //break; to break the loop if condition matches.
    }
    document.write(a + "<br>");
}

// while
var b = 1;
while (b <= 10) {
    document.write(b + "<br>");
    b++;
}

// if you have a specific number for iteration. then we use for loop.
// if don't have a number, how many times a loop should repeat then we use while.

// do while. - when you want to execute your code atleast one time without checking the condition.

var c = 1;
do {
    document.write(c + "<br>");
    c++;
} while (c <= 10)


// array iteration methods.
// array.forEach()

var colors = ["orange", "blue", "magenta", "red", "purple", "green"];

colors.forEach(function (item, index) {
    if (item === "purple") {
        colors[index] = "brown"
    }
    // array[index] = "value"
    colors[index] = "$" + item
})

document.write(colors + "<br>");


// array.map(function(item, index){})

var newColors = colors.map(function (item, index) {
    return "&" + item
})


// var newColorEach = colors.forEach(function (item, index) {
//     return "&" + item
// })
// document.write(newColorEach + "<br>");



document.write(colors + "<br>");

document.write(newColors + "<br>");


// array.filter()

var filteredColors = colors.filter(function (item, index) {
    return item.length > 5;
})

document.write(filteredColors + "<br>");

//array.find()
var filteredColor = colors.find(function (item, index) {
    return item.length > 5;
})

document.write(filteredColor + "<br>");



// loop over an object

var employee = {
    firstName: "Vipin",
    lastName: "Kumar",
    designation: "React Developer",
    salary: 25500,
    dob: 1987,
    isNightShift: true,
    fullName: function () { return this.firstName + " " + this.lastName },
    address: {
        city: "Chandigarh",
        state: "UT"
    },
    hobbies: ["Cricket", "Yoga", "Dancing"]
}

for (key in employee) {
    document.write(employee[key] + "<br>");
}

var propName = "name";
var obj = {
    [propName]: "Vipin"
}

console.log(obj.name);