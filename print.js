var CliGraph = require('cli-graph');

function print(median, points){
    var width = 50;

    var g = new CliGraph({
        height: 50
        , width: width
        , aRatio: 3
        , marks: {
            hAxis: '-'
            , vAxis: '|'
            , center: '+'
            , point: '.'
        }
    }).setFunctionX(function (x) {
        return median.k * x + median.b;
    }, -width/2, width/2, '.');

    for(var i in points){
        g.addPoint(points[i].x, points[i].y, '*');
    }

    console.log(g.toString());
}

module.exports = print;