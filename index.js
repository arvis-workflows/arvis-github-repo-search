'use strict';
const arvish = require('arvish');

arvish.fetch('https://api.github.com/search/repositories', {
	query: {
		q: arvish.input
	},
	maxAge: 10 * 60 * 1000
}).then(data => {
	const items = data.items
		.map(elm => ({
			title: elm.full_name,
			subtitle: elm.description,
			arg: elm.html_url,
			mods: {
				cmd: {
					arg: elm.html_url,
					subtitle: `Star: ${elm.stargazers_count}  Fork: ${elm.forks_count}`
				}
			}
		}));
	arvish.output(items);
});
