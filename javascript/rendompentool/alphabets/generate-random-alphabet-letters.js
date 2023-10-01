function alphabetsFun() {
    var alphabets = {
        "english": {
            "lowercase": "abcdefghijklmnopqrstuvwxyz",
            "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "digits": "0123456789"
        },
        "french": {
            "lowercase": "aàâäbcçdeèéêëfghiîïjklmnoôöpqrstuùûüvwxyÿz",
            "uppercase": "AÀÂÄBCÇDEÈÉÊËFGHIÎÏJKLMNOÔÖPQRSTUÙÛÜVWXYŸZ",
            "digits": "0123456789"
        },
        "german": {
            "lowercase": "aäbcdefghijklmnoöpqrstuüvwxyzß",
            "uppercase": "AÄBCDEFGHIJKLMNOÖPQRSTUÜVWXYZß",
            "digits": "0123456789"
        },
        "spanish": {
            "lowercase": "aábcdeéfghiíjklmnñoópqrstuúüvwxyz",
            "uppercase": "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ",
            "digits": "0123456789"
        },
        "portuguese": {
            "lowercase": "abcdefghijlmnopqrstuvxz",
            "uppercase": "ABCDEFGHIJLMNOPQRSTUVXZ",
            "digits": "0123456789"
        },
        "turkish": {
            "lowercase": "aáâãàbcçdeéêèfghiíìïjklmnoóôõòpqrstuúùüvwxyz",
            "uppercase": "AÁÂÃÀBCÇDEÉÊÈFGHIÍÌÏJKLMNOÓÔÕÒPQRSTUÚÙÜVWXYZ",
            "digits": "0123456789"
        },
        "greek": {
            "lowercase": "αβγδεζηθικλμνξοπρσςτυφχψω",
            "uppercase": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΠΡΣΤΥΦΧΨΩ",
            "digits": "0123456789"
        },
        "danish": {
            "lowercase": "abcdefghijklmnopqrstuvwxyzæøå",
            "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZÆøå",
            "digits": "0123456789"
        },
        "swedish": {
            "lowercase": "abcdefghijklmnopqrstuvwxyzåäö",
            "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ",
            "digits": "0123456789"
        },
        "norwegian": {
            "lowercase": "abcdefghijklmnopqrstuvwxyzæøå",
            "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ",
            "digits": "0123456789"
        },
        "gothic": {
            "lowercase": "𐌰𐌱𐌲𐌳𐌴𐌵𐌶𐌷𐌸𐌹𐌻𐌼𐌽𐌾𐌿𐍀𐍁𐍂𐍃𐍄𐍅𐍆𐍇𐍈𐍉𐍊",
            "uppercase": "𐌰𐌱𐌲𐌳𐌴𐌵𐌶𐌷𐌸𐌹𐌻𐌼𐌽𐌾𐌿𐍀𐍁𐍂𐍃𐍄𐍅𐍆𐍇𐍈𐍉𐍊",
            "digits": "0123456789"
        },
        "esperanto": {
            "lowercase": "abcĉdefgĝhĥijĵklmnoprsŝtuŭvz",
            "uppercase": "ABCĈDEFGĜHĤIJĴKLMNOPRSŜTUŬVZ",
            "digits": "0123456789"
        }
    }
    console.log(alphabets)

    var tool = this;
        var options = parseOptions(tool, alphabets);
        if (!options)
            return "";
        var output = [];
        for (var i = 0; i < options.numberOfGroups; i++) {
            var group = [];
            var availableLetters = options.alphabetLetters.slice(0);
            for (var j = 0; j < options.numberLettersPerGroup; j++) {
                var letter = pickOne(availableLetters);
                group.push(letter);
                if (!options.allowRepetitions) {
                    availableLetters.splice(availableLetters.indexOf(letter), 1);
                }
            }
            output.push(group.join(options.letterSeparator));
        }
       
        let answer= output.join(options.groupSeparator)
        answer = document.getElementById("answer").value=answer;
    }


function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var symbols = splitter.splitGraphemes(text);
    return symbols;
}
function isPositiveNumber(value) {
    return /^\d+$/.test(value);
}
function pickOne(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function parseOptions(tool, alphabets) {
    // var options = tool.options.get();
    var selectedAlphabet = document.getElementById("alphabet").value;
    console.log("selectedAlphabet:->", selectedAlphabet)

    var optionLowecase = document.getElementById("option-lowercase");
    if (optionLowecase.checked == false) {
        optionLowecase = false;
    } else {
        optionLowecase = true;
    }
    console.log("optionLowecase:->", optionLowecase)

    var optionUppercase = document.getElementById("option-uppercase").checked;
    // if (optionUppercase.checked == false) {
    //     optionUppercase = false;
    // } else {
    //     optionUppercase = true;
    // }
    console.log("optionUppercase:->", optionUppercase)
    
    var optionDigits = document.getElementById("option-digits");
     if(optionDigits.checked == false){
        optionDigits = false;
     }else{
        optionDigits = true;
     }
     console.log("optionDigits:->",optionDigits)

    var numberLettersPerGroup = document.getElementById("number-letters-per-group").value.trim() || 1;
    console.log("numberLettersPerGroup:->",numberLettersPerGroup)
    var letterSeparator = document.getElementById("letter-separator").value;
    if (letterSeparator == "\\n")
        letterSeparator = "\n";
    if (letterSeparator == "\\t")
        letterSeparator = "\t";
    console.log("letterSeparator:->",letterSeparator)

    var numberOfGroups = document.getElementById("number-of-groups").value.trim() || 1;
    console.log("numberOfGroups:->",numberOfGroups)
    var groupSeparator = document.getElementById("group-separator").value;
    if (groupSeparator == "\\n")
        groupSeparator = "\n";
    if (groupSeparator == "\\t")
        groupSeparator = "\t";
    console.log("groupSeparator:->",groupSeparator)

    var allowRepetitions = document.getElementById("allow-repetitions");
    console.log("allowRepetitions:->",allowRepetitions)
    if (!optionLowecase && !optionUppercase && !optionDigits) {
        tool.output.showNegativeBadge("Invalid Option", "Neither lowercase, nor uppercase, nor digits were selected.");
        return false;
    }
    if (!isPositiveNumber(numberLettersPerGroup)) {
        tool.output.showNegativeBadge("Invalid Number of Letters Per Groups", "The number letters per groups is not a positive integer.");
        return false;
    }
    if (parseInt(numberLettersPerGroup) < 1) {
        tool.output.showNegativeBadge("Invalid Number of Letters per Groups", "Can't generate less than one letter.");
        return false;
    }
    if (!isPositiveNumber(numberOfGroups)) {
        tool.output.showNegativeBadge("Invalid Number of Group", "The number letters of groups is not a positive integer.");
        return false;
    }
    if (parseInt(numberOfGroups) < 1) {
        tool.output.showNegativeBadge("Invalid Number of Group", "Can't generate less than one group.");
        return false;
    }
    var alphabetLetters = "";
    if (selectedAlphabet == "allalphabets") {
        var possibleAlphabets = Object.keys(alphabets);
        for (var i = 0; i < possibleAlphabets.length; i++) {
            var currentAlphabet = possibleAlphabets[i];
            alphabetLetters += optionLowecase ? alphabets[currentAlphabet]["lowercase"] : "";
            alphabetLetters += optionUppercase ? alphabets[currentAlphabet]["uppercase"] : "";
        }
    } else {
        alphabetLetters += optionLowecase ? alphabets[selectedAlphabet]["lowercase"] : "";
        alphabetLetters += optionUppercase ? alphabets[selectedAlphabet]["uppercase"] : "";
    }
    alphabetLetters += optionDigits ? alphabets[selectedAlphabet]["digits"] : "";
    alphabetLetters = splitIntoGraphemes(alphabetLetters);
    if (!allowRepetitions && alphabetLetters.length < numberLettersPerGroup) {
        tool.output.showNegativeBadge("Not Enough Letters", "You wanted to pick {0} letter(s) per group without repetition but only {1} letters are available.".format(numberLettersPerGroup, alphabetLetters.length));
        return false;
    }
    return {
        optionLowecase: optionLowecase,
        optionUppercase: optionUppercase,
        optionDigits: optionDigits,
        numberLettersPerGroup: numberLettersPerGroup,
        letterSeparator: letterSeparator,
        numberOfGroups: numberOfGroups,
        groupSeparator: groupSeparator,
        alphabet: currentAlphabet,
        alphabetLetters: alphabetLetters,
        allowRepetitions: allowRepetitions
    }
}