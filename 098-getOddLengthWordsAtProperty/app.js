const getOddLengthWordsAtProperty = (obj, key) => obj[key].filter(word => word.length % 2 !== 0);