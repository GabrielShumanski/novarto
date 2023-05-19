export class Client {
    static id = 0;
    insideId;
    constructor(point, timeOfPurchase) {
        this.point = point;
        this.insideId = ++Client.id;
        this.timeOfPurchase = timeOfPurchase;
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