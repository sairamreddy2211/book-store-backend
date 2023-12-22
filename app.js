const express = require("express");
const app = express();

const port = 8080;

app.use(express.json());

app.use("/", require("./routes.js"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
