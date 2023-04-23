#! /usr/bin/env node


// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Item = require("./models/item");
const Category = require("./models/category");


const items = [];
const categories = [];


const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createItems();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function categoryCreate(name, description) {
  const category = new Category({ name: name, description: description });
  await category.save();
  categories.push(category);
  console.log(`Added category: ${name}`);
}

async function itemCreate(name, category, price, left_in_stock) {
  const item = new Item({ name: name, category: category, price: price, left_in_stock: left_in_stock });
  await item.save();
  items.push(item);
  console.log(`Added item: ${name}`);

}



async function createItems() {
  console.log("Adding items");
  await Promise.all([
    itemCreate("5 Gallon Aquarium", categories[3], 50.00, 11),
    itemCreate("10 Gallon Aquarium", categories[3], 90.00, 4),
    itemCreate("Low-Flow Filter", categories[0], 20.00, 0),
    itemCreate("Tank Heater", categories[0], 25.50, 40,),
    itemCreate("Koi Angelfish", categories[1], 12.00, 65,),
    itemCreate("Fancy Goldfish", categories[1], 6.00, 0),
    itemCreate("Java Fern", categories[4], 5.00, 45),
    itemCreate("Anacharis", categories[4], 6.00, 46),
    itemCreate("Driftwood", categories[5], 10.00, 33),
    itemCreate("Chollah Wood", categories[5], 8.50, 34),
    itemCreate("Assorted Rocks", categories[5], 15.00, 20),
    itemCreate("Bloodworms", categories[2], 6.00, 53),
    itemCreate("Betta Pellets", categories[2], 6.00, 201)
  ]);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate("Tanks", "Who needs television when you can just watch your fish tank all day?"),
    categoryCreate("Accessories", "Keep your fish healthy and happy"),
    categoryCreate("Fish", "We've got the finest assortment of freshwater and saltwater fish available"),
    categoryCreate("Plants", "Like the natural look? Make your tank into a jungle with plants"),
    categoryCreate("Food", "We've got everything from pellets to flakes to freeze-dried foods"),
    categoryCreate("Decor", "Your fish is gonna be pretty bored with an empty tank. Put stuff in it"),
  ]);

}


