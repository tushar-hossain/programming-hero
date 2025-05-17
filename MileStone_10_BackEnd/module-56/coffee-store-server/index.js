require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// database connection
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@tushar.1mtdh.mongodb.net/?retryWrites=true&w=majority&appName=Tushar`;

// create a mongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// db name and collection name
const database = client.db(process.env.DATABASE);
const coffees = database.collection(process.env.DATABASE_COLLECTION);
const usersCollection = client
  .db(process.env.DATABASE)
  .collection(process.env.DB_COLLECTION);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Coffee server.</h1>");
});

// connection db
async function run() {
  try {
    await client.connect();

    // get all coffees data
    app.get("/coffees", async (req, res) => {
      const result = await coffees.find().toArray();
      res.send(result);
    });
    // get all users
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // find one user
    app.get("/users/:email", async (req, res) => {
      const query = { email: req.params.email };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    // dynamic route single coffee data
    app.get("/coffees/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await coffees.findOne(query);
      res.send(result);
    });

    //   post coffees route
    app.post("/coffees", async (req, res) => {
      const coffee = req.body;
      const result = await coffees.insertOne(coffee);
      res.send(result);
    });

    // users post
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    // update coffee data
    app.put("/coffees/:id", async (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: req.body,
      };
      const result = await coffees.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // users update login time
    app.patch("/users", async (req, res) => {
      const filter = { email: req.body.email };
      const updateDoc = {
        $set: { lastSignInTime: req.body.lastSignInTime },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // deleted coffees data
    app.delete("/coffees/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await coffees.deleteOne(query);
      res.send(result);
    });

    // send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Coffee server running at http://localhost:${port}`);
});
