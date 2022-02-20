function display(val){
    document.getElementById("textval").value+=val;
}

function clr(){
    document.getElementById("textval").value="";
}

function evaluatee(){
    let x=document.getElementById("textval").value;
    let y = eval(x);
    document.getElementById("textval").value =y;
}