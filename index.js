var median = require('./median.js');

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

var a = new median(points1);
var b = new median(points2);
var c = new median(points3);
var d = new median(points4);

console.log(a);
console.log(b);
console.log(c);
console.log(d);