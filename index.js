const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Jetnova11!',
    database: 'employerSQL'
});




const start = () => {
    inquirer
        .prompt({
            name: 'choice',
            type: 'list',
            message: 'What would you want to view?',
            choices: [
                'Add Department?',
                'Add Role?',
                'Add Employee?',
                'View Departments?',
                'View Roles?',
                'View Employees?',
                'Update Roles?',
                'End',
            ],

        })
        .then(answer => {
            console.log(answer.choice);
            switch (answer.choice) {
                case 'Add Department?':
                    addDepartment()
                    break;
                case 'Add Role?':
                    addRole()
                    break;
                case 'Add Employee?':
                    addEmployee()
                    break;
                case 'View Departments?':
                    viewDepartments()
                    break;
                case 'View Roles?':
                    viewRole()
                    break;
                case 'View Employees?':
                    viewEmployees()
                    break;
                case 'Update Roles?':
                    updateRoles()
                    break;
            }
        })

}

start()


function viewDepartments() {
    connection.query('select * from department', function (err, data) {
        console.table(data)
        start();
    })
}
function viewRole() {
    connection.query('select * from role', function (err, data) {
        console.table(data)
        start();
    })
}
function viewEmployees() {
    connection.query('select * from employee', function (err, data) {
        console.table(data)
        start();
    })
}
function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        name: 'departments',
        message: 'What department are you looking to add?'
    }])
        .then(function (res) {
            connection.query('INSERT INTO department(name) VALUES (?) ', [res.departments], function (err, data) {
                if (err) throw err;
                console.table('Department added!');
                start();
            })
        })
}

function addRole() {
    inquirer.prompt([{
        message: 'What is your title',
        type: 'input',
        name: 'title'
    },
    {
        message: 'What is your salary',
        type: 'number',
        name: 'howMuch'
    },
    {
        message: 'What is your department ID',
        type: 'number',
        name: 'department_id'
    }
    ])
        .then(function (response) {
            connection.query('INSERT INTO role(title, salary, department_id) VALUES (?,?,?)', [response.title, response.howMuch, response.department_id], function (err, data) {
                console.log('New row added');
                start();
            })
        })

}
function updateRoles(){
    inquirer.prompt([{
        message:'What is the employee ID?',
        type:'number',
        name:'employee_id'
    },{
        message:'What is the new role Id?',
        type:'number',
        name:'role_id'
    }
]).then(function(response){
    connection.query('UPDATE employee set role_id = ? where id = ?',[response.role_id, response.employee_id], function(err, data){
        console.log('Employee role has been updated')
        start();
    })
})

    
}

function addEmployee() {
    inquirer.prompt([{
        message: 'What is your first name?',
        type: 'input',
        name: 'first_name'
    },
    {
        message: 'What is your last name?',
        type: 'input',
        name: 'last_name'
    },
    {
        message: 'What is your Role ID?',
        type: 'number',
        name: 'role_id'
    },
    {
        message: 'What is your Manager ID?',
        type: 'number',
        name: 'manager_id'
    }






    ])
        .then(function (response) {
            var statement = connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [response.first_name, response.last_name, response.role_id, response.manager_id], function (err, data) {
                console.log('New employee add')
                start();
            })
             console.log(statement.sql) 
        })
    }