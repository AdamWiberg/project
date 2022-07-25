// Оператор instanceof в ООП в JavaScript






// ЗАДАЧА №1



// Определите, каким будет результат выполнения следующего кода:

class Student {
	
}
class Employee {
	
}

let employee = new Employee;
console.log(employee instanceof Employee); // true
console.log(employee instanceof Student); // false









// ЗАДАЧА №2


// Дан следующий код:

class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];


for (let value of users) {
    console.log(value.name)
}
// Переберите циклом массив объектов и выведите в консоль только имена работников.








































































































