module.exports=class Grass extends global.LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
        this.color="green";
    }

    bazmanal() {
        this.multiply++;
        var norVandak = this.getrandom(this.yntrelVandak(0));
        if (this.multiply >= 4 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
            cnvac_xot++;
        }
    }
}
