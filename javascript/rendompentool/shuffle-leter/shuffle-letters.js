function reshuffleLetters() {
    var text = document.getElementById("textareafirst").value;
    let answer = reshuffleLettersLogic(text);
    document.getElementById("answer").value = answer;

}

function reshuffleLettersLogic(text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts)
        return "";
    if (text.trim().length == 0)
        return "";
    if (opts.shuffleArea == 'shuffle-in-text') {
        var textParts = [text];
        var joiner = '';
    } else if (opts.shuffleArea == 'shuffle-in-line') {
        var textParts = text.split(/\n/);
        var joiner = '\n';
    } else if (opts.shuffleArea == 'shuffle-in-sentence') {
        text = text.replace(/[.?!] */g, (match)=>match + ' ');
        if (!/[.?!]\W*$/.test(text))
            text += '.';
        var textParts = tokenizer.sentences(text);
        textParts = textParts.map(sentence=>sentence.replace(/^\n /, '\n'));
        textParts = textParts.map(sentence=>sentence.replace(/[.?!]*$/, ''));
        var joiner = '. ';
    } else if (opts.shuffleArea == 'shuffle-in-paragraph') {
        var textParts = text.split(/\n+(?:[\t ]*\n+)/);
        var joiner = '\n\n';
    } else if (opts.shuffleArea == 'shuffle-in-words') {
        var splitOpts = {
            preserveApostrophe: true,
            preserveHyphen: true
        };
        var textParts = extractWordsAndPunct(text, splitOpts);
        var joiner = '';
    }
    var output = [];
    for (var i = 0; i < textParts.length; i++) {
        var textPart = textParts[i];
        if (opts.shuffleArea == 'shuffle-in-words') {
            if (!isWord(textPart)) {
                output.push(textPart);
                continue;
            }
        }
        if (opts.makeLowercase)
            textPart = textPart.toLowerCase();
        var chars = splitIntoGraphemes(textPart);
        chars = removeTextPunctuation(chars, opts.removePunct);
        var groups = splitCharsIntoGroups(chars, opts.groupSize);
        var shuffled = shuffle(groups);
        if (opts.removeCopies)
            shuffled = unique(shuffled);
        output.push(shuffled.join(''))
    }
    var outputStr = output.join(joiner);
    if (opts.shuffleArea == 'shuffle-in-sentence')
        outputStr += '.';
    return outputStr;
}

function splitCharsIntoGroups(chars, groupSize) {
    var groups = [];
    for (var i = 0; i < chars.length; i += groupSize) {
        var group = [];
        for (var j = 0; j < groupSize; j++) {
            if (chars[i + j] !== undefined) {
                group.push(chars[i + j]);
            }
        }
        groups.push(group.join(''));
    }
    return groups;
}
function removeTextPunctuation(chars, removePunct) {
    var charsWithoutPunct = [];
    for (var i = 0; i < chars.length; i++) {
        if (!removePunct[chars[i]]) {
            charsWithoutPunct.push(chars[i])
        }
    }
    return charsWithoutPunct;
}
function shuffle(array) {
    var i = array.length;
    while (i-- > 0) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var number = arr[i];
        obj[number] = true;
    }
    return Object.keys(obj);
}
function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
}


function parseOptions(tool) {
    // var options = tool.options.get();
    var error = function (a, b) {
        tool.output.showNegativeBadge(a, b, -1);
    }

    var shuffleInText = false;
    var shuffleInLine = false;
    var shuffleInSentence = false;
    var shuffleInParagraph = false;
    var shuffleInWords = false;
    
    var radios = document.getElementsByName('option-group');
    for (var radio of radios) {
        if (radio.checked) {
            if (radio.value == "shuffle-in-text") {
                shuffleInText = true;
            }
            if (radio.value == "shuffle-in-line") {
                shuffleInLine = true;
            }
            if (radio.value == "shuffle-in-sentence") {
                shuffleInSentence = true;
            }
            if (radio.value == "shuffle-in-paragraph") {
                shuffleInParagraph = true;
            }
            
            if (radio.value == "shuffle-in-words") {
                shuffleInWords = true;
            }

        }
    }
    console.log("shuffleInText :->" + shuffleInText);
    console.log("shuffleInLine :->" + shuffleInLine);
    console.log("'shuffle-in-sentence:->",shuffleInSentence)
    console.log("shuffle-in-paragraph:->",shuffleInParagraph)
    console.log("shuffleInWords:->",shuffleInWords)
    var groupSize = document.getElementById("shuffle-group-size").value.trim()
    // console.log("groupSize:->", groupSize)
    if (!/^\d+$/.test(groupSize)) {
        error("Invalid Shuffle Group Size", "Group size isn't a valid number.");
        return false;
    }
    groupSize = parseInt(groupSize);
    if (groupSize < 1) {
        error("Invalid Shuffle Group Size", "Group size should be a positive value.");
        return false;
    }
    var removePunct = {};
    var chars = splitIntoGraphemes(document.getElementById("remove-punctuation").value);
    for (var i = 0; i < chars.length; i++) {
        removePunct[chars[i]] = true;
        // console.log("remove-punctuation:->", chars)
    }
    var removeCopies = document.getElementById("skip-duplicates ").checked;
    console.log("skip-duplicates:->",removeCopies)
    if (shuffleInText) {
        var shuffleArea = 'shuffle-in-text';
    } else if (shuffleInLine) {
        var shuffleArea = 'shuffle-in-line';
    } else if (shuffleInSentence) {
        var shuffleArea = 'shuffle-in-sentence';
    } else if (shuffleInParagraph) {
        var shuffleArea = 'shuffle-in-paragraph';
    } else if (shuffleInWords) {
        var shuffleArea = 'shuffle-in-words';
    }
    var makeLowercase = document.getElementById("make-lowercase").checked ;
    

    console.log("makeLowercase:->",makeLowercase)
    return {
        groupSize: groupSize,
        removePunct: removePunct,
        removeCopies: removeCopies,
        shuffleArea: shuffleArea,
        makeLowercase: makeLowercase
    }
}