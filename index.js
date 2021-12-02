const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = 3000;

// Connection URL
const url = process.env.DB_URL
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME

 async function apiCall(type,collect,data,id){
  
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collect)
  if(type == 'get' && !id){
    const findResult = await collection.find({}).toArray();
    return findResult;
    //console.log('Found documents =>', findResult);
  }
  else if(type == 'get' && id) {
    const findResult = await collection.findOne({"_id":id});
    return findResult;
   // console.log('Found documents =>', findResult);

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

app.get('/neighborhoods', function(req, res) {
  apiCall('get','neighborhoods',[])
  .then((data) => {
    res.set('Content-Type', 'application/json');
    res.set('charset','utf-8');
    res.json(data);
  })
  .catch(console.error)
  .finally(() => client.close());
});

app.get('/restaurants', function(req, res) {
  apiCall('get','restaurants',[])
  .then((data) => {
    res.set('Content-Type', 'application/json');
    res.set('charset','utf-8');
    res.json(data);
  })
  .catch(console.error)
  .finally(() => client.close());
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

// apiCall('get','restaurants',[], new ObjectId("5eb3d668b31de5d588f4292f"))
// .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());