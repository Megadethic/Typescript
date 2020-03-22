class Person {
    firstName: string;
    hobby: string;

    constructor(firstName: string) {
        this.firstName = firstName;
    }

    introduceYourself() {
        console.log(this);
        console.log('Hello, my name is ' + this.firstName);
    };

    sayHobby(this: Person) {
        console.log(this);
        console.log('Hello, my hobby is ' + this.hobby);
    };
}

const p = new Person('Pasha');
p.introduceYourself();
p.sayHobby();

const pCopy = {firstName: 'F', hobby: 'sport', introduceYourself: p.introduceYourself, sayHobby: p.sayHobby};
pCopy.introduceYourself();
pCopy.sayHobby();
