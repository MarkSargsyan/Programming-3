class Mard {


    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
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

    yntrelKerakuriVandak( xotakeriVandak) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == xotakeriVandak) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    sharjvel() {

        var patahakanVandak = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            if (xotiQanak<= 100) {
               
                var norXot = new Grass(this.x, this.y);
                grassArr.push(norXot);
                matrix[this.y][this.x] = 1;
                xotiQanak++
            }
            else {
                matrix[this.y][this.x] = 0;
            }
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 4;
            if(this.energy > 5) {
                this.energy = 5;
            }
            this.energy--;

            //mahanal
            if (this.energy == 0){
                this.mahanal();
            }

        }
    }


    utel() {

        var patahakanVandak = random(this.yntrelVandak(2));
        if (patahakanVandak) {

            if(this.energy < 5) {
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
            if (matrix[this.y][this.x] == 1){
                var index = xotakerArr.findIndex(item => item.y === this.y && item.x === this.x);
                xotakerArr.splice(index,1);
                
            }
          
            matrix[this.y][this.x] = 4;

            //for(var i in gishatichArr){
            //    var gishatich = gishatichArr[i];
            //    if(gishatich.x == this.x && gishatich.y == this.y){
            //        console.log("Y: " + this.y);
            //        console.log("X: " + this.x);
            //       // xotakerArr.splice(i,1);
            //    }
            //}




        } else {
            this.sharjvel();
        }
    }

    bazmanal(){
        var norMard = new Mard(this.x, this.y);
        mardArr.push(norMard);
        matrix[this.y][this.x] = 4;
        this.energy = 5;
    }
    mahanal(){
        matrix[this.y][this.x] = 0;
        var index = mardArr.findIndex(item => item.y === this.y && item.x === this.x);
        mardArr.splice(index, 1);
        //for(var i in gishatichArr){
        //    var gishatichObj = gishatichArr[i];
        //    if(gishatichObj.x == this.x && gishatichObj.y == this.y){
        //        gishatichArr.splice(i, 1);
        //        matrix[this.y][this.x] = 0;
        //    }
        //}
    }

}