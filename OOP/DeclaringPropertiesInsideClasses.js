// Объявление свойств внутри классов в ООП в JavaScript







// ЗАДАЧА №1

// Объявите в классе Student свойства name и surn.




class Student {
    name = 'Damir';
    surn = 'Зарипов';

    show() {
        return this.name, this.surn
    }
}
 
let user = new Student;

console.log(user.name, user.surn)









