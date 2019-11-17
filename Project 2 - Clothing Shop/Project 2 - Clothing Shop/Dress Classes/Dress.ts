class Dress extends Clothing_Product {
    private perimeter: number;
    private length: number;
    private is_Back_Open: boolean;

    constructor(manuf: string, model: string, size: number, price: number, color: string, length: number, perimeter: number, back_open: boolean) {
        super(manuf, model, size, price, color);
        this.LENGTH = length;
        this.PERIMETER = perimeter;
        this.IS_BACK_OPEN = back_open;
    }

    public set IS_BACK_OPEN(x: boolean) {
        this.is_Back_Open = x;
    }
    public get IS_BACK_OPEN(): boolean {
        return this.is_Back_Open;
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

    public set LENGTH(x: number) {
        if (x >= 150 && x <= 180) {
            this.length = x;
        }
        else {
            throw new Error("Wrong Input. LENGTH must be between 150-180.");
        }
    }
    public get LENGTH(): number {
        return this.length;
    }

    displayDetails(): string {
        return super.displayDetails() + "Perimeter: " + this.PERIMETER + "\nLength: " + this.LENGTH + "\nOpen Back: " + (this.IS_BACK_OPEN == true ? "Yes" : "No");
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}