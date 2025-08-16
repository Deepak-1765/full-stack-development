import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

// API Section 

// API 1 


// start server
app.listen(port, () => {
    console.log(`my server is running at ${port}`)
})