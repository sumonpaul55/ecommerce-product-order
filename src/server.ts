import app from "./app";
import mongoose from "mongoose";
import config from "./config";

// getting-started.js

async function main() {
  await mongoose.connect(config.mongo_uri as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();
