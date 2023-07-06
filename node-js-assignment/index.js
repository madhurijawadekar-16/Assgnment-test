const express = require('express');
const Joi = require('joi');

const app = express()
app.use(express.json());

// sample data for post and get request

let users = [
    {
        id:1,
        name:'abc',
        email:'abc@gmail.com'
    },
    {
        id:2,
        name:'pqr',
        email:'pqr@gmail.com'
    },
    {
        id:3,
        name:'xyz',
        email:'xyz@gmail.com'
    }
]

//get req
app.get('/users',(req,res)=>{
    res.send(users)
})

//post req with payload validation

app.post('/users',(req,res)=>{
    const schema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required()
    })

    const { error } = schema.validate(req.body)

    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }

    const newUser = {
        id:users.length + 1,
        name:req.body.name,
        email:req.body.email
    }

    users.push(newUser)
    res.send(newUser)
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something Wrong!')
});

app.listen(8000,()=>{
    console.log('server listening on port 8000')
})
