class Sport_Shoes extends Base_Shoes {
    private date_created: Date;

    constructor(manuf: string, model: string, size: number, price: number, color: string, made_in: string, laces: boolean, date: Date) {
        super(manuf, model, size, price, color, made_in, laces);
        this.DATE = date;
    }

    public set DATE(x: Date) {
        this.date_created = x;
    }
    public get DATE(): Date {
        return this.date_created;
    }

    displayDetails(): string {
        return super.displayDetails() + "Date Created: " + this.date_created.getDate();
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}