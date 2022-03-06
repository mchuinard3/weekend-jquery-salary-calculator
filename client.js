$(document).ready(readyNow);

let monthlyTotal = 0;

function readyNow() { // This function lets me know that jQuery is up and running, and it makes it so when the user clicks on the submit
    // button, the addEmployee function will be called and the employee information that has been inputted will be displayed in the table.
    // It also calls the deleteEmployee function when the delete button is clicked, which will remove the table row of the employee 
    // information entered on the row that the delete button is clicked. 
    console.log('JQ is running');
    $('#submitButton').on('click', addEmployee);
    $('tbody').on('click', '#deleteButton', deleteEmployee); 
}

function addEmployee() { // This function assigns variables with values of the input employee information. It then appends that information to 
    // the DOM to be displayed in the table rows. It then clears the input fields in the DOM. This function then calculates the monthly cost of
    // the employee annual salary that is entered into the table, and displays it on the DOM next to monthly total. Next, this function changes
    // the background color of the monthly total to red if the monthly cost is over $20,000. 
    
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

    monthlyTotal += (annualSalary / 12); 
    $('.monthlyCost').empty();
    $('.monthlyCost').append('$', Math.floor(monthlyTotal));

    
    let maximumMonthlyTotal = 20_000;
    if (monthlyTotal > maximumMonthlyTotal) {
        $('.monthlyCost').css('background', '#ff0000');
    }
    
}

function deleteEmployee() { // This function removes an employee and all their information from the table row when the delete button is clicked
    // on a specific row of employee information. 
   $(this).closest('tr').remove(); 
}








