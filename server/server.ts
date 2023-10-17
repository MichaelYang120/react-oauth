import express from	'express';
import mongoose from 'mongoose';
import {} from 'dotenv/config';
import { createUser } from './models/User';
import bodyParser from 'body-parser';
import cors from 'cors';

require("dotenv").config();

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL || 'mongodb://localhost:27017/mean';
const app = express();

// debug
const debug:boolean = true;
// const debug:boolean = false;

//app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

if(debug) {
	console.log(uri + " sdf " + port);
}

app.post("/user", async (req, res) => {
	createUser(req, res);
});

mongoose.connect(uri).then(() => {
	console.log("connected to db");
	app.listen(port)
}).catch((err) => {
	console.log(err);
});
