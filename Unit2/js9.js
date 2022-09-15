//Playing with variables

let name = "Alexandra";  //text (string)
let height = 1.67;  // decimal number (double)
let age = 17;   // number (integer)
let isStudent = true; //boolean (true or false)

function writeOnCon(){
    console.log("Name is: " + name);
    console.log("Age is: " + age);
    console.log("Height is: " + height);
    console.log("It is " + isStudent + " that " + name + " is a student")
}

function writeOnAlert(){
    alert("Name: " + name + "\n" + "Age: " + age);
}

function writeOnTable(){
    let newTable = document.createElement("table");
    newTable.innerHTML = "<tr> <td>" + name + "</td> </tr>";
    newTable.className = "border";
    document.body.appendChild(newTable);
}