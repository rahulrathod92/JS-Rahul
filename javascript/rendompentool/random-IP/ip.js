function ipgenerator() {
    // var options = this.options.get();
    var startIp = document.getElementById("start").value;
    console.log("startIp", startIp)
    var endIp = document.getElementById("end").value;
    console.log("endIp", endIp)
    var howMany = document.getElementById("count").value;
    console.log("howmany", howMany)
    var startIpDec = ipToDec(startIp);
    var endIpDec = ipToDec(endIp);
    var str = ''; for (var i = 0; i < howMany; i++) {
        str += decToIp(randRange(startIpDec, endIpDec));
        if (i != howMany - 1) str += "\n";
    }
    let answer = str;
    console.log("answer", answer)
    document.getElementById("answer").value = answer;
}

function randRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
function ipToDec(ip) {
    var parts = ip.split('.');
    var dec = parseInt(parts[0]) * 256 * 256 * 256 +
        parseInt(parts[1]) * 256 * 256 +
        parseInt(parts[2]) * 256 +
        parseInt(parts[3]);
    return dec;
}

function decToIp(dec) {
    var ip = ((dec >> 24) & 0xff) + '.' +
        ((dec >> 16) & 0xff) + '.' +
        ((dec >> 8) & 0xff) + '.' +
        (dec & 0xff);
    return ip
}




