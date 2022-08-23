// Приватные свойства при наследовании в ООП в JavaScript






// ЗАДАЧА №1


// class User {
// 	#name;
// 	#surn;
	
// 	setName(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
	
// 	setSurn(surn) {
// 		this.#surn = surn;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }


// // Сделайте класс Employee, который будет наследовать от этого родителя.


// class Employee extends User {
// // В классе Employee сделайте следующий метод:
// // Убедитесь, что код метода приведет к ошибке.

//     getFull() {
//         return this.#name + ' ' + this.#surn;
//     }
// }

// // Создайте объект класса Employee и вызовите унаследованные сеттеры и геттеры.

// let employee = new Employee;

// employee.setName('Damir');
// employee.setSurn('Зарипов');

// console.log(employee)







// Проблема приватных свойств при наследовании в ООП в JavaScript


// В следущем коде в классе потомка переопределяется метод родителя. 
// Исправьте проблемы в этом коде:

class User {
	#name;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class Employee extends User {
	incName() {
		let name = this.getName();
     return name.length > 0
            this.getName(name)
        
        console.log(incName())
	}
}

let employee = new Employee;

employee.incName('sfsdf')

console.log(employee)














































































































































