function sampleXmlToStringConverter(){
    let sample=`<books>
    <book>
      <title>JavaScript</title>
      <price>2000</price>
      <qty>15</qty>
    </book>
 </books>`;

 document.getElementById("inputTextarea").value = sample;
}

function xmlToStringConverter(){
  let xml = document.getElementById("inputTextarea").value;
  let answer = xmlToStringLogic(xml);
  document.getElementById("outputTextarea").value = answer;
  console.log("answer:->",answer)
}


function xmlToStringLogic(xml) {
    var serializer = new XMLSerializer();
    var xmlString = serializer.serializeToString(xml);
    return xmlString;
  }
  