function generateTable() {
    let num = document.getElementById("uservalue").value;
    let counter = 0;
    let strtable = "<table class='table is-bordered'><tr>";
    for (let i = 1; i <= num; i++) {

        for (let j = 1; j <= num; j++) {
            counter = counter + 1;
            if (isPrime(counter)) {
                strtable = strtable + "<td class='has-background-success'>" + counter + "</td>";
            } else {
                strtable = strtable + "<td>" + counter + "</td>";
            }
        }

        strtable = strtable + "</tr>";
    }
    strtable = strtable + "</table>";
    document.getElementById("showtable").innerHTML = strtable;

}
function isPrime(num1) {
    console.log(" in IsPrime nuk:->" + num1)
    for (let i = 2; i < num1; i++) {
        if (num1 % i == 0) {
            return false;
        }
    }
    return true;
}


 function isPalindrome(n) {
        let r;
        let rev = 0;
        let copy; 
        copy = n;
        let string = "";
        for (; n > 0; ) {
            r = n % 10;
            rev = rev * 10 + r;
            // console.log("rev->"+rev);
            n = parseInt(n / 10);
        }
        if (copy == rev) {
            return true;
        } else {
            return false;
        }
    }
isPalindrome(121)