class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(message) {
        console.log(`hello! ${this.name} ${message}`);
    }
}
const userR = new Person("marumoto", 24);
userR.greeting("shoma!!");

const userH = new Person("yui", 20);
userH.greeting("deguchi");
