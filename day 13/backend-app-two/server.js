const express = require('express')
const app=express()
const port = 3000 

/*
-------  API 1 --------
http method = get
url ='/api-1'
request = {}
response ="this is my first api"
*/
app.get('/api-1', (request, response) => {
    response.send('this is my first api')
})

app.get('/test-api', (request, response ) => {
    response.send("Second API is working")
})

app.get('/test-api-3', (request, response) => {
    response.send("my test api 3 is working fine  ")
})

app.get('/homepage-admin', (request, response) => {
    response.send("this is website homepage")
})

app.post('/insert-user', (request, response) => {
    console.log(`content of server is ${request.body}`)
    response.send("user inserted successfully")
})



app.get('/my-api', (request, response) => {
    response.json({
    name: "Deepak Chahal",
    from: "Karnal",
    education: "B.Tech IT, 1st year (2nd semester) at PIET College",
    interests: ["Robotics", "AI innovations"],
    idol: "Elon Musk",
    skills: ["Python", "AI tools", "React", "Node.js", "MongoDB"],
    current: "AI internship (Python, LangChain, n8n, automation)"
  })
})

app.listen(port, () => {
    console.log("My server is started at "  +  port);
})