
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please chech you data enty, no name is specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

//fruit.save()


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "John",
  age: 32
});

//person.save();



const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me."
});

const banana = new Fruit({
  name: "banana",
  rating: 3,
  review: "Weird texture"
});



// Create in mongodb


Fruit.insertMany([kiwi, orange, banana], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});



// Read in Mongodb


Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    // mongoose.connection.close();

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }

});


// Update in Mongodb


Fruit.updateOne({_id: "629c4811956bd4d367d1ddfb"}, {name: "Peach"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});



// Delete in Mongodb


Fruit.deleteOne({name: "Peach"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the document.");
  }
});


Person.deleteMany({name: "John"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted all the documents.");
  }
});
