function add_ul(){
    const tmp = document.getElementById("ul-input").value;
    const li = document.createElement("li");
    li.setAttribute('id', tmp);
    const textNode = document.createTextNode(tmp);
    li.appendChild(textNode);
    document.getElementById('todo').appendChild(li)
    document.getElementById("ul-input").value = null;
}
var down = false;
function check_enter(){
    if(!down) {
        add_ul();
        down = true;
    }
}
function hover(){
    document.getElementById("ex").innerHTML="fuck you";
}
function undo(){
    document.getElementById("ex").innerHTML=" example haha";
}