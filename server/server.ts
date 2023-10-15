import express from	'express';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

require("dotenv").config();

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL || 'mongodb://localhost:27017/mean';
const app = express();


app.use(express.json());

console.log(uri + " sdf " + port);

mongoose.connect(uri).then(() => {
	console.log("connected to db");
	app.listen(port)
}).catch((err) => {
	console.log(err);
});
