function binariesFun(){
   
        var length = Number(document.getElementById("length").value);
        var howMany =Number(document.getElementById("count").value);
        var outputStr = '';
        for (var i = 0; i < howMany; i++) {
            var line = '';
            for (var j = 0; j < length; j++) {
                line += parseInt(Math.random() * 2, 10).toString();
            }
            outputStr += line;
            outputStr += "\n";
        }
        let answer = outputStr;
        document.getElementById("answer").value = answer;
    }
