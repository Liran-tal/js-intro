console.log('*** 28.1 - Simple fetch ***');

const joke_title = document.querySelector('.joke-title');
const joke_text = document.querySelector('.joke-text');
const joke_button = document.querySelector('.joke-btn');

joke_button.addEventListener('click', getJoke);


async function getJoke() {
	const fetch_response = await fetch('https://api.jo####kes.one/jod')
	try {
		if (!fetch_response.ok) {
			throw new Error(`Status Code Error: ${response.status}`);
		}
	} catch (error) {
		joke_title.innerText = '';
		joke_text.innerText = error;
	}
	// isResponseOK(fetch_response)
	// 	.catch((err) => {
	// 		joke_title.innerText = '';
	// 		joke_text.innerText = err;
	// 	});
	
	const json_response = await fetch_response.json();
	try {
		if (!json_response.ok) {
			throw new Error(`Status Code Error: ${response.status}`);
		}
	} catch (error) {
		joke_title.innerText = '';
		joke_text.innerText = error;
	}
	// isResponseOK(json_response);

	const joke_obj = json_response.contents.jokes[0].joke;
	console.log(joke_obj)
	joke_title.innerText = joke_obj.title;
	joke_text.innerText = joke_obj.text;
}

function isResponseOK(response) {
	if (!response.ok) {
		throw new Error(`Status Code Error: ${response.status}`);
	}
}

	

	