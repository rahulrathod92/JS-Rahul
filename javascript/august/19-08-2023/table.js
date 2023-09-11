

function gen() {
    let num = Number(document.getElementById("uservalue").value);
    let string = "<div class='columns is-multiline'>";
    sum = 0;
    for (i = 1; i <= num; i++) {
        
            string = string + "<div class='column'><table class='table is-bordered'><th>table</th>";
        for (j = 1; j <= 10; j++) {
            sum = i * j;
                string = string + "<tr><td>" + i + "x" + j + "=" + sum + "</td></tr>";
          
        }
        string = string + "</table></div>";
        
    }
    string = string + "</div>";
    document.getElementById("showtable").innerHTML = string;
}

function oddnum() {
    let num = Number(document.getElementById("uservalue").value);
    let string = "<div class='columns is-multiline'>";
    sum = 0;
    for (i = 1; i <= num; i++) {
        string = string + "<div class='column'><table class='table is-bordered'>";
        if (i % 2 != 0) {
            string = string + "<tr><th>" + "Table" + "</th></tr>";
        }
        for (j = 1; j <= 10; j++) {
            sum = i * j;
            if (i % 2 == 0) {
                console.log("even")
            } else {
                string = string + "<tr><td>" + i + "x" + j + "=" + sum + "</td></tr>";
                console.log()
            }
        }
        string = string + "</table></div>";
    }
    string = string + "</div>";
    document.getElementById("showtable").innerHTML = string;
}
function evennum() {
    let num = Number(document.getElementById("uservalue").value);
    let string = "<div class='columns is-multiline'>";
    sum = 0;
    for (i = 1; i <= num; i++) {
        string = string + "<div class='column'><table class='table is-bordered'>";
        if (i % 2 == 0) {
            string = string + "<tr><th>" + "Table" + "</th></tr>";
        }
        for (j = 1; j <= 10; j++) {
            sum = i * j;
            if (i % 2 == 0) {
                console.log("even")
                string = string + "<tr><td>" + i + "x" + j + "=" + sum + "</td></tr>";
            }
        }
        string = string + "</table></div>";
    }
    string = string + "</div>";
    document.getElementById("showtable").innerHTML = string;
}


function primenumber() {
    let num = parseInt(document.getElementById("uservalue").value);
    let sum = 0;
    let count = 0;
    let string = "<div class='columns is-multiline'>";
    for (j = 1; j <= num; j++) {
        string = string + "<div class='column'><table class='table is-bordered'>";
        for (i = 1; i <= j; i++) { 
            if (j % i == 0)
                count++;
        }
        if (count == 2) {
            string = string + "<tr><th>" + "Table" + "</th></tr>";
            // console.log(j)
            for (k = 1; k <= 10; k++) {
                sum = j * k;
                console.log(sum)
                console.log("sum:-", sum, "j:-", j, "k:-", k)
                // string = string +"--"+ j + "x" + k + "=" + sum + "<br>";
                string = string + "<tr><td>" + j + "x" + k + "=" + sum + "</td></tr>";
            }
        }

        count = 0;
        string = string + "</table></div>";
    }
    string = string + "</div>";
    document.getElementById("showtable").innerHTML = string;
}
function febo() {
    let num = parseInt(document.getElementById("uservalue").value);
    let string = "<div class='columns is-multiline'>";
    let temp = 0;
    let sum = 0;
    let a = 1, b = 0;
    for (i = 0; i <= num; i++) {
        string = string + "<div class='column'><table class='table is-bordered'><tr><th>table</th></tr>"
        temp = a + b;
        a = b;
        b = temp;
        // console.log(temp)
        for (j = 1; j <= 10; j++) {
            sum = temp * j;
            // console.log(sum)
            console.log()
            // string = string + temp+"x"+j+"="+sum+"<br>";
            string = string + "<tr><td>" + temp + "x" + j + "=" + sum + "</td></tr>";
        }
        string = string + "</table></div>";
    }
    string = string + "</div>";
    document.getElementById("showtable").innerHTML = string;
}
