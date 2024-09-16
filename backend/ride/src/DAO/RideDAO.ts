import pgp from "pg-promise";

const conectionDB = "postgres://postgres:123456@localhost:3254/app";

export default interface RideDAO {
    checkIfHaveRideNotCompletedByPassenger(passengerId: string): Promise<any>;
    getRideAndUsersInformation(rideId: string): Promise<any>;
    requestRideByPassenger(passenger_id: string, from: [number, number], to: [number, number]): Promise<any>;
}

export class RideDAODatabase implements RideDAO {
    checkIfHaveRideNotCompletedByPassenger(passengerId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getRideAndUsersInformation(rideId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    requestRideByPassenger(passenger_id: string, from: [number, number], to: [number, number]): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export class RideDAOMemory implements RideDAO {
    rides: any[];
    
	constructor () {
		this.rides = [];
	}

    checkIfHaveRideNotCompletedByPassenger(passengerId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getRideAndUsersInformation(rideId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    requestRideByPassenger(passenger_id: string, from: [number, number], to: [number, number]): Promise<any> {
        throw new Error("Method not implemented.");
    }
}