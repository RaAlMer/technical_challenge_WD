const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(express.json());

// Routes for the API
const phoneRoutes = require("./routes/phone.routes");
app.use("/phones", phoneRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
