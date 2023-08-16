import express from 'express'
import { Db } from 'mongodb'
import mongoose from 'mongoose'
import Post from './Post.js'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = 5000
const DB_URL = "mongodb+srv://nurrsserkul:nurik_2006@cluster1.dhmiiab.mongodb.net/?retryWrites=true&w=majority"

const app = express()


app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)


async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT,()=> console.log('Server started on PORT' + PORT))
        
    } catch (error) {
        console.log(error);
    }
}

startApp()