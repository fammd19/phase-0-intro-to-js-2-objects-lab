// Write your solution in this file!
const employee = {
    name: "Fi",
    streetAddress: "Ocean Road",
}

function updateEmployeeWithKeyAndValue(employee, employeeKey, employeeValue) {
    const employeeUpdated  = {...employee};
    employeeUpdated[employeeKey] = employeeValue;
    return employeeUpdated
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, employeeKey, employeeValue) {
    employee[employeeKey] = employeeValue;
    return employee;
}

function deleteFromEmployeeByKey(obj, key) {
    const employeeUpdatedAgain = {...obj};
    delete employeeUpdatedAgain[key];
    return employeeUpdatedAgain;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}