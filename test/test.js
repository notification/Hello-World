
var mongoose = require('mongoose');
var mongoUri = "mongodb://admin:admin@ds035557.mongolab.com:35557/sampletest";
//var mongoUri = "mongodb://localhost:27017/sampletest";


mongoose.connect(mongoUri);
console.log("mongoose :: "+mongoose);

mongoose.connection.on("open", function() {
      

    mongoose.connection.db.collection('quests', function(err, collection) {

			collection.insert({
				'goal': 'Save the kingdom!',
				'level': 5,
				'experience': 14000,
				'reward': {
					'title': 'Noble',
					'gold': 22050
					}
			},
			
			function(err,result) {
				console.log("err1 : "+err);
				console.log("result1 : "+result);
			});

			collection.insert({
				'goal': 'Make the roads safe',
				'level': 3,
				'experience': 3000,
				'reward': {
					'title': 'Protector',
					'discount': 5,
					'gold': 100
					}
			},

			function(err,result) {
				console.log("err2 : "+err);
				console.log("result2 : "+result);
			});

			collection.insert({
				'goal': 'Explore a new land',
				'level': 1,
				'experience': 1000,
				'reward': {
					'gold': 50
					}
			},
			
			function(err,result) {
				console.log("err3 : "+err);
				console.log("result3 : "+JSON.stringify(result));
			});


			collection.insert({
				'goal': 'Make the roads safe',
				'level': 1,
				'experience': 1000,
				'reward': {
					'gold': 50
					}
				},
					function (err, result) {
						console.log("err4 : "+err);
						console.log("result4 : "+result);
					});

			collection.find({},function (err, goodQuests) {
//                console.log(goodQuests);
                res.json(goodQuests);
//                collection.drop();
//                mongoose.disconnect();
               });
		});
});