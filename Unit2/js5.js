function displayAnswer(){
    document.getElementById("result").innerHTML = "Rome"
}

function hint(){
    let newH4 = document.createElement("h4");
    newH4.innerHTML = "the one that starts with R";
    document.body.appendChild(newH4);
}