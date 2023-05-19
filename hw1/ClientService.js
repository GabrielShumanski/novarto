import { ClientContainer } from "./ClientContainer.js";
import { DroneTime} from "./DroneTime.js";

export class ClientService {
    static clientLoop(clients, warehouses) {
        let maxTime = 0.0;
        let clientContainer = new ClientContainer(clients)
        let drones = clientContainer.popClient();
        for (let client of clientContainer.getClients()) {
            let currentTime = DroneTime.getClosestToClient(client, warehouses)
            if(maxTime < currentTime)
            maxTime = currentTime;
        }

        return{ 
            'the lastDelivery is: ' : maxTime,  
            'the number of drones used is: ' : drones.getId()
        };
    }
}