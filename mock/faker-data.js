module.exports = function () {
 var faker = require("faker");
 faker.locale = "zh_CN";
 var _ = require("lodash");
 return {
		people: _.times(100, function (n) {
         return {
             id: n,
             name: faker.name.findName(),
             avatar: faker.internet.avatar()
         }
		}),
		address: _.times(100, function (n) {
         return {
             id: faker.random.uuid(),
             city: faker.address.city(),
             county: faker.address.county()
         }
		}),
		"login":{
			"usrname":"小妮子",
			"pasword":"123546"
		},
		"posts": [
			{ "id": 1, "title": "json-server", "author": "typicode" }
		],
		"comments": [
			{ "id": 1, "body": "some comment", "postId": 1 }
		],
		"profile": { "name": "typicode" }
 }
}