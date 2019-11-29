require("dotenv").config()

module.exports = {
    PORT: process.env.PORT || 5000, 
    DATABASE: process.env.DATABASE ,
    DATABASE_NAME: process.env.DATABASE_NAME 

}
