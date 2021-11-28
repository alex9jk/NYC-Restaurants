//db.js


// const conn = () => {
//   const mongoose = require('mongoose')

// const url = `mongodb+srv://alex9jk:Kramer123!@cluster0.2goze.mongodb.net/sample_restaurants?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })
  
// }
// module.exports = {conn}

const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb+srv://alex9jk:Kramer123!@cluster0.2goze.mongodb.net/sample_restaurants?retryWrites=true&w=majority";
// const connectionParams= {
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }
// Create a new MongoClient
const client = new MongoClient(uri);
let dbConn;
async function run() {
  try {
    // Connect the client to the server
    dbConn = await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports = {run}

// const { MongoClient } = require("mongodb");
// const connectionString = "mongodb+srv://alex9jk:Kramer123!@cluster0.2goze.mongodb.net/sample_restaurants?retryWrites=true&w=majority";
// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let dbConnection;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       if (err || !db) {
//         return callback(err);
//       }

//       dbConnection = db.db("sample_airbnb");
//       console.log("Successfully connected to MongoDB.");

//       return callback();
//     });
//   },

//   getDb: function () {
//     return dbConnection;
//   },
// };
