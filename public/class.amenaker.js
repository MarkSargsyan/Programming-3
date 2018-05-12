class Amenaker {


    constructor(x, y, ser) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        //     this.ser = (ser == 0 ? "arakan" : "igakan");
        //     if (ser == 0) {
        //         this.ser = "arakan";
        //     } else this.ser = "igakan";
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
        ];
    }






    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

    bazmanal() {
        //    if(this.ser == "arakan") {
        //         var vandak = random(this.yntrelVandak(2.5));
        //         if(vandak) {
        //             var norVandak = random(this.yntrelVandak(0));
        //         }
        //     }
        var norAmenaker = new Amenaker(this.x, this.y);
        amenakerArr.push(norAmenaker);
        matrix[this.y][this.x] = 5;
        this.energy = 5;
    }
    mahanal() {

        matrix[this.y][this.x] = 0;
        var index = amenakerArr.findIndex(item => item.y === this.y && item.x === this.x);
        amenakerArr.splice(index, 1);

    }

}