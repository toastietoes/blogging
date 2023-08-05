const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://toastietoes:90lYNFRO9J9IEZdA@cluster0.qc6lhkm.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    } catch(e) {
        console.log(e);
        res.status(400).json(e);
    }
});

app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    res.json(passOk)
})
app.listen(4000);

