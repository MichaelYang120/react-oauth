import React, { useState } from "react";
import Input from "../components/Inputs";

export default function Signup() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

	const handleSubmit = (event:React.SyntheticEvent) => {
		
	}

  return (
	<>
		<div>Sign Up</div>
		<form onSubmit={handleSubmit}>
			<Input name="Name" label="Name" onChange={event => setName(event.target.value)}/>
			<Input name="Email" label="Email" onChange={event => setEmail(event.target.value)}/>
			<Input name="Password" label="Password" onChange={event => setPassword(event.target.value)}/>
			<button type="submit">Submit</button>
		</form>
	</>
  )
}
