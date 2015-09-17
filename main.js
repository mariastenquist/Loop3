// ----------Loops Practice 3---------------

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// example problem. Extracts names
console.log("example1")
for(var i=0; i<students.length; i++) {
 console.log(students[i].name);
} 

//problem #1

console.log("problem one")
for(var i=0; i<students.length; i++) {
	console.log(students[i].age);
}

// problem #2

for (var i=0; i<students.length; i++) {
	console.log(students[i].name + ', ' + students[i].city);
	
}

//problem #3 
for (var i=0; i<students.length; i++) {
	console.log(students[i].name + " is from " + students[i].city);
	
}


//problem #4

var olderStudents = students.filter(function(over25){
	return over25.age  > 25
	})
// console.log(olderStudents)

olderStudents.forEach(function(oneolderStudent){
	console.log(oneolderStudent.name + ' is over 25')

})

// console.log(olderStudents.name + ' is over 25')


