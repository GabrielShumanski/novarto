export class Client {
    static id = 0;
    insideId;
    constructor(point) {
        this.point = point;
        this.insideId = ++Client.id;
        this.timeOfPurchase = Date();
    }

    getPoint() {
        return this.point;
    }

    getTimeOfPurchase() {
        return this.timeOfPurchase;
    }

    getId() {
        return this.insideId;
    }
}