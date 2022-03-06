$(document).ready(readyNow);

let monthlyTotal = 0;

function readyNow() {
    console.log('JQ is running');
    $('#submitButton').on('click', addEmployee);
    $('tbody').on('click', '#deleteButton', deleteEmployee); 
}

function newEmployee(firstName, lastName, employeeId, jobTitle, annualSalary) {
   
    let newEmployeeObject = {
    first: firstName,
    last: lastName,
    id: employeeId,
    title: jobTitle,
    salary: annualSalary
    }
    return newEmployeeObject; 
}

function addEmployee() {
    
    let firstName = $('.firstName').val();
    let lastName = $('.lastName').val();
    let employeeId = Number($('.employeeId').val());
    let jobTitle = $('.employeeTitle').val();
    let annualSalary = Number($('.annualSalary').val());

    $('#employeeInfo').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${employeeId}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td> <button id="deleteButton"> Delete </button> </td>
    </tr>`);
    
    $('.firstName').val('');
    $('.lastName').val('');
    $('.employeeId').val('');
    $('.employeeTitle').val('');
    $('.annualSalary').val('');

    monthlyTotal += Math.floor(annualSalary / 12); 
    $('.monthlyCost').empty();
    $('.monthlyCost').append('$', monthlyTotal);

    
    let maximumMonthlyTotal = 20_000;
    if (monthlyTotal > maximumMonthlyTotal) {
        $('.monthlyCost').css('background', '#ff0000');
    }
    newEmployee(firstName, lastName, employeeId, jobTitle, annualSalary);
    
}

function deleteEmployee() {
   $(this).closest('tr').remove(); 
}








