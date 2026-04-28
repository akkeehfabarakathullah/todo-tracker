const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

mongoose.connect("mongodb+srv://user:user123@cluster0.6t0nat3.mongodb.net/todoapp?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});









