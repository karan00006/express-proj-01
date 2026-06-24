const router = require('express').Router();
const studentsController = require('../controller/students');

router.get('/', studentsController.getAll);
router.get('/:id', studentsController.getOne);
router.post('/', studentsController.create);
router.put('/:id', studentsController.update);
router.delete('/:id', studentsController.delete);

module.exports = router;
