function sampleStringToAscii(){
  let example = "Hello World";
   document.getElementById("inputTextarea").value = example;
   stringToasciiConverter();
}

function stringToasciiConverter() {
    let text = document.getElementById("inputTextarea").value;
    let answer = stringToASCII(text);
    document.getElementById("outputTextarea").value = answer;
}

function stringToASCII(str) {
  let asciiValues = [];
  for (let i = 0; i < str.length; i++) {
    asciiValues.push(str.charCodeAt(i));
  }
  return asciiValues;
}

