interface User{
    name: string;
    age: number;
    salary: number;
}

// Difference between type and interface
type Updateuser =Pick<User, 'name' | 'age'>;


const userDetail = (user: Updateuser) => {
    console.log(user);
}

const user = {
    name: 'John',
    age: 30,
}

userDetail(user);
