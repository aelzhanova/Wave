function wave(words) {
    if (typeof words !== 'string') {
        return "Incorrect type of string - string is null or undefined";
    }
    if (words.length === 0) {
        return "The string can't be empty!";
    }
    if (words.toLowerCase() !== words ) {
        return "The string should be in lower register";
    }
    let arrayOfWords = [];
    words = words.trim();
    let wordExp = /[a-z]/;
    let arrayOfLetters = words.split('');
    if (arrayOfLetters.every(elem => elem.match(wordExp) === null)) {
        return words;
    }
    for (let i = 0; i < words.length; i++) {
        let newArray = arrayOfLetters.slice();
        if (newArray[i].match(wordExp) === null ) {
            continue;
        }
        newArray[i] = newArray[i].toUpperCase();
        arrayOfWords[i] = newArray.join("");
    }
    arrayOfWords = arrayOfWords.filter(function (el) {
        return el !== '';
    });
    return arrayOfWords;
}
window.onload = init;

function init() {
    let words = prompt("Let's wave! Enter the word:");
    alert(this.wave(words));
}
