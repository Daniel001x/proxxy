import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import app from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Start Server
try {
  app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

} catch (error) {
  console.log("Sever is not running", error);
  
}