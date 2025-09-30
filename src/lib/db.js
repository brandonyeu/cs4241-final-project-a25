const { MongoClient, ServerApiVersion } = require('mongodb');
const {global} = require("styled-jsx/css");
const uri = process.env.MONGODB_URI
const options = {}

if(!uri) {
    throw new Error('MONGODB_URI is not defined')
}

let client;
let clientPromise;

if(process.env.NODE_ENV === 'development') {
    if(!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }

    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;