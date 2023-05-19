import { Warehouse } from "./Warehouse.js";
import {Client} from "./Client.js";
import { DroneTime } from "./DroneTime.js";
import {Point} from "./Point.js";
import { WarehouseContainer } from "./WarehouseContainer.js";
import { ClientContainer } from "./ClientContainer.js";
import { ClientService } from "./ClientService.js";
import { Date } from "./TimeAuthentication.js";
import { TimeAuthenticationImplementation } from "./TimeAuthenticationImplementation.js";

const warehouse = new Warehouse(new Point(5, 2));
const client1 = new Client(new Point(2, 3));
const warehouse1 = new Warehouse(new Point(8, -3));
const client2 = new Client(new Point(4, 5));
const warehouse2 = new Warehouse(new Point(1, 2));
let warehouses = [warehouse, warehouse1, warehouse2];
let clients = [client1, client2];
console.log(ClientService.clientLoop(clients, warehouses));
console.log(TimeAuthenticationImplementation.getOrderYear());