const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/user');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://emdeguzm:WapaArIidRiaw2e4@cluster0.it3b2me.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.create({username,password});
  res.json(userDoc);
});

app.listen(4000);


//mongodb+srv://blog:<password>@cluster0.tftoudk.mongodb.net/?retryWrites=true&w=majority
//emdeguzm
//WapaArIidRiaw2e4
//mongodb+srv://emdeguzm:WapaArIidRiaw2e4@cluster0.it3b2me.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://emdeguzm:WapaArIidRiaw2e4@cluster0.it3b2me.mongodb.net/?retryWrites=true&w=majority