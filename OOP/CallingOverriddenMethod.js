// Вызов переопределенного метода в ООП в JavaScript



// ЗАДАЧА №1





// В классе Employee исправьте упростите сеттер возраста, 
// использовав оригинальный метод родителя.




class User {
	setAge(age) {
		if (age >= 0) {
			this.age = age;
		} else {
			throw new Error('need age more 0');
		}
	}
}

class Employee extends User {
	setAge(age) {
		if (age <= 120) {
			if (age >= 0) {
				super.setAge(age) // метод родителя
			} else {
				throw new Error('need age more 0');
			}
		} else {
			throw new Error('need age less 120');
		}
	}
}

let employee = new Employee;

employee.setAge(120)

console.log(employee)






























































































































