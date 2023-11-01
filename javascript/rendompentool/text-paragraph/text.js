function textParagraphBtnFun() {
    let text = document.getElementById("inputteaxtarea").value;
    let answer = textparagraphLogicFun(text);
    console.log("answer",answer)
    document.getElementById("answer").value = answer;

}

function textparagraphLogicFun(text) {
    var tool = this;
    var opts = parseOptions(tool);
    if (!opts)
        return "";
    if (text.trim().length == 0) {
        return "";
    }
    var trimLines = opts.trimLines;
    var skipDuplicates = opts.skipDuplicates;
    var groupSize = opts.groupSize;
    if (trimLines) {
        var lines = text.split("\n");
        for (var i = 0; i < lines.length; i++) {
            if (trimLines) {
                lines[i] = lines[i].trim();
            }
        }
        text = lines.join("\n");
    }
    var pars = text.split(/\n\n+/);
    if (pars.length <= 1) {
        tool.output.showWarningBadge("Nothing to Shuffle", "Input does not contain the delimiter character.");
    }
    var groupedWords = [];
    for (var i = 0; i < pars.length; i += groupSize) {
        var group = [];
        for (var j = 0; j < groupSize; j++) {
            if (pars[i + j] !== undefined) {
                group.push(pars[i + j]);
            }
        }
        groupedWords.push(group.join("\n\n"));
    }
    if (skipDuplicates) {
        groupedWords = unique(groupedWords);
    }
    return shuffle(groupedWords).join("\n\n");
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
    var trimLines = document.getElementById("trim-lines").checked;
    console.log("trimLines",trimLines)
    var skipDuplicates = document.getElementById("skip-duplicates").checked;
    console.log("skipDuplicates",skipDuplicates)
    if (!/^\d+$/.test(groupSize)) {
        tool.output.showNegativeBadge("Invalid Shuffle Group Size", "Group size isn't a valid number.");
        return false;
    }
    groupSize = parseInt(groupSize);
    if (groupSize < 1) {
        tool.output.showNegativeBadge("Invalid Shuffle Group Size", "Group size should be a positive value.");
        return false;
    }
    return {
        groupSize: groupSize,
        trimLines:trimLines,
        skipDuplicates:skipDuplicates
    }
}