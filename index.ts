// 1. Given the data below, define a type alias for representing users.
console.log('YO')

// let users : {
//     name : string;
//     age : number;
//     company: unknown;
// } = {
//         name:'Brandt C',
//         age:99,
//         company:'Coding Temple'
//     },  
//     {
//         name:'Brendan Carlson',
//         age:99
//     }

    type Users = {
        name : string;
        age : number;
        company: string | number;

    };
    const users2: Users = {
        name:'Brandt C',
        age:99,
        company:'Coding Temple'
    };
    const users3: Users = {
        name:'Brendan Carlson',
        age:99,
        company:'Coding Temple'
};
console.log(`Our top two employees are: ${users2.name} and ${users3.name}!`)

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type WeekDay = {
    day : string,
}
const weekday1: WeekDay = {
    day: 'Monday'
};
const weekday2: WeekDay = {
    day: 'Tuesday'
};
const weekday3: WeekDay = {
    day: 'Wednesday'
};
const weekday4: WeekDay = {
    day: 'Thursday'
};
const weekday5: WeekDay = {
    day: 'Friday'
};
const weekday6: WeekDay = {
    day: 'Saturday'
};
const weekday7: WeekDay = {
    day: 'Sunday'
};
console.log(`These are the days of the week: ${weekday1.day},${weekday2.day},${weekday3.day},${weekday4.day},${weekday5.day},${weekday6.day},${weekday7.day}`)

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(public firstName:string, public lastName:string){
        this.firstName = firstName,
        this.lastName = lastName
    }
    printInfo = ():string => {
        return `${this.firstName} ${this.lastName}`

    }
}
const human = new Person('Kaytlin','Valorosi')
console.log(human.printInfo())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor(public firstName:string, public lastName:string, public salary:number){
        super(firstName,lastName)
    }
    printInfo = (): string => {
        return `${this.firstName} ${this.lastName} makes ${this.salary} dollars per year.`
     }
    }

const emp1 = new Employee('Kaytlin', 'Valorosi', 75_000);
console.log(emp1.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface employees {
    name : string;
    salary : number;
    info(): string;
}

interface addresses {
    street: string | number;
    city: string;
    zipcode: number;

}
class CurrEmploy implements employees, addresses {
    name: string;
    salary: number;
    addresses: addresses;
    
    constructor(name:string,salary: number,addresses){
        this.name = name;
        this.salary = salary;
        this.addresses = addresses;

    }
    street: string | number;
    city: string;
    zipcode: number;

info():string {
    return `Employee: ${this.name}, $${this.salary} lives at ${this.addresses}`;
}
};
let employee = {
    name:'Brandt C',
    salary:10_000_000,
    addresses:{
        street:'Clutch Ave',
        city:'Seattle',
        zipCode: 98101
    }
};
const currEmployee = new CurrEmploy(
    employee.name,
    employee.salary,
    employee.addresses
  );

console.log(currEmployee.info());

//This one was challenging!! I tried changing the names of things like changing addresses to address and things like that, I'm honestly not totally sure what the error is here.

