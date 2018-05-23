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

           




        } else {
            this.sharjvel();
        }
    }

    bazmanal() {
        if (this.ser == "arakan") {
            var human = this.getrandom(this.yntrelVandak(3.5));
        }
        else {
            var human = this.getrandom(this.yntrelVandak(3));
        }
        var norVandak = this.getrandom(this.yntrelVandak(0));

        if (norVandak && human) {
            var r = (Math.round(Math.random())) / 2;
            var norMard = new mard(norVandak[0], norVandak[1], r);
            mardArr.push(norMard);
            matrix[norVandak[1]][norVandak[0]] = 4;
            matrix[norVandak[1]][norVandak[0]] += r;
            this.energy /= 2;
            cnvac_mard++;
        }
    }
    mahanal(){
        matrix[this.y][this.x] = 0;
        var index = mardArr.findIndex(item => item.y === this.y && item.x === this.x);
        mardArr.splice(index, 1);
        
    }

}