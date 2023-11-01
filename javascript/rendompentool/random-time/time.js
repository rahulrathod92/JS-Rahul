function timeFun(){
    // var options = this.options.get();
        var howMany = document.getElementById('count').value;
        console.log("howMany",howMany)
        var format = document.getElementById('format').value;
        console.log("format",format)
        var startTimeStr =document.getElementById('start').value;
        console.log("startTimeStr",startTimeStr)
        var endTimeStr = document.getElementById('end').value;
        console.log("endTimeStr",endTimeStr)
        if (!/\d+:\d+:\d+/.test(startTimeStr)) {
            throw new Error("Invalid start time, doesn't match h:m:s");
        }
        if (!/\d+:\d+:\d+/.test(endTimeStr)) {
            throw new Error("Invalid end time, doesn't match h:m:s");
        }
        var startTimeH = parseInt(startTimeStr.split(':')[0], 10);
        var startTimeM = parseInt(startTimeStr.split(':')[1], 10);
        var startTimeS = parseInt(startTimeStr.split(':')[2], 10);
        var endTimeH = parseInt(endTimeStr.split(':')[0], 10);
        var endTimeM = parseInt(endTimeStr.split(':')[1], 10);
        var endTimeS = parseInt(endTimeStr.split(':')[2], 10);
        if (isNaN(startTimeH)) {
            throw new Error("Start time hour isn't a valid number");
        }
        if (isNaN(startTimeM)) {
            throw new Error("Start time minute isn't a valid number");
        }
        if (isNaN(startTimeS)) {
            throw new Error("Start time second isn't a valid number");
        }
        if (isNaN(endTimeH)) {
            throw new Error("End time hour isn't a valid number");
        }
        if (isNaN(endTimeM)) {
            throw new Error("End time minute isn't a valid number");
        }
        if (isNaN(endTimeS)) {
            throw new Error("End time second isn't a valid number");
        }
        if (startTimeH > 24) {
            throw new Error("Start time hour bigger than 24");
        }
        if (startTimeM > 60) {
            throw new Error("Start time minute bigger than 60");
        }
        if (startTimeS > 60) {
            throw new Error("Start time second bigger than 60");
        }
        if (endTimeH > 24) {
            throw new Error("End time hour bigger than 24");
        }
        if (endTimeM > 60) {
            throw new Error("End time minute bigger than 60");
        }
        if (endTimeS > 60) {
            throw new Error("End time second bigger than 60");
        }
        function randIntRange(start, end) {
            return parseInt(Math.random() * (end - start + 1) + start, 10).toString();
        }
        var startSecond = startTimeH * 3600 + startTimeM * 60 + startTimeS;
        var endSecond = endTimeH * 3600 + endTimeM * 60 + endTimeS;
        if (startSecond > endSecond) {
            throw new Error("Start time is bigger than end time");
        }
        var str = '';
        for (var i = 0; i < howMany; i++) {
            var randSec = randIntRange(startSecond, endSecond);
            var h = parseInt(randSec / 3600, 10);
            var hh = h;
            if (hh.toString().length == 1) {
                hh = "0" + hh;
            }
            var m = parseInt((randSec % 3600) / 60, 10);
            var mm = m;
            if (mm.toString().length == 1) {
                mm = "0" + mm;
            }
            var s = parseInt(randSec % 60, 10);
            var ss = s;
            if (ss.toString().length == 1) {
                ss = "0" + ss;
            }
            if (format == "hh-mm-ss") {
                str += hh + ":" + mm + ":" + ss;
            } else if (format == "h-m-s") {
                str += h + ":" + m + ":" + s;
            } else if (format == "custom") {
                var customFormat =document.getElementById('custom-format').value;
                var customStr = customFormat;
                customStr = customStr.replace("hh", hh);
                customStr = customStr.replace("h", h);
                customStr = customStr.replace("mm", mm);
                customStr = customStr.replace("m", m);
                customStr = customStr.replace("ss", ss);
                customStr = customStr.replace("s", s);
                str += customStr;
            }
            str += "\n";
        }
        let answer = str;
        console.log(answer)
        document.getElementById("answer").value = answer;
    
}