function pickWinnerBtnFun() {
    let text = document.getElementById("inputteaxtarea").value;
    let answer = pickWinnerLogicFun(text);
    document.getElementById("answer").value = answer;
}
function pickWinnerLogicFun(text) {
    var tool = this;
    var options = parseOptions(tool);
    if (!options)
        return "";
    if (text.trim().length == 0)
        return "";
    if (options.re) {
        var lines = text.split(options.re);
    } else {
        var lines = text.split(options.inputSep);
    }
    if (!options.repetitions) {
        if (lines.length == options.count) {
            tool.output.showWarningBadge("Only One Sample Is Possible", "The number of items is equal to the number you want to pick.");
        }
        if (lines.length < options.count) {
            tool.output.showNegativeBadge("Too Large Count", "The number of items is less than the number you want to pick.");
            return "";
        }
    }
    if (options.skipEmptyItems) {
        lines = removeEmptyItems(lines);
    }
    var ret = [];
    for (var i = 0; i < options.count; i++) {
        var itemIndex = parseInt(Math.random() * lines.length, 10);
        ret.push(lines[itemIndex]);
        if (!options.repetitions) {
            lines.splice(itemIndex, 1);
        }
    }
    return ret.join(options.outputSep);
}

function removeEmptyItems(chars) {
    var newList = [];
    for (var i = 0; i < chars.length; i++) {
        if (chars[i].trim().length > 0)
            newList.push(chars[i]);
    }
    return newList;
}

function parseOptions(tool) {
    // var options = tool.options.get();
    var error = function (a, b) {
        tool.output.showNegativeBadge(a, b, -1);
    }
    var stringSep = undefined || true;
    var regexpSep = undefined || false;
    var inputSep = document.getElementById("input-separator").value || '\n';
    console.log(inputSep)
    var outputSep = document.getElementById("output-separator").value || '';
    console.log(outputSep)
    var re = null;
    if (regexpSep) {
        var regexParts = inputSep.match(/^\/(.*?)\/([gimuy]*)$/);
        if (regexParts) {
            re = new RegExp(regexParts[1], regexParts[2]);
        } else {
            re = new RegExp(inputSep);
        }
    } else {
        if (inputSep == "\\n")
            inputSep = "\n";
        if (inputSep == "\\t")
            inputSep = "\t";
    }
    if (outputSep == "\\n")
        outputSep = "\n";
    if (outputSep == "\\t")
        outputSep = "\t";
    var count = document.getElementById("count").value;
    count = count.trim();
    console.log(count)
    if (!/^\d+$/.test(count)) {
        tool.output.showNegativeBadge("Invalid Count", "Count contains non digits.");
        return false;
    }
    count = parseInt(count);
    if (count < 1) {
        tool.output.showNegativeBadge("Invalid Count", "You can't pick less than one item.");
        return false;
    }
    var repetitions = document.getElementById("with-repetitions").checked;
    console.log(repetitions)
    var skipEmptyItems = undefined || false;
    return {
        re: re,
        count: count,
        repetitions: repetitions,
        skipEmptyItems: skipEmptyItems,
        inputSep: inputSep,
        outputSep: outputSep
    }
}