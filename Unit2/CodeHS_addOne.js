function addOne() {
    let count = parseInt(document.getElementById("count").innerHTML);
    document.getElementById("count").innerHTML = ""+(count+1);
    document.getElementById("count").style.fontSize = (16+count)+"px";
}
