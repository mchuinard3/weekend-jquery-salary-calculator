$(document).ready(readyNow);

let monthlyTotal = 0;

function readyNow() {
    console.log('JQ is running');
    $('#submitButton').on('click', addEmployee);
}

function newEmployee(firstName, lastName, employeeId, jobTitle, annualSalary) {
    console.log('in newEmployee:');
    
   let newEmployeeObject = {
        first: firstName,
        last: lastName,
        id: employeeId,
        title: jobTitle,
        salary: annualSalary
    }
}
   
function addEmployee() {

let firstName = $('.firstName').val();
let lastName = $('.lastName').val();
let employeeId = Number($('.employeeId').val());
let jobTitle = $('.employeeTitle').val();
let annualSalary = Number($('.annualSalary').val());

$('#employeeInfo').append(`<thead><tr><th>${firstName}</th><th>${lastName}</th><th>${employeeId}</th><th>${jobTitle}</th><th>${annualSalary}</th></thead>`);
newEmployee();
}

  
