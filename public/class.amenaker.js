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


    yntrelKerakuriVandak(xotiVandak, xotakeriVandak, gishatichiVandak, marduVandak, zombieVandak) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == xotiVandak || matrix[y][x] == xotakeriVandak
                    || matrix[y][x] == gishatichiVandak || matrix[y][x] == marduVandak || matrix[y][x] == zombieVandak) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    sharjvel() {

        var patahakanVandak = random(this.yntrelVandak(0));
        this.qayler++
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 5;
            if (this.energy > 5) {
                this.energy = 5;
            }
            this.energy--;

            //mahanal
            if (this.energy == 0) {
                this.mahanal();
            }

        }
    }


    utel() {

        var patahakanVandak = random(this.yntrelKerakuriVandak(1, 2, 3, 4, 6));
        if (patahakanVandak) {

            if (this.energy < 5) {
                this.energy = 5;
            }

            this.energy++;

            //bazmanal
            if (this.energy == 10) {
                this.bazmanal();

            } else {
                matrix[this.y][this.x] = 0;
            }

            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];



            //xot a kerel
            if (matrix[this.y][this.x] == 1) {
                var index = grassArr.findIndex(item => item.y === this.y && item.x === this.x);
                grassArr.splice(index, 1);
                xotiQanak--;
            }
            //xotaker a kerel
            else if (matrix[this.y][this.x] == 2) {
                var index = xotakerArr.findIndex(item => item.y === this.y && item.x === this.x);
                xotakerArr.splice(index, 1);
            }
            //gishatich a kerel
            else if (matrix[this.y][this.x] == 3) {
                var index = gishatichArr.findIndex(item => item.y === this.y && item.x === this.x);
                gishatichArr.splice(index, 1)
            }
            //mard a kerel
            else if(matrix[this.y][this.x] == 4) {
                var index = mardArr.findIndex(item => item.y === this.y && item.x === this.x);
                mardArr.splice(index, 1);
            }
            //zombie a kerel
            else if(matrix[this.y][this.x] == 6) {
                var index = zombieArr.findIndex(item => item.y === this.y && item.x === this.x);
                zombieArr.splice(index, 1);
            }
            

            matrix[this.y][this.x] = 5;






        } else {
            this.sharjvel();
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


}