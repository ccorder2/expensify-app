const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Casey',
			age: 30
		});
		// resolve('This is my other resolved data'); // ignored (only one resolve)
		//reject('Something went wrong!');
	}, 1500);
});

console.log('before');

promise
	.then(data => {
		console.log(data);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('This is my other promise');
			}, 1500);
		});
	})
	.then(prevPromise => {
		console.log('does this run?', prevPromise);
	})
	.catch(error => {
		console.log('error:', error);
	});

console.log('after');
