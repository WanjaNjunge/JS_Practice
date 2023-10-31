const employee = {};

employee.name = 'Wanja';
employee.streetAddress = 'Section9';

// not mutate the employee

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };
    newObj[key] = value;

    return newObj
}
const newEmp = updateEmployeeWithKeyAndValue (
    employee,
    'name',
    'mama nazz'
)


//console.log(newEmp);


// mutate the employee Object

/*function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

const newEmp1 = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    'streetAddress',
    'Runda'
)

console.log(newEmp1);*/

// delete the property
function deleteFromEmployeeByKey(employee, key) {
    let newObj = {...employee};
    delete newObj[key];

    return newObj;
};

const newEmp2 = deleteFromEmployeeByKey(
    employee,
    "name"
);

console.log(newEmp2);

// delete the property mutate the employee

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}
 const newEmp3 = destructivelyDeleteFromEmployeeByKey(
    employee,
    'streetAddress'
 )
 console.log(newEmp3);
 console.log(employee);
