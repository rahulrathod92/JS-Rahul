function sampleStringSorter() {
    let sample = `Pineapple
Watermelon
Grapes
Kiwi
Apple
Banana
Orange
Cherry
Blueberry
Raspberry`;
    document.getElementById("inputTextarea").value = sample;
    stringtosorter();
}
function stringtosorter() {
    let text = document.getElementById("inputTextarea").value;
    let answer = stringSorterLogic(text);
    document.getElementById("outputTextarea").value = answer;
    console.log(answer)
}
function stringSorterLogic(inputString) {
    let charArray = inputString.split(/\s+/);
    let sortedArray = charArray.sort();
    let sortedString = sortedArray.join('\n');
    return sortedString;
}