import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import VehicleController from "./controller/VehicleController.js";
import routes from "./routes/index.js";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());
app.use(routes);

routes.post("/tolls/create", VehicleController.createVehicle);

app.listen(port, () => {
	console.log("Server listening on port: ", port);
});
