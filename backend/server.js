const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://taskly-4w2e.onrender.com'],
  })
)

app.use('/api/tasks', taskRoutes)

// Routes
app.get('/', (req, res) => {
  res.send('Homepage')
})

connectDB()
const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    })
  })
  .catch((error) => console.log(error))
