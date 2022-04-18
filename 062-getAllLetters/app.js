function getAllLetters(str) {
    letters = [];
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) !== ' '){
            letters.push(str.charAt(i));
        }
    }
    return letters;
}