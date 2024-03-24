function byteTostringConverter() {
  let bytes = document.getElementById("inputTextarea").value;
  let answer = bytesToString(bytes);
  document.getElementById("outputTextarea").value = answer;
  console.log("answer:->",answer)
}

function bytesToString(bytes) {
  let string = String.fromCharCode.apply(null,bytes);
  return string;
}


