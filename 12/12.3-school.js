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
school.findTeacherBySubject = function (subject) {
	const teacher = school.teachers.filter((elm) => {
		if (elm.subjects.includes(subject) && elm.capacityLeft > 0) {
			return elm
		}
	})
	return teacher[0];
}

school.assignStudent = function (student_id, subject) {
	//Find available teacher for subject
	const teacher = school.findTeacherBySubject(subject);
	if (teacher.length === 0){
		console.log('Sorry, no available teachers left');
		return;
	}
	//Assign student, by id, to teacher
	teacher.students.push(school.findPerson("students", student_id));
	-- teacher.capacityLeft;
	return;
}
// school.assignStudent(10, 'ethics');
// console.log(school.teachers);


//.3
school.assignTeachersSubject = function (teachers_id, new_subject) {
	const teacher = school.findPerson("teachers", teachers_id);
	if (!teacher.subjects.includes(new_subject)) {
		teacher.subjects.push(new_subject);
	}
	return;
}
// school.assignTeachersSubject(1, "math");
// school.assignTeachersSubject(1, "physics");
// console.log(school.teachers);

school.messageToExerciseWriter = function () {
	console.log("This is pointless!!!!");
}