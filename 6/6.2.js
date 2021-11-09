const people = ["Greg", "Mary", "Devon", "James"];

//.1
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
}
console.log("people.length = " + people.length);

//.2
console.log(people.shift());
console.log("people.length = " + people.length);

//.3
console.log(people.pop());
console.log("people.length = " + people.length);

//.4
people.unshift("Matt");
console.log("people.length = " + people.length);

//.5
people.push("Liran");
console.log("people.length = " + people.length);

//.6
const mary_index = people.indexOf("Mary");
for (let index = 0; index <= mary_index; index++) {
    console.log(people[index]);
}

//.7
const people_short = people.slice(mary_index + 1);
console.log("people.length = " + people_short.length);

//.8
//This needs to stop...

//.9
console.log("index of \'Foo\' = " + people.indexOf("Foo"));

//.10
const people2 = ["Greg", "Mary", "Devon", "James"];

people2.splice(people2.indexOf("Devon"), 1, "Elizabeth", "Artie");
console.log(people2);

//.11
const people3 = ["Greg", "Mary", "Devon", "James"];
const withBob = people3.concat("Bob");
console.log(withBob);