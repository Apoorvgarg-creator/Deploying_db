const express = require('express')
const Tasks = require('./db') 
const app = express()
const PORT = process.env.PORT || 4444
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req,res) => {
    res.render('<h1> Deploying website + database</h1>')
})
app.get('/tasks',async (req,res) => {
    res.send(await Tasks.findAll())
})
app.post('/tasks',async (req,res) => {
    res.send(await Tasks.create({
        name: req.body.name,
        done: req.body.done
    }))
})
app.listen(PORT, () => {
    console.log(`Server started on http:localhost:${PORT}`)
})