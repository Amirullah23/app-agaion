const mongoose = require("mongoose")
const { DATABASE, DATABASE_NAME} = require("./environment")

mongoose.connect(DATABASE , {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log("Connect to database");
    
})
.catch(error => {
    console.log("there something ", error);
    
})

const db = mongoose.connection

module.exports = db