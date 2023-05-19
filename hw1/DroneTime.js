import { WarehouseContainer } from "./WarehouseContainer.js";

const dronePickupDroneTime = 5;
export class DroneTime {
    static getClosestToClient(client, warehouses){
        let clientPoint = client.getPoint();
        let warehouseContainer = new WarehouseContainer(warehouses);
        let last = warehouseContainer.popWarehouse();
        let smallestDistance = DroneTime.getDistance(clientPoint, last.getPoint());
        let warehouseSearch = last;
        for(let warehouse of warehouseContainer.getWarehouses()) {
            let distance = DroneTime.getDistance(clientPoint, warehouse.getPoint());
            if (distance < smallestDistance) {
                smallestDistance = distance;
                warehouseSearch = warehouse;
            }
        }
        return Number.parseFloat(smallestDistance) + dronePickupDroneTime;
    }

    static getDistance(clientPoint, warehousePoint){
        let x = clientPoint.getX() - warehousePoint.getX();
        let y = clientPoint.getY() - warehousePoint.getY();
        let str = Math.sqrt(x * x + y * y).toString();
        return Number.parseFloat(str).toFixed(2);
    }
}