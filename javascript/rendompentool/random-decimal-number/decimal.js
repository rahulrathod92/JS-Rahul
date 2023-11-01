function decimalFun(){
    // var options = this.options.get();
    var length = parseInt(document.getElementById("length").value);
    var howMany = parseInt(document.getElementById("count").value);
    var outputStr = '';
    for (var i = 0; i < howMany; i++) {
        var line = '';
        for (var j = 0; j < length; j++) {
            line += parseInt(Math.random() * 10, 10).toString();
        }
        outputStr += line;
        outputStr += "\n";
    }
    let answer = outputStr;
    console.log(answer)
    document.getElementById("answer").value= answer;
}
