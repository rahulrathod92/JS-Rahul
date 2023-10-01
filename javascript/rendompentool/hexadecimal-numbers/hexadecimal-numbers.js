function hexaDecimal(){
   
        var length =Number(document.getElementById("length").value);
        var howMany = Number(document.getElementById("count").value);
        var outputStr = '';
        for (var i = 0; i < howMany; i++) {
            var line = '';
            for (var j = 0; j < length; j++) {
                line += parseInt(Math.random() * 16, 10).toString(16);
            }
            outputStr += line;
            outputStr += "\n";
        }

        let answer = document.getElementById("answer").value = outputStr;
    
}