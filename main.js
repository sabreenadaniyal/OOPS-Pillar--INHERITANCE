"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><> OOPS <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><<><><><><><
//                                             OBJECT ORIENTED PROGRAMMING
//-----------------------------------------------------:INHERITANCE:---------------------------------------------------------------------
//Base/Super/Parent class
class Person {
    name;
    age;
    education;
    email;
    constructor(name, age, education, email) {
        this.name = name;
        this.age = age;
        this.education = education;
        this.email = email;
    }
    Info() {
        return (`Hello!my name is${this.name},I'm ${this.age} years old,my Education is ${this.education} & 
        my E_mail Id is ${this.email}.`);
    }
}
//Derived/Child class
class Employee extends Person {
    position;
    grade;
    constructor(name, age, education, email, position, grade) {
        // Invoking the constructor of the Person class 
        super(name, age, education, email);
        this.position = position;
        this.grade = grade;
    }
    DetailsEmployee() {
        return `my position is ${this.position} and my grade is ${this.grade}`;
    }
}
let employee1 = new Employee("Sabreena", 25, "graduation", "sab@123", "finanace Officer", 15);
console.log(employee1);
console.log(employee1.Info());
console.log(employee1.DetailsEmployee());
