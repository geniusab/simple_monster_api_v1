const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const port = 3001;
const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.use((err, req, res, next) => {
  res.json({ status: 400, data: err });
});

app.listen(port, () => console.log(`listening on port ${port}`));
