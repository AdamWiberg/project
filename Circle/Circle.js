// Класс Circle в ООП в JavaScript




// ЗАДАЧА №1

// Сделайте класс Circle, который будет описывать круг.


class Circle {
    #radius

// Передайте в параметр конструктора радиус круга. Запишите его в приватное свойство.

    constructor(radius) {
        this.#radius = radius;
        
    }
    
    // Сделайте метод, который будет возвращать площадь круга.

    square () {

        return  Math.pow(this.#radius, 2) * Math.PI; // S=πr2
    }

    // Сделайте метод, который будет возвращать длину окружности.

    circumference () {

        return 2 * Math.PI * this.#radius; // 2 * π * r

    }   
}

let circle1 = new Circle(1) 



console.log(circle1.square());
console.log(circle1.circumference())








// ----------------------------------------------------------------------------------------



// ЗАДАЧА №2



// Класс Rectangle в ООП в JavaScript



// Сделайте класс Rectangle,
//  в котором в свойствах будут записаны ширина и высота прямоугольника.



class Rectangle {
   

// В классе Rectangle сделайте метод getSquare, 
// который будет возвращать площадь этого прямоугольника.

constructor (width, length) {
    this.width = width;
    this.length = length;
}

getSquare () {
    return this.width * this.length;
}


// В классе Rectangle сделайте метод getPerimeter,
//  который будет возвращать периметр этого прямоугольника.

getPerimeter () {
    return 2 * (this.length + this.width)
}


// В классе Rectangle сделайте метод getRatio,
//  который будет возращать площадь, деленную на периметр.


getRatio () {
    return this.getSquare() / this.getPerimeter() 
}

}

let result = new Rectangle(10, 10)

console.log(result.getSquare())
console.log(result.getPerimeter())
console.log(result.getRatio())









// ----------------------------------------------------------------------------------





// ЗАДАЧА №3



// Класс Text в ООП в JavaScript



// Сделайте класс Text, который будет выполнять некоторые манипуляции над текстом.
//  Пусть текст передается параметром конструктора.


class Text {

    constructor (text) {
        this.text = text;
    }

    // Сделайте метод, который вернет количество символов в тексте.

    characters () {
            return this.text.replace(/^ +| +$|() +/g,"$1").length - 1 // кол-во символов
    } 

    // Сделайте метод, который вернет количество букв в тексте.

    numberLetters () {
        return this.text.match(/[a-z]/g).length - 1  // кол-во букв в слове
    }

    // Сделайте метод, который вернет количество пробелов в тексте.

    trim () {
        return this.text.split(' ').length - 1
    }

    // Сделайте метод, который вернет количество символов в тексте за вычетом пробелов.

    // Сделайте метод, который вернет массив слов.

    array () {
        return this.text.replace(/^ +| +$|( ) +/g,"$1").split(' ')
    }

    // Сделайте метод, который вернет массив предложений.

    sentence () {
        return this.text.trim().split()
    }
}

let Text1 = new Text('  asfsdfnsfd  12345  afsdfsfasda');

console.log(Text1.characters()) // 27  символов
console.log(Text1.numberLetters()) // 20 букв
console.log(Text1.trim()) // 8 пробелов
console.log(Text1.array()) // массив слов (3)
console.log(Text1.sentence()) // массив предложения из строки в один массив










// ----------------------------------------------------------------------------------


// ЗАДАЧА №4

// Класс Period в ООП в JavaScript


// Сделайте класс Period, который будет находить разницу между двумя моментами времени. 
// Пусть эти моменты передаются параметрами конструктора.


class Period {

    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    // Сделайте метод, который вернет разницу между моментами в секундах.

    seconds () {
        return this.startTime - this.endTime
    }

    // Сделайте метод, который вернет разницу между моментами в минутах.

    minutes () {
        return this.startTime / 60 + this.endTime / 60
    }

    // Сделайте метод, который вернет разницу между моментами в часах.

    hours () {
        return this.startTime / 60 / 60 + this.endTime / 60 / 60
        // 0, 0277778                      // 0,0138
    }


    // Сделайте метод, который вернет разницу между моментами в днях.

    day () {

        return this.startTime / 60 /60 / 24 + this.endTime / 60 / 60 / 24
          // 0,0011574083                                   // 0, 000578703703
    }   

}

let result = new Period(100, 50);

console.log(result.seconds() + ' секунд(а)') // разница в секундах
console.log(result.minutes() + ' разница в минутах') // разница в минутах
console.log(result.hours() + ' разница в часах')  // разнциа в часах
console.log(result.day() + ' разница в сутках') // разнциа в сутках 0.0017361111111111114














// ----------------------------------------------------------------------------------


// ЗАДАЧА №5

// Класс Zate в ООП в JavaScript



// Сделайте класс Zate, который будет представлять собой дату. 
// Пусть конструктор этого класса параметрами принимает год, месяц и день даты.



class Zate {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // Сделайте метод, который вернет год.

    getYear () {
         return this.year; // получение текущего года
    }


// Сделайте метод, который вернет номер месяца.

    getMonth () {
        return this.month;
    }



// Сделайте метод, который вернет день месяца.

    getDate () {
        return this.day;
    }


    // Сделайте метод, который вернет номер дня недели.

    getDayNumber () {
        return new Date().getDay()
    }

    // Сделайте метод, который вернет название дня недели.

    getDays () {
        let days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];
        
        let a = new Date().getDay();

        return days[a]
    }

    // Сделайте метод, который вернет название месяца.

    getMonthName () {
        let month = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Ноябрь',
            'Декабрь',
        ];

        let a = new Date().getMonth();
        return month[a];
            
    }
    
}


let result = new Zate(new Date().getFullYear(), new Date().getMonth() + 1,
new Date().getDate())


console.log(result.getYear()) // текущий год
console.log(result.getMonth()) // текущий номер месяца
console.log(result.getDate()) // текущий день месяца
console.log(result.getDayNumber()) // текущий номер дня недели
console.log(result.getDays()) // текущий день названия недели
console.log(result.getMonthName()) // текущее названия месяца





// // ЗАДАЧА №6

// // Класс ZateExt в ООП в JavaScript




// // Сделайте класс ZateExt, который будет наследовать от класса Zate из предыдущего
// //  урока и расширять его некоторыми методами.




class ZateExt extends Zate {

      constructor(year, month, day, startDate, endDate,) {
        super(year, month, day)
        this.startDate = startDate;
        this.endDate = endDate;
     
      }
    // Сделайте метод, который будет прибавлять к дате заданное количество лет.

    stDate () {
        return new Date().getFullYear() + this.year
    }

    // Сделайте метод, который будет отнимать от даты заданное количество лет.

    enDate() {
        return new Date().getFullYear() - this.year
    }

    // Сделайте метод, который будет прибавлять к дате заданное количество месяцев.

    adMonth () {
      if (this.month <= 12) {

        // >= больше или равно
        // <= меньше или равно
        // 13 <= 12
        return new Date().getMonth() + this.month + 1
      } else {
        console.error('Ошибка')
      }
            

    }

    // Сделайте метод, который будет отнимать от даты заданное количество месяцев.

    enMonth () {
        return new Date().getMonth() - this.month + 1
    }

}

let resul = new ZateExt(3,4)

console.log(resul.stDate());
console.log(resul.enDate());
console.log(resul.adMonth())
console.log(resul.enMonth())












// ----------------------------------------------------------------------------------------------

// ЗАДАЧа №7

// Класс Month в ООП в JavaScript


// Сделайте класс Month, который будет представлять собой месяц. 
// Пусть конструктор этого класса параметром принимает номер месяца.


class Month {
    constructor(num) {
        this.num = num
    }

    // Сделайте метод, который вернет номер месяца.

    getMonth () {
        return this.num
    }

    // Сделайте метод, который вернет название месяца.

    getNameMonth () {
        let months = [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь'
        ];

        let a = new Date().getMonth();
        return months[a]
    }

    // Сделайте метод, который вернет номер последнего дня месяца.

    numberLastMonth () {
       // Получить текущее время
       let date = new Date()
       // Получить текущий месяц
       let month = date.getMonth()
        // получить следующий месяц
       let nextmonth = month + 1
       // получить первый день января
       let nextmonthfirstday = new Date(date.getFullYear(), nextmonth, 1);
       // Однажды в миллисекундах
       let oneday = 1 * 24 * 3600 * 1000; 
       // Первый день следующего месяца - последний день текущего месяца.
       var lasttime = new Date(nextmonthfirstday-oneday);
       // возвращаем полученное
       return lasttime.getDate()
    }


    // Сделайте метод, который вернет номер дня недели первого дня месяца.

    numDayMonth() {
        let days = [
            'воскресенье',
            'понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота'
        ];

        let date = new Date(172800).getDay()

        return days[date]
       
    }


    // Сделайте метод, который вернет номер дня недели последнего дня месяца.

    lastMonth () {
        let day = [
            'воскресенье',
            'понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота'
        ];

        let dat = new Date('03.09.2022').getDay()  

        return dat
    }
}


let result = new Month(new Date().getMonth()) // 8 номер - сентябрь

console.log(result.getMonth())
console.log(result.getNameMonth())
console.log(result.numberLastMonth())
console.log(result.numDayMonth())
console.log(result.lastMonth())
















































































































































