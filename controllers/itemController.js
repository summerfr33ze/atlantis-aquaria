const Item = require("../models/item")
const Category = require("../models/category")
const asyncHandler = require("express-async-handler")
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req,res,next) => {
    const AllItems = await Item.find({}, "name category price left_in_stock")
    .sort({name: 1})
    .populate("category")
    .exec()

    res.render("index", {title: "Atlantis Aquaria", item_list: AllItems})
})

exports.tanks = asyncHandler(async (req,res,next) => {
    const Tanks = await Item.find({category: "Tanks"}, "name category price left_in_stock")
    .sort({name: 1})
    .populate("category")
    .exec()

    res.render("tanks", {title: "Aquarium Tanks", item_list: Tanks})
})

exports.accessories = asyncHandler(async (req,res,next) => {
    const Accessories = await Item.find({category: "Accessories"}, "name category price left_in_stock")
    .sort({name: 1})
    .populate("category")
    .exec()

    res.render("accessories", {title: "Aquarium Accessories", item_list: Accessories})
})

exports.decor = asyncHandler(async (req,res,next) => {
    const Decor = await Item.find({category: "Decor"}, "name category price left_in_stock")
    .sort({name: 1})
    .populate("category")
    .exec()

    res.render("tanks", {title: "Aquarium Decor", item_list: Decor})
})

exports.plants = asyncHandler(async (req,res,next) => {
    const Plants = await Item.find({category: "Plants"}, "name category price left_in_stock")
    .sort({name: 1})
    .populate("category")
    .exec()

    res.render("Plants", {title: "Aquarium Plants", item_list: Plants })
})

exports.fish = asyncHandler(async (req,res,next) => {
    const Fish = await Item.find({category: "Fish"}, "name category price left_in_stock")
    .sort({name: 1})
    .populate("category")
    .exec()

    res.render("fish", {title: "Aquarium Fish", item_list: Fish})
})

exports.food = asyncHandler(async (req,res,next) => {
    const Food = await Item.find({category: "Food"}, "name category price left_in_stock"
    .sort({name: 1}))
    .populate("")
})




exports.item_create_get = asyncHandler(async (req,res,next) => {

})

exports.item_create_post = asyncHandler(async (req,res,next) => {

})

exports.item_delete_get = asyncHandler(async (req,res,next) => {

})

exports.item_delete_post = asyncHandler(async (req,res,next) => {

})