var el = document.getElementById("text1");
console.log(el);

function sum() {
    var val1 = document.getElementById("text1").value;
    var val2 = document.getElementById("text2").value;
    var result = Number(val1) + Number(val2);
    document.getElementById("result").innerHTML = result;
}

// functions - function is set of instruction to perform a particular task.

// parameterised function - 

function empDetails(name = "Jon", salary = "Doe", age = "20") {
    console.log(name);
    console.log(salary);
    console.log(age);
}

console.log()
empDetails("Vipin Kumar", 258000, 37);

empDetails("Shivam Kumar", 350000, 25);

empDetails();


