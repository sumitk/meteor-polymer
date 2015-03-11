Package.describe({
	name: 'polymer',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.registerBuildPlugin({
	name: 'vulcanize',
	use: ['random'],
	npmDependencies: {
		'vulcanize': '0.7.9'
	},
	sources: [
		'vulcanize.js',
		'html_scanner.js'
	]
});
