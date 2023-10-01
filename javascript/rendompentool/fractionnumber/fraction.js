function fractionFun() {
    // var options = this.options.get();
    var rangeStart = Number(document.getElementById("range-start").value);
      
    var rangeEnd = Number(document.getElementById("range-end").value);
    var howMany = Number(document.getElementById("count").value);
    var precision = Number(document.getElementById("precision").value);
    var outputStr = '';
    for (var i = 0; i < howMany; i++) {
        outputStr += generateRandomFraction(rangeStart, rangeEnd).toFixed((precision))
        outputStr += "\n";
        console.log("outputStr",outputStr)
    }
    let answer = document.getElementById("answer").value = outputStr;
}
function generateRandomFraction(rangeStart, rangeEnd) {
    return Math.random() * (rangeEnd - rangeStart) + rangeStart;
}



