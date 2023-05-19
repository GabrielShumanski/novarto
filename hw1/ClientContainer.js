import { Client } from "./Client.js";
import { Point } from "./Point.js";

export class ClientContainer {
    _clients;

    constructor(clients) {
        this._clients = [];
        this._clients.push(...clients);
    }

    addClient(client) {
        this._clients.push(client);
    }

    addClientFromFile (inputRow) {
        let point = new Point (inputRow.x, inputRow.y);
        this._clients.push(new Client (point));
    }

    print () {
        for (const client of this._clients) {
            console.log(
                {
                    'id'                :   client.getId(),
                    'time'              :   client.getTimeOfPurchase(),
                    'x'                 :   client.getPoint().getX(),
                    'y'                 :   client.getPoint().getY()
                }
            )
        }
    }

    addClientsFromFile(inputData) {
        for (const client of inputData) {
            this.addClientFromFile(client);
        }
    }

    getClientById(id) {
        for (let client of this._clients) {
            if (client.getId() === id) {
                return client;
            }
        }  
    }

    getClient() {
        return this._clients;
    }

    popClient() {
        return this._clients.pop();
    }

}