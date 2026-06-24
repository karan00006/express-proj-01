const Student = require('../models/student');
const studentsController = {
    getAll: async (req, res) => {
        try {
            const [rows] = await Student.getAll();
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getOne: async (req, res) => {
        try {
            const [rows] = await Student.getOne(req.params.id);
            if (rows.length === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const [result] = await Student.create(req.body);
            res.status(201).json({ id: result.insertId, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const [result] = await Student.update(req.params.id, req.body);
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json({ id: req.params.id, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const [result] = await Student.delete(req.params.id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Student not found' });
            }
            res.json({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = studentsController;