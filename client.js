$(document).ready(readyNow);

function readyNow() {
    console.log('JQ is running');  
}

let employees = [];

function newEmployee() {
    console.log('in newEmployee:');
    let newEmployeeObject = {
        firstName: $('#firstName').val(), 
        lastName: $('#lastName').val(),
        id: $('#employeeId').val(),
        title: $('#employeeTitle').val(),
        annualSalary: $('#annualSalary').val()
    }
}
