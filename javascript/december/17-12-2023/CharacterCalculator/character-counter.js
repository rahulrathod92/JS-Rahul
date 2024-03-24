function characterCounter() {
    let text = document.getElementById("inputTextarea").value;
    characterCounterLogic(text);
    characterWordCounter(text);
    paragraphCounter(text);
    sentencesCounter(text);
    CharacterswithoutSpacesCounter(text);
    uniqueWordsCounter(text);
    readingTimeCounter(text);
    speechTimeCounter(text);
}

function characterCounterLogic(text) {
        let charCount = text.length;
        document.getElementById("character-counter-ans").innerHTML = charCount;
    }


function characterWordCounter(text) {
    if (!text) {
        return 0;
    }
    let wordsArray = text.split(/\s+/);
    let str = wordsArray.length;
    document.getElementById("character-word-counter-ans").innerHTML = str;
}

function paragraphCounter(text) {
    var paragraphs = text.split(/\n\s*\n/);
    paragraphs = paragraphs.filter(function (paragraph) {
        return paragraph.trim() !== '';
    });

    let str = paragraphs.length;
    document.getElementById("character-paragraph-counter-ans").innerHTML = str;
}
function sentencesCounter(text) {
    if (!text) {
        return 0;
    }

    let sentenceArray = text.split(/[.?!]+/);
    let str = sentenceArray.length;
    document.getElementById("character-sentences-counter-ans").innerHTML = str;
}
function CharacterswithoutSpacesCounter(text) {
    let count = text.replace(/\s/g, '').length;
    let str = count;
    document.getElementById("character-Without-space").innerHTML = str;
}

function uniqueWordsCounter(text) {
    var words = text.split(/\s+/);


    words = words.filter(function (word) {
        return word.trim() !== '';
    });
    var uniqueWords = new Set(words).size;

    document.getElementById("unique-words-counter").innerHTML = uniqueWords;
};
function readingTimeCounter(text, wpm = 20, wordLength = 5) {
    if (!text) return { characters: 0, readingTime: 0 };
    const characterCount = text.length;
    const estimatedWords = Math.ceil(characterCount / wordLength); 
    const readingTime = estimatedWords / wpm;

    document.getElementById("reading-time").innerHTML =  readingTime.toFixed();
}

function speechTimeCounter(text, wpm = 225, speechRate = 20) {
    if (!text) return { characters: 0, speechTime: 0 };
    const characterCount = text.length;
    const estimatedWords = Math.ceil(characterCount / 5);
    const speechTime = estimatedWords / speechRate;
    document.getElementById("speech-time").innerHTML =speechTime.toFixed();
  }


