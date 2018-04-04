/*class Arj{
    constructor(c,axorjak,kshir,h,x,y){ 
this.voteriQanak= 4;
this.mort = c;
this.axorjak = axorjak;
this.kshir = kshir;
this.hasak = h;
this.x=x;
this.y=y;
    }
    utel(){
        this.axorjak+=10
        if(this.axorjak>=20){
        console.log("kusht");
        }

    }
    qaylel(){
        this.x++;
        this.y++;
    }

}
var arj1 = new Arj("grey",0,1000,250,0,0);
arj1.qaylel();
arj1.qaylel();
arj1.qaylel();
arj1.utel();
arj1.utel();


console.log(arj1);
*/
// class Grass {
//     constructor(x, y) {
//         this.x = x;
//         this.multiply=0;
//         this.y = y;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];


//     }
//     yntrelVandak(ch) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
// bazmanal() {
//     this.multiply++;
//     var norVandak = random(this.yntrelVandak(0));
//     console.log(norVandak, this.multiply);
//     if (this.multiply >= 8 && norVandak) {
//         var norXot = new Grass(norVandak[0], norVandak[1]);
//         grassArr.push(norXot);
//         matrix[norVandak[1]][norVandak[0]] = 1;
//         this.multiply = 0;  
//     }
// }



// }
//  Grass

class Grass {


    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
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


    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >=2 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
            xotiQanak++;
        }
    }
}

//  Xotaker

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


class Gishatich {


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

    yntrelKerakuriVandak(xotakeriVandak, marduVandak, xotiVandak) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == xotakeriVandak || matrix[y][x] == marduVandak
                    || matrix[y][x] ==xotiVandak) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            matrix[this.y][this.x] = 3;
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

        var patahakanVandak = random(this.yntrelKerakuriVandak(2,4,1));
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



              
            //xotaker a kerel
            if (matrix[this.y][this.x] == 2){
                var index = xotakerArr.findIndex(item => item.y === this.y && item.x === this.x);
                xotakerArr.splice(index,1);
            }
            //mard a kerel
            else if (matrix[this.y][this.x] == 4) {
                var index = mardArr.findIndex(item => item.y === this.y && item.x === this.x);
                mardArr.splice(index,1);
            }
           
            //xot a kerel
            else {
                var index = grassArr.findIndex(item => item.y === this.y && item.x === this.x);
                grassArr.splice(index,1);
                xotiQanak--;
            }
            matrix[this.y][this.x] = 3;
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
        var norGishatich = new Gishatich(this.x, this.y);
        gishatichArr.push(norGishatich);
        matrix[this.y][this.x] = 3;
        this.energy = 5;
    }
    mahanal(){
        matrix[this.y][this.x] = 0;
        var index = gishatichArr.findIndex(item => item.y === this.y && item.x === this.x);
        gishatichArr.splice(index, 1);
        //for(var i in gishatichArr){
        //    var gishatichObj = gishatichArr[i];
        //    if(gishatichObj.x == this.x && gishatichObj.y == this.y){
        //        gishatichArr.splice(i, 1);
        //        matrix[this.y][this.x] = 0;
        //    }
        //}
    }

}

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


class Amenaker {


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

    yntrelKerakuriVandak(xotiVandak, xotakeriVandak, gishatichiVandak, marduVandak) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == xotiVandak || matrix[y][x] == xotakeriVandak
                    || matrix[y][x] == gishatichiVandak || matrix[y][x] == marduVandak) {
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
            if(this.energy > 5) {
                this.energy = 5;
            }
            this.energy--;

            //mahanal
            if (this.energy == 4){
                this.mahanal();
            }

        }
    }


    utel() {

        var patahakanVandak = random(this.yntrelKerakuriVandak(1,2,3,4));
        if (patahakanVandak) {

            if(this.energy < 5) {
                this.energy = 5;
            }

            this.energy++;

            //bazmanal
            if (this.energy == 20) {
                this.bazmanal();

            } else {
                matrix[this.y][this.x] = 0;
            }

            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];



            //xot a kerel
            if (matrix[this.y][this.x] == 1){
                var index = grassArr.findIndex(item => item.y === this.y && item.x === this.x);
                grassArr.splice(index,1);
                xotiQanak--;
            }
            //xotaker a kerel
            else if (matrix[this.y][this.x] == 2)  {
                var index = xotakerArr.findIndex(item => item.y === this.y && item.x === this.x);
                xotakerArr.splice(index,1);
            }
            //gishatich a kerel
            else if (matrix[this.y][this.x] == 3)
            {
                var index = gishatichArr.findIndex(item => item.y === this.y && item.x === this.x);
                gishatichArr.splice(index,1)
            }
            //mard a kerel
            else {
                var index = mardArr.findIndex(item => item.y === this.y && item.x === this.x);
                mardArr.splice(index,1);
            }

            matrix[this.y][this.x] = 5;

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
        var norAmenaker = new Amenaker(this.x, this.y);
        amenakerArr.push(norAmenaker);
        matrix[this.y][this.x] = 5;
        this.energy = 5;
    }
    mahanal(){

        matrix[this.y][this.x] = 0;
        var index = amenakerArr.findIndex(item => item.y === this.y && item.x === this.x);
        amenakerArr.splice(index, 1);
        //for(var i in gishatichArr){
        //    var gishatichObj = gishatichArr[i];
        //    if(gishatichObj.x == this.x && gishatichObj.y == this.y){
        //        gishatichArr.splice(i, 1);
        //        matrix[this.y][this.x] = 0;
        //    }
        //}
    }

}