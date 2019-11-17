abstract class Clothing_Product {
    private manufacturer: string;
    private model: string;
    private size: number;
    private price: number;
    private color: string;

    constructor(manuf: string, model: string, size: number, price: number, color: string) {
        this.MANUFACTURER = manuf;
        this.MODEL = model;
        this.SIZE = size;
        this.PRICE = price;
        this.COLOR = color;
    }

    public displayDetails(): string {
        return ("Manufacturer: " + this.MANUFACTURER + "\nModel: " + this.MODEL + "\nSize: " + this.SIZE + "Price: " + this.PRICE + "$\nColor: " + this.COLOR + "\n");
    }

    public Price_Without_Vat(): number {
        return this.PRICE - (this.PRICE / 17 * 100);
    }

    public set COLOR(x: string) {
        this.color = x;
    }
    public get COLOR(): string {
        return this.color;
    }

    public set PRICE(x: number) {
        if (x > 20 && x <= 500) {
            this.price = x;
        }
        else {
            throw new Error("Wrong Input. Price must be between 20-500.");
        }
    }
    public get PRICE(): number {
        return this.price;
    }

    public set SIZE(x: number) {
        if (x > 0 && x < 5) {
            this.size = x;
        }
        else {
            throw new Error("Wrong Input. Size has to be larger then 0 and smaller then 5");
        }
    }
    public get SIZE(): number {
        return this.size;
    }

    public set MANUFACTURER(x: string) {
        if (x.length >= 3) {
            this.manufacturer = x;
        }
        else {
            throw new Error("Wrong Input. Manufacturer need to be 3 or more letters.");
        }
    }
    public get MANUFACTURER(): string {
        return this.manufacturer;
    }

    public set MODEL(x: string) {
        if (x.length > 3) {
            this.model = x;
        }
        else {
            throw new Error("Wrong Input. Model must be more 3 or more letters.");
        }
    }
    public get MODEL(): string {
        return this.model;
    }
}