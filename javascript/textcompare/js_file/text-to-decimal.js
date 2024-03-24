function sampletextToDecimal() {
    let sample = "Welcome to Textcompare !"
    document.getElementById("inputTextarea").value = sample;
    textToDecimal();
}

function textToDecimal() {
    let text = document.getElementById("inputTextarea").value;
    let answer = textToDecimalLogic(text);
    document.getElementById("outputTextarea").value = answer;

}
function textToDecimalLogic(text) {
    let decimalString = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        decimalString += charCode + ' ';
    }
    return decimalString.trim();
}