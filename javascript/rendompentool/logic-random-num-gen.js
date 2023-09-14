
    function generateNumber() {
        let rangeStart = new BigNumber(Number(document.getElementById("rangeStart").value));
        let rangeEnd = new BigNumber(Number(document.getElementById("rangeEnd").value));
        let count = Number(document.getElementById("count").value);
        let sep = document.getElementById("sep").value;
        let precision = Number(document.getElementById("precision").value)
        let wholeNums = document.getElementById("wholeNums").value;
        let fractNums = document.getElementById("fractNums").value;

        var radios = document.getElementsByName('increasing');
        for (var radio of radios) {
            if (radio.checked) {

                increasing = radio.value;
            }
        }

        console.log("rangeStart:->", rangeStart, "rangeEnd:->", rangeEnd, "count:->", count, "sep:->", sep, "increasing:->", increasing);

        var randomNumbers = [];
        for (var i = 0; i < count; i++) {
            if (wholeNums == increasing) {
                increasing != false;
                randomNumbers.push(generateRandomWholeNumber(rangeStart, rangeEnd));
            } else if (fractNums == increasing) {
                increasing != true;
                randomNumbers.push(generateRandomFractNumber(rangeStart, rangeEnd).toFixed(precision));
            }
        }

        if (sep == "\\n")
            sep = "\n";
        let answer = randomNumbers.join(sep);
        console.log(answer)
        document.getElementById("answer").value = answer;
    }
    function generateRandomWholeNumber(rangeStart, rangeEnd) {
        return (BigNumber.random().times(rangeEnd.minus(rangeStart).plus(1)).plus(rangeStart)).floor();
    }
    function generateRandomFractNumber(rangeStart, rangeEnd) {
        return BigNumber.random().times(rangeEnd.minus(rangeStart)).plus(rangeStart);
    }

