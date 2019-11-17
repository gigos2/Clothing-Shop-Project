class Evening_Dress extends Dress {
    private fabric: string;

    constructor(manuf: string, model: string, size: number, price: number, color: string, length: number, perimeter: number, back_open: boolean, fabric: string) {
        super(manuf, model, size, price, color, length, perimeter, back_open);
        this.FABRIC = fabric;
    }

    public set FABRIC(x: string) {
        this.fabric = x;
    }
    public get FABRIC(): string {
        return this.fabric;
    }

    displayDetails(): string {
        return super.displayDetails() + "\nFabric: " + this.FABRIC;
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}