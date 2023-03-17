const express = require('express')
const cors = require('cors')
const AuthRouter = require('./routes/AuthRouter')
const ResourceRouter = require('./routes/ResourceRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/auth', AuthRouter)
app.use('/resource', ResourceRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))