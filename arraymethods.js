// forEach functions
// double values
function doubleValues(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

// only even values
function onlyEvenValues(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// show first and last
function showFirstAndLast(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const newString = array[i].charAt(0) + array[i].charAt(array[i].length - 1);
        newArray.push(newString);
    }
    return newArray;
}

// add key and value
function addKeyAndValue(array, key, value) {
    for (let i = 0; i < array.length; i++) {
        array[i][key] = value;
    }
    return array;
}

// vowel count
function vowelCount(string) {
    const vowelObject = {};
    const newString = string.toLowerCase();
    for (let i = 0; i < newString.length; i++) {
        switch (newString.charAt(i)) {
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
    }
    return vowelObject;v
}