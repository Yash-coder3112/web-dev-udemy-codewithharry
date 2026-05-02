const express = require('express');
const app = express();


//middleware
app.use(function(req,res,next){
    console.log("middleware")
    next();
})
// route
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.put('/', (req, res) => {
  res.send('Hello World pull request');
});


app.post('/', (req, res) => {
  res.send('Hello World post request');
});


app.delete('/', (req, res) => {
  res.send('Hello World delete request');
});

// server start
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});