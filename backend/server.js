const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exercisesRoute = require("./routes/exercises");
const usersRoute = require("./routes/users");

require("dotenv").config();


const app = express();
const port = process.env.PORT || 8000;

// middle of no where
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("DB connection established");
});


app.use("/exercises", exercisesRoute);
app.use("/users", usersRoute);


app.listen(port, ()=>{
    console.log(`Runnning on port ${port}`);
});

