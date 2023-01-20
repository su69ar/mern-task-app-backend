const express = require('express')
const {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
  updateTask,
} = require('../controllers/taskController')
const Task = require('../models/taskModel')
const router = express.Router()

// Optimize router sample
// router.route('/').get(getTasks).post(createTask)
// router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask)
// Optimize router sample

router.post('/', createTask)
router.get('/', getTasks)
router.get('/:id', getTaskById)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
