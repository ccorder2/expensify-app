//// OBJECT DESTRUCTURING

// const person = {
// 	name: 'Casey',
// 	age: 30,
// 	location: {
// 		city: 'Morgantown',
// 		temp: 31
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
// 	title: 'Ego is the Enemeny',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publihser;

// console.log(publisherName);

//// ARRAY DESTRUCTURING
// const address = ['623 Eagle Run Road', 'Morgantown', 'West Virginia', '26508'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
