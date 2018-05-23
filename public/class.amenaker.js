module.exports=class amenaker extends global.LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
        this.qayler = 3;
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
        this.qayler++;

        if (norVandak && this.qayler >= 4) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
            this.qayler = 0;

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

        for (var a in amenakerArr) {
            if (this.x == amenakerArr[a].x && this.y == amenakerArr[a].y) {
                amenakerArr.splice(a, 1);
                break;
            }
        }

        for (var d = 0; d < this.directions.length; d++) {

            var x = this.directions[d][0];
            var y = this.directions[d][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                matrix[this.directions[d][1]][this.directions[d][0]] = 0;
            }

            for (var a in mardArr) {
                if (x == mardArr[a].x && y == mardArr[a].y) {
                    mardArr.splice(a, 1);
                    break;
                }
            }
            for (var a in gishatichArr) {
                if (x == gishatichArr[a].x && y == gishatichArr[a].y) {
                    gishatichArr.splice(a, 1);
                    break;
                }
            }
            for (var a in xotakerArr) {
                if (x == xotakerArr[a].x && y == xotakerArr[a].y) {
                    xotakerArr.splice(a, 1);
                    break;
                }
            }
            for (var a in grassArr) {
                if (x == grassArr[a].x && y == grassArr[a].y) {
                    grassArr.splice(a, 1);
                    break;
                }
            }
            for (var a in amenakerArr) {
                if (x == amenakerArr[a].x && y == amenakerArr[a].y) {
                    amenakerArr.splice(a, 1);
                    break;
                }
            }


        }

        if (this.x - 2 >= 0 && this.x - 2 < matrix[0].length && this.y - 2 >= 0 && this.y - 2 < matrix.length && matrix[this.y - 2][this.x - 2] == 0) {
            matrix[this.y - 2][this.x - 2] = 3;
            gishatichArr.push(new gishatich(this.x - 2, this.y - 2));
        }

        if (this.x + 2 >= 0 && this.x + 2 < matrix[0].length && this.y + 2 >= 0 && this.y + 2 < matrix.length && matrix[this.y+2][this.x+2]==0) {
            matrix[this.y + 2][this.x + 2] = 2;
            xotakerArr.push(new xotaker(this.x + 2, this.y + 2));
        }


    }

    utel() {
        var norVandak_mard = this.getrandom(this.yntrelVandak(4));
        var norVandak_gishatich = this.getrandom(this.yntrelVandak(3));
        var norVandak_xotaker = this.getrandom(this.yntrelVandak(2));
        var norVandak_xot = this.getrandom(this.yntrelVandak(1));
        this.qayler++;

        if (norVandak_mard && this.qayler >= 4) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_mard[1]][norVandak_mard[0]] = 5;
            this.x = norVandak_mard[0];
            this.y = norVandak_mard[1];
            this.energy++;
            this.qayler = 0;

            for (var a in mardArr) {
                if (this.x == mardArr[a].x && this.y == mardArr[a].y) {
                    mardArr.splice(a, 1);
                    break;
                }
            }
        }

        else if (norVandak_gishatich && this.qayler >= 4) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_gishatich[1]][norVandak_gishatich[0]] = 5;
            this.x = norVandak_gishatich[0];
            this.y = norVandak_gishatich[1];
            this.energy++;
            this.qayler = 0;

            for (var a in gishatichArr) {
                if (this.x == gishatichArr[a].x && this.y == gishatichArr[a].y) {
                    gishatichArr.splice(a, 1);
                    break;
                }
            }
        }

        else if (norVandak_xotaker && this.qayler >= 4) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xotaker[1]][norVandak_xotaker[0]] = 5;
            this.x = norVandak_xotaker[0];
            this.y = norVandak_xotaker[1];
            this.energy++;
            this.qayler = 0;

            for (var a in xotakerArr) {
                if (this.x == xotakerArr[a].x && this.y == xotakerArr[a].y) {
                    xotakerArr.splice(a, 1);
                    break;
                }
            }
        }

        else if (norVandak_xot && this.qayler >= 4) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xot[1]][norVandak_xot[0]] = 5;
            this.x = norVandak_xot[0];
            this.y = norVandak_xot[1];
            this.energy++;
            this.qayler = 0;

            for (var a in grassArr) {
                if (this.x == grassArr[a].x && this.y == grassArr[a].y) {
                    grassArr.splice(a, 1);
                    break;
                }
            }
        }

        else {
            this.sharjvel();
        }
    }
}