// forEach functions
// double values
function doubleValues(array) {
    const newArray = [];
    array.forEach((el) => {
        newArray.push(el * 2);
    });
    return newArray;
}

// only even values
function onlyEvenValues(array) {
    const newArray = [];
    array.forEach((el) => {
        if (el % 2 == 0) {
            newArray.push(el)
        }
    });
    return newArray;
}

// show first and last
function showFirstAndLast(array) {
    const newArray = [];
    array.forEach((el) => {
        const newString = el[0] + el[el.length - 1];
        newArray.push(newString);
    });
    return newArray;
}

// add key and value
function addKeyAndValue(array, key, value) {
    array.forEach((el) => {
        el[key] = value;
    });
    return array;
}

// vowel count
function vowelCount(string) {
    const newArray = string.split('');
    const vowelObject = {};
    newArray.forEach((el) => {
        let lowerCaseEl = el.toLowerCase();
        switch (lowerCaseEl) {
            case 'a':
                if (!vowelObject['a']) {
                    vowelObject['a'] = 1;
                } else {
                    vowelObject['a'] += 1;
                }
                break;
            case 'e':
                if (!vowelObject['e']) {
                    vowelObject['e'] = 1;
                } else {
                    vowelObject['e'] += 1;
                }
                break;
            case 'i':
                if (!vowelObject['i']) {
                    vowelObject['i'] = 1;
                } else {
                    vowelObject['i'] += 1;
                }
                break;
            case 'o':
                if (!vowelObject['o']) {
                    vowelObject['o'] = 1;
                } else {
                    vowelObject['o'] += 1;
                }
                break;
            case 'u':
                if (!vowelObject['u']) {
                    vowelObject['u'] = 1;
                } else {
                    vowelObject['u'] += 1;
                }
                break;
        }
    });
    return vowelObject;
}


// map functions
// double values with map
function doubleValuesWithMap(array) {
    return array.map((el) => {
        return el * 2;
    });
}

// val times index
function valTimesIndex(array) {
    return array.map((el, i) => {
        return el * i;
    });
}

// extract key
function extractKey(array, key) {
    return array.map((el) => {
        return el[key];
    });
}

// extract full name
function extractFullName(array) {
    return array.map((el) => {
        return `${el['first']} ${el['last']}`;
    });
}


// filter functions
// filter by value
function filterByValue(array, key) {
    return array.filter((el) => {
        if (el[key]) {
            return el;
        }
    });
}

// find
function find(array, value) {
    return array.filter((el) => {
        if (el == value) {
            return el;
        }
    })[0];
}

// find in object
function findInObj(array, key, value) {
    return array.filter((el) => {
        if (el[key] == value) {
            return el;
        }
    })[0];
}

// remove vowels
function removeVowels(string) {
    const vowels = 'aeiou';
    return string
      .toLowerCase()
      .split('')
      .filter((el) => {
        return vowels.indexOf(el) === -1;
      })
      .join('');
  }

// double odd numbers
function doubleOddNumbers(array) {
    return array
    .filter((el) => {
        if (el % 2 == 1) {
            return el;
        }
    })
    .map((el) => {
        return el * 2;
    });
}