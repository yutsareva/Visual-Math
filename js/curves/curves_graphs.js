var color = [0, .55, .8];
var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];


var color = [0, .55, .8];

var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

var t1 = grafar.range(0, 1000, 10000).select();

var graph_1 = grafar.pin([
    grafar.map([t1], (t) => Math.exp(-t) * Math.cos(t)),
    grafar.map([t1], (t) => Math.exp(-t) * Math.sin(t)),
    grafar.map([t1], (t) => Math.exp(-t))
], pan3d).hide(true);


var t2 = grafar.range(0, 100, 10000).select();
var a2 = grafar.constant(1).select();
var graph_2 = grafar.pin([
    grafar.map([t2, a2], (t, a) => (Math.pow(Math.abs(t), 2) + a * t) / 2 / a),
    grafar.map([t2, a2], (t, a) => (Math.pow(Math.abs(t), 2) - a * t) / 2 / a),
    grafar.map([t2, a2], (t, a) => Math.pow(2, 3 / 2) / 3 / Math.pow(a, 1 / 2) * a * Math.pow(t, 1 / 2))
], pan3d).hide(true);

var phi3 = grafar.range(0, 2 * Math.PI, 2000).select();
var a3 = grafar.constant(1).select();
var graph_3 = grafar.pin([
    grafar.map([phi3, a3], (phi, a) => (a * Math.cos(phi) / Math.cosh(phi))),
    grafar.map([phi3, a3], (phi, a) => (a * Math.sin(phi) / Math.cosh(phi))),
    grafar.map([phi3, a3], (phi, a) => (a * Math.tanh(phi)))
], pan3d).hide(true);


function updateParamater2() {
    var value = rangeInput2.val;
    grafar.constant(value).into(a2);
}

function updateParamater3() {
    var value = rangeInput3.val;
    grafar.constant(value).into(a3);
}

var rangeInput2 = new RangeInput(1, updateParamater2, 0, 10, 0.01, "a");
var rangeInput3 = new RangeInput(1, updateParamater3, 0, 10, 0.01, "a");