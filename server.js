const Express = require("express");
const BodyParser = require("body-parser");
var cors = require('cors')
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://shashank_134:dbase@cluster134-3qsja.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "ecommerce";

var app = Express();
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;
app.post("/cart", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.get("/cartData", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("cart");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});