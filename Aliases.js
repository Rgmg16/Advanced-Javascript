const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const { address: permanentAddress } = user;

console.log(permanentAddress);

// an attempt to access the variable address here will result in an error


