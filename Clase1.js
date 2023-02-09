//REFERENCE AND COPYING
let user= {
    name: "Andrew",
    age: 12
}

let admin = user
console.log(admin)
console.log("---------------------------------------")

admin.name = "Peter";
console.log(admin.name)
console.log("---------------------------------------")

let object1 = {}
let object2 = object1;
console.log(object1 == object2)

//COPYING
let object3 = JSON.parse(JSON.stringify(object1));
console.log("---------------------------------------")

class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        return "Listening... " + " " + this.name;
    }

    getFullName() {
        return this.name + " " + this.lastName;
    }
}

let juan = new Person ("Juan", "Ramírez", 12);
let andres = new Person ("Andrés", "Ramírez", 20);
console.log(juan.greet());

let camilo = {...juan};
camilo.name = "Camilo";
console.log(juan);
console.log("---------------------------------------")

//POO
class Tornillo {
    constructor(size) {
        this.size = size;
    }
}

class Motor {
    constructor(force) {
        this.speed = force;
        this.tornillos = []
        this.tornillos.push(new Tornillo("Small"));
        this.tornillos.push(new Tornillo("Medium"));
    }
}

class Car {
     constructor(brand) {
        this.brand = brand;
        this.motor = new Motor(200);

        this.tornillos = [];
        this.tornillos.push(new Tornillo("Big"));
    }

    acelerar(kmh = 10) {
        if (kmh >= 200){
            console.log("Franchesco Virgoliniiiii")
        } else {
            console.log("Quchao")
        }
    }
}

const myCarFranchesco = new Car("Chevrolet");
myCarFranchesco.acelerar();
myCarFranchesco.acelerar(200);
console.log("---------------------------------------")

//HERENCIAS
class Camioneta extends Car {
    constructor(brand) { 
        super(brand);
        this.have4x4 = true;
    }

    acelerar() {
        console.log(" ")
        console.log("Acelerando súper rápido");
    }
}

const myPickUp = new Camioneta("Volvo");
console.log(myPickUp);
myPickUp.acelerar();
console.log("---------------------------------------")

const calculateArea = (high = 10, width = 12) => high * width;

const person2 = {
    name: "Juan",
    lastName: "Rami"
}

const mensaje = "Nombre:" + " " + person2.name + "  " + "Apellido:" + " " + person2.lastName;
console.log(mensaje)

const goodMessage = `Hola ${person2.name}`
console.log(goodMessage)
console.log("---------------------------------------")