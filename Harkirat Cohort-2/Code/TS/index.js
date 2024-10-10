"use strict";
let x = 1;
let firstname = "Hello";
console.log(firstname);
const greet = (firstname) => {
    return (`Hello ${firstname}`);
};
console.log(greet("ali"));
//2Sum
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 3));
function check(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check({
    name: "ali",
    age: 22
}));
class S1 {
    constructor(n) {
        this.name = n;
    }
    greet(name) {
        console.log("Hello" + this.name);
    }
    ;
}
const s = new S1("ali");
s.greet("ali");
