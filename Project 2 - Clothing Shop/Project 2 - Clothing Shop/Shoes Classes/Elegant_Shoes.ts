class Elegant_Shoes extends Base_Shoes {
    private material: string;

    constructor(manuf: string, model: string, size: number, price: number, color: string, made_in: string, laces: boolean, material: string) {
        super(manuf, model, size, price, color, made_in, laces);
        this.MATERIAL = material;
    }

    public set MATERIAL(x: string) {
        this.material = x;
    }
    public get MATERIAL(): string {
        return this.material;
    }

    displayDetails(): string {
        return super.displayDetails() + "Material: " + this.MATERIAL;
    }

    displayImage() {
        //document.getElementById() + innerHTML = "<img src:x.jpg/>"
    }
}