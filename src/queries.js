const db = require("./db");

// Get all departments from the database
exports.getAllDepartments = () => {
  const sql = "SELECT * FROM department";
  return db(sql);
};

// Get all roles from the database
exports.getAllRoles = () => {
  const sql = `
    SELECT role.id, role.title, role.salary, department.name AS department_name
    FROM role
    INNER JOIN department ON role.department_id = department.id
  `;
  return db(sql);
};

// Get all employees from the database
exports.getAllEmployees = () => {
  const sql = `
    SELECT employee.id, employee.first_name, employee.last_name, 
           role.title AS role, department.name AS department, role.salary,
           CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
  `;
  return db(sql);
};

// Add a new department to the database
exports.addDepartment = (name) => {
  const sql = "INSERT INTO department (name) VALUES (?)";
  return db(sql, [name]);
};

// Add a new role to the database
exports.addRole = (title, salary, departmentId) => {
  const sql = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
  return db(sql, [title, salary, departmentId]);
};

// Add a new employee to the database
exports.addEmployee = (firstName, lastName, roleId, managerId) => {
  const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
  return db(sql, [firstName, lastName, roleId, managerId]);
};

// Update the role of an employee
exports.updateEmployeeRole = (employeeId, roleId) => {
  const sql = "UPDATE employee SET role_id = ? WHERE id = ?";
  return db(sql, [roleId, employeeId]);
};

