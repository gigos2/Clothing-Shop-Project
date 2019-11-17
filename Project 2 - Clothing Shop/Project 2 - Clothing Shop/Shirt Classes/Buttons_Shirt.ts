class Buttons_Shirt extends Clothing_Product {
    private sleeve_length: number;
    private num_of_buttons: number;

    constructor(manuf: string, model: string, size: number, price: number, color: string, sleeve_len: number, num_of_buttons: number) {
        super(manuf, model, size, price, color);
        this.SLEEVE_LEN = sleeve_len;
        this.NUM_OF_BUTTONS = num_of_buttons;
    }

    public set NUM_OF_BUTTONS(x: number) {
        if (x >= 4 && x <= 8) {
            this.num_of_buttons = x;
        }
        else {
            throw new Error("Wrong Input. Number of Buttons most be between 4-8.");
        }
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

    public get NUM_OF_BUTTONS(): number {
        return this.num_of_buttons;
    }

    displayDetails(): string {
        return (super.displayDetails() + "Sleeves Length: " + this.SLEEVE_LEN + "\nNumber of Buttons: " + this.NUM_OF_BUTTONS);
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}