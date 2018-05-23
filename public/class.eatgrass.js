module.exports = class xotaker extends global.LivingCreature {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 4;
        this.ser = (ser == 0 ? "arakan" : "igakan");
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }


    sharjvel() {
        var norVandak = this.getrandom(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;

            if (this.energy <= 0) {
                this.mahanal();
            }
        }
    }




    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var a in xotakerArr) {
            if (this.x == xotakerArr[a].x && this.y == xotakerArr[a].y) {
                xotakerArr.splice(a, 1);
                break;
            }


        }
    }

    bazmanal() {
        if (this.ser == "arakan") {
            var eatgrass = this.getrandom(this.yntrelVandak(2.5));
        }
        else {
            var eatgrass = this.getrandom(this.yntrelVandak(2));
        }
        var norVandak = this.getrandom(this.yntrelVandak(0));

        if (norVandak && eatgrass) {
            var r = (Math.round(Math.random())) / 2;
            var norXotaker = new xotaker(norVandak[0], norVandak[1], r);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[norVandak[1]][norVandak[0]] += r;
            this.energy = 0;
            cnvac_xotaker++;
        }
    }


    utel() {
        var norVandak_xot = this.getrandom(this.yntrelVandak(1));
        if (norVandak_xot) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xot[1]][norVandak_xot[0]] = 2;
            this.x = norVandak_xot[0];
            this.y = norVandak_xot[1];
            this.energy++;

            for (var a in grassArr) {
                if (this.x == grassArr[a].x && this.y == grassArr[a].y) {
                    grassArr.splice(a, 1);
                    break;
                }
            }

            if (exanak == "garun") {
                if (this.energy >= 8) {
                    this.bazmanal();
                }
            }
            else if(exanak=="ashun" || exanak=="amar"){
                if (this.energy >= 14) {
                    this.bazmanal();
                }
            }
            else if(exanak == "dzmer"){
                if (this.energy >= 20) {
                    this.bazmanal();
                }
            }


        }
        else {
            this.sharjvel();
        }
    }
}


