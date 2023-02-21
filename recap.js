//* 1. var let const 
//* we will not use var anymore

const numbers = [12, 546, 45];

let salary = 450;
salary = 455;

//* 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

//* 3. Template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>

</div>
`

//* 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//* 5. Spread 
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [12, 15, ...ages, 18, 16];

//* distructuring
const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'Shakib Al Hasan', salary: 450000}
const [a, b, ...r] = [12, 45, 21, 39, 29];