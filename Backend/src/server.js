const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

// Use cors so the backend can communicate with the frontend
app.use(cors());

app.use(express.json());

// Routes for the API
const phoneRoutes = require("./routes/phone.routes");
app.use("/phones", phoneRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
