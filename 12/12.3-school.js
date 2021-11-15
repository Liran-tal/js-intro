const school = {
	teachers: [
		{
			id: 1,
			name: "Pinchas",
			subjects: ["chemistry", "biology", "physics"],
			students: [],
			capacityLeft: 3,
		},
		{
			id: 2,
			name: "Williams",
			subjects: ["history", "ethics"],
			students: [],
			capacityLeft: 2,
		},
	],
	students: [
		{
			id: 10,
			name: "Jennifer",
			age: 20,
		},
		{
			id: 11,
			name: "Howard",
			age: 23,
		},
		{
			id: 12,
			name: "Old-Timmy",
			age: 86,
		},
		{
			id: 13,
			name: "Houston",
			age: 21,
		},
	],
};

school.findPerson = function (type, id) {
	// console.log(this[type]);
	const result = school[type].filter((elm) => {
		if (elm.id === id) {
			return elm
		}
	})
	return result[0];
}

// console.log('school.findPerson(teacher, 1): ', school.findPerson('teachers', 1));
// console.log('school.findPerson(students, 1): ', school.findPerson('students', 1));


//.2
