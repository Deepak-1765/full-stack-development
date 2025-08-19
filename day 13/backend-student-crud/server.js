// const express = require('express') 
import express from 'express'

import connectToDatabase from './db.js';

const app = express();
const port = 3000;

app.use(express.json())

let db;

// start server
app.listen(port, async () => {
    console.log(`my server is running at ${port}`)
    db =  await connectToDatabase('students-db')

})


app.get('/test', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("api is working")
})


// API 1 create student
app.post('/insert-one-student', async (req, res) => {
    try {
        let info = req.body;
        console.log(`Request received: ${JSON.stringify(info)}`)
        await db.collection('detail').insertOne(info)
        res.status(201).json({ msg: "Student Created Successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// API 2 Read all students
app.get('/read-many-student', async (req, res) => {
    try {
        let allInfo = await db.collection('detail').find().toArray()
        res.status(200).json(allInfo)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// API 3 read single student
app.get('/read-single-student', async (req, res) => {
    try {
        let student = req.query.name;
        let result = await db.collection('detail').findOne({ name: student })
        if (!result) return res.status(404).json("No data found")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// API 4 update student
app.patch('/update-student', async (req, res) => {
    try {
        let studentId = req.query.id;
        let newInfo = req.body;
        let result = await db.collection('detail')
            .updateOne({ id: studentId }, { $set: newInfo }) // or use _id + ObjectId
        if (result.matchedCount === 0) {
            return res.status(404).json("Student not found")
        }
        res.status(200).json("Student updated successfully")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// API 5 delete student
app.delete('/delete-student', async (req, res) => {
    try {
        let name = req.query.name;
        let result = await db.collection('detail').deleteOne({ name: name })
        if (result.deletedCount === 0) {
            return res.status(404).json({ msg: 'Student not found' })
        }
        res.status(200).json({ msg: 'Student deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
