const { MongoClient, ObjectId } = require('mongodb');
// import { ObjectID } from 'bson';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "";
const client = new MongoClient(url);

// Database Name
const dbName = '';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  

  // the following code examples can be pasted here...

  return 'done.';
}
async function getAllRestaurants(){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('');
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
}
async function getAllNeighborhoods() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('');
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  
}
async function addRestaurant(data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('');
  const findResult = await collection.insertOne(data)
  console.log('Found documents =>', findResult);
}

async function addNeighborhood(data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('');
  const findResult = await collection.insertOne(data)
  console.log('Found documents =>', findResult);
}
async function remove(id,collect) {
  

}
async function apiCall(type,collect,data,id){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collect)
  if(type == 'get'){
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  }
  else if (type == 'post') {
    const findResult = await collection.insertOne(data)
    console.log('Found documents =>', findResult);
  }
  else if (type =='delete') {
    const result = await collection.deleteOne({"_id": ObjectId(id) });
    console.log('Found documents =>', result);

  }


}
//db.test_users.remove({"_id": ObjectId("4d512b45cc9374271b02ec4f")})
apiCall('delete','restaurants', "5eb3d668b31de5d588f4292b")

 // getAllRestaurants()
.then(console.log)
  .catch(console.error)
  .finally(() => client.close());