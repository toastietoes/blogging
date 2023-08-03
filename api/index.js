const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

await mongoose.connect('mongodb+srv://toastietoes:<90lYNFRO9J9IEZdA>@cluster0.qc6lhkm.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', (req,res) => {
    const {username,password} = req.body;
    res.json({requestData:{username,password}});
});

app.listen(4000);

