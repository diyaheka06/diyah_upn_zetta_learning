function ts(text1) {
    var result = '';
    text1.map(function (text, index) {
        result += (index ? ' ' : '') + text;
    });
    return result;
}
var case1 = [1, 'data', 3, 'result'];
var case2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(ts(case1));
console.log(ts(case2));
