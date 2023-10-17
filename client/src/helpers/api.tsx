const url:string = "http://localhost:8080/";


export function createUser (action:string, username:string, email:string, password:string) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	let apiurl = url + action;

	var raw = JSON.stringify({
			"username": username,
			"email": email,
			"password": password
			});

	fetch(apiurl, {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'

		})
		.then(response => {
			response.text()
			})
		.then(result => {
			console.log(result)
		})
		.catch(error => console.log('error', error));
}
