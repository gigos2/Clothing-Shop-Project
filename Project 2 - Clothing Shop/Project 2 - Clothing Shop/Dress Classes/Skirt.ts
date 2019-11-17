class Skirt extends Clothing_Product {
    private perimeter: number;
    private type: string;

    constructor(manuf: string, model: string, size: number, price: number, color: string, type: string, perim: number) {
        super(manuf, model, size, price, color);
        this.TYPE = type;
        this.PERIMETER = perim;
    }

    public set PERIMETER(x: number) {
        if (x >= 30 && x <= 50) {
            this.perimeter = x;
        }
        else {
            throw new Error("Wrong Input. Perimeter must be between 30-50.");
        }
    }
    public get PERIMETER(): number {
        return this.perimeter;
    }

    public set TYPE(x: string) {
        this.type = x;
    }
    public get TYPE(): string {
        return this.type;
    }

    displayDetails(): string {
        return super.displayDetails() + "\nPerimeter: " + this.PERIMETER + "\nType: " + this.TYPE;
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }

}