var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require('fs');


app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

global.matrix = [];
var m = 34;
var n = 34;
var side = 18;

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.mardArr = [];
global.amenakerArr = [];
global.zombieArr = [];

global.LivingCreature = require("./public/class.livingCreature.js");
global.Grass = require("./public/class.grass.js");
global.xotaker = require("./public/class.eatgrass.js");
global.gishatich = require("./public/class.predator.js");
global.mard = require("./public/class.mard.js");
global.amenaker = require("./public/class.amenaker.js");
global.zombie = require("./public/class.zombie.js");


//klientin uxarkelu hamar
var arr = [];
//////////////////////////////////////////////////////////////////////////////////////

io.on('connection', function (socket) {
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < m; j++) {
            matrix[i][j] = Math.round(Math.random() * 4);
        }
    }

    matrix[10][10] = 5;
    matrix[20][20] = 5;
    matrix[30][30] = 5;
    matrix[12][12] = 5;
    matrix[21][21] = 5;
    matrix[26][29] = 5;

    matrix[5][30] = 6;
    matrix[30][5] = 6;

    global.cnvac_xot=0;
    global.cnvac_xotaker=0;
    global.cnvac_gishatich=0;
    global.cnvac_mard=0;

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
                cnvac_xot++;
            }
            else if (matrix[y][x] == 2) {
                var r = (Math.round(Math.random())) / 2;
                xotakerArr.push(new xotaker(x, y, r));
                matrix[y][x] += r;
                cnvac_xotaker++;
            }
            else if (matrix[y][x] == 3) {
                var t = (Math.round(Math.random())) / 2;
                gishatichArr.push(new gishatich(x, y, t));
                matrix[y][x] += t;
                cnvac_gishatich++;
            }
            else if (matrix[y][x] == 4) {
                var f = (Math.round(Math.random())) / 2;
                mardArr.push(new mard(x, y, f));
                matrix[y][x] += f;
                cnvac_mard++;

            }
            else if (matrix[y][x] == 5) {
                amenakerArr.push(new amenaker(x, y));
            }
            else if (matrix[y][x] == 6) {
                zombieArr.push(new zombie(x, y));
            }
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////
    var exanaknerArr = ["amar", "ashun", "dzmer", "garun"];
    var i = 0;
    global.exanak = "garun";
    function exanakiPopoxutyun() {
        exanak = exanaknerArr[i];
        //console.log(exanak);
        i++;

        if (i >= 4) {
            i = 0;
        }
    }
    setInterval(exanakiPopoxutyun, 5000);
    ////////////////////////////////////////////////////////////////////////////////

    var frame = 0;
    
    setInterval(function () {
        for (var i in grassArr) {
            if (exanak != "dzmer") {
                grassArr[i].bazmanal();
            }
        }
        for (var i in xotakerArr) {
            xotakerArr[i].utel();
        }
        for (var i in gishatichArr) {
            gishatichArr[i].utel();
        }
        for (var i in mardArr) {
            mardArr[i].utel();
        }
        for (var i in amenakerArr) {
            amenakerArr[i].utel();
        }
        for (var i in zombieArr) {
            zombieArr[i].utel();
        }


        frame++;
        if (frame % 12 == 0) {
            paytyun();
        }
        if (frame % 5 == 0) {
            statistika();
        }

        //uxarkel klientin
        arr[0] = matrix;
        arr[1] = exanak;
        io.sockets.emit("a", arr);
        ////////////////////////////////////////////////////////////////////////
    }, 400);



    function paytyun() {
        var vandakY = Math.floor(Math.random() * 34);
        var vandakX = Math.floor(Math.random() * 34);
        var paytyunDirections = [
            [vandakX - 1, vandakY - 1],
            [vandakX, vandakY - 1],
            [vandakX + 1, vandakY - 1],
            [vandakX - 1, vandakY],
            [vandakX + 1, vandakY],
            [vandakX - 1, vandakY + 1],
            [vandakX, vandakY + 1],
            [vandakX + 1, vandakY + 1],

            [vandakX - 2, vandakY - 2],
            [vandakX - 1, vandakY - 2],
            [vandakX, vandakY - 2],
            [vandakX + 1, vandakY - 2],
            [vandakX + 2, vandakY - 2],
            [vandakX - 2, vandakY - 1],
            [vandakX + 2, vandakY - 1],
            [vandakX - 2, vandakY],
            [vandakX + 2, vandakY],
            [vandakX - 2, vandakY + 1],
            [vandakX + 2, vandakY + 1],
            [vandakX - 2, vandakY + 2],
            [vandakX - 1, vandakY + 2],
            [vandakX, vandakY + 2],
            [vandakX + 1, vandakY + 2],
            [vandakX + 2, vandakY + 2]
        ];

        matrix[vandakY][vandakX] = 0;
        //////////////////////////////////////////////////////////////////////////////////
        for (var a in mardArr) {
            if (vandakX == mardArr[a].x && vandakY == mardArr[a].y) {
                mardArr.splice(a, 1);
                break;
            }
        }
        for (var a in gishatichArr) {
            if (vandakX == gishatichArr[a].x && vandakY == gishatichArr[a].y) {
                gishatichArr.splice(a, 1);
                break;
            }
        }
        for (var a in xotakerArr) {
            if (vandakX == xotakerArr[a].x && vandakY == xotakerArr[a].y) {
                xotakerArr.splice(a, 1);
                break;
            }
        }
        for (var a in grassArr) {
            if (vandakX == grassArr[a].x && vandakY == grassArr[a].y) {
                grassArr.splice(a, 1);
                break;
            }
        }
        for (var a in amenakerArr) {
            if (vandakX == amenakerArr[a].x && vandakY == amenakerArr[a].y) {
                amenakerArr.splice(a, 1);
                break;
            }
        }
        for (var a in zombieArr) {
            if (vandakX == zombieArr[a].x && vandakY == zombieArr[a].y) {
                zombieArr.splice(a, 1);
                break;
            }
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////

        for (var d = 0; d < paytyunDirections.length; d++) {

            if (paytyunDirections[d][0] >= 0 && paytyunDirections[d][0] < matrix[0].length && paytyunDirections[d][1] >= 0 && paytyunDirections[d][1] < matrix.length) {
                matrix[paytyunDirections[d][1]][paytyunDirections[d][0]] = 0;
            }


            for (var a in mardArr) {
                if (paytyunDirections[d][0] == mardArr[a].x && paytyunDirections[d][1] == mardArr[a].y) {
                    mardArr.splice(a, 1);
                    break;
                }
            }
            for (var a in gishatichArr) {
                if (paytyunDirections[d][0] == gishatichArr[a].x && paytyunDirections[d][1] == gishatichArr[a].y) {
                    gishatichArr.splice(a, 1);
                    break;
                }
            }
            for (var a in xotakerArr) {
                if (paytyunDirections[d][0] == xotakerArr[a].x && paytyunDirections[d][1] == xotakerArr[a].y) {
                    xotakerArr.splice(a, 1);
                    break;
                }
            }
            for (var a in grassArr) {
                if (paytyunDirections[d][0] == grassArr[a].x && paytyunDirections[d][1] == grassArr[a].y) {
                    grassArr.splice(a, 1);
                    break;
                }
            }
            for (var a in amenakerArr) {
                if (paytyunDirections[d][0] == amenakerArr[a].x && paytyunDirections[d][1] == amenakerArr[a].y) {
                    amenakerArr.splice(a, 1);
                    break;
                }
            }
            for (var a in zombieArr) {
                if (paytyunDirections[d][0] == zombieArr[a].x && paytyunDirections[d][1] == zombieArr[a].y) {
                    zombieArr.splice(a, 1);
                    break;
                }
            }

        }

    }

    //////////////////////////////////////////////////////////////////////////

    function statistika() {
        var file = "data.json";
        var text = "xoti qanak " + grassArr.length + "\nxotakeri qanak " + xotakerArr.length + "\ngishatichi qanak " + gishatichArr.length + "\nmardu qanak " + mardArr.length + "\namenakeri qanak " + amenakerArr.length + "\nzombiei qanak " 
        + zombieArr.length+"\n\ncnvac xot "+cnvac_xot+"\ncnvac xotaker "+cnvac_xotaker+"\ncnvac gishatich "+cnvac_gishatich+"\ncnvac mard "+cnvac_mard;

        fs.writeFileSync(file, text);
    }

});