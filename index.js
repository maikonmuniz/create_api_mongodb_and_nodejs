const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)



app.use(express.json())

app.get('/', (req, res) => {

    res.json({
        
        message: "Ola mundo"
    
    })

})

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(

    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.4mahx.mongodb.net/bancodaapi?retryWrites=true&w=majority`

    ).then(() => {
        console.log("Conectado")
        app.listen(3000)

    }).catch(

        (err) => console.log(err)

    )

