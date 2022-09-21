function calArea(){
    let h = parseInt(document.getElementById("height").value)
    let w = parseInt(document.getElementById("width").value)
    let area = h*w;
    let output = document.createElement("h3");
    output.innerHTML = "Area =  " + area;
    document.body.appendChild(output)
}