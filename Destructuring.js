const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

// const { name } = user;

// console.log(name); // Output, Alex

// const { name, age } = user;

// console.log(name, age);

// Another way of declaring variables
// let name;

// ({ name  } = user);

// console.log(name);

// Adding a new variable and a default value

// const { name, age, salary=123455 } = user;

// console.log(name, age, salary); 

// Alternative way of doing the above
let salary = user.salary ? user.salary : 123455;
const { name, age,} = user;
console.log(name, age, salary); 

// 
const user1 = { 
    'first_name': 'Alex',
    'last_name': 'Brandos',
}
const { first_name, last_name, full_name=`${first_name} ${last_name}` } = user1;

console.log(full_name);

