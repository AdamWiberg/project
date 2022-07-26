// Класс как набор методов в ООП в JavaScript




// ЗАДАЧА №1



// Сделайте класс Validator,
//  который будет выполнять проверку строк на корректность.





class Validator {

// Сделайте в вашем классе метод isEmail, 
// проверяющий строку на то, что она корректный email.

    isEmail (str) {
        if (str == '') {
            console.log('Введите адрес почты');
            return false;
        }
        if (str.indexOf('.') == -1) {
            console.log('Нет символа\".\"'); 
            return false
        }
        if ((str.indexOf(",")>=0) || (str.indexOf(';') >= 0) || (str.indexOf(' ') >= 0))  {
            console.log('Адрес электронной почты был введен неправильно.')
            return false;
        }

        if (str.indexOf('@') == -1) {
            console.log('Нет символа\"@\"."')
            return false
        }
        if ((str  < 1 ) || (str > str.length - 5)) {
            console.log('Адрес электронной почты был введен неправильно.')
            return false;
        }
        if ((str.charAt(str - 1) == '.') || (str.charAt(str + 1) == '.')) {
            console.log('Адрес электронной почты был введен неправильно.')
            return false;
        } else {
            console.log('Адрес электронной почты был введен ВЕРНО!')
            return true
        }
    }




    isDomain (str) {
        if (str == ('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i')) {

            console.log('Имя домена корректное')
            return true
        } else {
            console.log('Имя домена не корректное!')
            return false
        }
    }

    // Сделайте в вашем классе метод isNumber, 
    // проверяющий строку на то, что она содержит только числа.

    isNumber (str) {
        if (!isNaN(parseFloat(str)) && isFinite(str)) {
            console.log('число')
            return true
        } else {
            console.log('не число')
            return false
        }
    }
}

let user = new Validator;
console.log(user.isDomain('https://vk.com'))




// console.log(str.user())













