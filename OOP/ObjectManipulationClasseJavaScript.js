// Манипуляция объектами в классах в ООП в JavaScript



// ЗАДАЧА №1



class User {
	#name;
  
	
	constructor(name) {
		this.#name = name;
     
	}

	getName() {
		return this.#name;
       
	}
   
}


// Сделайте класс EmployeesCollection, который будет содержать массив работников.


class EmployeesCollection {
    #workers;
  

    constructor() {
        this.#workers = [];
       
    }


// Сделайте в этом классе метод для добавления нового работника.
    add(worker) {
        this.#workers.push(worker);
    
    }



    // Сделайте в этом классе метод для вывода всех работников.

    conclusion () {
   
        for (let worker of this.#workers) {
            console.log(worker.getName())
        }
       
       
    }

    
// Сделайте в этом классе метод для расчета суммарной зарплаты всех работников.

   salary() {

   }
}


let uc = new EmployeesCollection;

uc.add(new User('jon'))
uc.add(new User('Dep'))
uc.add(new User('Rep'))



// uc.salary(new User(2000))
// uc.salary(new User(5000))
// uc.salary(new User(7000))


uc.conclusion();
























































































































































































































