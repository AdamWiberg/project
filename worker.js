

class Worker {
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname; 
        this.#rate = rate;
        this.#days = days;
    }
    
    getName() {
        return this.#name;
    }

    getSurname() {
        return this.#surname;
    }

    getRate() {
        return this.#rate;
    }

    setRate(value) {
        this.#rate = value;
    }

    getDays() {
        return this.#days;
    }

    setDays(value) {
        this.#days = value;
    }

    getSalary() {
        return this.#rate * this.#days;
    }
}
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10