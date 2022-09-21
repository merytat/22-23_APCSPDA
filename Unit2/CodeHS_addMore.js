let count = 0;
function addMore() {
    count++;
    let newP = document.createElement("p");
    newP.innerHTML = ""+count;
    newP.style.fontSize = (16+count)+"px";
    document.body.appendChild(newP);
}