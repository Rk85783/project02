require("dotenv").config();
const express = require("express");
const app = express();

const appRouter = require("./routes/app.route");

// Middleware
app.use(express.json());

// import routes
app.use("/api", appRouter);

const port = process.env.APP_PORT || 4001;
app.listen(port, () => {
  console.log(`${process.env.APP_NAME} is running at http://localhost:${port}`);
});
