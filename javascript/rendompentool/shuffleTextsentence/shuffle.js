function shffleFun() {
    var text = document.getElementById("inputTextarea").value;
    var ans = reshuffleSentenceFun(text);
    document.getElementById("outputTextarea").value = ans;
    console.log(ans)

}

function reshuffleSentenceFun(text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts)
        return "";
    if (text.trim().length == 0) {
        return "";
    }
    var skipDuplicates = opts.skipDuplicates;
    var groupSize = opts.groupSize;
    text = text.replace(/[.?!] */g, (match) => match + ' ');
    if (!/[.?!]\W*$/.test(text))
        text += '.';
    var sentences = tokenizer.sentences(text);
    sentences = sentences.map(sentence => sentence.replace(/^\n /, '\n'));
    sentences = sentences.map(sentence => sentence.replace(/[.?!]*$/, ''));
    var grouped = [];
    for (var i = 0; i < sentences.length; i += groupSize) {
        var group = [];
        for (var j = 0; j < groupSize; j++) {
            if (sentences[i + j] !== undefined) {
                group.push(sentences[i + j]);
            }
        }
        grouped.push(group.join(opts.joinChar));
    }
    if (skipDuplicates) {
        grouped = unique(grouped);
    }
    return shuffle(grouped).join(opts.joinChar) + '.';
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

function parseOptions(tool) {
    // var options = tool.options.get();
    var groupSize = document.getElementById("shuffle-group-size").value;
    groupSize = groupSize.trim();
    console.log("groupSize", groupSize)
    if (!/^\d+$/.test(groupSize)) {
        tool.output.showNegativeBadge("Invalid Shuffle Group Size", "Group size isn't a valid number.");
        return false;
    }
    groupSize = parseInt(groupSize);
    if (groupSize < 1) {
        tool.output.showNegativeBadge("Invalid Shuffle Group Size", "Group size should be a positive value.");
        return false;
    }
    var joinChar = document.getElementById("one-sentence-per-line").checked
    joinChar = joinChar ? '.\n' : '. ';
    console.log("joinChar", joinChar)
    var skipDuplicates = document.getElementById("skip-duplicates").checked;
    console.log("skipDuplicates", skipDuplicates)
    return {
        groupSize: groupSize,
        joinChar: joinChar,
        skipDuplicates: skipDuplicates
    }
}



