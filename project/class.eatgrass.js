class Xotaker {


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


    sharjvel() {

        var patahakanVandak = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 2;
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

        var patahakanVandak = random(this.yntrelVandak(1));
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


            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 2;

            var index = grassArr.findIndex(item => item.y === this.y && item.x === this.x);
            grassArr.splice(index,1);
            xotiQanak--;
            //for(var i in xotakerArr){
            //    var xotObj = xotakerArr[i];
            //    if(xotObj.x == this.x && xotObj.y == this.y){
            //        grassArr.splice(i,1);
            //    }
            //}

        } else {
            this.sharjvel();
        }
    }

    bazmanal(){
        var norXotaker = new Xotaker(this.x, this.y);
        xotakerArr.push(norXotaker);
        matrix[this.y][this.x] = 2;
        this.energy = 5;
    }
    mahanal(){

        var index = xotakerArr.findIndex(item => item.y === this.y && item.x === this.x);
        xotakerArr.splice(index, 1);
        matrix[this.y][this.x] = 0;

        //for(var i in xotakerArr){
        //    var xotObj = xotakerArr[i];
        //    if(xotObj.x == this.x && xotObj.y == this.y){
        //        xotakerArr.splice(i, 1);
        //        matrix[this.y][this.x] = 0;
        //    }
        //}
    }
    
}