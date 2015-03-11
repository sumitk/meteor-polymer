Leaderboard = new Mongo.Collection('leaderboard');

if (!Leaderboard.find().count()) {
	var names = [
		'Marie Curie',
		'Carl Friedrich Gauss',
		'Grace Hopper',
		'Claude Shannon',
		'Ada Lovelace',
		'Nikola Tesla'
	];

	names.forEach(function (name) {
		Leaderboard.insert({ name: name, points: 0 });
	});
}
