function sampleStringToHex(){
    let sample ="Hello JavaScript";
    document.getElementById("inputTextarea").value = sample;
    stringToHexConverter();
}



function stringToHexConverter() {
    let str = document.getElementById("inputTextarea").value;
    let answer = stringToHex(str);
    document.getElementById("outputTextarea").value = answer;

}
function stringToHex(str) {
    // Check for undefined or null input
    if (!str) {
        throw new Error("Input string is undefined or null");
    }

    // Convert string to an array of bytes
    const byteArr = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
        byteArr[i] = str.charCodeAt(i);
    }

    // Convert byte array to hexadecimal string
    const hexStr = [...byteArr].map(b => b.toString(16).padStart(2, "0")).join("");

    return hexStr;
}

