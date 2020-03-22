class Person {
    firstName: string;

    constructor(firstName: string) {
        this.firstName = firstName;
    }

    introduceYourself() {
        console.log(this);
        console.log('Hello, my name is ' + this.firstName);
    };
}

const p = new Person('Pasha');
p.introduceYourself();

const pCopy = {firstName: 'F', introduceYourself: p.introduceYourself};
pCopy.introduceYourself();
