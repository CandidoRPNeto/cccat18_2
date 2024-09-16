import { RideDAODatabase, RideDAOMemory } from "../src/DAO/RideDAO";
import { AccountDAODatabase, AccountDAOMemory } from "../src/AccountDAO";
import RequestRide from "../src/RequestRide";
import GetRide from "../src/GetRide";

let request: RequestRide;
let get: GetRide;

// Integration Narrow -> Broad
beforeEach(async () => {
    await createUsersToRideTest();
	// const rideDAO = new RideDAODatabase();
	const rideDAO = new RideDAOMemory();
	request = new RequestRide(rideDAO);
	get = new GetRide(rideDAO);
});

afterEach(async () => {
	await removeUsersOfRideTest(["",""]);
});

async function createUsersToRideTest() {
	// const accountDAO = new AccountDAODatabase();
	const accountDAO = new AccountDAOMemory();
	accountDAO.saveAccount({
		"account_id": "",
		"name": "Sophia Olivia",
		"email": "a@a.a",
		"cpf": "282.132.521-52",
		"is_driver": true,
		"car_plate": "ASQ1223",
		"password": "1234",
		"isPassenger": false
	});
	accountDAO.saveAccount({
		"account_id": "",
		"name": "Sophia Olivia",
		"email": "a@a.a",
		"cpf": "282.132.521-52",
		"is_driver": false,
		"car_plate": "ASQ1223",
		"password": "1234",
		"is_passenger": true
	});
}

async function removeUsersOfRideTest(ids: String[]) {
}

test("Criando nova corrida", async () => {
	const response = await request.execute("passenger_id", [12.2334, 34.6757], [52.2312, -65.2353]);
	const ride = response.data;
	expect(ride.ride_id).toBeDefined();
});

test("Passando um não passageiro", async () => {
	await expect(() => request.execute("passenger_id", [12.2334, 34.6757], [52.2312, -65.2353])).rejects.toThrow(new Error("Invalid passenger"));
});

test("Passando passageiro com corrida em andamento", async () => {
	await expect(() => request.execute("passenger_id", [12.2334, 34.6757], [52.2312, -65.2353])).rejects.toThrow(new Error("Ride already created"));
});
