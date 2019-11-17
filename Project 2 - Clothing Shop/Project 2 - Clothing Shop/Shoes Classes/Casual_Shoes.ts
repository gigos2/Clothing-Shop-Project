class Casula_Shoes extends Base_Shoes {
    private has_insole: boolean;

    constructor(manuf: string, model: string, size: number, price: number, color: string, made_in: string, laces: boolean, insole: boolean) {
        super(manuf, model, size, price, color, made_in, laces);
        this.HAS_INSOLE = insole;
    }

    public set HAS_INSOLE(x: boolean) {
        this.has_insole = x;
    }
    public get HAS_INSOLE(): boolean {
        return this.has_insole;
    }

    displayDetails(): string {
        return super.displayDetails() + "Has Insole: " + (this.HAS_INSOLE == true ? "Yes" : "No");
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}