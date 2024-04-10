const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employees =[]

const collectEmployees = function() {
  let myconfirm = true
  while(myconfirm){
    let firstName = prompt('What is the employees first name?');
    let lastName = prompt('What is the employees last name?');
    let salary = prompt('What is the employees salary?');
    if(!isNaN(parseInt(salary))){
    let newEmployee = {firstName, lastName, salary: parseInt(salary)}
    employees.push(newEmployee);
    console.log(employees);
    myconfirm = confirm('Would you like to add another employee?');
    console.log(myconfirm);}    
  }
  return employees
}

const displayAverageSalary = function(employees) {
  let total = 0
  for (let i = 0; i < employees.length; i ++){
    total += employees [i] .salary
  }
  const average = total/employees.length
  console.log (`the average salary of ${employees.length} employees is $${Math.round(average).toFixed(2)}`)
}

const getRandomEmployee = function(employeesArray) {
  const index = Math.floor (Math.random()*employees.length)
  const employee = employeesArray [index]
  console.log (`the random employee is ${employee.firstName} ${employee.lastName}. Congrats!`)
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
