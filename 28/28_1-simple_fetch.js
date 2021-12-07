console.log('*** 28.1 - Simple fetch ***');

const joke_title = document.querySelector('.joke-title');
const joke_text = document.querySelector('.joke-text');
const joke_button = document.querySelector('.joke-btn');

joke_button.addEventListener('click', getJoke);


function getJoke() {
	fetch('https://api.jokes.one/jod')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Status Code Error: ${response.status}`);
			}
			return response.json();
		})
		.then((joke_obj) => {
			console.log(joke_obj.contents.jokes[0].joke);
			joke_title.innerText = joke_obj.contents.jokes[0].joke.title;
			joke_text.innerText = joke_obj.contents.jokes[0].joke.text;
		})
		.catch((err) => {
			joke_title.innerText = '';
			joke_text.innerText = err;
		});
}



	

	