function sampleFun() {
    let example = " There is no friend as loyal as a book. (Hemingway)";
    document.getElementById("inputteaxtarea").value = example;

    let padding = document.getElementById("padding").checked = true;
    let space = document.getElementById("spacing").checked = true;
      
}



function stringToBytesFun() {
    let text = document.getElementById("inputteaxtarea").value;
    let answer = stringBytesLogic(text);
    console.log("answer:->", answer)
    document.getElementById("answer").value = answer;
}

function stringBytesLogic(text) {

    var tool = this;
    // var options = tool.options.get();
    var base = 16 || 10;
    if (base < 1 || base > 36 || isNaN(base)) {
        tool.output.showNegativeBadge("Can't convert", "Base {0} is not supported yet.");
        return "";
    }
    var prefix = undefined;
    var padding = document.getElementById("padding").checked;
    padding = padding === undefined ? true : padding;
    console.log("padding:->", padding)

    var space = document.getElementById("spacing").checked;

    space = (space ? " " : "");
    console.log("space:->", space)


    var singlebyte = true;
    var outputEncoding = "utf8";
    var bom = false;

    var bytes = [];
    if (singlebyte) {
        if (typeof utf8 === "undefined") {
            tool.output.showNegativeBadge("Can't convert singlebyte", "UTF-8 library is not defined.");
            return "";
        }
        var encoded = utf8.encode(text);
        for (var i = 0; i < encoded.length; i++) {
            var byte = encoded[i].charCodeAt(0);
            bytes.push(byte);
        }
    } else {
        if (typeof StringCode === "undefined") {
            tool.output.showNegativeBadge("Can't convert multibyte", "StringCode library is not defined.");
            return "";
        }
        bytes = StringCode.of(text);
    }
    var units = [];
    if (outputEncoding == "utf8") {
        units = bytes;
    } else if (outputEncoding == "utf16be" || outputEncoding == "ucs2be") {
        units = utf8ToUtf16(bytes, "be", bom);
    } else if (outputEncoding == "utf16le" || outputEncoding == "ucs2le") {
        units = utf8ToUtf16(bytes, "le", bom);
    } else if (outputEncoding == "utf32be" || outputEncoding == "ucs4be") {
        units = utf8ToUtf32(bytes, "be", bom);
    } else if (outputEncoding == "utf32le" || outputEncoding == "ucs4le") {
        units = utf8ToUtf32(bytes, "le", bom);
    }
    var converted = [];
    if (base == 1) {
        converted = unitsToBase1(units);
    } else if (base == 2) {
        converted = unitsToBase2(units, outputEncoding, padding);
    } else if (base == 8) {
        converted = unitsToBase8(units, outputEncoding, padding);
    } else if (base == 10) {
        converted = unitsToBase10(units, outputEncoding, padding);
    } else if (base == 16) {
        converted = unitsToBase16(units, outputEncoding, padding, prefix);
    } else {
        converted = unitsToBaseX(units, base, outputEncoding, padding);
    }
    return converted.join(space);
}

function unitsToBaseX(units, base, outputEncoding, padding) {
    var ret = [];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        var baseXUnit = unit.toString(base);
        if (padding) {
            if (outputEncoding == "utf8") {
                baseXUnit = padToByteLength(baseXUnit, base);
            } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
                if (unit <= 0xFFFF) {
                    baseXUnit = padToWordLength(baseXUnit, base);
                } else {
                    baseXUnit = padToDoubleWordLength(baseXUnit, base);
                }
            } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
                baseXUnit = padToDoubleWordLength(baseXUnit, base);
            }
        }
        ret.push(baseXUnit);
    }
    return ret;
}
function unitsToBase16(units, outputEncoding, padding, prefix) {
    var ret = [];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (padding) {
            if (outputEncoding == "utf8") {
                var hexUnit = unit.toString(16);
                while (hexUnit.length < 2) {
                    hexUnit = '0' + hexUnit;
                }
            } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
                if (unit.length == 1) {
                    var hexUnit = unit[0].toString(16);
                    while (hexUnit.length < 4) {
                        hexUnit = '0' + hexUnit;
                    }
                } else {
                    var hexUnit2 = unit[0].toString(16);
                    var hexUnit1 = unit[1].toString(16);
                    while (hexUnit2.length < 4) {
                        hexUnit2 = '0' + hexUnit2;
                    }
                    while (hexUnit1.length < 4) {
                        hexUnit1 = '0' + hexUnit1;
                    }
                    var hexUnit = hexUnit2 + hexUnit1;
                }
            } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
                var hexUnit4 = unit[0].toString(16);
                var hexUnit3 = unit[1].toString(16);
                var hexUnit2 = unit[2].toString(16);
                var hexUnit1 = unit[3].toString(16);
                while (hexUnit4.length < 2) {
                    hexUnit4 = '0' + hexUnit4;
                }
                while (hexUnit3.length < 2) {
                    hexUnit3 = '0' + hexUnit3;
                }
                while (hexUnit2.length < 2) {
                    hexUnit2 = '0' + hexUnit2;
                }
                while (hexUnit1.length < 2) {
                    hexUnit1 = '0' + hexUnit1;
                }
                var hexUnit = hexUnit4 + hexUnit3 + hexUnit2 + hexUnit1;
            }
        } else {
            if (outputEncoding == "utf8") {
                var hexUnit = unit.toString(16);
            } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
                if (unit.length == 1) {
                    var hexUnit = unit[0].toString(16);
                } else {
                    var hexUnit2 = unit[0].toString(16);
                    var hexUnit1 = unit[1].toString(16);
                    var hexUnit = hexUnit2 + hexUnit1;
                }
            } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
                var hexUnit4 = unit[0].toString(16);
                var hexUnit3 = unit[1].toString(16);
                var hexUnit2 = unit[2].toString(16);
                var hexUnit1 = unit[3].toString(16);
                var hexUnit = hexUnit4 + hexUnit3 + hexUnit2 + hexUnit1;
            }
        }
        if (prefix) {
            hexUnit = "0x" + hexUnit;
        }
        ret.push(hexUnit);
    }
    return ret;
}
function unitsToBase10(units, outputEncoding, padding) {
    var ret = [];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (outputEncoding == "utf8") {
            var decUnit = unit.toString(10);
        } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
            if (unit.length == 1) {
                var decUnit = unit[0].toString(10);
            } else {
                var decUnit2 = unit[0].toString(10);
                var decUnit1 = unit[1].toString(10);
                var decUnit = decUnit2 + decUnit1;
            }
        } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
            var decUnit4 = unit[0].toString(10);
            var decUnit3 = unit[1].toString(10);
            var decUnit2 = unit[2].toString(10);
            var decUnit1 = unit[3].toString(10);
            var decUnit = decUnit4 + decUnit3 + decUnit2 + decUnit1;
        }
        ret.push(decUnit);
    }
    return ret;
}
function unitsToBase8(units, outputEncoding, padding) {
    var ret = [];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (padding) {
            if (outputEncoding == "utf8") {
                var octalUnit = unit.toString(8);
                while (octalUnit.length < 3) {
                    octalUnit = '0' + octalUnit;
                }
            } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
                if (unit.length == 1) {
                    var octalUnit = unit[0].toString(8);
                    while (octalUnit.length < 6) {
                        octalUnit = '0' + octalUnit;
                    }
                } else {
                    var octalUnit2 = unit[0].toString(8);
                    var octalUnit1 = unit[1].toString(8);
                    while (octalUnit2.length < 6) {
                        octalUnit2 = '0' + octalUnit2;
                    }
                    while (octalUnit1.length < 6) {
                        octalUnit1 = '0' + octalUnit1;
                    }
                    var octalUnit = octalUnit2 + octalUnit1;
                }
            } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
                var octalUnit4 = unit[0].toString(8);
                var octalUnit3 = unit[1].toString(8);
                var octalUnit2 = unit[2].toString(8);
                var octalUnit1 = unit[3].toString(8);
                while (octalUnit4.length < 3) {
                    octalUnit4 = '0' + octalUnit4;
                }
                while (octalUnit3.length < 3) {
                    octalUnit3 = '0' + octalUnit3;
                }
                while (octalUnit2.length < 3) {
                    octalUnit2 = '0' + octalUnit2;
                }
                while (octalUnit1.length < 3) {
                    octalUnit1 = '0' + octalUnit1;
                }
                var octalUnit = octalUnit4 + octalUnit3 + octalUnit2 + octalUnit1;
            }
        } else {
            if (outputEncoding == "utf8") {
                var octalUnit = unit.toString(8);
            } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
                if (unit.length == 1) {
                    var octalUnit = unit[0].toString(8);
                } else {
                    var octalUnit2 = unit[0].toString(8);
                    var octalUnit1 = unit[1].toString(8);
                    var octalUnit = octalUnit2 + octalUnit1;
                }
            } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
                var octalUnit4 = unit[0].toString(8);
                var octalUnit3 = unit[1].toString(8);
                var octalUnit2 = unit[2].toString(8);
                var octalUnit1 = unit[3].toString(8);
                var octalUnit = octalUnit4 + octalUnit3 + octalUnit2 + octalUnit1;
            }
        }
        ret.push(octalUnit);
    }
    return ret;
}
function unitsToBase2(units, outputEncoding, padding) {
    var ret = [];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        if (padding) {
            if (outputEncoding == "utf8") {
                var binaryUnit = unit.toString(2);
                while (binaryUnit.length < 8) {
                    binaryUnit = '0' + binaryUnit;
                }
            } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
                if (unit.length == 1) {
                    var binaryUnit = unit[0].toString(2);
                    while (binaryUnit.length < 16) {
                        binaryUnit = '0' + binaryUnit;
                    }
                } else {
                    var binaryUnit2 = unit[0].toString(2);
                    var binaryUnit1 = unit[1].toString(2);
                    while (binaryUnit2.length < 16) {
                        binaryUnit2 = '0' + binaryUnit2;
                    }
                    while (binaryUnit1.length < 16) {
                        binaryUnit1 = '0' + binaryUnit1;
                    }
                    var binaryUnit = binaryUnit2 + binaryUnit1;
                }
            } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
                var binaryUnit4 = unit[0].toString(2);
                var binaryUnit3 = unit[1].toString(2);
                var binaryUnit2 = unit[2].toString(2);
                var binaryUnit1 = unit[3].toString(2);
                while (binaryUnit4.length < 8) {
                    binaryUnit4 = '0' + binaryUnit4;
                }
                while (binaryUnit3.length < 8) {
                    binaryUnit3 = '0' + binaryUnit3;
                }
                while (binaryUnit2.length < 8) {
                    binaryUnit2 = '0' + binaryUnit2;
                }
                while (binaryUnit1.length < 8) {
                    binaryUnit1 = '0' + binaryUnit1;
                }
                var binaryUnit = binaryUnit4 + binaryUnit3 + binaryUnit2 + binaryUnit1;
            }
        } else {
            if (outputEncoding == "utf8") {
                var binaryUnit = unit.toString(2);
            } else if (outputEncoding == "utf16le" || outputEncoding == "utf16be" || outputEncoding == "ucs2le" || outputEncoding == "ucs2be") {
                if (unit.length == 1) {
                    var binaryUnit = unit[0].toString(2);
                } else {
                    var binaryUnit2 = unit[0].toString(2);
                    var binaryUnit1 = unit[1].toString(2);
                    while (binaryUnit1.length < 16) {
                        binaryUnit1 = '0' + binaryUnit1;
                    }
                    var binaryUnit = binaryUnit2 + binaryUnit1;
                }
            } else if (outputEncoding == "utf32le" || outputEncoding == "utf32be" || outputEncoding == "ucs4le" || outputEncoding == "ucs4be") {
                var binaryUnit4 = unit[0].toString(2);
                var binaryUnit3 = unit[1].toString(2);
                var binaryUnit2 = unit[2].toString(2);
                var binaryUnit1 = unit[3].toString(2);
                if (unit[0] != 0) {
                    var padStart = 3;
                } else if (unit[1] != 0) {
                    var padStart = 2;
                } else if (unit[2] != 0) {
                    var padStart = 1;
                } else {
                    var padStart = 0;
                }
                if (padStart == 3) {
                    while (binaryUnit3.length < 8) {
                        binaryUnit3 = '0' + binaryUnit3;
                    }
                    while (binaryUnit2.length < 8) {
                        binaryUnit2 = '0' + binaryUnit2;
                    }
                    while (binaryUnit1.length < 8) {
                        binaryUnit1 = '0' + binaryUnit1;
                    }
                } else if (padStart == 2) {
                    while (binaryUnit2.length < 8) {
                        binaryUnit2 = '0' + binaryUnit2;
                    }
                    while (binaryUnit1.length < 8) {
                        binaryUnit1 = '0' + binaryUnit1;
                    }
                } else if (padStart == 1) {
                    while (binaryUnit1.length < 8) {
                        binaryUnit1 = '0' + binaryUnit1;
                    }
                }
                if (unit[0] != 0) {
                    var binaryUnit = binaryUnit4 + binaryUnit3 + binaryUnit2 + binaryUnit1;
                } else if (unit[1] != 0) {
                    var binaryUnit = binaryUnit3 + binaryUnit2 + binaryUnit1;
                } else if (unit[2] != 0) {
                    var binaryUnit = binaryUnit2 + binaryUnit1;
                } else if (unit[3] != 0) {
                    var binaryUnit = binaryUnit1;
                }
            }
        }
        ret.push(binaryUnit);
    }
    return ret;
}
function unitsToBase1(units) {
    var ret = [];
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        var unaryUnit = '';
        for (var j = 0; j < unit; j++) {
            unaryUnit = unaryUnit + "1";
        }
        ret.push(unaryUnit);
    }
    return ret;
}
function padToByteLength(string, base) {
    var requiredLength = byteLength(base);
    while (string.length < requiredLength) {
        string = "0" + string;
    }
    return string;
}
function padToWordLength(string, base) {
    var requiredLength = wordLength(base);
    while (string.length < requiredLength) {
        string = "0" + string;
    }
    return string;
}
function padToDoubleWordLength(string, base) {
    var requiredLength = doubleWordLength(base);
    while (string.length < requiredLength) {
        string = "0" + string;
    }
    return string;
}
function byteLength(base) {
    var byte = 255;
    if (base == 1) {
        return byte;
    } else {
        return byte.toString(base).length;
    }
}
function wordLength(base) {
    var word = 65535;
    if (base == 1) {
        return word;
    } else {
        return word.toString(base).length;
    }
}
function doubleWordLength(base) {
    var doubleWord = 4294967295;
    if (base == 1) {
        return doubleWord;
    } else {
        return doubleWord.toString(base).length;
    }
}