class Casual_Pants extends Clothing_Product {
    private length: number;
    private pockets: number;

    constructor(manuf: string, model: string, size: number, price: number, color: string, length: number, pockets: number) {
        super(manuf, model, size, price, color);
        this.LENGTH = length;
        this.POCKETS = pockets;
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

    public set POCKETS(x: number) {
        if (x >= 0 && x <= 4) {
            this.pockets = x;
        }
        else {
            throw new Error("Wrong Input. Number of Pockets must be between 0-4.");
        }
    }
    public get POCKETS(): number {
        return this.pockets;
    }

    displayDetails(): string {
        return (super.displayDetails() + "Pants Length: " + this.LENGTH + "\nNo. of Pockets: " + this.POCKETS);
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}