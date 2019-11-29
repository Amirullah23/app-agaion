const mongoose = require("mongoose")

const Schema = mongoose.Schema

const todoSchema = new Schema({
    todo : {
        type : String,
        required : true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
})

const Todos = mongoose.model("documents", todoSchema)
module.exports = Todos