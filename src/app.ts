import express from 'express'
import staff_router from './routes/staff.routes.js'
import auth_router from './routes/auth.routes.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok'})
})

app.use('/staff', staff_router);
app.use('/auth', auth_router);

export default app
