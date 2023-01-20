const Task = require('../models/taskModel')

// Create a Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ emsg: error.message })
  }
}

// Get all Tasks
const getTasks = async (req, res) => {
  try {
    const task = await Task.find()
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get Task By ID / Single Task
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json(`No Task with id: ${id}`)
    }
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndDelete(id)
    if (!task) {
      return res.status(404).json(`No Task with id: ${id}`)
    }

    res.status(200).send('Task deleted')
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update a Task using PUT
const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).json(`No Task with id: ${id}`)
    }
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
  updateTask,
}
