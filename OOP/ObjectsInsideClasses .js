// Объекты внутри классов в ООП в JavaScript



// Дан следующий класс:
// Сделайте так, чтобы во второй и третий параметры передавались объекты отдельных классов.

// ЗАДАЧА №1

class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
		
	}
}

class Position {
    constructor(position) {
        this.position = position;
		
    }
}

class Department {
	constructor(department) {
		this.department = department;
	}
}

let department = new Department('5 отделение')

let position = new Position('Охрана')


// Создайте объект с работником с помощью класса из предыдущей задачи.
let user = new Employee('Damir', position, department)


// Выведите в консоль имя, должность и отдел для созданного работника.
console.log(user.department.department)
console.log(user.position.position)
console.log(user.name)



































































































