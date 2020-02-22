module.exports = function toReadable (number) {
    let result = [];
    number.toString().split('').reverse().forEach((el, i, arr) => {
        if (i === 2) {
            el == 9 ? result.push('nine hundred') : '';
            el == 8 ? result.push('eight hundred') : '';
            el == 7 ? result.push('seven hundred') : '';
            el == 6 ? result.push('six hundred') : '';
            el == 5 ? result.push('five hundred') : '';
            el == 4 ? result.push('four hundred') : '';
            el == 3 ? result.push('three hundred') : '';
            el == 2 ? result.push('two hundred') : '';
            el == 1 ? result.push('one hundred') : '';
        }
        if (i === 1) {
            el == 9 ? result.push('ninety') : '';
            el == 8 ? result.push('eighty') : '';
            el == 7 ? result.push('seventy') : '';
            el == 6 ? result.push('sixty') : '';
            el == 5 ? result.push('fifty') : '';
            el == 4 ? result.push('forty') : '';
            el == 3 ? result.push('thirty') : '';
            el == 2 ? result.push('twenty') : '';
            if (el == 1) {
                arr[0] == 9 ? result.push('nineteen') : '';
                arr[0] == 8 ? result.push('eighteen') : '';
                arr[0] == 7 ? result.push('seventeen') : '';
                arr[0] == 6 ? result.push('sixteen') : '';
                arr[0] == 5 ? result.push('fifteen') : '';
                arr[0] == 4 ? result.push('fourteen') : '';
                arr[0] == 3 ? result.push('thirteen') : '';
                arr[0] == 2 ? result.push('twelve') : '';
                arr[0] == 1 ? result.push('eleven') : '';
                arr[0] == 0 ? result.push('ten') : '';
            }
        }
        if (i == 0 && arr[1] != 1) {
            el == 9 ? result.push('nine') : '';
            el == 8 ? result.push('eight') : '';
            el == 7 ? result.push('seven') : '';
            el == 6 ? result.push('six') : '';
            el == 5 ? result.push('five') : '';
            el == 4 ? result.push('four') : '';
            el == 3 ? result.push('three') : '';
            el == 2 ? result.push('two') : '';
            el == 1 ? result.push('one') : '';
            el == 0 && arr.length === 1? result.push('zero') : '';
        }
    });
    return result.reverse().join(' ')
}
