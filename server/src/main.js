import express from 'express'
import { getError, handleError } from './utils/error.handle.js'
import router from './routers/index.js'
import endPoints from 'express-list-endpoints'
import cors from 'cors'
import helmet from 'helmet'

let app = express()
app.use(cors())
app.use(helmet())

app.use('/api/v1/', router)
app.use(getError)
app.use(handleError)

app.listen(4000, () => {
    console.log(`Server is running on port 4000`)
    console.log(endPoints(app))
})
