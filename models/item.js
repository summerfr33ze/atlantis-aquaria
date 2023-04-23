const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 40},
    category: { type: Schema.Types.ObjectId, ref: "Category"},
    price: { type: Number, required: true},
    left_in_stock: { type: Number, required: true},
})


ItemSchema.virtual("url").get(function () {
    return `/inventory/item/${this._id}`;
  });

  module.exports = mongoose.model("Item", ItemSchema)


