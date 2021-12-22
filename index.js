const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT;

// Connection URL
const url = process.env.DB_URL
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

const locations = require("./locations")

async function geoQueries(){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('neighborhoods')
  var neighborhood = await collection.findOne( { geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ -73.960813, 40.642772] } } } } )
  // console.log(neighborhood);
  const coll = db.collection("restaurants")
  try {
    var countOfRestaurants = await coll.find( { "address.coord" : { $geoWithin: {$geometry: neighborhood.geometry} }  }).toArray()

  }
  catch(err) {
    console.error(err);
  }
  
  console.log(countOfRestaurants);
  //db.restaurants.find( { location: { $geoWithin: { $geometry: neighborhood.geometry } } } ).count()
}

app.get('/geo/:coords', function(req,res) {
  geoQueries()
  .then((data) => {
    res.set('Content-Type', 'application/json');
    res.set('charset','utf-8');
    //res.json(data);
  
  })
  .catch(console.error)
  .finally(() => client.close());
})
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
    const findResult = await collection.findOne({"restaurant_id":id});
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

app.get('/restaurants/:id', function(req,res) {
  console.log(req.params);
  apiCall('get','restaurants',[],req.params.id)
  .then((data) => {
    res.set('Content-Type', 'application/json');
    res.set('charset','utf-8');
    res.json(data);
    console.log(data);
  })
  .catch(console.error)
  .finally(() => client.close());
})

app.get('/key', function(req,res) {
  res.set('Content-Type', 'application/json');
  res.set('charset','utf-8');
  res.json({key:process.env.KEY})

})
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

// app.get('/:man', function(req, res) {
//   res.set('Content-Type', 'application/json');
//   res.set('charset','utf-8');
//   res.json(locations.manhattanCoords);
// });
app.get('/man', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.set('charset','utf-8');
  res.json(locations.manhattanCoords);
});
app.get('/brook', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.set('charset','utf-8');
  res.json(locations.brooklynCoords);
});
app.get('/queens', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.set('charset','utf-8');
  res.json(locations.queensCoords);
});
app.get('/bronx', function(req, res) {
  console.log(locations.bronxCoords)
  res.set('Content-Type', 'application/json');
  res.set('charset','utf-8');
  res.json({lat: 40.84097055779349, long: -73.85258970014426});
})
app.get('/stat', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.set('charset','utf-8');
  res.json(locations.statenIslandCoords);
})
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

// apiCall('get','restaurants',[], new ObjectId("5eb3d668b31de5d588f4292f"))
// .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());