function sampleStringToBase64Converter(){
    let sample = "Hello, World!"; 
    document.getElementById("inputTextarea").value = sample;
    stringToBase64Converter(); 
}

function stringToBase64Converter() {
    let str = document.getElementById("inputTextarea").value;
    let answer = stringToBase64(str);
    document.getElementById("outputTextarea").value = answer;
    console.log("ans:->", answer)

}

function stringToBase64(str) {
    // Using btoa() to convert binary data to base64
    let base64 = btoa(unescape(encodeURIComponent(str)));
    return base64;
}