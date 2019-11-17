class Short_Pants extends Clothing_Product {
    private length: number;
    private fabric: string;

    constructor(manuf: string, model: string, size: number, price: number, color: string, length: number, fabric: string) {
        super(manuf, model, size, price, color);
        this.LENGTH = length;
        this.FABRIC = fabric;
    }

    public set LENGTH(x: number) {
        if (x >= 20 && x <= 40) {
            this.length = x;
        }
        else {
            throw new Error("Wrong Input. LENGTH must be between 20-40.");
        }
    }
    public get LENGTH(): number {
        return this.length;
    }

    public set FABRIC(x: string) {
        this.fabric = x;
    }
    public get FABRIC(): string {
        return this.fabric;
    }

    displayDetails(): string {
        return (super.displayDetails() + "Shorts Length: " + this.LENGTH + "\nFabric: " + this.FABRIC);
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}