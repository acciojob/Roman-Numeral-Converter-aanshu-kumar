function convertToRoman(num) {
    // Define a mapping of Roman numerals to their integer values
    const romanMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let str = '';
    for (const key in romanMap) {
        while (num >= romanMap[key]) {
            console.log(`Adding ${key} and Subtracting ${romanMap[key]} from ${num}`);
            num -= romanMap[key];
            str += key;
        }
    }

    return str;
}
module.exports = convertToRoman
