import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import messages from "./src/routes/messages.js";
import path from "path";
const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/messages", messages);
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://ernesto:BtPGaNFs8Y3Mpf3q@main.yotdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`${PORT}`)))
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
