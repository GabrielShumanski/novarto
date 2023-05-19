export class Warehouse {
    static id = 0;
    insideId;
    constructor(point) {
        this.point = point;
        this.insideId = ++Warehouse.id;
    }

    getPoint() {
        return this.point;
    }

    getId() {
        return this.insideId;
    }
}