let x: number = 1;
let firstname: string = "Hello"
console.log(firstname);

const greet = (firstname: string): string => {
    return (`Hello ${firstname}`);
}

console.log(greet("ali"));


//2Sum

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 3));


// const fun=(f:()=>void)=>{
//     setInterval(f,3000)
// }

// fun(()=>{
//     console.log("Hello");
// })
interface User {
    name: string,
    age: number
}

function check(user: User): boolean {
    if (user.age > 18) {
        return true
    }
    else {
        return false
    }
}

console.log(check({
    name: "ali",
    age: 22
}));

interface Student {
    name: string,
    greet: (name: string) => void
}

class S1 implements Student {
    name: string;

    constructor(n: string) {
        this.name = n
    }
    greet(name: string) {
        console.log("Hello"+ this.name);

    };

}

type A={
    name:string
}



const s=new S1("ali");

s.greet("ali");
