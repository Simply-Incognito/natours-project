const mongoose = require("mongoose");
const mongodb = require('mongodb');

// Require dotenv package after installation
const dotenv = require("dotenv");

// Connect the environmental variables in the .env file to server.js
dotenv.config({path: "./config.env"});

// Connect to database
/*const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PWD);
*/

/*process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);*/

const database = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);


const connectDb = async () => {
try {
 const con = await mongoose
     .connect(database);
    console.log('DB connected successfully!')
} catch (err) {
  while(err)
    connectDb();
  console.log(`Something went wrong...: ${err.code}`);
 }
};
connectDb();

// Require/Import Express App after connecting Environmental variables to server.js
const app = require("./app")

// listen to requests on port: 3000
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is up. Listening to Port ${port}...`);
});
