import { Request, Response } from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
});

const User = mongoose.model("User", userSchema);

const debug:boolean = false;

export async function createUser(req: Request, res: Response) {
	// const { username, email, password } = req.body;
	let data = req.body;
	let username = data.username;
	let email = data.email;
	let password = data.password;

	if(debug) {
		console.log(req.body);
		console.log(`username ${username} email ${email} password ${password}`);

	}

	const user = new User({
		username: username,
		email: email,
		password: password,
	});

	const initCreateUser = await user.save();
	res.json(initCreateUser);

	return res.status(201);
}
