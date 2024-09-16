import RideDAO from "../src/DAO/RideDAO";

export default class RequestRide {
    constructor(readonly rideDAO: RideDAO){
        
    }

    async execute(passenger_id: any, from: number[], to: number[]): Promise<any> {

    }
}