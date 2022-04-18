function filterOddLengthWords(words) {
    return words.filter(w => w.length % 2 !== 0);
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']