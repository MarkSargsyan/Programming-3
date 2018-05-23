module.exports=class zombie extends global.LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 20;
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
            matrix[norVandak[1]][norVandak[0]] = 6;
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
        for (var a in zombieArr) {
            if (this.x == zombieArr[a].x && this.y == zombieArr[a].y) {
                zombieArr.splice(a, 1);
                break;
            }


        }
    }

    utel() {
        var norVandak_amenaker=this.getrandom(this.yntrelVandak(5));

        var norVandak_mard = this.getrandom(this.yntrelVandak(4));

        var norVandak_gishatich = this.getrandom(this.yntrelVandak(3));

        var norVandak_xotaker = this.getrandom(this.yntrelVandak(2));
        
        var norVandak_xot = this.getrandom(this.yntrelVandak(1));


        if (norVandak_amenaker) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_amenaker[1]][norVandak_amenaker[0]] = 6;
            this.x = norVandak_amenaker[0];
            this.y = norVandak_amenaker[1];
            this.energy+=5;

            for (var a in amenakerArr) {
                if (this.x == amenakerArr[a].x && this.y == amenakerArr[a].y) {
                    amenakerArr.splice(a, 1);
                    break;
                }
            }
        }
        if (norVandak_mard) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_mard[1]][norVandak_mard[0]] = 6;
            this.x = norVandak_mard[0];
            this.y = norVandak_mard[1];
            this.energy+=4;

            for (var a in mardArr) {
                if (this.x == mardArr[a].x && this.y == mardArr[a].y) {
                    mardArr.splice(a, 1);
                    break;
                }
            }
        }

        else if (norVandak_gishatich) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_gishatich[1]][norVandak_gishatich[0]] = 6;
            this.x = norVandak_gishatich[0];
            this.y = norVandak_gishatich[1];
            this.energy+=3;
            
            for (var a in gishatichArr) {
                if (this.x == gishatichArr[a].x && this.y == gishatichArr[a].y) {
                    gishatichArr.splice(a, 1);
                    break;
                }
            }
        }

        else if (norVandak_xotaker) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xotaker[1]][norVandak_xotaker[0]] = 6;
            this.x = norVandak_xotaker[0];
            this.y = norVandak_xotaker[1];
            this.energy+=2;
            
            for (var a in xotakerArr) {
                if (this.x == xotakerArr[a].x && this.y == xotakerArr[a].y) {
                    xotakerArr.splice(a, 1);
                    break;
                }
            }
        }

        else if (norVandak_xot) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xot[1]][norVandak_xot[0]] = 6;
            this.x = norVandak_xot[0];
            this.y = norVandak_xot[1];
            this.energy++;
           

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
