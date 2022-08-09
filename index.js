const express = require("express");
const bodyParser = require("body-parser");
const db = require("./databaseConnector");

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.send("It's working! ... maybe, probably? possibly? definetly!");
})

app.get('/deities', db.getDeities)

app.listen(PORT, () => {
    console.log(`API server up and running on port ${PORT}`);
})