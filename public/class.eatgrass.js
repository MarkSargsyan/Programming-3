class Xotaker {


    constructor(x, y, ser) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.ser = (ser == 0 ? "arakan" : "igakan")
        if(ser == 0) {
            this.ser = "arakan";
         }else this.ser = "igakan";
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
        

        } else {
            this.sharjvel();
        }
    }

    bazmanal(){
        if(this.ser == "arakan") {
            var vandak = random(this.yntrelVandak(2.5));
            if(vandak) {
                var norVandak = random(this.yntrelVandak(0));
            }
        }
        var norXotaker = new Xotaker(this.x, this.y);
        xotakerArr.push(norXotaker);
        matrix[this.y][this.x] = 2;
        this.energy = 5;
    }
    mahanal(){

        var index = xotakerArr.findIndex(item => item.y === this.y && item.x === this.x);
        xotakerArr.splice(index, 1);
        matrix[this.y][this.x] = 0;

        
    }
    
}