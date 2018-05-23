module.exports = class mard extends global.LivingCreature {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 5;
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
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
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
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;

            if (this.energy <= 0) {
                this.mahanal();
            }
        }
        else {
            this.energy--;
            if (this.energy <= 0) {
                this.mahanal();
            }
        }
    }




    mahanal() {

        matrix[this.y][this.x] = 0;
        for (var a in mardArr) {
            if (this.x == mardArr[a].x && this.y == mardArr[a].y) {
                mardArr.splice(a, 1);
                break;
            }


        }
    }

    bazmanal() {
        if (this.ser == "arakan") {
            var mard = this.getrandom(this.yntrelVandak(3.5));
        }
        else {
            var mard = this.getrandom(this.yntrelVandak(3));
        }
        var norVandak = this.getrandom(this.yntrelVandak(0));

        if (norVandak && mard) {
            var r = (Math.round(Math.random())) / 2;
            var norMard = new mard(norVandak[0], norVandak[1], r);
            mardArr.push(norMard);
            matrix[norVandak[1]][norVandak[0]] = 4;
            matrix[norVandak[1]][norVandak[0]] += r;
            this.energy /= 2;
            cnvac_mard++;
        }
    }



    utel() {
        var norVandak_xotaker = this.getrandom(this.yntrelVandak(2));
        var norVandak_xot = this.getrandom(this.yntrelVandak(1));
        if (norVandak_xotaker) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xotaker[1]][norVandak_xotaker[0]] = 4;
            this.x = norVandak_xotaker[0];
            this.y = norVandak_xotaker[1];
            this.energy++;

            for (var a in xotakerArr) {
                if (this.x == xotakerArr[a].x && this.y == xotakerArr[a].y) {
                    xotakerArr.splice(a, 1);
                    break;
                }
            }

            if (exanak == "garun") {
                if (this.energy >= 20) {
                    this.bazmanal();
                }
            }
            else if (exanak == "ashun" || exanak == "amar") {
                if (this.energy >= 30) {
                    this.bazmanal();
                }
            }
            else if (exanak == "dzmer") {
                if (this.energy >= 40) {
                    this.bazmanal();
                }
            }

        }
        else if (norVandak_xot) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xot[1]][norVandak_xot[0]] = 4;
            this.x = norVandak_xot[0];
            this.y = norVandak_xot[1];
            this.energy++;


            for (var a in grassArr) {
                if (norVandak_xot[0] == grassArr[a].x && norVandak_xot[1] == grassArr[a].y) {
                    grassArr.splice(a, 1);
                    break;
                }
            }

            if (exanak == "garun") {
                if (this.energy >= 20) {
                    this.bazmanal();
                }
            }
            else if (exanak == "ashun" || exanak == "amar") {
                if (this.energy >= 30) {
                    this.bazmanal();
                }
            }
            else if (exanak == "dzmer") {
                if (this.energy >= 40) {
                    this.bazmanal();
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
}
