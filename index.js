// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const objTwo = {...obj};
    objTwo[key] = value;
    return objTwo
};
const employeeTwo = updateEmployeeWithKeyAndValue(employee, "name", "Frederick");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};
const employeeThree = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(obj, key) {
    const objThree = {...obj};
    delete objThree[key];
    return objThree;
};
const employeeFour = deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};
const employeeFive = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")
