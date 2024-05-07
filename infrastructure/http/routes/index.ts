import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

export const app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cors());
