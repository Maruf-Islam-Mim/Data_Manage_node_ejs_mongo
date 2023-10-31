import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import Ejslayout from "express-ejs-layouts";
// import routers
import ProductRouter from "./route/productRouter.js";
import StudentRouter from "./route/studentRouter.js";
import { mongodbConnection } from "./configs/mongodb.js";

// dotenv set
dotenv.config();
const PORT = process.env.PORT;

// Express init
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ejs setting
app.set("view engine", "ejs");
app.use(Ejslayout);

// static foulder
app.use(express.static("public"));

// insert routers
app.use(ProductRouter);
app.use(StudentRouter);

// server listen
app.listen(PORT, () => {
  mongodbConnection();
  console.log(`Server successfuly ran in ${PORT} port`.bgCyan.black);
});
