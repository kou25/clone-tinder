import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors'
import Cards from './dbCards.js'
import Chats from './dbChats.js'
//App config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:G0I5Cm8b0uVW8K76@cluster0.hdqxn.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//API Endpoint
app.get('/',(req, res)=>res.status(200).send('Hello'));

app.post('/tinder/card',(req, res)=>{
    const dbCard= req.body; 

    Cards.create(dbCard, (err,data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/tinder/card',(req, res)=>{
    const dbCard= req.body; 

    Cards.find((err,data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
})

app.post('/tinder/chat',(req, res)=>{
    const dbChat= req.body; 

    Chats.create(dbChat, (err,data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/tinder/chats',(req, res)=>{
    const dbCard= req.body; 

    Chats.find((err,data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })
})

//Listener
app.listen(port,()=>console.log(`listening on localhost: ${port}`));