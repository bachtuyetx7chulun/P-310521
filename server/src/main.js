import express from 'express'
import { getError, handleError } from './utils/error.handle.js'
import router from './routers/index.js'
import endPoints from 'express-list-endpoints'
import cors from 'cors'
import helmet from 'helmet'
import { APP_PORT } from './configs/variables.config.js'

let app = express()
app.use(cors())
app.use(helmet())

app.use('/api/v1/', router)
app.use(getError)
app.use(handleError)

app.listen(APP_PORT, () => {
    console.log(`Server is running on port 3000`)
    console.log(endPoints(app))
})
