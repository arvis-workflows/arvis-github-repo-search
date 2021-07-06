import test from 'ava';
import arvishTest from 'arvish-test';

test(async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js node');
	delete result[0].mods;

	t.deepEqual(result[0],
		{
			title: 'nodejs/node',
			subtitle: 'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
			arg: 'https://github.com/nodejs/node'
		}
	);
});
