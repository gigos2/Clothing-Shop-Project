abstract class Base_Shoes extends Clothing_Product {
    private made_in: string;
    private has_laces: boolean;

    constructor(manuf: string, model: string, size: number, price: number, color: string, made_in: string, laces: boolean) {
        super(manuf, model, size, price, color);
        this.MADE_IN = made_in;
        this.HAS_LACES = laces;
    }

    public set MADE_IN(x: string) {
        this.made_in = x;
    }
    public get MADE_IN(): string {
        return this.made_in;
    }

    public set HAS_LACES(x: boolean) {
        this.has_laces = x;
    }
    public get HAS_LACES(): boolean {
        return this.has_laces;
    }

    displayDetails(): string {
        return super.displayDetails() + "Made in: " + this.MADE_IN + "\nHas Laces: " + (this.HAS_LACES == true ? "Yes" : "No");
    }
}