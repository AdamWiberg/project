class MyString {
    reverse(value) {
        if (typeof value == "string") {
            let length = value.length;
            let result = '';
            for (let i = length - 1; i >= 0; i--) {
                result = result + value.charAt(i);
            }
            return result;
        }
    }
    ucFirst(value) {
        // взять первый символ и сделать его заглавным
        // взять из исходной строки все кроме первой буквы
        // объединить две строки 1 и 2
        if (typeof value == 'string') {
            let firstLetter = value.charAt(0).toUpperCase();
            let strWithoutLetter = '';
            for (let i = 1; i < value.length; i++) {
                strWithoutLetter = strWithoutLetter + value.charAt(i);
            }
            return firstLetter + strWithoutLetter;

        }
    }
    ucWords(value) {
        if (typeof value == 'string') {
            let strings = value.split(' ');
            let result = '';
            for (let i = 0; i < strings.length; i++) {
               result = result + this.ucFirst(strings[i]) + ' ';
            
            }
            return result.trim();
        }
    }
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'