import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import cors from 'cors';
import routes from './routes/soccerRoutes'
const app = express();

const PORT = 4000;
// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB')

//bodyparser setup
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

//CORS setup
app.use(cors())

routes(app)

app.get('/', (req, res) =>
    res.send(`Our application is running ons port ${PORT}`)
)

app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`)
)