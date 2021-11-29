const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
// import { ObjectID } from 'bson';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.DB_URL
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME

async function apiCall(type,collect,data,id){
  console.log(">>>",data);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collect)
  if(type == 'get' && !id){
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  }
  else if(type == 'get' && id) {
    const findResult = await collection.findOne({"_id":id});
    console.log('Found documents =>', findResult);

  }
  else if (type == 'post') {
    const findResult = await collection.insertOne(data)
    console.log('Found documents =>', findResult);
  }
  else if (type =='delete') {
    const result = await collection.deleteOne({ "__id" : id });
    console.log('Found documents =>', result);

  }
}

apiCall('get','restaurants',[], new ObjectId("5eb3d668b31de5d588f4292f"))
.then(console.log)
  .catch(console.error)
  .finally(() => client.close());