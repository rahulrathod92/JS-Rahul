function add(){
    let valueA = parseInt(document.getElementById("valueA").value);
    let valueB = parseInt(document.getElementById("valueB").value);
    let total = valueA + valueB;
    document.getElementById("ans").value = total;
}
function multiple(){
    let valueA = parseInt(document.getElementById("valueA").value);
    let valueB = parseInt(document.getElementById("valueB").value);
    let total = valueA * valueB;
    document.getElementById("ans").value = total;
}
function sub(){
    let valueA = parseInt(document.getElementById("valueA").value);
    let valueB = parseInt(document.getElementById("valueB").value);
    let total = valueA - valueB;
    document.getElementById("ans").value = total;
}
function div(){
    let valueA = parseInt(document.getElementById("valueA").value);
    let valueB = parseInt(document.getElementById("valueB").value);
    let total = valueA / valueB;
    document.getElementById("ans").value = total;
}
