function digitPairFun(){
    var tool = this;
    var options = parseOptions(tool);
    if (!options)
        return "";
    var outputBuf = [];
    for (var i = 0; i < options.count; i++) {
        var digitPair = pickRandomItem(options.validPairs);
        outputBuf.push(digitPair);
        if (!options.allowRepetitions) {
            options.validPairs.splice(options.validPairs.indexOf(digitPair), 1);
        }
    }
    let answer = outputBuf.join(options.sep);
    console.log(answer)
    document.getElementById("answer").value = answer;
}
function pickRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function parseOptions(tool) {
    // var options = tool.options.get();
    var sep = document.getElementById("separator").value|| "";
    if (sep == "\\n")
        sep = "\n";
    if (sep == "\\t")
        sep = "\t";
    var firstDigitOptions = document.getElementById("first-digit-options").value || "";
    console.log("first-digit-options",firstDigitOptions)
    firstDigitOptions = firstDigitOptions.replace(/\s*/g, "");
    firstDigitOptions = firstDigitOptions.replace(/,+$/g, "");
    firstDigitOptions = firstDigitOptions.split(/,/);
    if (firstDigitOptions.length == 1 && firstDigitOptions[0] == "") {
        firstDigitOptions = [];
    } else {
        for (var i = 0; i < firstDigitOptions.length; i++) {
            if (!/^[0-9]$/.test(firstDigitOptions[i])) {
                tool.output.showNegativeBadge("Invalid Ignore Digit", "Value \"{0}\" is not a valid single digit.".format(firstDigitOptions[i]));
                return false;
            }
        }
    }
    firstDigitOptions = firstDigitOptions.map(function(x) {
        return parseInt(x)
    });
    var secondDigitOptions = document.getElementById("second-digit-options").value || "";
    secondDigitOptions = secondDigitOptions.replace(/\s*/g, "");
    secondDigitOptions = secondDigitOptions.replace(/,+$/g, "");
    secondDigitOptions = secondDigitOptions.split(/,/);
    if (secondDigitOptions.length == 1 && secondDigitOptions[0] == "") {
        secondDigitOptions = [];
    } else {
        for (var i = 0; i < secondDigitOptions.length; i++) {
            if (!/^[0-9]$/.test(secondDigitOptions[i])) {
                tool.output.showNegativeBadge("Invalid Ignore Digit", "Value \"{0}\" is not a valid single digit.".format(secondDigitOptions[i]));
                return false;
            }
        }
    }
    secondDigitOptions = secondDigitOptions.map(function(x) {
        return parseInt(x)
    });
    var count = document.getElementById("count").value.trim();
    console.log(count)
    if (!/^\d+$/.test(count)) {
        tool.output.showNegativeBadge("Invalid Count", "Count contains non digits.");
        return false;
    }
    count = parseInt(count);
    if (count < 1) {
        tool.output.showNegativeBadge("Invalid Count", "You can't generate less than one digit.");
        return false;
    }
    var firstValidDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var secondValidDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var validPairs = [];
    for (var i = 0; i < firstValidDigits.length; i++) {
        for (var j = 0; j < secondValidDigits.length; j++) {
            if (firstDigitOptions.indexOf(firstValidDigits[i]) == -1 && secondDigitOptions.indexOf(secondValidDigits[j]) == -1) {
                validPairs.push(`${i}${j}`);
            }
        }
    }
    if (validPairs.length == 0) {
        tool.output.showNegativeBadge("All Digits Ignored", "You ignored all digits 0-9.");
        return false;
    }
    var allowRepetitions = document.getElementById("allow-repetitions").checked;
    console.log("allow-repetitions",allowRepetitions)
    if (!allowRepetitions) {
        if (count > validPairs.length) {
            if (validPairs.length > 10) {
                var possiblePairs = validPairs.slice(0, 10).join(", ") + ", …";
            } else {
                var possiblePairs = validPairs.join(", ");
            }
            tool.output.showNegativeBadge("Repetitions Are Not Allowed", "You wanted to generate {0} digit(s) but only {1} digits(s) are possible ({2}).".format(count, validPairs.length, possiblePairs));
            return false;
        }
    }
    return {
        validPairs: validPairs,
        count: count,
        sep: sep,
        allowRepetitions: allowRepetitions
    }
}