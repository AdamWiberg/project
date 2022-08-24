// Потеря контекста в ООП в JavaScript





// ЗАДАЧА №1


// Исправьте ошибку, допущенную в следующем коде:

class Employee {
	constructor(name, salary, coeffs) {
		this.name = name;
		this.salary = salary;
		this.coeffs = coeffs;
	}
	
	getTotal() {
		return this.coeffs.reduce((res, coeff) => { // стрелочная функция
			return res + this.salary * coeff;
		}, 0);
        
	}
}

let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]); // 1100 + 1200 + 1300 = 3600
let total = employee.getTotal();
console.log(total);
console.log(employee)
























































































