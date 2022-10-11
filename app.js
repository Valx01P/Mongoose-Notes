//<-1->//

//jshint esversion:6

const mongoose = require('mongoose');

// connects to database stated, if there is none it makes it

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

//create new schema

const fruitSchema = new mongoose.Schema ({
	name: {
    type: String,         //validation parameters vvv
    required: [true, "Please check your data entry, name not specified"]
  },
	rating: {
  type: Number,
  min: 1,                 //validation parameters
  max: 10                 //validation parameters
},
	review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

//create new document from model

const fruit = new Fruit ({
	name: "Apple",
	rating: 7,
	review: "Pretty solid as a fruit."
});

//saves fruit document into a fruits collection inside our fruit db
//makes a new addition everytime, you may want to comment it out after the first use

fruit.save()

//<-1 , 2->//

const personSchema = new mongoose.Schema ({
	name: String,
	age: Number,
  favoriteFruit: fruitSchema      //1
});

const Person = mongoose.model("Person", )

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."      //2
});

pineapple.save();

const person = new Person({
	name: "Amy",
	age: 12,
  favoriteFruit: pineapple      //3
});

person.save();

//<-2 , 3->//

// const kiwi = new Fruit({
// 	name:"Kiwi",
// 	score: 10,
// 	review: "The best fruit!"
// });
//
// const orange = new Fruit({
// 	name:"Orange",
// 	score: 4,
// 	review: "Too sour for me"
// });
//
// const banana = new Fruit({
// 	name:"Banna",
// 	score: 3,
// 	review: "Wierd texture"
// });

//comment this part out to avoid adding more than once ^^^

// Fruit.insertMany([kiwi, orange, banana], function(err){	//you can read this on the api model
// if (err) {
// 	console.log(err);
// } else {
// 	console.log("Succesfully saved all the fruits to fruitsDB");
// }
// });

//<-3, 4->//

//!<-intro, reading from your database w/ mongoose->
//viewing the data

Fruit.find(function(err, fruits){
if (err) {
	console.log(err);
} else {

	mongoose.connection.close();

	fruits.forEach(function(fruit){
	console.log(fruit.name);
	});
}
});

//<-4->//
//!<-data validation->//
