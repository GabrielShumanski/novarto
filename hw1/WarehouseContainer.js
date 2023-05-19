export class WarehouseContainer{
    _warehouses;

    constructor(warehouses) {
        this._warehouses = [];
        this._warehouses.push(...warehouses);
    }

    addWarehouse (warehouse) {
        this._warehouses.push(warehouse);
    }

    getWarehouseById(id){
        for (let warehouse of this._warehouses) {
            if (warehouse.getId() === id) {
                return warehouse;
            }
        }
    }

    getWarehouses() {
        return this._warehouses;
    }

    popWarehouse() {
        return this._warehouses.pop();
    }

}