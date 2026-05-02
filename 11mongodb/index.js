const express=require('express')
const app=express()
const port=3000
const path=require('path')

const {mongoClient, MongoClient}=require('mongodb')

const url='mongodb://localhost:27017'
const client=new MongoClient(url)

const dbName='mySchool'

app.get('/',async(req,res)=>{
    await client.connect()
    console.log('connected successfully')
    const db=client.db(dbName)
    const collection=db.collection('students')
    const studentsData=await collection.find().toArray()
    console.log(studentsData)
    res.send('hello world')
})

app.listen(port,()=>{
    console.log('server runiing on http://localhost:3000')
})