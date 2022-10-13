import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const { POST = 5000 } = process.env;

app.listen(POST, () => {
  console.log(`-> Server is running on port ${POST}`);
});
