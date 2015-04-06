'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	writing: {
		app: function () {
			this.directory('.', '.');
		}
	},

	install: function () {
		this.bowerInstall([], {
			save: true,
			'force-latest': true
		});

		this.spawnCommand('meteor', ['update']);
	}
});
