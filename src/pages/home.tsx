import React from "react";
import Input from "../components/Inputs";

export default function Home() {
	const handleSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		let debug:boolean = false;
		if(debug) {
			console.log(event);
		}
	}

  return (
	<>
		<div>Sign In</div>
		<form onSubmit={handleSubmit}>
			<Input name="Name" label="Name"/>
			<Input name="Email" label="Email"/>
			<Input name="Password" label="Password"/>
			<button type="submit">Submit</button>
		</form>
	</>
  )
}
