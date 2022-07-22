// Приватные методы в ООП в JavaScript



// ЗАДАЧА №1


// В следующем коде сделайте вспомогательный метод приватным:

class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$ ';
	}
}

let user = new Employee('Damir', '25 тысяч ')

console.log(user.getSalary())