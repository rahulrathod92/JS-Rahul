function sampleHexToText(){
    let sample = "0x4a 0x61 0x76 0x61 0x53 0x63 0x72 0x69 0x70 0x74 0x2c 0x20 0x74 0x68 0x65 0x20 0x61 0x72 0x74 0x20 0x6f 0x66 0x20 0x70 0x72 0x6f 0x67 0x72 0x61 0x6d 0x6d 0x69 0x6e 0x67";
    document.getElementById("inputTextarea").value = sample;
    hexTotext();
}

function hexTotext(){
    let text = document.getElementById("inputTextarea").value;
    let answer = hexTotextlogic(text);
    document.getElementById("outputTextarea").value = answer
    console.log(answer)
}
function hexTotextlogic(hex){
    var hexBytes = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16);
      }));
    
      var text = new TextDecoder().decode(hexBytes);
      return text;
}