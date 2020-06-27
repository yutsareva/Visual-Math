var color = [0, .55, .8];
var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];


var color = [0, .55, .8];

var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

function sq1(phi, z) {
    return z * phi / (Math.PI / 4);
}

function sgn(x) {
    if (x < 0) {
        return -1;
    }
    return 1;
}

function sin_z(z) {
    return Math.sin(z);
}

function sq2(phi, z, a) {
    var t = a * sin_z(z);
    if (2 * Math.abs(z) > Math.PI) {
        return -Math.sqrt(a * a - t * t)
    }
    return Math.sqrt(a * a - t * t)
}

////////////////////////////////////////////////////// Первый график -- пересечение цилиндров

var phi1 = grafar.range(-Math.PI, Math.PI, 41).select();
var a1 = grafar.constant(1).select();
var phi3 = grafar.range(-Math.PI / 4, Math.PI / 4, 15).select();
var x1 = grafar.range(-1, 1, 20).select();
var z1 = grafar.range(-Math.PI, Math.PI, 41).select();
var color = [0, .55, .8];
var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];
var q1 = grafar.range(1, 1, 41).select();

var graph_1_1 = grafar.pin({
    axes: [
        grafar.map([phi1, x1, a1, q1], (phi, x, a) => a * Math.cos(phi)),
        grafar.map([phi1, x1, a1, q1], (phi, x, a) => 2.5 * a * x),
        grafar.map([phi1, x1, a1, q1], (phi, x, a) => a * Math.sin(phi))
    ], color: white
}, pan3d).hide(true);

var graph_1_2 = grafar.pin({
    axes: [
        grafar.map([phi1, x1, a1, phi3], (phi, x, a) => 2.5 * a * x),
        grafar.map([phi1, x1, a1, phi3], (phi, x, a) => a * Math.cos(phi)),
        grafar.map([phi1, x1, a1, phi3], (phi, x, a) => a * Math.sin(phi))
    ], color: white
}, pan3d).hide(true);

var graph_1_3 = grafar.pin({
    axes: [
        grafar.map([phi3, z1, a1], (phi, z, a) => a * sin_z(z)),
        grafar.map([phi3, z1, a1], (phi, z, a) => sq1(phi, a * sin_z(z))),
        grafar.map([phi3, z1, a1], (phi, z, a) => sq2(phi, z, a)),
    ], color: color
}, pan3d).hide(true);
colorize(graph_1_3);

var graph_1_4 = grafar.pin({
    axes: [
        grafar.map([phi3, z1, a1], (phi, z, a) => sq1(phi, a * sin_z(z))),
        grafar.map([phi3, z1, a1], (phi, z, a) => a * sin_z(z)),
        grafar.map([phi3, z1, a1], (phi, z, a) => sq2(phi, z, a)),
    ], color: color
}, pan3d).hide(true);
colorize(graph_1_4);

function updateParamater1() {
    var value = rangeInput1.val;
    grafar.constant(value).into(a1);
}

function showCylinders1() {
    var value = checkbox1.val;
    if (value) {
        graph_1_1.hide(false);
        graph_1_2.hide(false);
    } else {
        graph_1_1.hide(true);
        graph_1_2.hide(true);
    }
}

var rangeInput1 = new RangeInput(1, updateParamater1, 0, 10, 0.01, "a");
var checkbox1 = new Checkbox(false);
checkbox1.addEventListener('change', showCylinders1);

////////////////////////////////////////////////////// Второй график -- пересечение сферы и цилиндра

var phi2 = grafar.range(-Math.PI / 2, Math.PI / 2, 41).select();
var theta2 = grafar.range(0, 2 * Math.PI, 41).select();
var a2 = grafar.constant(1).select();
var b2 = grafar.constant(1).select();

var graph_2_1 = grafar.pin({
    axes: [
        grafar.map([phi2, theta2, a2, q1], (phi, theta, a) => a * Math.cos(phi) * Math.cos(theta)),
        grafar.map([phi2, theta2, a2, q1], (phi, theta, a) => a * Math.cos(phi) * Math.sin(theta)),
        grafar.map([phi2, theta2, a2, q1], (phi, theta, a) => a * Math.sin(phi))
    ], color: white
}, pan3d).hide(true);

var graph_2_2 = grafar.pin({
    axes: [
        grafar.map([b2, theta2, a2, x1, q1], (b, theta, a) => Math.cos(theta) * a),
        grafar.map([b2, theta2, a2, x1, q1], (b, theta, a) => Math.sin(theta) * b),
        grafar.map([b2, theta2, a2, x1, q1], (b, theta, a, x) => 2 * a * x)
    ], color: white
}, pan3d).hide(true);

function f2(phi, theta, a, b) {
    x = a * Math.cos(phi) * Math.cos(theta);
    y = a * Math.cos(phi) * Math.sin(theta);
    z = a * Math.sin(phi);
    if (x * x / a / a + y * y / b / b >= 1) {
        return 0;
    }
    return 1;
}

var c2 = grafar.range(0, Math.PI / 2, 15).select();
var k2 = grafar.range(0, 1, 20).select();

function f2_sin(c) {
    return Math.sin(c);
}

var graph_2_3 = grafar.pin({
    axes: [
        grafar.map([theta2, a2, c2, b2], (theta, a, c, b) => Math.cos(theta) * a),
        grafar.map([theta2, a2, c2, b2], (theta, a, c, b) => Math.sin(theta) * f2_sin(c) * Math.min(b, a)),
        grafar.map([theta2, a2, c2, b2], (theta, a, c, b) => Math.sqrt(Math.max(a * a - Math.cos(theta) * a * Math.cos(theta) * a - Math.sin(theta) * f2_sin(c) * Math.min(b, a) * Math.sin(theta) * f2_sin(c) * Math.min(b, a), 0)))
    ], color: color
}, pan3d).hide(true);
colorize(graph_2_3);

var graph_2_4 = grafar.pin({
    axes: [
        grafar.map([theta2, a2, c2, b2], (theta, a, c, b) => Math.cos(theta) * a),
        grafar.map([theta2, a2, c2, b2], (theta, a, c, b) => Math.sin(theta) * f2_sin(c) * Math.min(b, a)),
        grafar.map([theta2, a2, c2, b2], (theta, a, c, b) => -Math.sqrt(Math.max(a * a - Math.cos(theta) * a * Math.cos(theta) * a - Math.sin(theta) * f2_sin(c) * Math.min(b, a) * Math.sin(theta) * f2_sin(c) * Math.min(b, a), 0)))
    ], color: color
}, pan3d).hide(true);
colorize(graph_2_4);

var graph_2_5 = grafar.pin({
    axes: [
        grafar.map([theta2, a2, k2, b2], (theta, a, k, b) => Math.cos(theta) * a),
        grafar.map([theta2, a2, k2, b2], (theta, a, k, b) => Math.sin(theta) * Math.min(b, a)),
        grafar.map([theta2, a2, k2, b2], (theta, a, k, b) => k * Math.sqrt(Math.max(a * a - Math.cos(theta) * a * Math.cos(theta) * a - Math.sin(theta) * b * Math.sin(theta) * b, 0)))
    ], color: color
}, pan3d).hide(true);
colorize(graph_2_5);

var graph_2_6 = grafar.pin({
    axes: [
        grafar.map([theta2, a2, k2, b2], (theta, a, k, b) => Math.cos(theta) * a),
        grafar.map([theta2, a2, k2, b2], (theta, a, k, b) => Math.sin(theta) * Math.min(b, a)),
        grafar.map([theta2, a2, k2, b2], (theta, a, k, b) => -k * Math.sqrt(Math.max(a * a - Math.cos(theta) * a * Math.cos(theta) * a - Math.sin(theta) * b * Math.sin(theta) * b, 0)))
    ], color: color
}, pan3d).hide(true);
colorize(graph_2_6);

var checkbox2 = new Checkbox(false);

function showFigures2() {
    var value = checkbox2.val;
    if (value) {
        graph_2_1.hide(false);
        graph_2_2.hide(false);
    } else {
        graph_2_1.hide(true);
        graph_2_2.hide(true);
    }
}

checkbox2.addEventListener('change', showFigures2);


function updateParamater2() {
    var value = rangeInput2.val;
    grafar.constant(value).into(a2);
    value = rangeInput2_2.val;
    grafar.constant(value).into(b2);
}

var rangeInput2_2 = new RangeInput(1, updateParamater2, 0, 10, 0.01, "b");
var rangeInput2 = new RangeInput(2, updateParamater2, 1, 10, 0.01, "a");


////////////////////////////////////////////////////// Третий график -- пересечение сферы и двух цилиндров

var phi3 = grafar.range(-Math.PI / 2, Math.PI / 2, 41).select();
var theta3 = grafar.range(0, 2 * Math.PI, 41).select();
var a3 = grafar.constant(1).select();
var c3 = grafar.range(0, 1, 10).select();

// Сфера
var graph_3_1 = grafar.pin({
    axes: [
        grafar.map([phi3, theta3, a3, q1], (phi, theta, a) => a * Math.cos(phi) * Math.cos(theta)),
        grafar.map([phi3, theta3, a3, q1], (phi, theta, a) => a * Math.cos(phi) * Math.sin(theta)),
        grafar.map([phi3, theta3, a3, q1], (phi, theta, a) => a * Math.sin(phi))
    ], color: white
}, pan3d).hide(true);
// Два цилиндра
var graph_3_2 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, x1, q1], (theta, a) => (Math.cos(theta) * a / 2 + a / 2)),
        grafar.map([theta3, a3, x1, q1], (theta, a) => Math.sin(theta) * a / 2),
        grafar.map([theta3, a3, x1, q1], (theta, a, x) => 2 * x * a)
    ], color: white
}, pan3d).hide(true);

var graph_3_3 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, x1, q1], (theta, a) => (Math.cos(theta) * a / 2 - a / 2)),
        grafar.map([theta3, a3, x1, q1], (theta, a) => Math.sin(theta) * a / 2),
        grafar.map([theta3, a3, x1, q1], (theta, a, x) => 2 * x * a)
    ], color: white
}, pan3d).hide(true);

//////
var graph_3_4 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 + a / 2),
        grafar.map([theta3, a3, c3], (theta, a) => Math.sin(theta) * a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_5 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 + a / 2),
        grafar.map([theta3, a3, c3], (theta, a) => Math.sin(theta) * a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => -c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);
var graph_3_6 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 - a / 2),
        grafar.map([theta3, a3, c3], (theta, a) => Math.sin(theta) * a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_7 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 - a / 2),
        grafar.map([theta3, a3, c3], (theta, a) => Math.sin(theta) * a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => -c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);
//////
var graph_3_8 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 + a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_9 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 + a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => -c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_10 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 - a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_11 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 - a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => -c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);
//////
var graph_3_12 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 + a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => -Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_13 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 + a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => -Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => -c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 + a / 2) * (Math.cos(theta) * a / 2 + a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_14 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 - a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => -Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_3_15 = grafar.pin({
    axes: [
        grafar.map([theta3, a3, c3], (theta, a) => Math.cos(theta) * a / 2 - a / 2),
        grafar.map([theta3, a3, c3], (theta, a, c) => -Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))) * (c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2))))),
        grafar.map([theta3, a3, c3], (theta, a, c) => -c * Math.sqrt(a * a - (Math.cos(theta) * a / 2 - a / 2) * (Math.cos(theta) * a / 2 - a / 2) - (Math.sin(theta) * a / 2) * (Math.sin(theta) * a / 2)))
    ], color: color
}, pan3d).hide(true);

function updateParamater3() {
    var value = rangeInput3.val;
    grafar.constant(value).into(a3);
}

var rangeInput3 = new RangeInput(1, updateParamater3, 1, 10, 0.01, "a");
var checkbox3 = new Checkbox(false);

function showFigures3() {
    var value = checkbox3.val;
    if (value) {
        graph_3_1.hide(false);
        graph_3_2.hide(false);
        graph_3_3.hide(false);
    } else {
        graph_3_1.hide(true);
        graph_3_2.hide(true);
        graph_3_3.hide(true);
    }
}

checkbox3.addEventListener('change', showFigures3);

////////////////////////////////////////////////////// Четвертый график -- геликоид

var phi4 = grafar.range(-2 * Math.PI, 2 * Math.PI, 41).select();
var r4 = grafar.range(0, 1, 41).select();
var a4 = grafar.constant(2 * Math.PI).select();
var h4 = grafar.constant(1).select();

function f_r(r, a) {
    return a * r;
}

// Геликоид
var graph_4_1 = grafar.pin({
    axes: [
        grafar.map([phi4, r4, a4, h4], (phi, r, a) => f_r(r, a) * Math.cos(phi)),
        grafar.map([phi4, r4, a4, h4], (phi, r, a) => f_r(r, a) * Math.sin(phi)),
        grafar.map([phi4, r4, a4, h4], (phi, r, a, h) => h * (phi))
    ], color: [-Math.sin(phi4), r4, 0.9]
}, pan3d).hide(true);

function updateParamater4() {
    var value = rangeInput4.val;
    grafar.constant(value).into(a4);
    value = rangeInput4_2.val;
    grafar.constant(value).into(h4);
}

var rangeInput4 = new RangeInput(2 * Math.PI, updateParamater4, 0, 10, 0.01, "a");
var rangeInput4_2 = new RangeInput(1, updateParamater4, 0, 10, 0.01, "h");

////////////////////////////////////////////////////// Пятый график -- тор


var phi5 = grafar.range(0, 2 * Math.PI, 41).select();
var theta5 = grafar.range(0, 2 * Math.PI, 41).select();
var a5 = grafar.constant(1).select();
var b5 = grafar.constant(2).select();
// Тор
var graph_5_1 = grafar.pin({
    axes: [
        grafar.map([phi5, theta5, a5, b5], (phi, theta, a, b) => (b + a * Math.cos(theta)) * Math.cos(phi)),
        grafar.map([phi5, theta5, a5, b5], (phi, theta, a, b) => (b + a * Math.cos(theta)) * Math.sin(phi)),
        grafar.map([phi5, theta5, a5, b5], (phi, theta, a, b) => a * Math.sin(theta))
    ], color: color
}, pan3d).hide(true);

function updateParamater5() {
    var value = rangeInput5.val;
    grafar.constant(value).into(a5);
    value = rangeInput5_2.val;
    grafar.constant(value).into(b5);
}

var rangeInput5 = new RangeInput(1, updateParamater5, 0, 10, 0.01, "a");
var rangeInput5_2 = new RangeInput(2, updateParamater5, 0, 10, 0.01, "b");


////////////////////////////////////////////////////// Шестой график -- пересечение цилиндров

var phi6 = grafar.range(0, Math.PI / 2, 40).select();
var phi6_2 = grafar.range(0, 2 * Math.PI, 40).select();
var a6 = grafar.constant(1).select();
// var phi3 = grafar.range(-Math.PI/4, Math.PI/4, 15).select();
var x6 = grafar.range(-1, 1, 20).select();
// var z1 = grafar.range(-Math.PI, Math.PI, 41).select();
var color = [0, .55, .8];
var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

function f6_x(phi, a, y) {
    return a * Math.pow(Math.cos(phi), 4);
}

function f6_y(phi, a, y) {
    return a * Math.pow(Math.sin(phi), 4);
}

var graph_6_1 = grafar.pin({
    axes: [
        grafar.map([phi6, a6, phi6_2], (phi, a, y) => f6_x(phi, a, y)),
        grafar.map([phi6, a6, phi6_2], (phi, a, y) => Math.cos(y) * Math.abs(f6_y(phi, a, y))),
        grafar.map([phi6, a6, phi6_2], (phi, a, y) => Math.sin(y) * Math.abs(f6_y(phi, a, y)))
    ], color: color
}, pan3d).hide(true);

function updateParamater6() {
    var value = rangeInput6.val;
    grafar.constant(value).into(a6);
}

var rangeInput6 = new RangeInput(1, updateParamater6, 0, 10, 0.01, "a");
