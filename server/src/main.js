import express from 'express'
import { getError, handleError } from './utils/error.handle.js'
import router from './routers/index.js'
import endPoints from 'express-list-endpoints'

let app = express()

app.use('/api/v1/', router)
app.use(getError)
app.use(handleError)

app.listen(4000, () => {
    console.log(`Server is running on port 4000`)
    console.log(endPoints(app))
})
