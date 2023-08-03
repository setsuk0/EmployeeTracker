-- Create department table
CREATE TABLE IF NOT EXISTS department (
  department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
);

-- Create role table
CREATE TABLE IF NOT EXISTS role (
  role_id INT PRIMARY KEY AUTO_INCREMENT,
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);

-- Create employee table
CREATE TABLE IF NOT EXISTS employee (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(role_id),
  FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);

----Code assisted with stack overflow and chatgpt