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

const { name, age, salary=123455 } = user;

console.log(name, age, salary); 