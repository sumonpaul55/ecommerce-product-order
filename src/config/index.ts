import dotenv from "dotenv";
import path from "path"; //built in

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
};
