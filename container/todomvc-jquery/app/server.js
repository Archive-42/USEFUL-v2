var fs = require("fs");

var express = require("express");
var app = express();

app.get("/", (req, res) => {
  fs.readFile("/app/templates/index.html", function (err, data) {
    if (err) {
      throw err;
      res.status(500).send("Could not compile template!");
      return;
    }

    var baseDomain;
    if (process.env.PROJECT_NAME) {
      baseDomain = process.env.PROJECT_NAME;
    } else if (req.hostname.split(".")[2] !== "hasura-app") {
      console.log("INVALID: Not running on a hasura-app.io domain!");
      res.status(400).send("Not running on a hasura-app.io domain.");
      return;
    } else {
      baseDomain = req.hostname.split(".")[1];
    }

    var compiledHtml = data
      .toString()
      .replace("{{{authUrl}}}", `https://auth.${baseDomain}.hasura-app.io`)
      .replace("{{{dataUrl}}}", `https://data.${baseDomain}.hasura-app.io`);
    res.send(compiledHtml);
  });
});

app.use(express.static("/app/static"));
app.listen(8080, "0.0.0.0", () => {
  console.log("Todo app listening on port 80!");
});
