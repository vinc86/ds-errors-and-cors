const express = require('express');
const app = express();

app.get('/getme', (req, res) => {
  res.send(fruits)
});

app.post('/postme', (req, res) => {
  res.send({})
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.