function filterEvenLengthWords(words) {
    const ar = words.filter(w => w.length % 2 === 0);
    return ar;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']