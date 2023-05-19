const date = new Date();

export class Dates {
    constructor() {
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
        this.hour = date.getHours();
        this.minutes = date.getMinutes;
        this.seconds = date.getSeconds();
    }

    getYear() {
        return this.year;
    }

    getMonth () {
        return this.month;
    }

    getDay() {
        return this.day;
    }

    getHour() {
        return this.hour;
    }

    getMinutes() {
        return this.minute;
    }

    getSeconds() {
        return this.second;
    }
}