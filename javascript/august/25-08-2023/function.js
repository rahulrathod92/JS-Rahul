
function oddnumber() {
    let user = parseInt(document.getElementById("uservalue").value);
    let passingvalueodd = secoundOddNumber(user);
    //  console.log(passingvalueodd)
    document.getElementById("showtable").innerHTML = passingvalueodd;
}
function secoundOddNumber(odduservalue) {
    let showodd = "<h1 class='title'>odd</h1><div class='columns is-multiline'>";
    let multiple = 0;
    for (i = 1; i <= odduservalue; i++) {
        showodd = showodd + "<div class='column'><table class='table is-bordered'>";
        // console.log(i)
        for (j = 1; j <= odduservalue; j++) {
            if (i % 2 == 0) {
                console.log("value of loop i:-", i)
            } else {
                // console.log(i)
                if (j % 2 == 0) {
                } else {
                    multiple = i * j;
                    // console.log(i, j, multiple)
                    // showodd = showodd + i + "x" + j + "=" + multiple + "<br>";
                    showodd = showodd + "<tr><td>" + i + "x" + j + "=" + multiple + "</td></tr>";
                }

            }

        }

        showodd = showodd + "</table></div>";
    }
    showodd = showodd + "</div>"
    return showodd;
}

function iseven() {
    let user = parseInt(document.getElementById("uservalue").value);
    let passingeven = isEven(user);
    console.log(passingeven)
    document.getElementById("showtable").innerHTML = passingeven;
}
function isEven(evenvalue) {
    let stringeven = "<h1 class='title'>Even</h1><div class='columns is-multiline'>";
    let evenmultiple = 0;
    for (i = 1; i <= evenvalue; i++) {
        stringeven = stringeven + "<div class='column'><table class='table is-bordered'>";
        // console.log(i)
        for (j = 1; j <= evenvalue; j++) {
            if (i % 2 == 0) {
                // console.log( "even value:-",i )
                if (j % 2 == 0) {
                    // console.log("value of J:-" ,j, "value of I:-",i)
                    evenmultiple = i * j;
                    stringeven = stringeven + "<tr><td>" + i + "x" + j + "=" + evenmultiple + "</td></tr>";
                    // console.log(evenmultiple)
                }
            }

        }
        stringeven = stringeven + "</table></div>";
    }
    stringeven = stringeven + "</table></div>";
    return stringeven;
}

function febonumber() {
    let user = parseInt(document.getElementById("uservalue").value);
    let febo = febonacciNumber(user);
    document.getElementById("showtable").innerHTML = febo;
    console.log(febo)
}
function febonacciNumber(febouservalue) {
    let stringfebo = "<h1 class='title'>Febonaci</h1><div class='columns is-multiline'>";
    let a = 1, b = 0;
    let temp;
    let febomaltiple = 0;
    for (i = 0; i <= febouservalue; i++) {
        stringfebo = stringfebo + "<div class='column'><table class='table is-bordered'>";
        temp = a + b;
        a = b;
        b = temp;
        // console.log("A",a,"B",b,"temp",temp)
        // console.log("temp",temp,"1")
        // for (j = 1; j <= febouservalue; j++) {
        //     // stringfebo = stringfebo + "temp" + temp + "<br>";
        // }
        let c = 1; d = 0;
        let temp2 = 0;
        for (k = 0; k <= febouservalue; k++) {
            temp2 = c + d;
            c = d;
            d = temp2;
            febomaltiple = temp * temp2;
            //  stringfebo = stringfebo  + temp +"x"+temp2 + "="+ febomaltiple+ "<br>";
            stringfebo = stringfebo + "<tr><td>" + temp + "x" + temp2 + "=" + febomaltiple + "</td></tr>";
            console.log("temp", temp, "temp2:-", temp2, febomaltiple)
        }
        stringfebo = stringfebo + "</table></div>";

    }
    stringfebo = stringfebo + "</table></div>";
    return stringfebo;
}

function primenumber() {
    let user = parseInt(document.getElementById("uservalue").value);
    let primevalue = primeNumber(user);
    document.getElementById("showtable").innerHTML = primevalue;
    console.log(primevalue)
}
function primeNumber(userprimevalue) {
    let stringprime = "";
    let sum = 0;
    let count = 0;
    let k;
    for (j = 1; j <= userprimevalue; j++) {
        for (i = 1; i <= j; i++) {
            if (j % i == 0)
                count++;
            
        }
        if (count == 2) {
            // console.log("prime:-,", j)
            //    primme value j mali gay
            for (k = 2; k <= userprimevalue; k++) {
                if (j % k == 0) {
                 console.log(k,j,k*j)
                   
                }
                
            }
            
        }
        

        count = 0;
    }

    return stringprime;
}
