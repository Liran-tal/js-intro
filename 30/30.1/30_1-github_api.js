console.log('*** 30.1 - Github API ***');

const input_line = document.querySelector('#input-line');
const search_button = document.querySelector('#search-submit');
const grid = document.querySelector('.profiles-grid');

search_button.addEventListener('click', getProfile);

async function getProfile() {
	const username = input_line.value;
	console.log("user name: ", username);
	try {
		const fetch_response = await fetch(`https://api.github.com/users/${username}`);
		console.log("fetch: ", fetch_response);
		const data = await fetch_response.json();
		if (!fetch_response.ok) {
			throw new Error (`Status: ${fetch_response.status} ${data.message}`);
		}
		console.log("data: ", data);
		displayNewProfile(data);

	} catch (error) {
		
	}

}

async function displayNewProfile(profile) {
	const container = document.createElement('a');
		container.href = profile.html_url;
		container.classList.add('profile-card');
	const profile_pic = document.createElement('img');
		profile_pic.style.backgroundImage = `url("${profile.avatar_url}")`;
		profile_pic.classList.add('profile-img');
	const username = document.createElement('p');
		username.innerText = profile.name;
	const public_repos = document.createElement('p');
		public_repos.innerText = profile.public_repos;
	
	container.append(profile_pic, username, public_repos);
	grid.append(container);
}