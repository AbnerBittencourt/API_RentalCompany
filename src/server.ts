import express from 'express';

import "./database";

import "./shared/container";

import { router } from './routes';

import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(router);  

app.listen(3333, () => {
  console.log('Server is running in 3333!!')
});