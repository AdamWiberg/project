// Сравнение объектов в ООП в JavaScript







// ЗАДАЧА №1


// Расскажите, каким будет результат сравнения в следующем коде:

class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp2); // false +








// ЗАДАЧА №2

// Расскажите, каким будет результат сравнения в следующем коде:

class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp1);   // true +













// ЗАДАЧА №3


// Расскажите, каким будет результат сравнения в следующем коде:

class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('g');
let emp2 = new Employee('g');

console.log(emp1 === emp2); // false








// ЗАДАЧА №4

// Расскажите, каким будет результат сравнения в следующем коде:


class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('eric');
let emp2 = new Employee('eric');

console.log(emp1 !== emp1); // false












// ЗАДАЧА №5


// Расскажите, каким будет результат сравнения в следующем коде:


class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = emp1;



 console.log(emp1 === emp2); // true








//  ЗАДАЧА №6


// Расскажите, каким будет результат сравнения в следующем коде:


class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 !== emp2); // строго не равно 
// emp1 строго не равно emp2 => Да, верно. Строго не равно . true







// ЗАДАЧА №7



// Расскажите, каким будет результат сравнения в следующем коде:

class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = emp1;
emp2.name = 'eric';

console.log(emp1 === emp2); // 

// Если значения операндов равны оператор === 
// возвращает true, если не равны – false: