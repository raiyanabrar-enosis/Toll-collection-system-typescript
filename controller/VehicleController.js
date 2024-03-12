import * as VehicleService from "../out/service/VehicleService.js";

export default class VehicleController {
	static createVehicle = (req, res) => {
		const vehicleType = req.body.vehicleType;

		const vehicle = VehicleService.createVehicle(vehicleType);

		res.status(200).json({
			message: "Success",
			data: { ...vehicle, type: vehicleType },
		});
	};
}
