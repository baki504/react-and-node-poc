import * as express from "express";
import TestClass from "./TestClass";
const app = express();
const port = 8081;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  let clazz = new TestClass();
  clazz.getField;
  console.log("receive request");
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
