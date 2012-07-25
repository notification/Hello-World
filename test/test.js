
var mongoose = require('mongoose');
var express = require('express');
var mongoUri = "mongodb://admin:admin@ds035557.mongolab.com:35557/sampletest";
//var mongoUri = "mongodb://localhost:27017/sampletest";

var app = express.createServer();
mongoose.connect(mongoUri);
console.log("mongoose :: "+mongoose);

app.configure(function() {
    app.use(express.bodyParser());
	app.use(app.router);
});


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

			app.get('/', function(req, res) {
            collection.find({},function (err, goodQuests) {
//                console.log(goodQuests);
                res.json(goodQuests);
//                collection.drop();
//                mongoose.disconnect();
               });
		});
    });
});
app.listen(8145);