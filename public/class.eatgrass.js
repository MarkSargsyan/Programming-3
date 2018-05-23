<<<<<<< HEAD
module.exports = class xotaker extends global.LivingCreature {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 4;
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
            matrix[norVandak[1]][norVandak[0]] = 2;
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
        for (var a in xotakerArr) {
            if (this.x == xotakerArr[a].x && this.y == xotakerArr[a].y) {
                xotakerArr.splice(a, 1);
                break;
            }


        }
    }

    bazmanal() {
        if (this.ser == "arakan") {
            var eatgrass = this.getrandom(this.yntrelVandak(2.5));
        }
        else {
            var eatgrass = this.getrandom(this.yntrelVandak(2));
        }
        var norVandak = this.getrandom(this.yntrelVandak(0));

        if (norVandak && eatgrass) {
            var r = (Math.round(Math.random())) / 2;
            var norXotaker = new xotaker(norVandak[0], norVandak[1], r);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            matrix[norVandak[1]][norVandak[0]] += r;
            this.energy = 0;
            cnvac_xotaker++;
        }
    }


    utel() {
        var norVandak_xot = this.getrandom(this.yntrelVandak(1));
        if (norVandak_xot) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak_xot[1]][norVandak_xot[0]] = 2;
            this.x = norVandak_xot[0];
            this.y = norVandak_xot[1];
            this.energy++;

            for (var a in grassArr) {
                if (this.x == grassArr[a].x && this.y == grassArr[a].y) {
                    grassArr.splice(a, 1);
                    break;
                }
            }

            if (exanak == "garun") {
                if (this.energy >= 8) {
                    this.bazmanal();
                }
            }
            else if(exanak=="ashun" || exanak=="amar"){
                if (this.energy >= 14) {
                    this.bazmanal();
                }
            }
            else if(exanak == "dzmer"){
                if (this.energy >= 20) {
                    this.bazmanal();
                }
            }


        }
        else {
            this.sharjvel();
        }
    }
}


=======
class Xotaker {


    constructor(x, y, ser) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
    //     this.ser = (ser == 0 ? "arakan" : "igakan")
    //     if(ser == 0) {
    //         this.ser = "arakan";
    //      }else this.ser = "igakan";
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
        // if(this.ser == "arakan") {
        //     var vandak = random(this.yntrelVandak(2.5));
        //     if(vandak) {
        //         var norVandak = random(this.yntrelVandak(0));
        //     }
        // }
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
>>>>>>> a87e1409dcc89170de0f20ce6cb6f97ec8720237
