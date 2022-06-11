// Работа с объектом Date в JavaScript


let date = new Date();

console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
console.log(date.getDate());     // день

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды
 

let date = new Date() 

console.log(date.getDate());
console.log(date.getMonth())
console.log(date.getFullYear())





// -------------------------------------------------------------------------



// Форматирование даты в JavaScript


function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}


let date = new Date();
console.log(addZero(date.getFullYear()) + 
+ '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()));





















                                     // ЗАДАЧА №1



// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей 
// даты (кроме года) созданную нами функцию для добавления нуля при необходимости.


let date = new Date();


function addZero(num) {
    if(num >= 0 && num <= 9) {
        return '0' + num
    } else {
        return num
    }
}
console.log(date.getHours() + ':' + addZero(date.getMinutes() + ':' + addZero(date.getSeconds())))

console.log(addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear())







// Преобразование формата даты



                                      // ЗАДАЧА №2

//  2022-06-07
// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.




let str = '2022-06-07'
let arr = str.split('-')
let result = arr[2] + '.' + arr[1] + '.' + arr[0]
console.log(result)



















// Получения дня недели на JavaScript




let date = new Date();
console.log(date.getDay());






                                        // ЗАДАЧА 2

// Определите, является ли текущий день недели выходным или рабочим днем.



let date = new Date();

if(date.getDay() == 6, 0) {
    console.log('Является выходным днем!')

    } if (date.getDay() == 1, 5) {
    console.log('Рабочий')
} else {
    console.log('не рабочий')
}










                                       // ЗАДАЧА №3



// Определите сколько дней осталось до ближайшего воскресенья.





function date() {
return 7 - new Date().getDay()
}

console.log('Осталось' + ' ' + date() + ' ' + 'дней')













// -------------------------------------------------------------------


// Вывод частей даты словом в JavaScript


let date = new Date();

let day = date.getMonth()

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

console.log(months[day])

// Выведите с помощью этого массива название текущего месяца.








// Установка времени в объекте Date в JavaScript



                                        // ЗАДАЧА №1



// Узнайте, какой день недели был в ваш день рождения.

let date = new Date(15, 12, 2021);


let day = date.getDay()

let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day])




// -------------------------------------------------------------------



// Работа с getTime

                                    // ЗАДАЧА 



// Выведите на экран timestamp, соответствующий дате 1 января 2025 года.


let date = new Date(2020, 1, 1)


console.log(date.getTime())










                                      // ЗАДАЧА №2



// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.




let date = new Date(2000, 1, 10)

let result = new Date(1988, 3, 1)


let diff = date.getTime() - result.getTime()


let seconds = diff / 1000; // секунды

let minutes = seconds / 60; // минуты

let hours = minutes / 60; // часы

let days = hours / 24 // дни













                                      // ЗАДАЧА №3



// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом 
// времени.



let date = new Date(1998, 12, 15);

let now = new Date();

let diff = now.getTime() - date.getTime()


let seconds = diff / 1000 // секунды
let minutes = seconds / 60 // минуты
let hours = minutes / 60 // часы
let days = hours / 24 // дни
let month = days / 30 // месяцы




console.log(Math.ceil((month) * 1) / 1)







// -------------------------------------------------------------





// Разница между объектами с датой в JavaScript






                                     // ЗАДАЧА №1


// Выведите на экран количество миллисекунд, 
// прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.




let date = new Date(2000, 8, 1)

let now = new Date(2010, 1, 15)



let diff = now - date


let seconds = diff / 1000 // секунды

let minutes = seconds / 60 // минуты

let hours = minutes / 60 // часы

let days = hours / 24 // дни


                                       // ЗАДАЧА №2



// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.

console.log(days)

let month = days / 7 // недели

let m = month / 30

let monh = days / 30 // месяцы

// // ЗАДАЧА №3

// // Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.


console.log(month)
console.log(monh)

let year = monh / 12 // год


console.log(year)







// --------------------------------------------------------------------







// Автоматическая корректировка дат в JavaScript






                                      // ЗАДАЧА №1



// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 1, 35); // год, месяц, день
console.log(date); // какая дата будет?  2018 год , март, 7





                                          // ЗАДАЧА №2



// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 15, 1);
console.log(date); // какая дата будет? 2019 год, апрель, 1








                                     // ЗАДАЧА №3



// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 3, 31); // год, месяц, день
console.log(date); // какая дата будет? 2018 год, май , 1










                                        // ЗАДАЧА №4



// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 1, 31);
console.log(date); // какая дата будет? 2018 год, март, 3







                                        // ЗАДАЧА №5



// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 12, 33);
console.log(date); // какая дата будет? 2019 год, февраль 2







                                         // ЗАДАЧА №6



// Определите, в какую дату JavaScript преобразует следующий момент времени:




let date = new Date(2018, 33, 33); // 11
console.log(date); // какая дата будет? 2020, год ноябрь, 2 









                                          // ЗАДАЧА №7



// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 5, 0);
console.log(date); // какая дата будет? 2018 год, 31 мая







                                     // ЗАДАЧА №8



// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 0, 0);
console.log(date); // какая дата будет? 2017 год, 31 декабря











                                             // ЗАДАЧА №9


// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, -12, -33);
console.log(date); // какая дата будет?  2016 год, ноябрь 28















                                // Часы, минуты, секунды


                                    // ЗАДАЧА №10


// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 0, 1, 23, 0, 60); // год , месяц, день, часы минуты, секунды
console.log(date); // какая дата будет?  2018, январь, 1, 23 , 1 минута, 0









                                        // ЗАДАЧА №11


// Определите, в какую дату JavaScript преобразует следующий момент времени:



let date = new Date(2018, 0, 1, 23, 60, 0);
console.log(date); // какая дата будет?  2018 год, январь, 2 число, 00 часов, 00 минут, 00 сек











                                   // ЗАДАЧА №12




// Определите, в какую дату JavaScript преобразует следующий момент времени:



// 24 часа 1 - день
// 48 часов 2 день
// 72 часа - 3 дня
// 96 часов - 4 дня == 4,16667 дней
 
// 100 минут - 6000 секунд == 1,66667 часов
// 100 секунд - 1,66667 минут

let date = new Date(2018, 0, 1, 100, 100, 100); 
console.log(date); // какая дата будет?  2018 год, январь, 5 число, 05 часа, 41 минуты 40 секунд









// --------------------------------------------------------------------------------------







// Нахождение последнего дня месяца в JavaScript




                                          // ЗАДАЧА №1



  console.log(date.getDate());

Оформите этот способ решения проблемы в виде функции, которая параметрами 
будет принимать месяц и год и возвращать номер последнего дня этого месяца.



function func (year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate()
}

console.log(func(2020, 1));














                                         // ЗАДАЧА №2



// Определите, какой день недели будет в последнем дне пятого месяца 2025 года.


let arr = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
function func(year, month) {

     let date = new Date(year, month  , 0)

     let day = date.getDay()

     let result = arr[day]

  console.log(result)
  console.log(date)
  console.log(day)
}
 



func(2025, 5)






// Определение високосного года





                                        // ЗАДАЧА №4



// Сделайте функцию isLeap, которая параметром будет принимать 
// год и возвращать true, если этого год високосный, и false - если нет.





function isLeap (year) {
    
    if(year % 4 === 0) {
       return true;
    } else {
        return false;
    }
}

    

console.log(isLeap(2024))
















// -----------------------------------------------------------------------



// Проверка корректности даты в JavaScript










                                     // ЗАДАЧА №1



// Сделайте функцию checkDate, которая будет выполнять описанную проверку. 
// Пусть функция возвращает true, если дата корректна и false, если нет.
//  Пример работы этой функции для 31 января и 32 января:


function checkDate(year, month, day) {
    let date = new Date(year, month, day);
    
    if(date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
       return true
    }else {
        return false
    }
}

console.log(checkDate(2025, 0, 25)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false



















// ------------------------------------------------------------------------------------



// Получение моментов времени в JavaScript








                                        // ЗАДАЧА №1



// Определите, какой день недели будет 31 декабря текущего года.

let arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
let date = new Date();

let now = new Date(date.getFullYear(), 11, 31)


console.log(now.getDay())







                                             // ЗАДАЧА №2



// Определите, какой день недели будет 1 числа текущего месяца.

let arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

    let date = new Date();

    let now = new Date(date.getFullYear(), date.getMonth(), 1)
    let day = now.getDay()
    let result = arr[day]
    console.log(now)
    console.log(result)















// ----------------------------------------------------------------------------------------

// День следующего или предыдущего года


                                       // ЗАДАЧА №3   



// Определите, какой день недели будет 31 декабря следующего года.



let arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
let date = new Date()

let now = new Date(date.getFullYear() + 1, 11, 31)

let day = now.getDay()

let result = arr[day]

console.log(result)






                                          // ЗАДАЧА №4



// Определите, какой день недели будет через год в такую же дату, как сегодня.


let arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
let now = new Date()

let date = new Date(now.getFullYear() + 1, 5, 10)

let day = date.getDay()

let result = arr[day]

console.log(result)

console.log(day)

console.log(date)












                                         // ЗАДАЧА №5



// Определите, какой день недели был год назад в такую же дату, как сегодня.





let arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
let now = new Date()

let date = new Date(now.getFullYear() - 1, 5, 10)

let day = date.getDay()

let result = arr[day]

console.log(result)

console.log(day)

console.log(date)








// ------------------------------------------------------------------------------------










// День следующего или предыдущего месяца




                                              // ЗАДАЧА №6




let now = new Date();

let date = new Date(now.getFullYear(), now.getMonth() - 6, 1);
console.log(date.getDay());







// Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

let arr = ['вс', 'пн', 'вт']

let date = new Date()

let now = new Date(date.getMonth() - 1, 10)

console.log(arr[now.getDay()])






// ----------------------------------------------------------------------------




// Разность моментов






                                              // ЗАДАЧА №8

// Определите, сколько дней между 1 января и 10 сентября текущего года.


let date = new Date ()

let jan = new Date(date.getFullYear(), 0, 1)

let sen = new Date(date.getFullYear(), 8, 10)


let result = sen - jan
let seconds = result / 1000
let minutes = seconds / 60
let hours = minutes / 60
let day = hours / 24

console.log(jan)
console.log(sen)
console.log(day)










                                          // ЗАДАЧА №9


// Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.




let date = new Date()

let now = new Date(date.getFullYear(), date.getMonth(), 20)

let ten = new Date(date.getFullYear(), date.getMonth() + 1, 10)



let result = ten - now
let seconds = result / 1000 
let minutes = seconds / 60
let hours = minutes / 60
let day = hours / 24

console.log(now)


console.log(ten)

console.log(day)













// ---------------------------------------------------------------------

                            // Момент времени дня


                                // ЗАДАЧА №10


// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.



let date = new Date()

let yesterday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 12)

let today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())


let result = today - yesterday
let seconds = result / 1000 / 60 / 60 
console.log(seconds)

console.log(yesterday)
console.log(today)














// -----------------------------------------------------------------------

                                   // НАЧАЛО ДНЯ

                                    // ЗАДАЧА №1




// Определите, сколько часов прошло между началом дня и текущим моментом времени.




let date = new Date()

let start = new Date(date.getFullYear(), date.getMonth(), date.getDate())


let current = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())

let result = current - start
let seconds = result / 1000 / 60 / 60
console.log(seconds)







// -------------------------------------------------------------------

                                     // Конец дня


                                    //  ЗАДАЧА №1


// Определите, сколько часов осталось до конца дня.



let date = new Date()
let now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59 ,59)
let res = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())


let result = now - res

let seconds = result / 1000 / 60 / 60

console.log(res)
console.log(now)

console.log(seconds)








                                    // Циклическая проверка






                                         // ЗАДАЧА №1


// Рассмотрите промежуток от 2000 года до текущего года. 
// Определите, сколько раз 1 января в этом промежутке попадало на выходной день, 
// то есть на субботу или на воскресенье.



let date = new Date()
let year = new Date('2000', '0', '1')

let years = new Date(date.getFullYear(), date.getMonth() ) // текущий год


 console.log(years)

// for (let year = 2000; year <= years; year++) {
    let res = new Date(years, year, 1)
console.log(res)
    if(res.getDay() == 6 && res.getDay() == 0) {
  console.log(years)
    }

}

















                      // Практика на получение моментов времени в JavaScript
                    //   ЗАДАЧА №1



// Определите, сколько секунд прошло с начала дня до настоящего момента времени.

let date = new Date()

let now = new Date(date.getFullYear(), date.getMonth(), date.getDate())

let res = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())

let result = res - now 

let seconds = result / 1000
console.log(seconds)









                                        // ЗАДАЧА №2
                          // Определите, сколько секунд осталось до конца дня.




let date = new Date()

let res = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59 ,59)

let now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())

let result = res - now
let r = result / 1000 / 60 / 60
console.log(r)












                                    // ЗАДАЧА №3
                                    // Определите, сколько дней осталось до нового год
                        
                                
let date = new Date()

let now = new Date('2023', '0', '1')

let res = new Date(date.getFullYear(), date.getMonth(), date.getDate())

let result = now - res 

let r = result / 1000 / 60 / 60 / 24

console.log(r)
















                                    // ЗАДАЧА №4
                                    // Определите, сколько пятниц 13-е в текущем году.



let date = new Date()


for(let month = 0; month <= 11; month++ ) {
    let res = new Date(2023, month, 13);
    if(res.getDay() == '5') {
        console.log('Пятницы ' + res)
    }
}

// console.log(res)



















                                // ЗАДАЧА №5
                                // Определите, какой год был 3 месяца назад.

let date = new Date()

let now = new Date(date.getFullYear(), date.getMonth() - 3)


console.log(now)
















                                    // Задача №6

                      // Определите, какой день недели будет в последнем дне текущего месяца.
                    
let date = new Date()

let now = new Date(date.getFullYear(), date.getMonth() + 1, 0)

console.log(now)
console.log(now.getDay())













                                // ЗАДАЧА №7
           // Напишите код, который будет определять, високосный ли текущий год.
        //    Напишите код, который будет находить предыдущий високосный год.
        // Напишите код, который будет находить следующий високосный год.



function func (year) {
if (year % 4 === 0) {
    return true;
} else {
    return false;
}
}
console.log(func(2025))




















// --------------------------------------------------------------------------------
                         // Строковое сравнение дат на JavaScript








                            // ЗАДАЧА №1

// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:

let date1 = '2020-11-31';
let date2 = '2020-12-01';



console.log(date1 < date2)




                            // ЗАДАЧА №2

let date1 = '09-21';
let date2 = '09-23';

console.log(date1 > date2)






                               // Попадание даты в промежуток


// Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.




let now = '11-15';


 if (now >= '02-21' && now <= '03-20') {
     console.log('Овен')
 }
 if (now >= '03-21' && now <= '04-21'){
     console.log('телец')
 }

if(now >= '04-22' && now <= '05-21') {
    console.log('близнецы')
}

if (now >= '05-22' && now <= '06-22') {
    console.log('Рак')
}
if (now >= '06-23' && now <= '07-23') {
    console.log('Лев')
}

if(now >= '07-24' && now <= '08-22') {
    console.log('Дева')
}

if (now >= '08-23' && now <= '09-23') {
    console.log('Весы')
}

if (now >= '09-24' && now <= '10-22') {
    console.log('Скорпион')
}

if (now >= '10-23' && now <= '11-21') {
    console.log('Стрелец')
}

if (now >= '11-22' && now <= '0-20') {
    console.log('козерог')
}

if (now >= '0-21' && now <= '01-18') {
    console.log('Водолей')
}

if (now >= '01-19' && now <= '02-20') {
    console.log('Рыбы')
}


















// ----------------------------------------------------------------------------


                         // Сравнение объектов с датами в JavaScript




                                          // ЗАДАЧА №1

                                         
                                         
// Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, 
// содержащий полдень текущего дня. Сравните два этих объекта и определите, 
// был ли уже полдень или нет.         





let date = new Date()


let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())

let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 15)

if (date1 >= date2) {
    console.log('Полдень был')
} else {
    console.log('Полдень не был')
}














                                         // ЗАДАЧА №2




// Получите объект с датой, содержащий текущий момент времени. 
// Получите объект с датой, содержащий 15 число текущего месяца. 
// Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.


let date = new Date()

let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate())


let date2 = new Date(date.getFullYear(), date.getMonth(), 11)

console.log(date1)
console.log(date2)

if (date1.getTime() <= date2.getTime()) {
    console.log('Первая половина месяца  прошла')
} else {
    console.log('Первая половина месяца не прошла')
}





















// -----------------------------------------------------------------------------------

                 // Количество времени до ближайшей даты на JavaScript
                          
                 
                                  // ЗАДАЧА№1

 let now  = new Date();
 let date = new Date(now.getFullYear(), 2, 8); // текущий год
                 
 let diff = date - now; // разница
                 
 if (diff > 0) {
            console.log('еще будет')         // еще будет
   } else if (diff == 0) {
                    console.log('сегодня')
  } else {
                     console.log('будет в след году')
 }







                                // ЗАДАЧА №2


// Пусть ваш День Рождения - первое марта. 
// Определите, сколько дней осталось до вашего ближайшего дня рождения.


let date = new Date()

let now = new Date(date.getFullYear() + 1, 2, 1);

let diff = now - date

let result = diff / 1000 / 60 / 60 / 24
console.log(result)











                            // ЗАДАЧА №3


// Пусть теперь День Рождения может быть произвольным и содержится в переменных month и day.
//  Определите, сколько дней осталось до заданного этой датой праздника. 
//  Учтите при решении, что есть счастливчики, которые родились 29 февраля. 
//  Не забудьте их учесть в вашем решении.

let month = 1
let day = 29
let date = new Date()

let now = new Date(date.getFullYear() + 2, month, day)


 console.log(now)

let diff = now - date
let result = diff / 1000 / 60 / 60 / 24

if (now % 4 == 0) {
    console.log('День Рождение через ' + result)
} else {
    console.log('Год  високосный, день рождение ' + now + ' февраля')

}
























































































































































































































































































































