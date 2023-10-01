function shuffleWords() {
    var text = document.getElementById("textareafirst").value;
    let answer = reShuffleWords(text);
    document.getElementById("answer").value = answer;
    console.log(answer)
}
function reShuffleWords(text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts)
        return "";
    text = text.trim();
    if (text.length == 0) {
        return "";
    }
    if (opts.removePunct) {
        var inputSep = opts.inputSep;
        var punctuation = opts.punctuation;
        for (var i = 0; i < inputSep.length; i++) {
            punctuation = punctuation.replace(inputSep[i], '');
        }
        text = text.replace(punctToRegex(punctuation), '');
    }
    if (opts.inputSep == "") {
        var words = splitIntoGraphemes(text);
    } else {
        var words = text.split(opts.inputSep);
    }
    if (words.length <= 1) {
        tool.output.showWarningBadge("Nothing to Shuffle", "Input does not contain the delimiter character.");
    }
    var groupedWords = [];
    for (var i = 0; i < words.length; i += opts.groupSize) {
        var group = [];
        for (var j = 0; j < opts.groupSize; j++) {
            if (words[i + j] !== undefined) {
                group.push(words[i + j]);
            }
        }
        groupedWords.push(group.join(opts.inputSep));
    }
    if (opts.skipDuplicates) {
        groupedWords = unique(groupedWords);
    }
    var shuffled = shuffle(groupedWords).join(opts.inputSep);
    return shuffled.split(opts.inputSep).join(opts.outputSep);
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
function punctToRegex(punct) {
    var escapedPunct = "";
    for (var i = 0; i < punct.length; i++) {
        escapedPunct = escapedPunct + "\\" + punct[i];
    }
    var replace = "[" + escapedPunct + "]";
    var re = new RegExp(replace,"g");
    return re;
}
function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
}
function parseOptions(tool) {
    // var options = tool.options.get();
    var inputSep = document.getElementById("input-separator").value;
    var outputSep = document.getElementById("output-separator").value;

    if (inputSep == "\\n")
        inputSep = "\n";
    if (outputSep == "\\n")
        outputSep = "\n";

    var groupSize = document.getElementById("shuffle-group-size").value.trim();
    console.log("groupSize:->", groupSize)
    if (!/^\d+$/.test(groupSize)) {
        tool.output.showNegativeBadge("Invalid Shuffle Group Size", "Group size isn't a valid number.");
        return false;
    }
    groupSize = parseInt(groupSize);
    if (groupSize < 1) {
        tool.output.showNegativeBadge("Invalid Shuffle Group Size", "Group size should be a positive value.");
        return false;
    }
    var removePunct = document.getElementById("remove-punctuation").checked;
    console.log("removePunct:->", removePunct)
    var punctuation = document.getElementById("punctuation-chars").value || "'.,?!()\"";
    console.log("punctuation:->", punctuation)

    var skipDuplicates = document.getElementById("skip-duplicates").checked;
    console.log("skip-duplicates:->", skipDuplicates)
    return {
        inputSep: inputSep,
        outputSep: outputSep,
        groupSize: groupSize,
        removePunct: removePunct,
        punctuation: punctuation,
        skipDuplicates: skipDuplicates
    }

}