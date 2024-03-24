function sampleTexttoOctalConverter() {
  let sample = "Programming isn't about what you know, it's about what you can figure out.";
  document.getElementById("inputTextarea").value = sample;
  textToOctalConverter();
}

function textToOctalConverter() {
  let text = document.getElementById("inputTextarea").value;
  let answer = textToOctalLogic(text)
  document.getElementById("outputTextarea").value = answer;
  // console.log("answer:->", answer)
}

function textToOctalLogic(text) {
  let octalString = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let octalRepresentation = charCode.toString(8);
    octalString += octalRepresentation + ' ';
  }
  return octalString.trim();
}