var Person = /** @class */ (function () {
    function Person(firstName) {
        this.firstName = firstName;
    }
    Person.prototype.introduceYourself = function () {
        console.log(this);
        console.log('Hello, my name is ' + this.firstName);
    };
    ;
    return Person;
}());
var p = new Person('Pasha');
p.introduceYourself();
var pCopy = { firstName: 'F', introduceYourself: p.introduceYourself };
pCopy.introduceYourself();
