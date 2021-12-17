function getLine() {
    var test = document.querySelector('.test')
    var line = document.querySelector('[name=test-line]').value
    test.addEventListener('keydown', function (event) {
        const key = event.key;
        if (key === "Backspace") {
            line = line.substring(0, line.length - 1);
            // alert(key);
            console.log('line:', line);
            return false;
        }
    });

    console.log('line:', line);

}

var str = '12345'
var nstr = str.substring(0, str.length - 1)
console.log('str:', nstr);




    // String method(String str) {
    //     if (str != null && str.length() > 0 && str.charAt(str.length() - 1) == 'x') {
    //         str = str.substring(0, str.length() - 1);
    //     }
    //     return str;


