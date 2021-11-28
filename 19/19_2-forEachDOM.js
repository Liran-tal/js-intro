const users = [
	{
		id: 167464,
		firstName: "Jimmy",
		lastName: "Arnold",
		email: "jimmya@gmail.com",
	},
	{
		id: 578447,
		firstName: "Martha",
		lastName: "Goldman",
		email: "gold@hotmail.com",
	},
	{
		id: 864578,
		firstName: "Tim",
		lastName: "Burton",
		email: "timmy.hotmail.com",
	},
];

function addUsersToUL(users) {
	const list = document.querySelector('#list');
	users.forEach((user) => {
		let li = document.createElement('li');
		li.setAttribute('data-id', user.id);
		let text = document.createTextNode(`${user.firstName} ${user.lastName}`);
		li.appendChild(text);
		list.appendChild(li);
		console.log(list);
	});
}

document.getElementById("list").style.listStyle = "none";

addUsersToUL(users);