
    // for (let num = 0; num < 5; num++) {
    //     console.log(num);
        
    // }


// let num = 0;
//   while (num < 5) {
//       console.log(num)
//       num++
//   }


// let num = 0;
// do {
//     console.log(num);
//     num++
// }while(num < 5) {
    
// }

// let num = 8;
// while(num) {
//     console.log(num);  // ПОСЛЕДНИЙ РЕЗУЛЬТАТ 1
//     num--;
// }


// for (let num = 0;  num < 3; num++) {
//     console.log( `Число: ${num}`);
// }

// let num = 0;
// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;
// }

// firstfor: for (let num = 0; num < 2; num++) {
 
//     for(let size = 0; size < 3; size++)  {
//         if(size == 1) {
//             break firstfor;
//         } 
//         console.log(size);
      
//     }//console.log( `Прекращено ${num}`);
// } 

//Обьекты

// const userInfo = {
//   name: 'Вася',
//   age: 30,                 //ВЕРНО
// }
// console.log(userInfo);

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     "58": 'Значение свойств', // 58
// }
// console.log(userInfo[58]);

// let userInfo = {
//     name: 'Вася',
//     age: 30,                       // 45
// }
// let user = userInfo;
// user.age = 45;
// console.log(userInfo.age)


// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     showinfo() {
//         console.log(`${this.name}`);                //ВАСЯ
//     }
// }
// let user = userInfo;
// userInfo = null;
// user.showinfo();


// let userInfo = {
//     name: 'Вася',
//     age: 30,
// }                                          // обьект userInfo
// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }

// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     address: {
//         city: 'UZN',                // вывод city
//     } 
// }
// for(const key in userInfo.address) {
//     console.log(userInfo.address[key]);
// }


// const userInfo = {
//     name: 'Вася',
//     age: 30,
//     "likes js": true,
// }
// console.log(userInfo["likes js"]);

// let userInfo = {
//     name: 'Вася',
//      age: 30,
// }
// userInfo.name = 'Лена';
// delete userInfo.name;
// console.log(userInfo);


//Функции

// function showName() {
//     console.log('Вася');
// }

// setTimeout(showName, 1000); // Коля
// console.log('Коля');



// showMessage();
// function showMessage() {
//     console.log('Сообщение');                 //Правильно
// }

// showMessage();
// let showMessage = function () {
//     console.log('Сообщение');                     // Не верно. функции Экспершион вызывается в конце
// }


// 'use strict';
// if(2 > 1) {
//   function showMessage(){
//         console.log('Сообщение');
//     }
// }
// showMessage(); // ошибка при use strict


// Массивы

// let arr = ['Ваня', 'Иштван', 'Оля'];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);                           // длина массива -> 4

//задача №2

let users = ['Ваня', 'Иштван'];
users.push('Оля');                                    // добавляет массив
//console.log(users);

users.splice(1, 1, 'Петя');                             // заменяет массив
//console.log(users);

users.shift();                                          // удаляет первый элемент
//console.log(users);

users.unshift('паша', 'маша'); // добавляет элемент вначало массива
//console.log(users);

//задача №3

// let arr = ['Ваня', 'Иштван', 'Оля',];
// arr.splice(1, 1);                                          // удаляет массив
//console.log(arr);

// задача №4

let str = 'Ваня,Иштван,Коля';

let New = str.split(3);                                       //создает массив из строки
//console.log(New);

//задача №5

// let arr = [9, 2, 8];
// let reduceValue = arr.reduce(function(previousValue, item, index, array) {
// console.log(previousValue);
// });


// class User {
//     #lastname = 'ehjsfe';

//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         console.log(this.#lastname);
//     }

//     static newInstance(name, email) {
//         return new this(name, email);
//     }
     
//     print() {
//         console.log('Name: ' + this.name + ' Email: ' + this.email);
//     }
//     static printStatic() {
//         console.log('Name: ' + this.name + ' Email: ' + this.email);
//     }
// }

// // const user = new User('Влад', 'dfsk@mail.ru');
// const user = User.newInstance('Влад', 'dfsk@mail.ru');
// user.print();
// User.printStatic();
// console.log(user.name);


// class Person extends User {                     // расширение класса User

// }

// function div(a, b) {
//     if (b == 0) {
//         throw Error('На 0 делить нельзя'); 
//     }
//     return a / b;
// }
// try {
//     div(10, 0);
// } catch(e) {
//     div(10, 0);
// } finally {
//  console.log(' 3fefrt')
// }


// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     _getName () {
//         return this.name;
//     }
// }

// class Admin extends User {
//     constructor(name, email, login, psw) {
//         super(name, email);
//         this._login = login;
//         this._psw = psw;
//     }
// }

// let u1 = new Admin('Миша', 'wdej@mail.ru', 'admin', 'root');
// let u2 = new User('маша', 'sdhjh@mail.ru');
// console.log(u1 );
// console.log(u2 );






class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname; 
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31




























