// import express package
import express from 'express'

// create app variable 
const app = express()

//define port number
const port = 3000 

//define request parsing
app.use (express.json())

// API section start
app.get('/test', (req, res) => {
    res.send('api is up')
})

app.get('/read-user', (req, res) => {
     let user = {
        "name" : "Deepak",
        "age" : 20
    } 
   /* let user = null */

    if (user == null)
        res.status(404).send("Data not found")
    else
        res.status(200).json(user) 
})




// API section end

//start server
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})