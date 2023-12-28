const express = require('express');
const app = express();

app.get('/test', (req,res) => {
  resizeTo.json('test ok');
});

app.listen(4000)