class Women_Shirt extends Clothing_Product {
    private sleeve_length: number;
    private fabric: string;

    constructor(manuf: string, model: string, size: number, price: number, color: string, sleeve_len: number, fabric: string) {
        super(manuf, model, size, price, color);
        this.SLEEVE_LEN = sleeve_len;
        this.FABRIC = fabric;
    }

    public set SLEEVE_LEN(x: number) {
        if (x >= 0 && x <= 50) {
            this.sleeve_length = x;
        }
        else {
            throw new Error("Wrong Input. Sleeve lenght must be between 0-50.");
        }
    }
    public get SLEEVE_LEN(): number {
        return this.sleeve_length;
    }

    public set FABRIC(x: string) {
        this.fabric = x;
    }
    public get FABRIC(): string {
        return this.fabric;
    }

    displayDetails(): string {
        return (super.displayDetails() + "Sleeves Length: " + this.SLEEVE_LEN + "\nFabric: " + this.FABRIC);
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}