var Person = /** @class */ (function () {
    function Person(firstName) {
        this.firstName = firstName;
    }
    Person.prototype.introduceYourself = function () {
        console.log(this);
        console.log('Hello, my name is ' + this.firstName);
    };
    ;
    Person.prototype.sayHobby = function () {
        console.log(this);
        console.log('Hello, my hobby is ' + this.hobby);
    };
    ;
    return Person;
}());
var p = new Person('Pasha');
p.introduceYourself();
p.sayHobby();
var pCopy = { firstName: 'F', hobby: 'sport', introduceYourself: p.introduceYourself, sayHobby: p.sayHobby };
pCopy.introduceYourself();
pCopy.sayHobby();
