const express=require('express')
const app=express()
app.use(express.json())
let users=[   ]
app.get('/users',(req,res)=>
{
    res.json(users)
})

app.post('/users',(req,res)=>
{
   const newUser={ id:users.length+1, ...req.body} 
   users.push(newUser)
   res.status(201).json(newUser)
})
app.put('/users/:id',(req,res)=>
{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!users) return res.status(404).json({messege:"users not found"})
        user.name=req.body.name ||req.name
    user.email=req.body.email||req.email
    res.json(user)
})
app.delete('/users/:id',(req,res)=>
{
    users=users.filter(user=>user.id !==parseInt(req.params.id))
    res.json({messege:'user Delete'})
})
app.listen(3000,()=>console.log("server is running"))