export class ClientContainer {
    _clients;

    constructor(clients) {
        this._clients = [];
        this._clients.push(...clients);
    }

    addClients(client) {
        this._clients.push(client);
    }

    getClientById(id) {
        for (let client of this._clients) {
            if (client.getId() === id) {
                return client;
            }
        }  
    }

    getClients() {
        return this._clients;
    }

    popClient() {
        return this._clients.pop();
    }

}