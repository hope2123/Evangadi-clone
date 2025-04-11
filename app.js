const express = require("express");

var app = express();

app.get("/", (req, res) => {
res.send('well come')
});

app.listen(3001, (err) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Listening to : 3001")
    }
  });