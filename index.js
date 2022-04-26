// Write your solution in this file!
// Write your solution in this file!
let employee = {
    name: "Dong",
    streetAddress: "Dayton St"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee }
    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObjDelete = { ...employee }
    delete newObjDelete[key];
    return newObjDelete;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}