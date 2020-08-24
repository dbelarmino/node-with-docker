import "dotenv/config";

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Server Running!!!!!!");
});

app.listen(process.env.PORT || 3333);
