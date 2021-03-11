
INSERT INTO department (name)
VALUES ('IT');
INSERT INTO department (name)
VALUES ('Sales');

INSERT INTO department (name)
VALUES('Legal');

INSERT INTO department (name)
VALUES('HR');



INSERT INTO role (title, salary, department_id)
VALUES('Lead IT', 150000, 1);
INSERT INTO role (title, salary, department_id)
VALUES('Lead Sales',100000,2);
INSERT INTO role (title, salary, department_id)
VALUES('Lead Leagal',120000,3);
INSERT INTO role (title, salary, department_id)
VALUES('HR leader',180000,4);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES('Bob','Lee',1,1);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES('Sue','Yellow', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES('Dustin',"Low",3,3);
INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES('Michael','Jordan',4, NULL)

