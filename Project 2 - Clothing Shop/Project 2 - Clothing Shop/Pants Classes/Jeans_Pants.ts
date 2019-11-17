class Jeans extends Clothing_Product {
    private length: number;
    private has_rips: boolean;

    constructor(manuf: string, model: string, size: number, price: number, color: string, length: number, rips: boolean) {
        super(manuf, model, size, price, color);
        this.LENGTH = length;
        this.HAS_RIPS = rips;
    }

    public set HAS_RIPS(x: boolean) {
        this.has_rips = x;
    }
    public get HAS_RIPS(): boolean {
        return this.has_rips;
    }

    public set LENGTH(x: number) {
        if (x > 100 && x <= 120) {
            this.length = x;
        }
        else {
            throw new Error("Wrong Input. LENGTH must be between 100-120.");
        }
    }
    public get LENGTH(): number {
        return this.length;
    }

    displayDetails(): string {
        return (super.displayDetails() + "Jeans Length: " + this.LENGTH + (this.HAS_RIPS == true ? "\nJeans with rips" : "\nDoesn't has rips"));
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}