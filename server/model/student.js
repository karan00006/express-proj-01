const pool =  require('../config/db');

const Student = {
    getAll: () => {
        return pool.query('SELECT * FROM student');
    },
    getOne: (id) => {
        return pool.query('SELECT * FROM student WHERE id = ?', [id]);
    },
    create: (student) => {
        return pool.query('INSERT INTO student SET ?', [student]);
    },
    update: (id, student) => {
        return pool.query('UPDATE student SET ? WHERE id = ?', [student, id]);
    },
    delete: (id) => {
        return pool.query('DELETE FROM student WHERE id = ?', [id]);
    }
};