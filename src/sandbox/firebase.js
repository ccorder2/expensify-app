import * as firebase from 'firebase';

const config = {
	// config information goes here
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('notes').push({
// 	title: 'Course topics',
// 	body: 'React native, redux'
// });

// const firebaseNotes = {
//     notes: {
//         sadfasdf: {
//             title: 'First note!',
// 		    body: 'this is my note'
//         },
//         qwerdaas: {
//             title: 'Another note!',
// 		    body: 'this is my note'
//         }
//     }
// }

// const notes = [
// 	{
// 		id: '12',
// 		title: 'First note!',
// 		body: 'this is my note'
// 	},
// 	{
// 		id: '55',
// 		title: 'Another note!',
// 		body: 'this is my note'
// 	}
// ];

// database.ref('notes').set(notes);

// database.ref().on('value', snapshot => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChange = database.ref().on(
// 	'value',
// 	snapshot => {
// 		console.log(snapshot.val());
// 	},
// 	e => {
// 		console.log('Error with data fetching: ', e);
// 	}
// );

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(31);
// }, 10500);

// database
// 	.ref('location/city')
// 	.once('value')
// 	.then(snapshot => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch(e => {
// 		console.log('Error fetching data: ', e);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: 'Casey Corder',
// 		age: 29,
// 		stressLevel: 8,
// 		job: {
// 			title: 'Software developer',
// 			company: 'KeyLogic'
// 		},
// 		location: {
// 			city: 'Morgantown',
// 			state: 'West Virginia',
// 			country: 'United States'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data is saved');
// 	})
// 	.catch(e => {
// 		console.log('failed: ', e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle',
// 	'location/state': 'Washington'
// });
// database.ref().set('This is my data.');

// database.ref('age').set(30);
// database.ref('location/city').set('Morganhole');

// database
// 	.ref('attributes')
// 	.set({
// 		height: 73,
// 		weight: 220
// 	})
// 	.then(() => {
// 		console.log('Second set call worked');
// 	})
// 	.catch(e => {
// 		console.log('second error: ', e);
// 	});

// database
// 	.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed');
// 	})
// 	.catch(() => {
// 		console.log('Did not remove data', e);
// 	});

// database.ref('isSingle').set(null);

// only updates the root reference
// have to use this syntax to update child objects
// database.ref().update({
// 	job: 'Manager',
// 	'location/city': 'Boston'
// });

// database.ref('expenses').on('child_removed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', snapshot => {
// 	const expenses = [];
// 	snapshot.forEach(childSnapshot => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// database
// 	.ref('expenses')
// 	.once('value')
// 	.then(snapshot => {
// 		const expenses = [];
// 		snapshot.forEach(childSnapshot => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 86000,
// 	createdAt: 651654651
// });

// database.ref('expenses').push({
// 	description: 'Cable',
// 	note: '',
// 	amount: 8565,
// 	createdAt: 1654894512
// });

// database.ref('expenses').push({
// 	description: 'Food',
// 	note: '',
// 	amount: 1200,
// 	createdAt: 9845215425
// });
