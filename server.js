const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json({extended: false}))
app.use(cors())


app.get('/getme', (req, res, next) => {
  res.send({message: `${req.url} path`})
});

app.get("/fuckup/saw-it-coming",(req,res,next)=>{
  try{
    res.sen("hello")
  }catch(err){
    next(err)
  }
})

app.get("/fuckup/surprise",(req,res)=>{
  throw new Error("There is a dummy error!")

})

app.post('/postme', (req, res, next) => {
  res.json({message: "POST route called"})
})


// 404 MIDDLEWARE
app.use((req,res,next)=>{
    res.status(404).json({error: `Path ${req.url} does not exist...`})
})

// GENERIC ERROR MIDDLEWARE
app.use((err,req,res,next)=>{
  res.status(404).json({error: err.message})
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.