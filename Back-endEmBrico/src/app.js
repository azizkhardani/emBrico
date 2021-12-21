import express from 'express'
import testRoutes from './routes/test'


const app = express()

app.use(testRoutes)
export default app;