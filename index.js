const express = require("express");

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("It's working! ... maybe, probably? possibly? definetly!");
})

app.listen(PORT, () => {
    console.log(`API server up and running on port ${PORT}`);
})