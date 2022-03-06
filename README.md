# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

# **Salary Calculator Weekend Challenge Project**

## **Description**

The Salary Calculator allows businesses to determine the monthly cost of the yearly salaries of their employees. It works by the employee information being entered in as follows: 

- employee first name
- employee last name
- employee ID#
- employee job title
- employee annual salary

Once these fields are entered, you click on the *submit* button, and the fields will show up in the table. As employees are added, the table is designed to display the overall monthly cost of each employee that has been entered into the table. If the overall monthly cost from the table exceeds $20,000, it will turn red. Any employee that is entered into the table can also be removed by simply clicking the *delete* button. 

## **Problems I Ran Into**

The first problem I ran into was not understanding that I needed to use the tr and td tags when appending the employee information to the table in the DOM. I have never used a table before, so it required some trial and error for me to realize that I needed to use those tags to get the employee information to show up in the right place on the DOM. The next issue I ran into was in the monthly total calculation, I was getting too many decimal points when dividing the annual salary by 12. I fixed this by adding a Math.floor function when appending the monthly cost to the DOM. The last issue I ran into was using the delete button. When I first created my delete button function, I told it to delete the td tag. This made it so all employees in the table got deleted, instead of just the employee on the line that the delete button was clicked. I fixed this by using `$(this).closest('tr').remove();` to allow the delete button to target only the specific line of employee information that it was clicked on. 

## **Built With**

- Javascript, jQuery, HTML, CSS, and Bootstrap

## **Acknowledgement**

Credit goes to Prime Digital Academy and my instructor Dane Smith for giving me the instruction and knowledge to make this project possible.


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
