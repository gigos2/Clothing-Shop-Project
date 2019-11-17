class T_Shirt extends Clothing_Product {
    private sleeve_length: number;
    private content: string; //printing on shirt

    constructor(manuf: string, model: string, size: number, price: number, color: string, sleeve_len: number, content: string = null) {
        super(manuf, model, size, price, color);
        this.SLEEVE_LEN = sleeve_len;
        this.CONTENT = content;
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

    public set CONTENT(x: string) {
        this.content = x;
    }
    public get CONTENT(): string {
        return this.content;
    }

    displayDetails(): string {
        return (super.displayDetails() + "Sleeves Length: " + this.SLEEVE_LEN + (this.CONTENT != null ? "\nContent: " + this.CONTENT : ""));
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}