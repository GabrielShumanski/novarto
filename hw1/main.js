import { FileReader } from "./FileReader.js";
import { ClientContainer } from "./ClientContainer.js";

/*const warehouse = new Warehouse(new Point(5, 2));
const client1 = new Client(new Point(2, 3));
const warehouse1 = new Warehouse(new Point(8, -3));
const client2 = new Client(new Point(4, 5));
const warehouse2 = new Warehouse(new Point(1, 2));
let warehouses = [warehouse, warehouse1, warehouse2];
let clients = [client1, client2];
console.log(ClientService.clientLoop(clients, warehouses));*/

let inputData = FileReader.readFile('D:\\Programs\\novarto\\hw1\\input.txt');
let clients = new ClientContainer([]);
clients.addClientsFromFile(inputData);
clients.print();