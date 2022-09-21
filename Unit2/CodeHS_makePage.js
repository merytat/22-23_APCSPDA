function makePage(){
    let title = document.createElement("h1");
    title.innerHTML = "I am an H1";
    let par = document.createElement("p");
    par.innerHTML = "This is a paragraph followed by a list";
    let list = document.createElement("ol");
    list.innerHTML = "<li>This is first</li><li>This is second</li>";
    list.style.listStyleType = "upper-roman";
    document.body.append(title,par,list);
}