const express = require("express");
const todoRoutes = require("./route/todoRoute")
const cors = require("cors");
const connectDB = require("./configs/databaseConfig");
const app = express();
const port = process.env.PORT || 8081;
app.use(express.json());
app.use(cors());
app.use("/apis", todoRoutes); 
app.listen(port, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  console.log(`Serverrunning on port ${port}`);
});
