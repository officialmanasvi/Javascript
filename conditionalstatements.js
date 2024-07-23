// In javascript we have conditional and to create conditional statements we can use - if, else, else if, switch
var marks = 50;
if (marks >= 40) {
    document.write("Student has passed the exam <br>");
} else {
    document.write("Student has failed the exam <br>");
}

var a = 10;
// else if
if (a > 10) {
    document.write("Number is greater than 10 <br>");
} else if (a < 10) {
    document.write("Number is smaller than 10 <br>");
} else {
    document.write("Number is equals to 10 <br>");
}


// logical AND - "&&" and logical OR - "||" operators

var citizen = "Indian";
var age = 19;

// logical && - && operator ensures that all the conditions must be true to execute if block.
if (citizen == "Indian" && age > 18) {
    document.write("Eligible to vote <br>");
} else {
    document.write("Not Eligible <br>");
}


// logical || - || operator ensures that atleast one of the conditions must be true to execute if block.
if (citizen == "Indian" || age > 18) {
    document.write("Eligible to vote <br>");
} else {
    document.write("Not Eligible <br>");
}


// nested if else
if (citizen === "Indian") {
    if (age >= 18) {
        document.write("Eligible to vote <br>");
    } else {
        document.write("Not Eligible becuase age is below 18 <br>");
    }
} else {
    document.write("Not Eligible because not citizen of India <br>");
}

// switch

var color = "red";

switch (color) {
    case "red": document.write("Color is red");
        break;
    case "green": document.write("Color is green");
        break;
    case "orange": document.write("Color is orange");
        break;
    case "yellow": document.write("Color is yellow");
        break;
    case "brown": document.write("Color is brown");
        break;
    default: document.write("No color was matched");
}


var myDate = new Date();
var day = myDate.getDay();

switch (day) {
    case 0: document.write("Sunday");
        break;
    case 1: document.write("Monday");
        break;
    case 2: document.write("Tuesday");
        break;
    case 3: document.write("Wednesday");
        break;
    case 4: document.write("Thursday");
        break;
    case 5: document.write("Friday");
        break;
    case 6: document.write("Saturday");
        break;
}



// ternary statement using ternary operator - "?"
// condition ? true statement : false statement

var text = 3 > 5 ? "true statement" : "false statement";

document.write(text + "<br>");

if (3 > 5) {
    text = "true statement";
} else {
    text = "false statement"
}




