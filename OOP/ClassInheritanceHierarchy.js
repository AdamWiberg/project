// Иерархия наследования классов в ООП в JavaScript







// ЗАДАЧА №1
// Сделайте класс Employee, который будет наследовать от класса User.

class User {

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

class Employee extends User {

    setJob(job) {
        this.job = job;
    }

    getJob() {
        return this.job;
    }

}

// Сделайте класс Programmer, который будет наследовать от класса Employee.



class Programmer extends Employee {

    setKnowledge(knowledge) {
        this.knowledge = knowledge;
    }

    getKnowledge() {
        return this.knowledge;
    }
}

// Сделайте классы Designer, который будет наследовать от класса Employee.



class Designer extends Programmer {

    setSkill(skill)  {
        this.skill = skill;
    }

    getSkill() {
        return this.skill;
    }

}

let designer = new Designer;

designer.setName('Damir');
designer.setJob('Programmer');
designer.setKnowledge('Базовые');
designer.setSkill('интеллектуальный')

console.log(designer)

// Добавьте в созданные вами классы различные методы.































