var median = require('./median.js');
var print = require('./print.js');

var points1 = [
    {x: 0, y: 0},
    {x: 0, y: 3},
    {x: 1, y: 0},
    {x: 1, y: 3},
    {x: 2, y: 1},
    {x: 3, y: 2},
    {x: 4, y: 0},
    {x: 4, y: 3},
    {x: 5, y: 0},
    {x: 5, y: 3}];

var a = new median(points1);
console.log(a);
print(a,points1);


var points2 = [
    {x: 0, y: 3},
    {x: 1, y: 0},
    {x: 1, y: 3},
    {x: 2, y: 1},
    {x: 3, y: 2},
    {x: 4, y: 0},
    {x: 4, y: 3},
    {x: 5, y: 0},
    {x: 5, y: 3}];

var b = new median(points2);
console.log(b);
print(b,points2);


var points3 = [
    {x: 0, y: 3},
    {x: 0, y: 1},
    {x: 1, y: 2},
    {x: 1, y: 1},
    {x: 1, y: 0},
    {x: 2, y: 1},
    {x: 3, y: 0},
    {x: 0, y: -1},
    {x: 1, y: -2},
    {x: 1, y: -1},
    {x: 0, y: -3},
    {x: 2, y: -1}];

var c = new median(points3);
console.log(c);
print(c,points3);


var points4 = [
    {x: 0, y: 3},
    {x: 1, y: 2},
    {x: 1, y: 4},
    {x: 2, y: 1},
    {x: 2, y: 2},
    {x: 2, y: 3},
    {x: 2, y: 4},
    {x: 2, y: 5},
    {x: 3, y: 0},
    {x: 3, y: 2},
    {x: 3, y: 4},
    {x: 3, y: 6},
    {x: 4, y: 1},
    {x: 4, y: 2},
    {x: 4, y: 3},
    {x: 4, y: 4},
    {x: 4, y: 5},
    {x: 5, y: 2},
    {x: 5, y: 4},
    {x: 6, y: 3}];

var d = new median(points4);
console.log(d);
print(d,points4);