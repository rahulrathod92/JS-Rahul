
function stringToByte() {
    try {

        var binary = document.getElementById("inputTextArea").value;

        if (binary.trim().length === 0) {
            showToast("Sorry Input Is Empty", "warning");
            return;
        }

        let answer = stringToByteLogic(binary);
        document.getElementById("outputTextArea").value = answer;


    } catch (e) {

        showToast("Please check the Input:", "danger");
        console.log(e);
    }
    finally {
        updateTextAreaFooter();
    }


}

function textToBinaryConvert() {
    try {

        var text = document.getElementById("outputTextArea").value;

        if (text.trim().length === 0) {
            showToast("Sorry Input Is Empty", "warning");
            return;
        }

        let answer = textToBinary(text);
        document.getElementById("inputTextArea").value = answer;


    } catch (e) {

        showToast("Please check the Input:", "danger");
        console.log(e);
    }
    finally {
        updateTextAreaFooter();
    }
}

function textToBinary(text) {
    let binary = '';

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const binaryString = charCode.toString(2).padStart(8, '0'); // Ensure 8-bit representation
        binary += binaryString + ' '; // Separate each 8-bit chunk with a space
    }

    return binary.trim(); // Remove trailing space
}


function stringToByteLogic(binary) {
    var tool = this;
    binary = binary.replace(/\s+/g, ' ');
    binary = binary.replace(/^\s+/g, '');
    binary = binary.replace(/\s+$/g, '');
    if (binary.length == 0) {
        return "";
    }
    var chars = [];
    if (binary.indexOf(' ') > 0) {
        var bytes = binary.split(' ');
        for (var i = 0; i < bytes.length; i++) {
            chars.push(String.fromCharCode(parseInt(bytes[i], 2)));
        }
    } else {
        if (binary.length < 8) {
            while (binary.length < 8) {
                binary = "0" + binary;
            }
        }
        if (binary.length % 8 != 0) {
            this.output.showNegativeBadge("Can't convert.", "Input binary doesn't split into groups of 8 bits evenly.");
            return "";
        }
        for (var i = 0; i < binary.length; i += 8) {
            chars.push(String.fromCharCode(parseInt(binary.substr(i, 8), 2)));
        }
    }
    var text = chars.join("");
    if (undefined) {
        if (typeof utf8 !== "undefined") {
            text = utf8.decode(text);
        } else {
            tool.output.showNegativeBadge("Can't decode singlebyte", "UTF-8 library is not defined.");
            return "";
        }
    }
    return text;
}

function sampleStringToByteData() {
    
    let testStr = " There is no friend as loyal as a book. (Hemingway)";
    document.getElementById("inputTextArea").value = testStr;
    stringToByte();
}

function stringToByteAuto() {

    if (document.getElementById("inputTextArea").value.trim().length == 0) {
        document.getElementById("outputTextArea").value = "";
        updateTextAreaFooter();
        return;
    }

    if (document.getElementById("isAuto").checked) {
        stringToByte();
    }
}