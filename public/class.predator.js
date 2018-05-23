module.exports = class gishatich extends global.LivingCreature {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 5 ;
        
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
            matrix[norVandak[1]][norVandak[0]] = 3;
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
        for (var a in gishatichArr) {
            if (this.x == gishatichArr[a].x && this.y == gishatichArr[a].y) {
                gishatichArr.splice(a, 1);
                break;
            }
        }
    }

    bazmanal() {
        if (this.ser == "arakan") {
            var predator = this.getrandom(this.yntrelVandak(3.5));
        }
        else {
            var predator = this.getrandom(this.yntrelVandak(3));
        }
        var norVandak = this.getrandom(this.yntrelVandak(0));

        if (norVandak && predator) {
            var r = (Math.round(Math.random())) / 2;
            var norGishatich = new gishatich(norVandak[0], norVandak[1], r);
            gishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            matrix[norVandak[1]][norVandak[0]] += r;
            this.energy /= 2;
            cnvac_gishatich++;
        }
    }

   
    utel() {
        var norVandak_xotaker = this.getrandom(this.yntrelVandak(2));
        var norVandak_mard = this.getrandom(this.yntrelVandak(4));
      

        if (norVandak_mard) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_mard[1]][norVandak_mard[0]] = 3;
            this.x = norVandak_mard[0];
            this.y = norVandak_mard[1];
            this.energy += 3;
         


            


            for (var a in mardArr) {
                if (this.x == mardArr[a].x && this.y == mardArr[a].y) {
                    mardArr.splice(a, 1);
                    break;
                }
            }

            if (exanak == "garun") {
                if (this.energy >= 3) {
                    this.bazmanal();
                }
            }
            else if (exanak == "ashun" || exanak == "amar") {
                if (this.energy >= 6) {
                    this.bazmanal();
                }
            }
            else if (exanak == "dzmer") {
                if (this.energy >= 10) {
                    this.bazmanal();
                }
            }

        }

        if (norVandak_xotaker) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xotaker[1]][norVandak_xotaker[0]] = 3;
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
                if (this.energy >= 3) {
                    this.bazmanal();
                }
            }
            else if (exanak == "ashun" || exanak == "amar") {
                if (this.energy >= 6) {
                    this.bazmanal();
                }
            }
            else if (exanak == "dzmer") {
                if (this.energy >= 10) {
                    this.bazmanal();
                }
            }

        }

        else {
            this.sharjvel();
        }
    }
}
