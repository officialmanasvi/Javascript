// Object - object is a property based collection.
// var objectName = {} - declaring an object.

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

// to add or update a value in object
employee.firstName = "Saurabh"; // firstName already existed so it will replace the value;

// employee.age = 32; //new property static value
// using function to get the dynamic age
employee.age = function () { return 2024 - this.dob };

document.write(employee.firstName + "<br>");
document.write(employee.designation + "<br>");
document.write(employee.salary + "<br>");
document.write(employee.fullName() + "<br>");
document.write(employee.address.city + "<br>");
document.write(employee.hobbies[0] + "<br>");
document.write(employee.age() + "<br>");


//constructor function
function EmployeeData(fname = "", lname = "", dob = "", salary = "") {
    this.firstName = fname;
    this.lastName = lname;
    this.dateOfBirth = dob;
    this.salary = salary;
    this.age = function () { return 2024 - this.dateOfBirth };
}

var vipin = new EmployeeData("Vipin", "Kumar", 1987, 25000);
var aman = new EmployeeData("Aman", "Kumar", 1992, 25000);

document.write(vipin.age() + "<br>")
document.write(aman.age() + "<br>")


//Date()
document.write(Date() + "<br>");

//"2024-05-23T13:16" option date parameter
var myDate = new Date();
var year = myDate.getFullYear();
console.log(year);
var month = myDate.getMonth();
console.log(month);
var day = myDate.getDay();
console.log(day);
// month and day returns index number becuase both are saved as an array.
var date = myDate.getDate();
console.log(date);
var hours = myDate.getHours();
console.log(hours);
var minutes = myDate.getMinutes();
console.log(minutes);
var seconds = myDate.getSeconds();
console.log(seconds);


// setTimeout() and setInterval()
// setTimeout() - it executes the function after a specific time provided in the parameter.

setTimeout(function () {
    // alert("hello");
}, 5000);


// setInterval() - it executes the function on regular interval of time provided in the parameter.

setInterval(function () {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);



// Math
var PI = Math.PI;
console.log(PI);

var round = Math.round(3.5);
console.log(round);

var floor = Math.floor(3.9);
console.log(floor);

var ceil = Math.ceil(4.1);
console.log(ceil);

var min = Math.min(23, 8, 34, 16, 7, 28);
console.log(min);

var max = Math.max(23, 8, 34, 16, 7, 28);
console.log(max);

var pow = Math.pow(8, 3);
console.log(pow);

var sqrt = Math.sqrt(64);
console.log(sqrt);

var random = Math.random();
console.log(random);

var randomIntegar = Math.floor(Math.random() * 5)
console.log(randomIntegar);







