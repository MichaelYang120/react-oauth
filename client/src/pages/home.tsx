import React, { useState } from "react";
import Input from "../components/Inputs";
import { createUser } from "../helpers/api";

export default function Home() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

	const handleSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		let debug:boolean = true;
		if(debug) {
			console.log(event);
		}
		if(name.length != 0 && email.length != 0 && password.length != 0) {
			console.log('Name: ' + name + '\nEmail: ' + email + '\nPassword: ' + password);
			createUser('user', name, email, password);

			setIsSignedIn(true);
	
		}
		if(isSignedIn){
			console.log("you may enter");

		} else {
			console.log("please try again");
		}
		
	}

  return (
	<>
		<div>Sign In</div>
		<form onSubmit={handleSubmit}>
			<Input name="Name" label="Name" onChange={event => setName(event.target.value)}/>
			<Input name="Email" label="Email" onChange={event => setEmail(event.target.value)}/>
			<Input name="Password" label="Password" onChange={event => setPassword(event.target.value)}/>
			<button type="submit">Submit</button>
		</form>
	</>
  )
}
