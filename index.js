require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mnqwuli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const gardenersCollection = client.db('Leafy').collection('gardeners')
    const tipsCollection = client.db('Leafy').collection('tips')
    // gardeners collection
    app.get('/gardeners', async (req, res) => {
      const result = await gardenersCollection.find().toArray()
      res.send(result)
    })

    app.get('/active-gardeners', async (req, res) => {
      const query = {status: "active"}
      const result = await gardenersCollection.find(query).limit(6).toArray()
      res.send(result)
    })
    // tip collection

    // all tips
    app.get('/tips', async (req, res) => {
      const result = await tipsCollection.find().toArray()
      res.send(result)
    })

    app.post('/tips', async (req, res) => {
      const tipObj = req.body
      const result = await tipsCollection.insertOne(tipObj)
      res.send(result)
    })

    // public tips
    app.get('/public-tips', async (req, res) => {
      const query = { availability: "Public" }
      const result = await tipsCollection.find(query).toArray()
      res.send(result)
    })

    // 6 tips
    app.get('/home-tips', async (req, res) => {
      const query = { availability: "Public" }
      const result = await tipsCollection.find(query).limit(6).toArray()
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
