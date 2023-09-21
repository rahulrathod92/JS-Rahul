
    function randomPass(){
        var tool = this;
        var opts = parseOptions(tool);
        if (!opts)
            return "";
        var charset = generateCharset(opts);
        var output = [];
        for (var i = 0; i < opts.count; i++) {
            output.push(random_string(charset, opts.length));
        }
        let answer = output.join(opts.outputSep);
        document.getElementById("answer").value = answer;
    }

    function generateCharset(opts) {
        var charsets = {
            'alphalc': 'abcdefghijklmnopqrstuvwxyz',
            'alphauc': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'alphamix': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'alphalcnum': 'abcdefghijklmnopqrstuvwxyz0123456789',
            'alphaucnum': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            'alphamixnum': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            'base58': '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
            'numbers': '0123456789',
            'custom': opts.customCharset
        }
        return splitIntoGraphemes(charsets[opts.predefCharset]);
    }
    function random_string(charset, length) {
        var str = '';
        for (var i = 0; i < length; i++) {
            str += pickRandomArrElement(charset);
        }
        return str;
    }
    function pickRandomArrElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    function random_int(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function random_lines(charset, length) {
        var lines = [];
        var min = 5;
        var max = 25;
        for (var i = 0; i < length; i++) {
            lines.push(random_words(charset, random_int(min, max)));
        }
        return lines.join("\n");
    }
    function random_words(charset, length) {
        var words = [];
        var min = 4;
        var max = 8;
        for (var i = 0; i < length; i++) {
            words.push(generateRrandomString(charset, random_int(min, max)));
        }
        return words.join(" ");
    }
    function splitIntoGraphemes(text) {
        var splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(text);
    }


    function parseOptions(tool) {
        // var options = tool.options.get();
        var error = function(a, b) {
            tool.output.showNegativeBadge(a, b, -1);
        }
        var length = document.getElementById("length").value;
        length = length.trim();
        if (!/^-?\d+$/.test(length)) {
            error("Invalid Length", "Length value isn't a valid number.");
            return false;
        }
        length = parseInt(length);
        if (length < 0) {
            error("Invalid Length", "Length value cannot be negative.");
            return false;
        }
        var count = document.getElementById("count").value;
        count = count.trim();
        if (!/^-?\d+$/.test(count)) {
            error("Invalid Count", "Count value isn't a valid number.");
            return false;
        }
        count = parseInt(count);
        if (count < 0) {
            error("Invalid Count", "Count value cannot be negative.");
            return false;
        }
        var predefCharset =  document.getElementById("predefined-charset").value;
        var customCharset =  document.getElementById("custom-charset").value;
        var outputSep = '\n';
        if (outputSep == '\\n')
            outputSep = '\n';
        if (outputSep == '\\t')
            outputSep = '\t';
        return {
            length: length,
            count: count,
            predefCharset: predefCharset,
            customCharset: customCharset,
            outputSep: outputSep
        }
    }