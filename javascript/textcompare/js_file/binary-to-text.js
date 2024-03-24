function sampleBinaryToText(){
    let sample ="01101000 01100101 01101100 01101100 01101111";
     document.getElementById("inputTextarea").value =sample;
     binaryTotext();
    }

function binaryTotext() {
    let binaryString = document.getElementById("inputTextarea").value;
    let answer = binaryToTextLogic(binaryString.replace(/\s/g, '')); 
    document.getElementById("outputTextarea").value = answer;
}
function binaryToTextLogic(binary) {
    let text = '';
    for (let i = 0; i < binary.length; i += 8) {
        let byte = binary.substr(i, 8);
        let decimalValue = parseInt(byte, 2);
    text += String.fromCharCode(decimalValue);
    }
    return text;
}


