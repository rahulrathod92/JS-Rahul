function genPrimeCalculate() {

    let start = Number(document.getElementById("start").value);
    let count = Number(document.getElementById("count").value);
    let sep = document.getElementById("sep").value;
    console.log("start:->", start, "count:->", count, "sep:->", sep)


    var primes = [];
    for (var i = new BigNumber(start); ; i = i.plus(1)) {
        isPrime = true;
        upTo = i.sqrt().floor();
        var j = new BigNumber(2);
        for (j; j.lte(upTo); j = j.plus(1)) {
            if (i.mod(j).eq(0)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
            if (primes.length >= count) {
                break;
            }
        }
    }
    if (!primes[0].eq(start)) {
        tool.output.showWarningBadge("Starting number is not a prime.", "You start the sequence from {0}, but the nearest following prime number is {1}.".format(start, primes[0]));
    }
    if (sep == "\\n")
        sep = "\n";
    let answer = primes.join(sep);
    console.log(answer)
    document.getElementById("answer").value = answer;
}



