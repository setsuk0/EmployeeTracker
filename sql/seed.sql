-- Insert departments
INSERT INTO department (department_id, department_name)
VALUES (1, 'Sales'), (2, 'Marketing');

-- Insert roles
INSERT INTO role (role_id, role_title, role_salary, department_id)
VALUES (1, 'Sales Manager', 50000, 1), (2, 'Marketing Coordinator', 35000, 2);

-- Insert employees
INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Smith', 1, NULL), (2, 'Jane', 'Doe', 2, 1);

--Code assisted with stack overflow and chatgpt