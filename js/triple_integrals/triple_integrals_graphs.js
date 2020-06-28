var color = [0, .55, .8];
var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

var x0 = grafar.range(-6, 6, 40).select();
var y0 = grafar.range(-6, 6, 40).select();
var z0 = grafar.range(-6, 6, 40).select();
var q0 = grafar.range(-2, 2, 2).select();
var r0 = grafar.range(0, 3, 40).select();
var phi0 = grafar.range(0, 2 * Math.PI, 50).select();

var graph_0_1 = grafar.pin({
    axes: [
        grafar.map([phi0], (phi) => Math.cos(phi) / 2 + 0.5),
        grafar.map([y0, q0], (y) => y),
        grafar.map([phi0], (phi) => Math.sin(phi) / 2)
    ], color: white
}, pan3d).hide(true);

var graph_0_2 = grafar.pin({
    axes: [
        grafar.map([phi0], (phi) => Math.cos(phi) + 1),
        grafar.map([y0, q0], (y) => y),
        grafar.map([phi0], (phi) => Math.sin(phi))
    ], color: white
}, pan3d).hide(true);

var graph_0_3 = grafar.pin({
    axes: [
        grafar.map([phi0, r0], (phi, r) => r * Math.cos(phi)),
        grafar.map([r0, q0], (r) => 3 - r * r),
        grafar.map([phi0, r0], (phi, r) => r * Math.sin(phi))
    ], color: white
}, pan3d).hide(true);

var graph_0_4 = grafar.pin({
    axes: [
        grafar.map([x0], (x) => x),
        grafar.map([q0], () => 0),
        grafar.map([z0], (z) => z)
    ], color: white
}, pan3d).hide(true);

var graph_0_5 = grafar.pin({
    axes: [
        grafar.map([x0], (x) => x),
        grafar.map([y0], (y) => y),
        grafar.map([x0, q0], (x) => x)
    ], color: white
}, pan3d).hide(true);

var graph_0_6 = grafar.pin({
    axes: [
        grafar.map([x0], (x) => x),
        grafar.map([y0], (y) => y),
        grafar.map([x0, q0], (x) => -x)
    ], color: white
}, pan3d).hide(true);


var phi0_2 = grafar.range(-1 / 2 * Math.PI, 1 / 2 * Math.PI, 50).select();
var y0_2 = grafar.range(0, 2.5, 20).select();
var y0_22 = grafar.range(0, 2.5, 40).select();
var y0_3 = grafar.range(0, 1, 10).select();
var x0_2 = grafar.range(1 / 2, 1, 10).select();
var x0_3 = grafar.range(1, Math.sqrt(3), 20).select();
var x0_4 = grafar.range(1, 3 / 2, 8).select();
var e0 = grafar.range(0, 1, 10).select();
var e0_2 = grafar.range(0, 1, 20).select();
var r0_2 = grafar.range(0, Math.sqrt(3), 40).select();
var phi0_3 = grafar.range(0, 1 / 2 * Math.PI, 20).select();
var phi0_3_1 = grafar.range(0, 1 / 2 * Math.PI, 8).select();
var graph_0_7 = grafar.pin({
    axes: [
        grafar.map([phi0_2], (phi) => Math.cos(phi) / 2 + 0.5),
        grafar.map([phi0_2, y0_2], (phi, y) => Math.min(y, 3 - (Math.cos(phi) / 2 + 0.5) ** 2 - (Math.sin(phi) / 2) ** 2)),
        grafar.map([phi0_2], (phi) => Math.sin(phi) / 2)
    ], color: color
}, pan3d).hide(true);

var graph_0_8 = grafar.pin({
    axes: [
        grafar.map([x0_2, y0_2], (x, y) => Math.min(x, Math.sqrt(3 / 2 - y / 2))),
        grafar.map([y0_2], (y) => y),
        grafar.map([x0_2, y0_2], (x, y) => Math.min(x, Math.sqrt(3 / 2 - y / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_0_9 = grafar.pin({
    axes: [
        grafar.map([x0_2, y0_2], (x, y) => Math.min(x, Math.sqrt(3 / 2 - y / 2))),
        grafar.map([y0_2], (y) => y),
        grafar.map([x0_2, y0_2], (x, y) => -Math.min(x, Math.sqrt(3 / 2 - y / 2)))
    ], color: color
}, pan3d).hide(true);

var graph_0_10 = grafar.pin({
    axes: [
        grafar.map([e0, phi0_3_1], (e, phi) => 1 / 2 + Math.cos(phi) / 2),
        grafar.map([e0, phi0_3_1], () => 0),
        grafar.map([e0, phi0_3_1], (e, phi) => Math.sin(phi) / 2 + e * (1 / 2 + Math.cos(phi) / 2 - Math.sin(phi) / 2))
    ], color: color
}, pan3d).hide(true);

var graph_0_11 = grafar.pin({
    axes: [
        grafar.map([e0, phi0_3_1], (e, phi) => 1 / 2 + Math.cos(phi) / 2),
        grafar.map([e0, phi0_3_1], () => 0),
        grafar.map([e0, phi0_3_1], (e, phi) => -Math.sin(phi) / 2 - e * (1 / 2 + Math.cos(phi) / 2 - Math.sin(phi) / 2))
    ], color: color
}, pan3d).hide(true);

var graph_0_12 = grafar.pin({
    axes: [
        grafar.map([e0_2, x0_3], (e, x) => x),
        grafar.map([e0_2, x0_3], (e) => 0),
        grafar.map([e0_2, x0_3], (e, x) => Math.max(-Math.sqrt(2 * x - x * x), -Math.sqrt(3 - x * x)) + e * 2 * Math.min(Math.sqrt(2 * x - x * x), Math.sqrt(3 - x * x)))
    ], color: color
}, pan3d).hide(true);

var graph_0_13 = grafar.pin({
    axes: [
        grafar.map([e0, x0_4], (e, x) => x),
        grafar.map([e0, x0_4], (e, x) => e * (3 - 2 * x)),
        grafar.map([e0, x0_4], (e, x) => Math.sqrt(2 * x - x * x))
    ], color: color
}, pan3d).hide(true);

var graph_0_14 = grafar.pin({
    axes: [
        grafar.map([e0, x0_4], (e, x) => x),
        grafar.map([e0, x0_4], (e, x) => e * (3 - 2 * x)),
        grafar.map([e0, x0_4], (e, x) => -Math.sqrt(2 * x - x * x))
    ], color: color
}, pan3d).hide(true);

function f_x03(e, y) {
    var t = Math.max((3 - y) / 2, Math.sqrt((3 - y) / 2));
    var s = Math.min(Math.sqrt(3 - y), 3 - y);
    return t + e * (s - t);

}

var graph_0_15 = grafar.pin({
    axes: [
        grafar.map([phi0_3, y0_22], (e, y) => f_x03(Math.cos(e), y)),
        grafar.map([phi0_3, y0_22], (e, y) => y),
        grafar.map([phi0_3, y0_22], (e, y) => Math.sqrt(Math.abs(3 - f_x03(Math.cos(e), y) ** 2 - y)))
    ], color: color
}, pan3d).hide(true);

var graph_0_16 = grafar.pin({
    axes: [
        grafar.map([phi0_3, y0_22], (e, y) => f_x03(Math.cos(e), y)),
        grafar.map([phi0_3, y0_22], (e, y) => y),
        grafar.map([phi0_3, y0_22], (e, y) => -Math.sqrt(Math.abs(3 - f_x03(Math.cos(e), y) ** 2 - y)))
    ], color: color
}, pan3d).hide(true);


var r0_2 = grafar.range(0, 3, 20).select();
var y0_2_1 = grafar.range(-3, 3, 20).select();
var phi0_2 = grafar.range(-Math.PI / 2, Math.PI / 2, 50).select();
var phi0_2_1 = grafar.range(-Math.PI / 4, Math.PI / 4, 20).select();
var r0_2_1 = grafar.range(Math.sqrt(2) / 2, Math.sqrt(2), 10).select();
var r0_2_2 = grafar.range(Math.sqrt(2), Math.sqrt(3), 10).select();


var graph_0_2_1 = grafar.pin({
    axes: [
        grafar.map([phi0_2], (phi) => Math.cos(phi)),
        grafar.map([phi0_2, q0], (phi) => phi),
        grafar.map([y0_2_1], (y) => y)
    ], color: white
}, pan3d_2).hide(true);

var graph_0_2_2 = grafar.pin({
    axes: [
        grafar.map([phi0_2], (phi) => 2 * Math.cos(phi)),
        grafar.map([phi0_2, q0], (phi) => phi),
        grafar.map([y0_2_1], (y) => y)
    ], color: white
}, pan3d_2).hide(true);

var graph_0_2_3 = grafar.pin({
    axes: [
        grafar.map([r0_2], (r) => r),
        grafar.map([phi0_2, q0], (phi) => phi),
        grafar.map([r0_2], (r) => 3 - r * r)
    ], color: white
}, pan3d_2).hide(true);

var graph_0_2_4 = grafar.pin({
    axes: [
        grafar.map([r0_2], (r) => r),
        grafar.map([phi0_2, q0], (phi) => phi),
        grafar.map([r0_2], (r) => 0)
    ], color: white
}, pan3d_2).hide(true);

var graph_0_2_5 = grafar.pin({
    axes: [
        grafar.map([r0_2], (r) => r),
        grafar.map([q0], (q) => Math.PI / 4),
        grafar.map([y0_2_1], (y) => y)
    ], color: white
}, pan3d_2).hide(true);

var graph_0_2_6 = grafar.pin({
    axes: [
        grafar.map([r0_2], (r) => r),
        grafar.map([q0], (q) => -Math.PI / 4),
        grafar.map([y0_2_1], (y) => y)
    ], color: white
}, pan3d_2).hide(true);

var graph_0_2_7 = grafar.pin({
    axes: [
        grafar.map([phi0_2_1, e0], (phi, e) => Math.min(Math.cos(phi) + e * Math.cos(phi), Math.sqrt(3))),
        grafar.map([phi0_2_1], (phi) => phi),
        grafar.map([e0], (e) => 0)
    ], color: color
}, pan3d_2).hide(true);

var graph_0_2_8 = grafar.pin({
    axes: [
        grafar.map([phi0_2_1, e0], (phi, e) => Math.min(Math.cos(phi) + e * Math.cos(phi), Math.sqrt(3))),
        grafar.map([phi0_2_1], (phi) => phi),
        grafar.map([phi0_2_1, e0], (phi, e) => 3 - Math.min(Math.cos(phi) + e * Math.cos(phi), Math.sqrt(3)) ** 2)
    ], color: color
}, pan3d_2).hide(true);

var graph_0_2_9 = grafar.pin({
    axes: [
        grafar.map([phi0_2_1, e0], (phi, e) => Math.cos(phi)),
        grafar.map([phi0_2_1], (phi) => phi),
        grafar.map([phi0_2_1, e0], (phi, e) => e * (3 - Math.cos(phi) ** 2))
    ], color: color
}, pan3d_2).hide(true);

var graph_0_2_10 = grafar.pin({
    axes: [
        grafar.map([r0_2_1], (r) => r),
        grafar.map([r0_2_1], (r) => -Math.PI / 4),
        grafar.map([r0_2_1, e0], (r, e) => e * (3 - r * r))
    ], color: color
}, pan3d_2).hide(true);

var graph_0_2_11 = grafar.pin({
    axes: [
        grafar.map([r0_2_1], (r) => r),
        grafar.map([r0_2_1], (r) => Math.PI / 4),
        grafar.map([r0_2_1, e0], (r, e) => e * (3 - r * r))
    ], color: color
}, pan3d_2).hide(true);

var graph_0_2_12 = grafar.pin({
    axes: [
        grafar.map([r0_2_2], (r) => r),
        grafar.map([r0_2_2], (r) => Math.acos(r / 2)),
        grafar.map([r0_2_2, e0], (r, e) => e * (3 - r * r))
    ], color: color
}, pan3d_2).hide(true);

var graph_0_2_13 = grafar.pin({
    axes: [
        grafar.map([r0_2_2], (r) => r),
        grafar.map([r0_2_2], (r) => -Math.acos(r / 2)),
        grafar.map([r0_2_2, e0], (r, e) => e * (3 - r * r))
    ], color: color
}, pan3d_2).hide(true);


var checkbox0 = new Checkbox(false);

function showFigures0() {
    var value = checkbox0.val;
    if (value) {
        graph_0_1.hide(false);
        graph_0_2.hide(false);
        graph_0_3.hide(false);
        graph_0_4.hide(false);
        graph_0_5.hide(false);
        graph_0_6.hide(false);

        graph_0_2_1.hide(false);
        graph_0_2_2.hide(false);
        graph_0_2_3.hide(false);
        graph_0_2_4.hide(false);
        graph_0_2_5.hide(false);
        graph_0_2_6.hide(false);
    } else {
        graph_0_1.hide(true);
        graph_0_2.hide(true);
        graph_0_3.hide(true);
        graph_0_4.hide(true);
        graph_0_5.hide(true);
        graph_0_6.hide(true);

        graph_0_2_1.hide(true);
        graph_0_2_2.hide(true);
        graph_0_2_3.hide(true);
        graph_0_2_4.hide(true);
        graph_0_2_5.hide(true);
        graph_0_2_6.hide(true);
    }
}


// ==================================================================  1  =======================================================================

var color = [0, .55, .8];
var red = [1, 0, 0];
var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

var x1 = grafar.range(-2, 3, 20).select();
var x1_ = grafar.range(-3, 3, 20).select();
var y1 = grafar.range(-3, 3, 20).select();
var z1_ = grafar.range(-3, 3, 20).select();
var z1 = grafar.range(-3, 3, 20).select();
var q1 = grafar.range(-2, 2, 2).select();

var graph_1_1 = grafar.pin({
    axes: [
        grafar.map([z1_, x1, q1], (z, x) => x),
        grafar.map([z1_, x1, q1], (z, x) => 1 - x),
        grafar.map([z1_, x1, q1], (z, x) => z)
    ], color: white
}, pan3d).hide(true);

var graph_1_2 = grafar.pin({
    axes: [
        grafar.map([y1, x1_, q1], (y, x) => x),
        grafar.map([y1, x1_, q1], (y, x) => y),
        grafar.map([y1, x1_, q1], (y, x) => x * y)
    ], color: white
}, pan3d).hide(true);

var graph_1_3 = grafar.pin({
    axes: [
        grafar.map([y1, x1_, q1], (y, x) => x),
        grafar.map([y1, x1_, q1], (y, x) => y),
        grafar.map([y1, x1_, q1], (y, x) => x + y)
    ], color: white
}, pan3d).hide(true);

var graph_1_4 = grafar.pin({
    axes: [
        grafar.map([z1, y1, q1], (z, y) => 0),
        grafar.map([z1, y1, q1], (z, y) => y),
        grafar.map([z1, y1, q1], (z, y) => z)
    ], color: white
}, pan3d).hide(true);

var graph_1_5 = grafar.pin({
    axes: [
        grafar.map([z1, x1_, q1], (z, x) => x),
        grafar.map([z1, x1_, q1], (z, x) => 0),
        grafar.map([z1, x1_, q1], (z, x) => z)
    ], color: white
}, pan3d).hide(true);


var x1_1 = grafar.range(0, 1, 20).select();
var y1_1 = grafar.range(0, 1, 20).select();

function f1_y(c, y) {
    if (y > c)
        return c;
    return y;
}

var graph_1_6 = grafar.pin({
    axes: [
        grafar.map([y1_1, x1_1], (y, x) => x),
        grafar.map([y1_1, x1_1], (y, x) => f1_y(1 - x, y)),
        grafar.map([y1_1, x1_1], (y, x) => x + f1_y(1 - x, y))
    ], color: color
}, pan3d).hide(true);

var graph_1_7 = grafar.pin({
    axes: [
        grafar.map([y1_1, x1_1], (y, x) => x),
        grafar.map([y1_1, x1_1], (y, x) => f1_y(1 - x, y)),
        grafar.map([y1_1, x1_1], (y, x) => x * f1_y(1 - x, y))
    ], color: color
}, pan3d).hide(true);

var graph_1_8 = grafar.pin({
    axes: [
        grafar.map([y1_1, x1_1], (y, x) => x),
        grafar.map([y1_1, x1_1], (y, x) => 0),
        grafar.map([y1_1, x1_1], (y, x) => Math.min(y, x))
    ], color: color
}, pan3d).hide(true);

var graph_1_9 = grafar.pin({
    axes: [
        grafar.map([y1_1, x1_1], (y, x) => 0),
        grafar.map([y1_1, x1_1], (y, x) => x),
        grafar.map([y1_1, x1_1], (y, x) => Math.min(y, x))
    ], color: color
}, pan3d).hide(true);

var graph_1_10 = grafar.pin({
    axes: [
        grafar.map([y1_1, x1_1], (y, x) => x),
        grafar.map([y1_1, x1_1], (y, x) => 1 - x),
        grafar.map([y1_1, x1_1], (y, x) => Math.max(x - x * x, y))
    ], color: color
}, pan3d).hide(true);


var checkbox1 = new Checkbox(false);

function showFigures1() {
    var value = checkbox1.val;
    if (value) {
        graph_1_1.hide(false);
        graph_1_2.hide(false);
        graph_1_3.hide(false);
        graph_1_4.hide(false);
        graph_1_5.hide(false);
    } else {
        graph_1_1.hide(true);
        graph_1_2.hide(true);
        graph_1_3.hide(true);
        graph_1_4.hide(true);
        graph_1_5.hide(true);
    }
}

checkbox1.addEventListener('change', showFigures1);


// ==================================================================  2  =======================================================================

var x2 = grafar.range(-2.5, 2.5, 30).select();
var y2 = grafar.range(-2.5, 2.5, 30).select();

var x2_ = grafar.range(-3.5, 3.5, 30).select();
var y2_ = grafar.range(-3.5, 3.5, 30).select();

var phi2 = grafar.range(0, 2 * Math.PI, 30).select();
var r2 = grafar.range(0, 2, 10).select();

var graph_2_1 = grafar.pin({
    axes: [
        grafar.map([x2, y2, q1], (x, y) => x),
        grafar.map([x2, y2, q1], (x, y) => y),
        grafar.map([x2, y2, q1], (x, y) => 6 - x * x - y * y)
    ], color: white
}, pan3d).hide(true);

var graph_2_2 = grafar.pin({
    axes: [
        grafar.map([x2_, y2_, q1], (x, y) => x),
        grafar.map([x2_, y2_, q1], (x, y) => y),
        grafar.map([x2_, y2_, q1], (x, y) => Math.sqrt(x * x + y * y))
    ], color: white
}, pan3d).hide(true);

function f2(x, z) {
    if (x <= 2)
        return Math.sqrt(6 - x * x - z);
    return -Math.sqrt(6 - (4 - x) * (4 - x) - z);
}

function f2_1(x) {
    if (x <= 2)
        return x;
    return 2 - (x - 2);
}

var graph_2_3 = grafar.pin({
    axes: [
        grafar.map([phi2, r2], (a, r) => r * Math.cos(a)),
        grafar.map([phi2, r2], (a, r) => r * Math.sin(a)),
        grafar.map([phi2, r2], (a, r) => 6 - r * r)
    ], color: color
}, pan3d).hide(true);

var graph_2_4 = grafar.pin({
    axes: [
        grafar.map([phi2, r2], (a, r) => r * Math.cos(a)),
        grafar.map([phi2, r2], (a, r) => r * Math.sin(a)),
        grafar.map([phi2, r2], (a, r) => r)
    ], color: color
}, pan3d).hide(true);

var graph_2_5 = grafar.pin({
    axes: [
        grafar.map([phi2, r2], (a, r) => r),
        grafar.map([phi2, r2], (a, r) => a),
        grafar.map([phi2, r2], (a, r) => 6 - r * r)
    ], color: color
}, pan3d_2).hide(true);

var graph_2_6 = grafar.pin({
    axes: [
        grafar.map([phi2, r2], (a, r) => r),
        grafar.map([phi2, r2], (a, r) => a),
        grafar.map([phi2, r2], (a, r) => r)
    ], color: color
}, pan3d_2).hide(true);

var z2 = grafar.range(0, 6, 40).select();

var graph_2_7 = grafar.pin({
    axes: [
        grafar.map([phi2, z2], (a, z) => 0),
        grafar.map([phi2, z2], (a, z) => a),
        grafar.map([phi2, z2], (a, z) => z)
    ], color: color
}, pan3d_2).hide(true);

function f2_2(r, z) {
    if (z < r)
        return r;
    if (z > 6 - r * r)
        return 6 - r * r;
    return z;
}

var graph_2_8 = grafar.pin({
    axes: [
        grafar.map([z2, r2], (z, r) => r),
        grafar.map([z2, r2], (z, r) => 0),
        grafar.map([z2, r2], (z, r) => f2_2(r, z))
    ], color: color
}, pan3d_2).hide(true);

var graph_2_9 = grafar.pin({
    axes: [
        grafar.map([z2, r2], (z, r) => r),
        grafar.map([z2, r2], (z, r) => 2 * Math.PI),
        grafar.map([z2, r2], (z, r) => f2_2(r, z))
    ], color: color
}, pan3d_2).hide(true);

var r2_ = grafar.range(0, 3.5, 20).select();

var graph_2_10 = grafar.pin({
    axes: [
        grafar.map([z2, r2_, q1], (z, r) => r),
        grafar.map([z2, r2_, phi2], (z, r, phi) => phi),
        grafar.map([z2, r2_], (z, r) => 6 - r * r)
    ], color: white
}, pan3d_2).hide(true);

var graph_2_11 = grafar.pin({
    axes: [
        grafar.map([z2, r2_, q1], (z, r) => r * 2),
        grafar.map([z2, r2_, phi2], (z, r, phi) => phi),
        grafar.map([z2, r2_], (z, r) => r * 2)
    ], color: white
}, pan3d_2).hide(true);

// -----------------------------------------------------------------------


function get_z2_cut(x, e) {
    return (Math.abs(x) + e * (6 - x * x - (Math.abs(x))));
}

function get_y2_cut(x, z, e) {
    let t = Math.min(Math.sqrt(Math.abs(z * z - x * x)), Math.sqrt(Math.abs(6 - x * x - z)));
    return -t + 2 * e * t;
}

var x2_cut = grafar.constant(2).select();
var e2 = grafar.range(0, 1, 30).select();
var e2_1 = grafar.range(0, 1, 30).select();
var graph_2_10_cut = grafar.pin({
    axes: [
        grafar.map([x2_cut], (x) => x),
        grafar.map([x2_cut, e2, e2_1], (x, e, e2) => get_y2_cut(x, get_z2_cut(x, e), e2)),
        grafar.map([x2_cut, e2], (x, e) => get_z2_cut(x, e))
    ], color: red
}, pan3d).hide(true);
colorize(graph_2_10_cut);


var graph_2_1_cut_left = grafar.pin({
    axes: [
        grafar.map([x2_cut, e2, e2_1], (x, e, e2) => get_y2_cut(x, get_z2_cut(x, e), e2)),
        grafar.map([x2_cut, e2], (x, e) => get_z2_cut(x, e))
    ], color: red
}, pan2d_1).hide(true);

var x2_line = grafar.range(-5, 5, 40).select();
var y2_line = grafar.range(-5, 5, 40).select();

var graph_2_2_cut_left = grafar.pin({
    axes: [
        grafar.map([x2_cut, y2_line, q1], (x, y) => y),
        grafar.map([x2_cut, y2_line], (x, y) => 6 - x * x - y * y)
    ], color: white
}, pan2d_1).hide(true);
colorize(graph_2_2_cut_left);

var graph_2_3_cut_left = grafar.pin({
    axes: [
        grafar.map([x2_cut, y2_line, q1], (x, y) => y),
        grafar.map([x2_cut, y2_line], (x, y) => Math.sqrt(x * x + y * y))
    ], color: white
}, pan2d_1).hide(true);

function updateParamater2_cut_x() {
    var value = rangeInput2_cut_x.val;
    grafar.constant(value).into(x2_cut);
}

var rangeInput2_cut_x = new RangeInput(1, updateParamater2_cut_x, -2, 2, 0.01, "x");

// ------------
var y2_cut = grafar.constant(2).select();
var e2 = grafar.range(0, 1, 20).select();
var e2_1 = grafar.range(0, 1, 20).select();
var graph_2_10_cut_y = grafar.pin({
    axes: [
        grafar.map([y2_cut, e2, e2_1], (x, e, e2) => get_y2_cut(x, get_z2_cut(x, e), e2)),
        grafar.map([y2_cut], (x) => x),
        grafar.map([y2_cut, e2], (x, e) => get_z2_cut(x, e))
    ], color: red
}, pan3d).hide(true);
colorize(graph_2_10_cut_y);

var graph_2_1_cut_left_y = grafar.pin({
    axes: [
        grafar.map([y2_cut, e2, e2_1], (x, e, e2) => get_y2_cut(x, get_z2_cut(x, e), e2)),
        grafar.map([y2_cut, e2], (x, e) => get_z2_cut(x, e))
    ], color: red
}, pan2d_1).hide(true);
// colorize(graph_2_10_cut);
var graph_2_2_cut_left_y = grafar.pin({
    axes: [
        grafar.map([y2_cut, y2_line, q1], (x, y) => y),
        grafar.map([y2_cut, y2_line], (x, y) => 6 - x * x - y * y)
    ], color: white
}, pan2d_1).hide(true);
colorize(graph_2_2_cut_left);

var graph_2_3_cut_left_y = grafar.pin({
    axes: [
        grafar.map([y2_cut, y2_line, q1], (x, y) => y),
        grafar.map([y2_cut, y2_line], (x, y) => Math.sqrt(x * x + y * y))
    ], color: white
}, pan2d_1).hide(true);

function updateParamater2_cut_y() {
    var value = rangeInput2_cut_y.val;
    grafar.constant(value).into(y2_cut);
}

var rangeInput2_cut_y = new RangeInput(1, updateParamater2_cut_y, -2, 2, 0.01, "y");

// ------------
var z2_cut = grafar.constant(2).select();
var r2_cut = grafar.range(0, 1, 20).select();
var phi2_cut = grafar.range(0, 2 * Math.PI, 30).select();
var graph_2_10_cut_z = grafar.pin({
    axes: [
        grafar.map([z2_cut, r2_cut, phi2_cut], (z, r, phi) => Math.min(Math.sqrt(6 - z), z) * r * Math.cos(phi)),
        grafar.map([z2_cut, r2_cut, phi2_cut], (z, r, phi) => Math.min(Math.sqrt(6 - z), z) * r * Math.sin(phi)),
        grafar.map([z2_cut], (z) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_2_10_cut_z);

var graph_2_10_cut_left_z = grafar.pin({
    axes: [
        grafar.map([z2_cut, r2_cut, phi2_cut], (z, r, phi) => Math.min(Math.sqrt(6 - z), z) * r * Math.cos(phi)),
        grafar.map([z2_cut, r2_cut, phi2_cut], (z, r, phi) => Math.min(Math.sqrt(6 - z), z) * r * Math.sin(phi))
    ], color: red
}, pan2d_1).hide(true);

function updateParamater2_cut_z() {
    var value = rangeInput2_cut_z.val;
    grafar.constant(value).into(z2_cut);
}

var rangeInput2_cut_z = new RangeInput(1, updateParamater2_cut_z, 0, 6, 0.01, "z");

// -----------------------------------------
var r2_cut_r = grafar.constant(2).select();
var phi2_cut_r = grafar.range(0, 2 * Math.PI, 30).select();
// var psi2_cut_r = grafar.range(0, Math.PI, 30).select();
var graph_2_10_cut_r = grafar.pin({
    axes: [
        grafar.map([r2_cut_r, phi2_cut_r, e2], (r, phi, e) => r),
        grafar.map([r2_cut_r, phi2_cut_r, e2], (r, phi, e) => phi),
        grafar.map([r2_cut_r, phi2_cut_r, e2], (r, phi, e) => r + e * (6 - r * r - r))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_2_10_cut_r);

var graph_2_10_right_cut_r = grafar.pin({
    axes: [
        grafar.map([r2_cut_r, phi2_cut_r, e2], (r, phi, e) => phi),
        grafar.map([r2_cut_r, phi2_cut_r, e2], (r, phi, e) => r + e * (6 - r * r - r))
    ], color: red
}, pan2d_2).hide(true);

function updateParamater2_cut_r() {
    var value = rangeInput2_cut_r.val;
    grafar.constant(value).into(r2_cut_r);
}

var rangeInput2_cut_r = new RangeInput(1, updateParamater2_cut_r, 0, 2, 0.01, "r");

// -----------------------------------------
var phi2_cut_phi = grafar.constant(2).select();
var phi2_cut_r = grafar.range(0, 2, 30).select();
// var psi2_z_cut_r = grafar.range(0, 1, 20).select();
var graph_2_10_cut_phi = grafar.pin({
    axes: [
        grafar.map([phi2_cut_phi, phi2_cut_r, e2], (phi, r, e) => r),
        grafar.map([phi2_cut_phi, phi2_cut_r, e2], (phi, r, e) => phi),
        grafar.map([phi2_cut_phi, phi2_cut_r, e2], (phi, r, e) => r + e * (6 - r * r - r))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_2_10_cut_phi);

var graph_2_10_right_cut_phi = grafar.pin({
    axes: [
        grafar.map([phi2_cut_phi, phi2_cut_r, e2], (phi, r, e) => r),
        grafar.map([phi2_cut_phi, phi2_cut_r, e2], (phi, r, e) => r + e * (6 - r * r - r))
    ], color: red
}, pan2d_2).hide(true);

var graph_2_10_cut_phi_right = grafar.pin({
    axes: [
        grafar.map([z2, r2_, q1], (z, r) => r),
        grafar.map([z2, r2_], (z, r) => 6 - r * r)
    ], color: white
}, pan2d_2).hide(true);

var graph_2_11_cut_phi_right = grafar.pin({
    axes: [
        grafar.map([z2, r2_, q1], (z, r) => r * 2),
        grafar.map([z2, r2_], (z, r) => r * 2)
    ], color: white
}, pan2d_2).hide(true);

function updateParamater2_cut_phi() {
    var value = rangeInput2_cut_phi.val;
    grafar.constant(value).into(phi2_cut_phi);
}

var rangeInput2_cut_phi = new RangeInput(1, updateParamater2_cut_phi, 0, 2 * Math.PI, 0.01, "phi");


// -----------------------------------------
var z2_cut_z = grafar.constant(2).select();
var phi2_cut_z = grafar.range(0, 2 * Math.PI, 30).select();
// var psi2_z_cut_r = grafar.range(0, 1, 20).select();
var graph_2_10_cut_z_right = grafar.pin({
    axes: [
        grafar.map([z2_cut_z, phi2_cut_z, e2], (z, phi, e) => e * Math.min(Math.sqrt(6 - z), z)),
        grafar.map([z2_cut_z, phi2_cut_z, e2], (z, phi, e) => phi),
        grafar.map([z2_cut_z, phi2_cut_z, e2], (z, phi, e) => z)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_2_10_cut_z_right);

var graph_2_10_right_cut_z = grafar.pin({
    axes: [
        grafar.map([z2_cut_z, phi2_cut_z, e2], (z, phi, e) => e * Math.min(Math.sqrt(6 - z), z)),
        grafar.map([z2_cut_z, phi2_cut_z, e2], (z, phi, e) => phi),
    ], color: red
}, pan2d_2).hide(true);

function updateParamater2_cut_z_right() {
    var value = rangeInput2_cut_z_right.val;
    grafar.constant(value).into(z2_cut_z);

}

var rangeInput2_cut_z_right = new RangeInput(1, updateParamater2_cut_z_right, 0, 6, 0.01, "z");

var checkbox2 = new Checkbox(true);

function showFigures2() {
    var value = checkbox2.val;
    if (value) {
        graph_2_1.hide(false);
        graph_2_2.hide(false);
        graph_2_10.hide(false);
        graph_2_11.hide(false);
        if (sections_on[0] === 1) {
            graph_2_2_cut_left.hide(false);
            graph_2_3_cut_left.hide(false);
        }
        if (sections_on[1] === 1) {
            graph_2_2_cut_left_y.hide(false);
            graph_2_3_cut_left_y.hide(false);
        }
        if (sections_on[4] === 1) {
            graph_2_10_cut_phi_right.hide(false);
            graph_2_11_cut_phi_right.hide(false);
        }
    } else {
        graph_2_10.hide(true);
        graph_2_11.hide(true);
        graph_2_1.hide(true);
        graph_2_2.hide(true);
        graph_2_2_cut_left.hide(true);
        graph_2_3_cut_left.hide(true);
        graph_2_2_cut_left_y.hide(true);
        graph_2_3_cut_left_y.hide(true);
        graph_2_10_cut_phi_right.hide(true);
        graph_2_11_cut_phi_right.hide(true);
    }
}

checkbox2.addEventListener('change', showFigures2);
// ==================================================================  3  =======================================================================

var x3 = grafar.range(-1, 1, 20).select();
var y3 = grafar.range(-1, 1, 20).select();
var z3 = grafar.range(-1, 1, 20).select();
var e3 = grafar.range(0, 1, 20).select();
var e3_2 = grafar.range(0, 1, 20).select();
var a3 = grafar.constant(2).select();

var phi3 = grafar.range(0, 2 * Math.PI, 30).select();
var psi3 = grafar.range(0, Math.PI, 20).select();

var graph_3_1 = grafar.pin({
    axes: [
        grafar.map([phi3, psi3, a3, q1], (phi, psi, a) => a * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi3, psi3, a3, q1], (phi, psi, a) => a * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi3, psi3, a3, q1], (phi, psi, a) => a * Math.cos(psi) + a)
    ], color: white
}, pan3d).hide(true);

var psi3_2 = grafar.range(Math.PI * 0.5, Math.PI, 20).select();
var r3 = grafar.range(0, 1, 20).select();
var r3_1 = grafar.range(0, 2, 20).select();

var graph_3_2 = grafar.pin({
    axes: [
        grafar.map([phi3, r3_1, a3, q1], (phi, r, a) => 1.5 * r * a * Math.cos(phi)),
        grafar.map([phi3, r3_1, a3, q1], (phi, r, a) => 1.5 * r * a * Math.sin(phi)),
        grafar.map([phi3, r3_1, a3, q1], (phi, r, a) => 1.5 * r * a)
    ], color: white
}, pan3d).hide(true);

var psi3_1 = grafar.range(0, Math.PI * 0.5, 40).select();
var graph_3_3 = grafar.pin({
    axes: [
        grafar.map([phi3, psi3_1, a3], (phi, psi, a) => a * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi3, psi3_1, a3], (phi, psi, a) => a * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi3, psi3_1, a3], (phi, psi, a) => a * Math.cos(psi) + a)
    ], color: color
}, pan3d).hide(true);

var graph_3_4 = grafar.pin({
    axes: [
        grafar.map([phi3, r3, a3], (phi, r, a) => r * a * Math.cos(phi)),
        grafar.map([phi3, r3, a3], (phi, r, a) => r * a * Math.sin(phi)),
        grafar.map([phi3, r3, a3], (phi, r, a) => r * a)
    ], color: color
}, pan3d).hide(true);

var graph_3_5 = grafar.pin({
    axes: [
        grafar.map([phi3, r3, a3], (phi, r, a) => a * r),
        grafar.map([phi3, r3, a3], (phi, r, a) => phi),
        grafar.map([phi3, r3, a3], (phi, r, a) => Math.sqrt(a * a * (1 - r * r)) + a)
    ], color: color
}, pan3d_2).hide(true);

var graph_3_6 = grafar.pin({
    axes: [
        grafar.map([phi3, r3, a3], (phi, r, a) => a * r),
        grafar.map([phi3, r3, a3], (phi, r, a) => phi),
        grafar.map([phi3, r3, a3], (phi, r, a) => a * r)
    ], color: color
}, pan3d_2).hide(true);

var graph_3_7 = grafar.pin({
    axes: [
        grafar.map([phi3, r3, a3], (phi, r, a) => 0),
        grafar.map([phi3, r3, a3], (phi, r, a) => phi),
        grafar.map([phi3, r3, a3], (phi, r, a) => 2 * a * r)
    ], color: color
}, pan3d_2).hide(true);

function f3_1(r, z, a) {
    if (z < r)
        return r;
    if (z > Math.sqrt(a * a - r * r) + a)
        return Math.sqrt(a * a - r * r) + a;
    return z;
}

var z3_ = grafar.range(0, 1, 40).select();

var graph_3_8 = grafar.pin({
    axes: [
        grafar.map([z3_, r3, a3], (z, r, a) => a * r),
        grafar.map([z3_, r3, a3], (z, r, a) => 0),
        grafar.map([z3_, r3, a3], (z, r, a) => f3_1(a * r, 2 * a * z, a))
    ], color: color
}, pan3d_2).hide(true);

var graph_3_9 = grafar.pin({
    axes: [
        grafar.map([z3_, r3, a3], (z, r, a) => a * r),
        grafar.map([z3_, r3, a3], (z, r, a) => 2 * Math.PI),
        grafar.map([z3_, r3, a3], (z, r, a) => f3_1(a * r, 2 * a * z, a))
    ], color: color
}, pan3d_2).hide(true);

function updateParamater3() {
    var value = rangeInput3.val;
    grafar.constant(value).into(a3);
}

var rangeInput3 = new RangeInput(1, updateParamater3, 0, 5, 0.01, "a");


var p3_cut = grafar.constant(1).select();
var graph_3_3d_cut_phi = grafar.pin({
    axes: [
        grafar.map([z3_, r3, a3], (z, r, a) => a * r),
        grafar.map([z3_, r3, a3, p3_cut], (z, r, a, p) => p),
        grafar.map([z3_, r3, a3], (z, r, a) => f3_1(a * r, 2 * a * z, a))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_3_3d_cut_phi);

var graph_3_2d_cut_phi = grafar.pin({
    axes: [
        grafar.map([z3_, r3, a3], (z, r, a) => a * r),
        grafar.map([z3_, r3, a3], (z, r, a) => f3_1(a * r, 2 * a * z, a))
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_3_2d_cut_phi);

function updateParamater3_cut_phi() {
    var value = rangeInput3_cut_phi.val;
    grafar.constant(value).into(p3_cut);
}

var rangeInput3_cut_phi = new RangeInput(0, updateParamater3_cut_phi, 0, 2 * Math.PI, 0.01, "φ");


var r3_cut = grafar.constant(1).select();
var graph_3_3d_cut_r = grafar.pin({
    axes: [
        grafar.map([phi3, r3_cut, a3, e3], (p, r, a, e) => r),
        grafar.map([phi3, r3_cut, a3], (p, r, a) => p),
        grafar.map([phi3, r3_cut, a3, e3], (p, r, a, e) => r + e * (a - r + Math.sqrt(a * a - r * r)))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_3_3d_cut_r);

var graph_3_2d_cut_r = grafar.pin({
    axes: [
        grafar.map([phi3, r3_cut, a3], (p, r, a) => p),
        grafar.map([phi3, r3_cut, a3, e3], (p, r, a, e) => r + e * (a - r + Math.sqrt(a * a - r * r)))
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_3_2d_cut_phi);

function updateParamater3_cut_r() {
    var value = rangeInput3_cut_r.val;
    grafar.constant(value).into(r3_cut);
}

var rangeInput3_cut_r = new RangeInput(0, updateParamater3_cut_r, 0, 1, 0.01, "r");


var y3_cut_ = grafar.constant(1).select();

function get_cut_y_3(p, y, a, e) {
    if (y <= a)
        return y;
    return Math.sqrt(Math.abs(a * a - (y - a) * (y - a)));
}

var graph_3_3d_cut_y_ = grafar.pin({
    axes: [
        grafar.map([phi3, y3_cut_, a3, e3], (p, y, a, e) => e * get_cut_y_3(p, y, a, e)),
        grafar.map([phi3, y3_cut_, a3], (p) => p),
        grafar.map([phi3, y3_cut_, a3, e3], (p, y) => y)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_3_3d_cut_y_);

var graph_3_2d_cut_y_ = grafar.pin({
    axes: [
        grafar.map([phi3, y3_cut_, a3, e3], (p, y, a, e) => e * get_cut_y_3(p, y, a, e)),
        grafar.map([phi3, y3_cut_, a3], (p) => p)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_3_2d_cut_y_);

function updateParamater3_cut_y_() {
    var value = rangeInput3_cut_y_.val;
    grafar.constant(value).into(y3_cut_);
}

var rangeInput3_cut_y_ = new RangeInput(0, updateParamater3_cut_y_, 0, 2, 0.01, "y");


var checkbox3 = new Checkbox(true);

function showFigures3() {
    var value = checkbox3.val;
    if (value) {
        graph_3_1.hide(false);
        graph_3_2.hide(false);
        if (sections_on[0] === 1) {
            graph_3_3d_cut_x_limit_1.hide(false);
            graph_3_3d_cut_x_limit_2.hide(false);
            graph_3_3d_cut_x_limit_3.hide(false);
        }
        if (sections_on[1] === 1) {
            graph_3_3d_cut_y_limit_1.hide(false);
            graph_3_3d_cut_y_limit_2.hide(false);
            graph_3_3d_cut_y_limit_3.hide(false);
        }
    } else {
        graph_3_1.hide(true);
        graph_3_2.hide(true);

        graph_3_3d_cut_x_limit_1.hide(true);
        graph_3_3d_cut_x_limit_2.hide(true);
        graph_3_3d_cut_x_limit_3.hide(true);
        graph_3_3d_cut_y_limit_1.hide(true);
        graph_3_3d_cut_y_limit_2.hide(true);
        graph_3_3d_cut_y_limit_3.hide(true);
    }
}

checkbox3.addEventListener('change', showFigures3);

function get_cut_x_3(x, a, e) {
    let z = Math.abs(x) + e * (a - Math.abs(x) + Math.sqrt(Math.abs(a * a - x * x)));
    if (z > a) {
        return Math.sqrt(Math.abs(2 * a * z - z * z - x * x));
    }
    return Math.sqrt(Math.abs(z * z - x * x));
}

function get_x_3_cut(x, a) {
    if (x > 0 && x > a) {
        return a;
    }
    if (x < 0 && x < -a) {
        return -a;
    }
    return x;
}

var x3_cut = grafar.constant(1).select();
var graph_3_3d_cut_x = grafar.pin({
    axes: [
        grafar.map([x3_cut, a3], (x, a) => get_x_3_cut(x, a)),
        grafar.map([x3_cut, a3, e3, e3_2], (x, a, e, e2) => -get_cut_x_3(get_x_3_cut(x, a), a, e) + e2 * 2 * get_cut_x_3(get_x_3_cut(x, a), a, e)),
        grafar.map([x3_cut, a3, e3], (x, a, e) => Math.abs(get_x_3_cut(x, a)) + e * (a - Math.abs(get_x_3_cut(x, a)) + Math.sqrt(Math.abs(a * a - get_x_3_cut(x, a) * get_x_3_cut(x, a)))))
    ], color: red
}, pan3d).hide(true);
colorize(graph_3_3d_cut_x);

var graph_3_2d_cut_x = grafar.pin({
    axes: [
        grafar.map([x3_cut, a3, e3, e3_2], (x, a, e, e2) => -get_cut_x_3(get_x_3_cut(x, a), a, e) + e2 * 2 * get_cut_x_3(get_x_3_cut(x, a), a, e)),
        grafar.map([x3_cut, a3, e3], (x, a, e) => Math.abs(get_x_3_cut(x, a)) + e * (a - Math.abs(get_x_3_cut(x, a)) + Math.sqrt(Math.abs(a * a - get_x_3_cut(x, a) * get_x_3_cut(x, a)))))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_3_2d_cut_x);

var z3_limit = grafar.range(0, 5, 40).select();
var phi3_limit = grafar.range(0, 2 * Math.PI, 35).select();

function get_r_3_cut_limit(x, a) {
    return Math.sqrt(a * a - get_x_3_cut(x, a) * get_x_3_cut(x, a));
}

var graph_3_3d_cut_x_limit_1 = grafar.pin({
    axes: [
        grafar.map([x3_cut, a3, phi3_limit], (x, a, p) => get_r_3_cut_limit(x, a) * Math.cos(p)),
        grafar.map([x3_cut, a3, phi3_limit], (x, a, p) => a + get_r_3_cut_limit(x, a) * Math.sin(p))
    ], color: white
}, pan2d_1).hide(true);
var graph_3_3d_cut_x_limit_2 = grafar.pin({
    axes: [
        grafar.map([x3_cut, a3, z3_limit, e3], (x, a, z, e) => Math.sqrt(Math.pow(Math.abs(get_x_3_cut(x, a)) + z, 2) - get_x_3_cut(x, a) * get_x_3_cut(x, a))),
        grafar.map([x3_cut, a3, z3_limit, e3], (x, a, z, e) => Math.abs(get_x_3_cut(x, a)) + z)
    ], color: white
}, pan2d_1).hide(true);
var graph_3_3d_cut_x_limit_3 = grafar.pin({
    axes: [
        grafar.map([x3_cut, a3, z3_limit, e3], (x, a, z, e) => -Math.sqrt(Math.pow(Math.abs(get_x_3_cut(x, a)) + z, 2) - get_x_3_cut(x, a) * get_x_3_cut(x, a))),
        grafar.map([x3_cut, a3, z3_limit, e3], (x, a, z, e) => Math.abs(get_x_3_cut(x, a)) + z)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater3_cut_x() {
    var value = rangeInput3_cut_x.val;
    grafar.constant(value).into(x3_cut);
}

var rangeInput3_cut_x = new RangeInput(0, updateParamater3_cut_x, -1, 1, 0.01, "x");


var y3_cut = grafar.constant(1).select();
var graph_3_3d_cut_y = grafar.pin({
    axes: [
        grafar.map([y3_cut, a3, e3, e3_2], (x, a, e, e2) => -get_cut_x_3(get_x_3_cut(x, a), a, e) + e2 * 2 * get_cut_x_3(get_x_3_cut(x, a), a, e)),
        grafar.map([y3_cut, a3], (x, a) => get_x_3_cut(x, a)),
        grafar.map([y3_cut, a3, e3], (x, a, e) => Math.abs(get_x_3_cut(x, a)) + e * (a - Math.abs(get_x_3_cut(x, a)) + Math.sqrt(Math.abs(a * a - get_x_3_cut(x, a) * get_x_3_cut(x, a)))))
    ], color: red
}, pan3d).hide(true);
colorize(graph_3_3d_cut_y);

var graph_3_2d_cut_y = grafar.pin({
    axes: [
        grafar.map([y3_cut, a3, e3, e3_2], (x, a, e, e2) => -get_cut_x_3(get_x_3_cut(x, a), a, e) + e2 * 2 * get_cut_x_3(get_x_3_cut(x, a), a, e)),
        grafar.map([y3_cut, a3, e3], (x, a, e) => Math.abs(get_x_3_cut(x, a)) + e * (a - Math.abs(get_x_3_cut(x, a)) + Math.sqrt(Math.abs(a * a - get_x_3_cut(x, a) * get_x_3_cut(x, a)))))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_3_2d_cut_y);

var graph_3_3d_cut_y_limit_1 = grafar.pin({
    axes: [
        grafar.map([y3_cut, a3, phi3_limit], (x, a, p) => get_r_3_cut_limit(x, a) * Math.cos(p)),
        grafar.map([y3_cut, a3, phi3_limit], (x, a, p) => a + get_r_3_cut_limit(x, a) * Math.sin(p))
    ], color: white
}, pan2d_1).hide(true);
var graph_3_3d_cut_y_limit_2 = grafar.pin({
    axes: [
        grafar.map([y3_cut, a3, z3_limit, e3], (x, a, z, e) => Math.sqrt(Math.pow(Math.abs(get_x_3_cut(x, a)) + z, 2) - get_x_3_cut(x, a) * get_x_3_cut(x, a))),
        grafar.map([y3_cut, a3, z3_limit, e3], (x, a, z, e) => Math.abs(get_x_3_cut(x, a)) + z)
    ], color: white
}, pan2d_1).hide(true);
var graph_3_3d_cut_y_limit_3 = grafar.pin({
    axes: [
        grafar.map([y3_cut, a3, z3_limit, e3], (x, a, z, e) => -Math.sqrt(Math.pow(Math.abs(get_x_3_cut(x, a) + z), 2) - get_x_3_cut(x, a) * get_x_3_cut(x, a))),
        grafar.map([y3_cut, a3, z3_limit, e3], (x, a, z, e) => Math.abs(get_x_3_cut(x, a)) + z)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater3_cut_y() {
    var value = rangeInput3_cut_y.val;
    grafar.constant(value).into(y3_cut);
}

var rangeInput3_cut_y = new RangeInput(0, updateParamater3_cut_y, -1, 1, 0.01, "y");


var z3_cut = grafar.constant(1).select();

var graph_3_3d_cut_z = grafar.pin({
    axes: [
        grafar.map([z3_cut, r3, phi3, a3], (z, r, p, a) => Math.min(Math.sqrt(a * a - (z - a) * (z - a)), z) * r * Math.cos(p)),
        grafar.map([z3_cut, r3, phi3, a3], (z, r, p, a) => Math.min(Math.sqrt(a * a - (z - a) * (z - a)), z) * r * Math.sin(p)),
        grafar.map([z3_cut, a3, e3], (z, a, e) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_3_3d_cut_z);

var graph_3_2d_cut_z = grafar.pin({
    axes: [
        grafar.map([z3_cut, r3, phi3, a3], (z, r, p, a) => Math.min(Math.sqrt(a * a - (z - a) * (z - a)), z) * r * Math.cos(p)),
        grafar.map([z3_cut, r3, phi3, a3], (z, r, p, a) => Math.min(Math.sqrt(a * a - (z - a) * (z - a)), z) * r * Math.sin(p)),
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_3_2d_cut_z);

function updateParamater3_cut_z() {
    var value = rangeInput3_cut_z.val;
    grafar.constant(value).into(z3_cut);
}

var rangeInput3_cut_z = new RangeInput(0, updateParamater3_cut_z, 0, 2, 0.01, "z");
// ==================================================================  4  =======================================================================

var a4 = grafar.constant(1).select();
var b4 = grafar.constant(2).select();
var phi4 = grafar.range(0, 2 * Math.PI, 30).select();
var r4 = grafar.range(0, 1, 40).select();
var e4 = grafar.range(0, 1, 20).select();
var e4_2 = grafar.range(0, 1, 40).select();
var e4_ = grafar.range(0, 1, 20).select();

var graph_4_1 = grafar.pin({
    axes: [
        grafar.map([phi4, r4, a4, q1], (phi, r, a) => 3.5 * r * a / Math.sqrt(2) * Math.cos(phi)),
        grafar.map([phi4, r4, a4, q1], (phi, r, a) => 3.5 * r * a / Math.sqrt(2) * Math.sin(phi)),
        grafar.map([phi4, r4, a4, q1], (phi, r, a) => 3.5 * r * a / Math.sqrt(2))
    ], color: white
}, pan3d).hide(true);
var psi4 = grafar.range(0, Math.PI, 30).select();

var graph_4_2 = grafar.pin({
    axes: [
        grafar.map([phi4, psi4, a4, q1], (phi, psi, a) => a * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4, a4, q1], (phi, psi, a) => a * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4, a4, q1], (phi, psi, a) => a * Math.cos(psi))
    ], color: white
}, pan3d).hide(true);

var psi4 = grafar.range(0, Math.PI, 30).select();

var graph_4_3 = grafar.pin({
    axes: [
        grafar.map([phi4, psi4, b4, q1], (phi, psi, b) => b * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4, b4, q1], (phi, psi, b) => b * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4, b4, q1], (phi, psi, b) => b * Math.cos(psi))
    ], color: white
}, pan3d).hide(true);

var psi4_1 = grafar.range(0, Math.PI / 4, 30).select();

var graph_4_4 = grafar.pin({
    axes: [
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => (r * (b - a) / Math.sqrt(2) + a / Math.sqrt(2)) * Math.cos(phi)),
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => (r * (b - a) / Math.sqrt(2) + a / Math.sqrt(2)) * Math.sin(phi)),
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => (r * (b - a) / Math.sqrt(2) + a / Math.sqrt(2)))
    ], color: color
}, pan3d).hide(true);

var graph_4_5 = grafar.pin({
    axes: [
        grafar.map([phi4, psi4_1, a4], (phi, psi, a) => a * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4_1, a4], (phi, psi, a) => a * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4_1, a4], (phi, psi, a) => a * Math.cos(psi))
    ], color: color
}, pan3d).hide(true);

var graph_4_6 = grafar.pin({
    axes: [
        grafar.map([phi4, psi4_1, b4], (phi, psi, b) => b * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4_1, b4], (phi, psi, b) => b * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi4, psi4_1, b4], (phi, psi, b) => b * Math.cos(psi))
    ], color: color
}, pan3d).hide(true);

function f4(phi, r, a, b) {
    if (r * b / Math.sqrt(2) < a / Math.sqrt(2))
        return Math.sqrt(a * a - r * b / 2 * r * b);
    return r * b / Math.sqrt(2);
}

var graph_4_7 = grafar.pin({
    axes: [
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => r * b / Math.sqrt(2)),
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => phi),
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => f4(phi, r, a, b))
    ], color: color
}, pan3d_2).hide(true);

var graph_4_8 = grafar.pin({
    axes: [
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => r * b / Math.sqrt(2)),
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => phi),
        grafar.map([phi4, r4, a4, b4], (phi, r, a, b) => Math.sqrt(b * b - r * b / 2 * r * b))
    ], color: color
}, pan3d_2).hide(true);

var z4 = grafar.range(0, 1, 40).select();
var graph_4_9 = grafar.pin({
    axes: [
        grafar.map([phi4, z4, a4, b4], (phi, z, a, b) => 0),
        grafar.map([phi4, z4, a4, b4], (phi, z, a, b) => phi),
        grafar.map([phi4, z4, a4, b4], (phi, z, a, b) => a + (b - a) * z)
    ], color: color
}, pan3d_2).hide(true);

function f4_(z, r, a, b) {
    if (r * b / Math.sqrt(2) < a / Math.sqrt(2)) {
        if (z < Math.sqrt(a * a - r * b / 2 * r * b))
            return Math.sqrt(a * a - r * b / 2 * r * b);
        if (z > Math.sqrt(b * b - r * b / 2 * r * b))
            return Math.sqrt(b * b - r * b / 2 * r * b);
        return z;
    }

    if (z < r * b / Math.sqrt(2))
        return r * b / Math.sqrt(2);
    if (z > Math.sqrt(b * b - r * b / 2 * r * b))
        return Math.sqrt(b * b - r * b / 2 * r * b);
    return z;
}

var graph_4_10 = grafar.pin({
    axes: [
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => r * b / Math.sqrt(2)),
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => 0),
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => f4_(a / Math.sqrt(2) + (b - a / Math.sqrt(2)) * z, r, a, b))
    ], color: color
}, pan3d_2).hide(true);

var graph_4_11 = grafar.pin({
    axes: [
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => r * b / Math.sqrt(2)),
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => 2 * Math.PI),
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => f4_(a / Math.sqrt(2) + (b - a / Math.sqrt(2)) * z, r, a, b))
    ], color: color
}, pan3d_2).hide(true);


function updateParamater4() {
    var value = rangeInput4.val;
    grafar.constant(value).into(a4);
}

var rangeInput4 = new RangeInput(1, updateParamater4, 0, 5, 0.01, "a");

function updateParamater4_1() {
    var value = rangeInput4_1.val;
    grafar.constant(value).into(b4);
}

var rangeInput4_1 = new RangeInput(2, updateParamater4_1, 0, 5, 0.01, "b");
var checkbox4 = new Checkbox(true);

function showFigures4() {
    var value = checkbox4.val;
    if (value) {
        graph_4_1.hide(false);
        graph_4_2.hide(false);
        graph_4_3.hide(false);

        if (sections_on[0] === 1) {
            graph_4_2d_cut_x_limit_1.hide(false);
            graph_4_2d_cut_x_limit_2.hide(false);
            graph_4_2d_cut_x_limit_3.hide(false);
            graph_4_2d_cut_x_limit_4.hide(false);
        }
        if (sections_on[1] === 1) {
            graph_4_2d_cut_y_limit_1.hide(false);
            graph_4_2d_cut_y_limit_2.hide(false);
            graph_4_2d_cut_y_limit_3.hide(false);
            graph_4_2d_cut_y_limit_4.hide(false);
        }
    } else {
        graph_4_1.hide(true);
        graph_4_2.hide(true);
        graph_4_3.hide(true);

        graph_4_2d_cut_x_limit_1.hide(true);
        graph_4_2d_cut_x_limit_2.hide(true);
        graph_4_2d_cut_x_limit_3.hide(true);
        graph_4_2d_cut_x_limit_4.hide(true);

        graph_4_2d_cut_y_limit_1.hide(true);
        graph_4_2d_cut_y_limit_2.hide(true);
        graph_4_2d_cut_y_limit_3.hide(true);
        graph_4_2d_cut_y_limit_4.hide(true);
    }
}

checkbox4.addEventListener('change', showFigures4);


var p4_cut = grafar.constant(1).select();

var graph_4_3d_cut_phi = grafar.pin({
    axes: [
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => r * b / Math.sqrt(2)),
        grafar.map([z4, r4, a4, b4, p4_cut], (z, r, a, b, p) => p),
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => f4_(a / Math.sqrt(2) + (b - a / Math.sqrt(2)) * z, r, a, b))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_4_3d_cut_phi);

var graph_4_2d_cut_phi = grafar.pin({
    axes: [
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => r * b / Math.sqrt(2)),
        grafar.map([z4, r4, a4, b4], (z, r, a, b) => f4_(a / Math.sqrt(2) + (b - a / Math.sqrt(2)) * z, r, a, b))
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_4_3d_cut_phi);

function updateParamater4_cut_phi() {
    var value = rangeInput4_cut_phi.val;
    grafar.constant(value).into(p4_cut);
}

var rangeInput4_cut_phi = new RangeInput(0, updateParamater4_cut_phi, 0, 2 * Math.PI, 0.01, "φ");


function get_4_3d_cut_y(e, y, a, b) {
    if (y < a) {
        return Math.sqrt(a * a - y * y) + e * (y - Math.sqrt(a * a - y * y));
    }
    return e * Math.min(Math.sqrt(b * b - y * y), y);
}

var y4_cut = grafar.constant(1).select();

var graph_4_3d_cut_y = grafar.pin({
    axes: [
        grafar.map([e4, y4_cut, a4, b4], (e, y, a, b) => get_4_3d_cut_y(e, y, a, b)),
        grafar.map([e4, y4_cut, a4, b4, phi4], (e, y, a, b, p) => p),
        grafar.map([e4, y4_cut, a4, b4], (e, y, a, b) => y)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_4_3d_cut_y);

var graph_4_2d_cut_y = grafar.pin({
    axes: [
        grafar.map([e4, y4_cut, a4, b4], (e, y, a, b) => get_4_3d_cut_y(e, y, a, b)),
        grafar.map([e4, y4_cut, a4, b4, phi4], (e, y, a, b, p) => p)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_4_2d_cut_y);

function updateParamater4_cut_y() {
    var value = rangeInput4_cut_y.val;
    grafar.constant(value).into(y4_cut);
}

var rangeInput4_cut_y = new RangeInput(0, updateParamater4_cut_y, 0.75, 2, 0.01, "z");


function get_4_3d_cut_r(e, r, a, b) {
    if (r < a / Math.sqrt(2)) {
        return Math.sqrt(a * a - r * r) + e * (Math.sqrt(b * b - r * r) - Math.sqrt(a * a - r * r));
    }
    return r + e * (Math.sqrt(b * b - r * r) - r);
}

function get_4_r_(r, b) {
    if (r > b / Math.sqrt(2))
        return b / Math.sqrt(2);
    return r;
}

var r4_cut = grafar.constant(1).select();

var graph_4_3d_cut_r = grafar.pin({
    axes: [
        grafar.map([e4, r4_cut, a4, b4], (e, r, a, b) => get_4_r_(r, b)),
        grafar.map([e4, r4_cut, a4, b4, phi4], (e, y, a, b, p) => p),
        grafar.map([e4, r4_cut, a4, b4], (e, r, a, b) => get_4_3d_cut_r(e, get_4_r_(r, b), a, b))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_4_3d_cut_r);

var graph_4_2d_cut_r = grafar.pin({
    axes: [
        grafar.map([e4, r4_cut, a4, b4, phi4], (e, y, a, b, p) => p),
        grafar.map([e4, r4_cut, a4, b4], (e, r, a, b) => get_4_3d_cut_r(e, get_4_r_(r, b), a, b))
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_4_2d_cut_r);

function updateParamater4_cut_r() {
    var value = rangeInput4_cut_r.val;
    grafar.constant(value).into(r4_cut);
}

var rangeInput4_cut_r = new RangeInput(0, updateParamater4_cut_r, 0, 2 / Math.sqrt(2), 0.01, "r");


var x4_cut = grafar.constant(1).select();

function get_4_z_(e, x, a, b) {
    let t = Math.max(a / Math.sqrt(2), Math.abs(x));
    return t + e * (Math.sqrt(b * b - x * x) - t);
}

function get_4_y_(e, x, a, b, e2) {
    let z_ = get_4_z_(e, x, a, b);
    if (z_ * z_ > a * a - x * x) {
        return e2 * Math.min(Math.sqrt(Math.abs(b * b - z_ * z_ - x * x)), Math.sqrt(z_ * z_ - x * x));
    }
    return Math.sqrt(a * a - z_ * z_ - x * x) + e2 * (Math.sqrt(z_ * z_ - x * x) - Math.sqrt(a * a - z_ * z_ - x * x));
}

var graph_4_3d_cut_x = grafar.pin({
    axes: [
        grafar.map([e4_2, x4_cut, a4, b4], (e, x, a, b) => x),
        grafar.map([e4_2, x4_cut, a4, b4, e4_], (e, x, a, b, e2) => get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, x4_cut, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_x);
var graph_4_3d_cut_x_2 = grafar.pin({
    axes: [
        grafar.map([e4_2, x4_cut, a4, b4], (e, x, a, b) => x),
        grafar.map([e4_2, x4_cut, a4, b4, e4_], (e, x, a, b, e2) => -get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, x4_cut, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_x_2);
var graph_4_2d_cut_x = grafar.pin({
    axes: [
        grafar.map([e4_2, x4_cut, a4, b4, e4_], (e, x, a, b, e2) => get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, x4_cut, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_x);
var graph_4_2d_cut_x_2 = grafar.pin({
    axes: [
        grafar.map([e4_2, x4_cut, a4, b4, e4_], (e, x, a, b, e2) => -get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, x4_cut, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_x_2);

var graph_4_2d_cut_x_limit_1 = grafar.pin({
    axes: [
        grafar.map([phi4, x4_cut, a4, b4, e4_], (p, x, a, b, e2) => Math.sqrt(a * a - x * x) * Math.cos(p)),
        grafar.map([phi4, x4_cut, a4, b4], (p, x, a, b) => Math.sqrt(a * a - x * x) * Math.sin(p))
    ], color: white
}, pan2d_1).hide(true);
var graph_4_2d_cut_x_limit_2 = grafar.pin({
    axes: [
        grafar.map([phi4, x4_cut, a4, b4, e4_], (p, x, a, b, e2) => Math.sqrt(b * b - x * x) * Math.cos(p)),
        grafar.map([phi4, x4_cut, a4, b4], (p, x, a, b) => Math.sqrt(b * b - x * x) * Math.sin(p))
    ], color: white
}, pan2d_1).hide(true);
var graph_4_2d_cut_x_limit_3 = grafar.pin({
    axes: [
        grafar.map([phi4, x4_cut, a4, b4, z4], (p, x, a, b, z) => Math.sqrt(Math.abs(Math.pow(Math.abs(x) + z * 3, 2) - x * x))),
        grafar.map([phi4, x4_cut, a4, b4, z4], (p, x, a, b, z) => Math.abs(x) + z * 3)
    ], color: white
}, pan2d_1).hide(true);
var graph_4_2d_cut_x_limit_4 = grafar.pin({
    axes: [
        grafar.map([phi4, x4_cut, a4, b4, z4], (p, x, a, b, z) => -Math.sqrt(Math.abs(Math.pow(Math.abs(x) + z * 3, 2) - x * x))),
        grafar.map([phi4, x4_cut, a4, b4, z4], (p, x, a, b, z) => Math.abs(x) + z * 3)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater4_cut_x() {
    var value = rangeInput4_cut_x.val;
    grafar.constant(value).into(x4_cut);
}

var rangeInput4_cut_x = new RangeInput(0, updateParamater4_cut_x, -2 / Math.sqrt(2), 2 / Math.sqrt(2), 0.01, "x");


var y4_cut_ = grafar.constant(1).select();
var graph_4_3d_cut_y_ = grafar.pin({
    axes: [
        grafar.map([e4_2, y4_cut_, a4, b4, e4_], (e, x, a, b, e2) => get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, y4_cut_, a4, b4], (e, x, a, b) => x),
        grafar.map([e4_2, y4_cut_, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_y_);
var graph_4_3d_cut_y_2_ = grafar.pin({
    axes: [
        grafar.map([e4_2, y4_cut_, a4, b4, e4_], (e, x, a, b, e2) => -get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, y4_cut_, a4, b4], (e, x, a, b) => x),
        grafar.map([e4_2, y4_cut_, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_y_2_);
var graph_4_2d_cut_y_ = grafar.pin({
    axes: [
        grafar.map([e4_2, y4_cut_, a4, b4, e4_], (e, x, a, b, e2) => get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, y4_cut_, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_y_);
var graph_4_2d_cut_y_2_ = grafar.pin({
    axes: [
        grafar.map([e4_2, y4_cut_, a4, b4, e4_], (e, x, a, b, e2) => -get_4_y_(e, x, a, b, e2)),
        grafar.map([e4_2, y4_cut_, a4, b4], (e, x, a, b) => get_4_z_(e, x, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_y_2_);

var graph_4_2d_cut_y_limit_1 = grafar.pin({
    axes: [
        grafar.map([phi4, y4_cut_, a4, b4, e4_], (p, x, a, b, e2) => Math.sqrt(a * a - x * x) * Math.cos(p)),
        grafar.map([phi4, y4_cut_, a4, b4], (p, x, a, b) => Math.sqrt(a * a - x * x) * Math.sin(p))
    ], color: white
}, pan2d_1).hide(true);
var graph_4_2d_cut_y_limit_2 = grafar.pin({
    axes: [
        grafar.map([phi4, y4_cut_, a4, b4, e4_], (p, x, a, b, e2) => Math.sqrt(b * b - x * x) * Math.cos(p)),
        grafar.map([phi4, y4_cut_, a4, b4], (p, x, a, b) => Math.sqrt(b * b - x * x) * Math.sin(p))
    ], color: white
}, pan2d_1).hide(true);
var graph_4_2d_cut_y_limit_3 = grafar.pin({
    axes: [
        grafar.map([phi4, y4_cut_, a4, b4, z4], (p, x, a, b, z) => Math.sqrt(Math.abs(Math.pow(Math.abs(x) + z * 3, 2) - x * x))),
        grafar.map([phi4, y4_cut_, a4, b4, z4], (p, x, a, b, z) => Math.abs(x) + z * 3)
    ], color: white
}, pan2d_1).hide(true);
var graph_4_2d_cut_y_limit_4 = grafar.pin({
    axes: [
        grafar.map([phi4, y4_cut_, a4, b4, z4], (p, x, a, b, z) => -Math.sqrt(Math.abs(Math.pow(Math.abs(x) + z * 3, 2) - x * x))),
        grafar.map([phi4, y4_cut_, a4, b4, z4], (p, x, a, b, z) => Math.abs(x) + z * 3)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater4_cut_y_() {
    var value = rangeInput4_cut_y_.val;
    grafar.constant(value).into(y4_cut_);
}

var rangeInput4_cut_y_ = new RangeInput(0, updateParamater4_cut_y_, -2 / Math.sqrt(2), 2 / Math.sqrt(2), 0.01, "y");


function get_4_x_(e, z, a, b, e2) {
    let y = get_4_y_2(e, z, a, b);
    if (z > b / Math.sqrt(2)) {
        return e2 * Math.sqrt(Math.abs(b * b - z * z - y * y));
    }
    if (z > a) {
        return e2 * Math.sqrt(z * z - y * y);
    }
    if (a * a - z * z - y * y < 0) {
        return e2 * Math.sqrt(z * z - y * y);
    }
    return Math.sqrt(a * a - z * z - y * y) + e2 * (Math.sqrt(z * z - y * y) - Math.sqrt(a * a - z * z - y * y));
}

function get_4_y_2(e, z, a, b) {
    if (z > b / Math.sqrt(2)) {
        return e * Math.sqrt(b * b - z * z);
    }
    return e * z;
}

var z4_cut = grafar.constant(1).select();
var graph_4_3d_cut_z_0 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => get_4_y_2(e, z, a, b)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_z_0);

var graph_4_3d_cut_z_1 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => -get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => get_4_y_2(e, z, a, b)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_z_1);

var graph_4_3d_cut_z_2 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => -get_4_y_2(e, z, a, b)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_z_2);

var graph_4_3d_cut_z_3 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => -get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => -get_4_y_2(e, z, a, b)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_4_3d_cut_z_3);

var graph_4_2d_cut_z_0 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => get_4_y_2(e, z, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_z_0);

var graph_4_2d_cut_z_1 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => -get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => get_4_y_2(e, z, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_z_1);

var graph_4_2d_cut_z_2 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => -get_4_y_2(e, z, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_z_2);

var graph_4_2d_cut_z_3 = grafar.pin({
    axes: [
        grafar.map([e4, z4_cut, a4, b4, e4_], (e, z, a, b, e2) => -get_4_x_(e, z, a, b, e2)),
        grafar.map([e4, z4_cut, a4, b4], (e, z, a, b) => -get_4_y_2(e, z, a, b))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_4_2d_cut_z_3);


function updateParamater4_cut_z() {
    var value = rangeInput4_cut_z.val;
    grafar.constant(value).into(z4_cut);
}

var rangeInput4_cut_z = new RangeInput(0, updateParamater4_cut_z, 1 / Math.sqrt(2), 2, 0.01, "y");
// ==================================================================  1  =======================================================================

var x1 = grafar.range(-2.5, 2.5, 40).select();
var y1 = grafar.range(-2.5, 2.5, 40).select();
var a1 = grafar.constant(3).select();

var x1_ = grafar.range(-3.5, 3.5, 40).select();
var y1_ = grafar.range(-3.5, 3.5, 40).select();

var phi1 = grafar.range(0, 2 * Math.PI, 100).select();
var psi1 = grafar.range(0, Math.PI, 100).select();
var r1 = grafar.range(0, 2, 10).select();

function f1_r(phi, psi, a) {
    var t = Math.cos(phi) * Math.sin(phi) * Math.sin(psi) * Math.sin(psi) * Math.cos(psi);
    if (t <= 0) return -a * Math.pow(-t, 1 / 3);
    return a * Math.pow(t, 1 / 3);
}

var graph_1_1_ = grafar.pin({
    axes: [
        grafar.map([phi1, psi1], (phi, psi) => phi),
        grafar.map([phi1, psi1], (phi, psi) => psi),
        grafar.map([phi1, psi1, a1], (phi, psi, a) => f1_r(phi, psi, a))
    ], color: color
}, pan3d_2).hide(true);

var graph_1_2_ = grafar.pin({
    axes: [
        grafar.map([phi1, psi1, a1], (phi, psi, a) => f1_r(phi, psi, a) * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi1, psi1, a1], (phi, psi, a) => f1_r(phi, psi, a) * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi1, psi1, a1], (phi, psi, a) => f1_r(phi, psi, a) * Math.cos(psi))
    ], color: color
}, pan3d).hide(true);

function updateParamater1() {
    var value = rangeInput1.val;
    grafar.constant(value).into(a1);
}

var rangeInput1 = new RangeInput(3, updateParamater1, 0, 5, 0.01, "a");


// ==================================================================  5  =======================================================================


var phi5 = grafar.range(0, 2 * Math.PI, 40).select();
// var phi5 = grafar.range(1, 1, 40).select();
var psi5 = grafar.range(0, Math.PI, 40).select();
// var r5 = grafar.range(0, 2, 6).select();
var n5 = grafar.constant(1).select();
var e5 = grafar.range(0, 1, 6).select();
var e5_1 = grafar.range(0, 1, 20).select();
var e5_2 = grafar.range(0, 1, 20).select();
var x5_cut = grafar.constant(1).select();
var y5_cut = grafar.constant(1).select();
var z5_cut = grafar.constant(1).select();

function f5_r(phi, psi, n) {
    var t = Math.pow(Math.cos(phi), 2 * n - 1) * Math.pow(Math.sin(psi), 2 * n - 1);
    if (t <= 0) return -t;
    return t;
}

// 'θ', 'φ', 'r'
var graph_5_2 = grafar.pin({
    axes: [
        grafar.map([phi5, psi5, n5], (phi, psi, n) => f5_r(phi, psi, n) * Math.cos(phi) * Math.sin(psi)),
        grafar.map([phi5, psi5, n5], (phi, psi, n) => f5_r(phi, psi, n) * Math.sin(phi) * Math.sin(psi)),
        grafar.map([phi5, psi5, n5], (phi, psi, n) => f5_r(phi, psi, n) * Math.cos(psi))
    ], color: color, opacity: 0.1
}, pan3d).hide(true);

var graph_5_1 = grafar.pin({
    axes: [
        grafar.map([phi5, psi5], (phi, psi) => phi),
        grafar.map([phi5, psi5], (phi, psi) => psi),
        grafar.map([phi5, psi5, n5], (phi, psi, n) => f5_r(phi, psi, n))
    ], color: color
}, pan3d_2).hide(true);

var graph_5_3 = grafar.pin({
    axes: [
        grafar.map([e5, psi5], (e, psi) => 0),
        grafar.map([e5, psi5], (e, psi) => psi),
        grafar.map([e5, psi5, n5], (e, psi, n) => e * f5_r(0, psi, n))
    ], color: color
}, pan3d_2).hide(true);

var graph_5_4 = grafar.pin({
    axes: [
        grafar.map([e5, psi5], (e, psi) => 2 * Math.PI),
        grafar.map([e5, psi5], (e, psi) => psi),
        grafar.map([e5, psi5, n5], (e, psi, n) => e * f5_r(2 * Math.PI, psi, n))
    ], color: color
}, pan3d_2).hide(true);

var graph_5_5 = grafar.pin({
    axes: [
        grafar.map([phi5, psi5], (phi, psi) => phi),
        grafar.map([phi5, psi5], (phi, psi) => psi),
        grafar.map([phi5, psi5], (phi, psi) => 0)
    ], color: color
}, pan3d_2).hide(true);


function updateParamater5() {
    var value = rangeInput5.val;
    grafar.constant(value).into(n5);
}

var rangeInput5 = new RangeInput(1, updateParamater5, 1, 5, 1, "n");

function updateParamater5_cut_x() {
    var value = rangeInput5_cut_x.val;
    grafar.constant(value).into(x5_cut);
}

function get_r_5_cut_y(x, n) {

    let xx = x;
    return Math.sqrt(Math.pow(Math.abs(xx), (2 * n - 1) / n) - xx * xx);
}

phi5_ = grafar.range(0, 2 * Math.PI, 20).select();

var e5_2_r = grafar.range(0, 1, 10).select();
var graph_5_cut_x = grafar.pin({
    axes: [
        grafar.map([x5_cut], (x) => x),
        grafar.map([x5_cut, phi5_, n5, e5_2_r], (x, p, n, r) => r * get_r_5_cut_y(x, n) * Math.cos(p)),
        grafar.map([x5_cut, phi5_, n5, e5_2_r], (x, p, n, r) => r * get_r_5_cut_y(x, n) * Math.sin(p))
    ], color: red
}, pan3d).hide(true);
colorize(graph_5_cut_x);

var graph_5_left_cut_x = grafar.pin({
    axes: [
        grafar.map([x5_cut, phi5_, n5, e5_2_r], (x, p, n, r) => r * get_r_5_cut_y(x, n) * Math.cos(p)),
        grafar.map([x5_cut, phi5_, n5, e5_2_r], (x, p, n, r) => r * get_r_5_cut_y(x, n) * Math.sin(p))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_2_1);

var rangeInput5_cut_x = new RangeInput(0, updateParamater5_cut_x, -1, 1, 0.01, "x");


x1_5_cut_x = grafar.range(0, 1, 30).select();
e_5_cut_x = grafar.range(-1, 1, 10).select();

function get_r_5_left_cut_y(x, e, n, y) {
    return e * Math.sqrt(Math.pow(get_r_5_cut_y(x, n), 2) - y * y);
}

function get_x_5_left_cut_y(x, e, n, y) {
    let xx = x;
    if (xx > -0.5 && xx < 0 || xx > 0.5 && xx < 1) {
        while (Math.pow(get_r_5_cut_y(xx, n), 2) - y * y < 0) {
            xx -= 0.001;
        }
        return xx;
    }
    while (Math.pow(get_r_5_cut_y(xx, n), 2) - y * y < 0) {
        xx += 0.001;
    }
    return xx;
}

var graph_5_cut_y_1 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => y),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y))
    ], color: red
}, pan3d).hide(true);
colorize(graph_5_cut_y_1);

var graph_5_left_cut_y_1 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_5_left_cut_y_1);

var graph_5_cut_y_2 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => -get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => y),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y))
    ], color: red
}, pan3d).hide(true);
colorize(graph_5_cut_y_2);

var graph_5_left_cut_y_2 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => -get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, y5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_5_left_cut_y_2);

function updateParamater5_cut_y() {
    var value = rangeInput5_cut_y.val;
    grafar.constant(value).into(y5_cut);
}

var rangeInput5_cut_y = new RangeInput(0, updateParamater5_cut_y, -1 / 2, 1 / 2, 0.01, "y");


var graph_5_cut_z_1 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, z) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_5_cut_z_1);

var graph_5_left_cut_z_1 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_5_left_cut_z_1);

var graph_5_cut_z_2 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => -get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, z) => z)
    ], color: red
}, pan3d).hide(true);
colorize(graph_5_cut_z_2);

var graph_5_left_cut_z_2 = grafar.pin({
    axes: [
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => -get_x_5_left_cut_y(x, e, n, y)),
        grafar.map([x1_5_cut_x, e_5_cut_x, n5, z5_cut], (x, e, n, y) => get_r_5_left_cut_y(get_x_5_left_cut_y(x, e, n, y), e, n, y))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_5_left_cut_z_2);

function updateParamater5_cut_z() {
    var value = rangeInput5_cut_z.val;
    grafar.constant(value).into(z5_cut);
}

var rangeInput5_cut_z = new RangeInput(0, updateParamater5_cut_z, -1 / 2, 1 / 2, 0.01, "z");


var theta5_cut = grafar.constant(1).select();

var graph_5_cut_theta_1 = grafar.pin({
    axes: [
        grafar.map([e5, psi5, theta5_cut], (e, psi, theta) => theta),
        grafar.map([e5, psi5], (e, psi) => psi),
        grafar.map([e5, psi5, n5, theta5_cut], (e, psi, n, theta) => e * f5_r(theta, psi, n))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_5_cut_theta_1);

var graph_5_2d_cut_theta_1 = grafar.pin({
    axes: [
        grafar.map([e5, psi5], (e, psi) => psi),
        grafar.map([e5, psi5, n5, theta5_cut], (e, psi, n, theta) => e * f5_r(theta, psi, n))
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_5_2d_cut_theta_1);

function updateParamater5_cut_theta() {
    var value = rangeInput5_cut_theta.val;
    grafar.constant(value).into(theta5_cut);
}

var rangeInput5_cut_theta = new RangeInput(0, updateParamater5_cut_theta, 0, 2 * Math.PI, 0.01, "θ");

var phi5_cut = grafar.constant(1).select();

var graph_5_3d_cut_phi_1 = grafar.pin({
    axes: [
        grafar.map([phi5, phi5_cut], (phi, psi) => phi),
        grafar.map([phi5, phi5_cut], (phi, psi) => psi),
        grafar.map([e5, phi5, phi5_cut, n5], (e, phi, psi, n) => e * f5_r(phi, psi, n))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_5_3d_cut_phi_1);

var graph_5_2d_cut_phi_1 = grafar.pin({
    axes: [
        grafar.map([phi5, phi5_cut], (phi, psi) => phi),
        grafar.map([e5, phi5, phi5_cut, n5], (e, phi, psi, n) => e * f5_r(phi, psi, n))
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_5_2d_cut_theta_1);

function updateParamater5_cut_phi() {
    var value = rangeInput5_cut_phi.val;
    grafar.constant(value).into(phi5_cut);
}

var rangeInput5_cut_phi = new RangeInput(0, updateParamater5_cut_phi, 0, Math.PI, 0.01, "φ");


var r5_cut = grafar.constant(1).select();
var phi5_1 = grafar.range(0, Math.PI / 2, 40).select();
var psi5_1 = grafar.range(0, Math.PI, 40).select();


var graph_5_3d_cut_r_1_0 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi),
        grafar.map([r5_cut], (r) => r)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_5_3d_cut_r_1_0);
var graph_5_3d_cut_r_1_1 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => Math.PI + e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi),
        grafar.map([r5_cut], (r) => r)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_5_3d_cut_r_1_1);
var graph_5_3d_cut_r_1_2 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => Math.PI - e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi),
        grafar.map([r5_cut], (r) => r)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_5_3d_cut_r_1_2);
var graph_5_3d_cut_r_1_3 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => 2 * Math.PI - e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi),
        grafar.map([r5_cut], (r) => r)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_5_3d_cut_r_1_3);


var graph_5_2d_cut_r_1_0 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_5_2d_cut_r_1_0);
var graph_5_2d_cut_r_1_1 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => Math.PI + e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_5_2d_cut_r_1_1);
var graph_5_2d_cut_r_1_2 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => Math.PI - e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_5_2d_cut_r_1_2);
var graph_5_2d_cut_r_1_3 = grafar.pin({
    axes: [
        grafar.map([phi5_1, psi5_1, r5_cut, n5, e5], (phi, psi, r, n, e) => 2 * Math.PI - e * Math.acos(Math.pow(r, n / (2 * n - 1)) / Math.sin(psi))),
        grafar.map([phi5_1, psi5_1], (phi, psi) => psi)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_5_2d_cut_r_1_3);

function updateParamater5_cut_r() {
    var value = rangeInput5_cut_r.val;
    grafar.constant(value).into(r5_cut);
}

var rangeInput5_cut_r = new RangeInput(0, updateParamater5_cut_r, 0, 1, 0.01, "r");

// ==================================================================  6  =======================================================================


var a6 = grafar.constant(1).select();
// var b4 = grafar.constant(2).select();
var phi6 = grafar.range(0, 2 * Math.PI, 30).select();
var r6 = grafar.range(0, 1, 40).select();
var x6 = grafar.range(-3, 3, 80).select();
var y6 = grafar.range(-3, 3, 80).select();


var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

var graph_6_1 = grafar.pin({
    axes: [
        grafar.map([x6, y6, a6, q1], (x, y, a) => x),
        grafar.map([x6, y6, a6, q1], (x, y, a) => y),
        grafar.map([x6, y6, a6, q1], (x, y, a) => x * x + y * y)
    ], color: white
}, pan3d).hide(true);

var graph_6_2 = grafar.pin({
    axes: [
        grafar.map([x6, y6, a6, q1], (x, y, a) => x),
        grafar.map([x6, y6, a6, q1], (x, y, a) => y),
        grafar.map([x6, y6, a6, q1], (x, y, a) => 2 * (x * x + y * y))
    ], color: white
}, pan3d).hide(true);

var graph_6_3 = grafar.pin({
    axes: [
        grafar.map([x6, y6, a6, q1], (x, y, a) => x),
        grafar.map([x6, y6, a6, q1], (x, y, a) => x),
        grafar.map([x6, y6, a6, q1], (x, y, a) => y)
    ], color: white
}, pan3d).hide(true);

var graph_6_4 = grafar.pin({
    axes: [
        grafar.map([x6, y6, a6, q1], (x, y, a) => x),
        grafar.map([x6, y6, a6, q1], (x, y, a) => 2 * x),
        grafar.map([x6, y6, a6, q1], (x, y, a) => y)
    ], color: white
}, pan3d).hide(true);

var graph_6_0 = grafar.pin({
    axes: [
        grafar.map([x6, y6, a6, q1], (x, y, a) => x),
        grafar.map([x6, y6, a6, q1], (x, y, a) => y),
        grafar.map([x6, y6, a6, q1], (x, y, a) => a)
    ], color: white
}, pan3d).hide(true);


var x6_ = grafar.range(0, 1, 30).select();
var y6_ = grafar.range(0, 1, 30).select();

function f_y_6(x, y, a) {
    var t = f_x_6(x, y, a) + y * f_x_6(x, y, a);
    if (t * t + f_x_6(x, y, a) * f_x_6(x, y, a) > a)
        return Math.sqrt(a - f_x_6(x, y, a) * f_x_6(x, y, a));
    return t;
}

function f_x_6(x, y, a) {
    return x * Math.sqrt(a / 2);
}


function f_y_6_1(x, y, a) {
    var t = f_x_6_1(x, y, a) + y * f_x_6_1(x, y, a);
    if (t * t + f_x_6_1(x, y, a) * f_x_6_1(x, y, a) > a / 2)
        return Math.sqrt(a / 2 - f_x_6_1(x, y, a) * f_x_6_1(x, y, a));
    return t;
    // return y*Math.sqrt(a/2);
}

function f_x_6_1(x, y, a) {
    return x * Math.sqrt(a / 4);
}

function f_x_6_2(x, y, a) {
    return Math.sqrt(a / 2) + x * Math.sqrt(a / 4);
}

function f_y_6_2(x, y, a) {
    return (a - f_x_6_2(x, y, a) * f_x_6_2(x, y, a)) + y * ((a - f_x_6_2(x, y, a) * f_x_6_2(x, y, a)) - ((a / 2 - f_x_6_2(x, y, a) * f_x_6_2(x, y, a))))
}

function f_z_6(x, y, a) {

}

var graph_6_6 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, a6], (x, y, a) => f_x_6(x, y, a)),
        grafar.map([x6_, y6_, a6], (x, y, a) => f_y_6(x, y, a)),
        grafar.map([x6_, y6_, a6], (x, y, a) => f_x_6(x, y, a) * f_x_6(x, y, a) + f_y_6(x, y, a) * f_y_6(x, y, a))
    ], color: color
}, pan3d).hide(true);

var graph_6_7 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, a6], (x, y, a) => f_x_6_1(x, y, a)),
        grafar.map([x6_, y6_, a6], (x, y, a) => f_y_6_1(x, y, a)),
        grafar.map([x6_, y6_, a6], (x, y, a) => 2 * (f_x_6_1(x, y, a) * f_x_6_1(x, y, a) + f_y_6_1(x, y, a) * f_y_6_1(x, y, a)))
    ], color: color
}, pan3d).hide(true);

var graph_6_8 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, a6], (x, y, a) => x * Math.sqrt(a / 2)),
        grafar.map([x6_, y6_, a6], (x, y, a) => x * Math.sqrt(a / 2)),
        grafar.map([x6_, y6_, a6], (x, z, a) => Math.min(2 * x * x * Math.sqrt(a / 2) * Math.sqrt(a / 2) + z * (2 * x * x * Math.sqrt(a / 2) * Math.sqrt(a / 2)), a))
    ], color: color
}, pan3d).hide(true);

var graph_6_9 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, a6], (x, y, a) => x * Math.sqrt(a / 5)),
        grafar.map([x6_, y6_, a6], (x, y, a) => 2 * x * Math.sqrt(a / 5)),
        grafar.map([x6_, y6_, a6], (x, z, a) => Math.min(5 * x * x * Math.sqrt(a / 5) * Math.sqrt(a / 5) + z * (5 * x * x * Math.sqrt(a / 5) * Math.sqrt(a / 5)), a))
    ], color: color
}, pan3d).hide(true);

function f6_x(x, y, a) {
    return Math.sqrt(a / 4) + x * (Math.sqrt(a / 2) - Math.sqrt(a / 4));
}

var graph_6_10 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, a6], (x, y, a) => f6_x(x, y, a)),
        grafar.map([x6_, y6_, a6], (x, y, a) => f6_x(x, y, a) + (Math.sqrt((a - f6_x(x, y, a) * f6_x(x, y, a))) - f6_x(x, y, a)) * y),
        grafar.map([x6_, y6_, a6], (x, z, a) => a)
    ], color: color
}, pan3d).hide(true);

function f6_x_(x, y, a) {
    return Math.sqrt(a / 10) + x * (Math.sqrt(a / 4) - Math.sqrt(a / 10));
}

var graph_6_10_1 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, a6], (x, y, a) => f6_x_(x, y, a)),
        grafar.map([x6_, y6_, a6], (x, y, a) => Math.min(Math.sqrt((a / 2 - f6_x_(x, y, a) * f6_x_(x, y, a))) + (f6_x_(x, y, a) * 2 - Math.sqrt((a / 2 - f6_x_(x, y, a) * f6_x_(x, y, a)))) * y, Math.sqrt((a - f6_x_(x, y, a) * f6_x_(x, y, a))))),
        grafar.map([x6_, y6_, a6], (x, z, a) => a)
    ], color: color
}, pan3d).hide(true);

// second graph

var r6 = grafar.range(0, 1, 30).select();
var phi6 = grafar.range(0, 2 * Math.PI, 30).select();
var c = grafar.range(0, 1, 30).select();

var r6_ = grafar.range(0, 1, 20).select();
var phi6_ = grafar.range(0, 2 * Math.PI, 20).select();
var c_ = grafar.range(0, 1, 20).select();
var e6 = grafar.range(0, 1, 5).select();
// var a4 = grafar.constant(1).select();

var graph_6_11 = grafar.pin({
    axes: [
        grafar.map([r6, phi6, a6, q1], (r, phi, a) => 2 * 2 * r),
        grafar.map([r6, phi6, a6], (r, phi, a) => phi),
        grafar.map([r6, phi6, a6], (r, phi, a) => 2 * 2 * r)
    ], color: white
}, pan3d_2).hide(true);

var graph_6_12 = grafar.pin({
    axes: [
        grafar.map([r6, phi6, a6, q1], (r, phi, a) => 2 * r),
        grafar.map([r6, phi6, a6], (r, phi, a) => phi),
        grafar.map([r6, phi6, a6], (r, phi, a) => 2 * 2 * r)
    ], color: white
}, pan3d_2).hide(true);

var graph_6_13 = grafar.pin({
    axes: [
        grafar.map([r6, c, a6, q1], (r, c, a) => 2 * r * 2),
        grafar.map([r6, c, a6], (r, c, a) => Math.PI / 4),
        grafar.map([r6, c, a6], (r, c, a) => 2 * c * 2)
    ], color: white
}, pan3d_2).hide(true);

var graph_6_14 = grafar.pin({
    axes: [
        grafar.map([r6, c, a6, q1], (r, c, a) => 2 * r * 2),
        grafar.map([r6, c, a6], (r, c, a) => Math.atan(2)),
        grafar.map([r6, c, a6], (r, c, a) => 2 * c * 2)
    ], color: white
}, pan3d_2).hide(true);

var graph_6_15 = grafar.pin({
    axes: [
        grafar.map([r6, phi6, a6, q1], (r, phi, a) => 2 * 2 * r),
        grafar.map([r6, phi6, a6], (r, phi, a) => phi),
        grafar.map([r6, phi6, a6], (r, phi, a) => a)
    ], color: white
}, pan3d_2).hide(true);

var graph_6_16 = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6], (r, c, a) => a * r),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.PI / 4 + (Math.atan(2) - Math.PI / 4) * c),
        grafar.map([r6_, c_, a6], (r, c, a) => a * r)
    ], color: color
}, pan3d_2).hide(true);

var graph_6_17 = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6], (r, c, a) => a / 2 * r),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.PI / 4 + (Math.atan(2) - Math.PI / 4) * c),
        grafar.map([r6_, c_, a6], (r, c, a) => a * r)
    ], color: color
}, pan3d_2).hide(true);

var graph_6_18 = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6], (r, c, a) => a * r),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.PI / 4),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.min(a * r + c * a * r, a))
    ], color: color
}, pan3d_2).hide(true);

var graph_6_19 = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6], (r, c, a) => a * r),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.atan(2)),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.min(a * r + c * a * r, a))
    ], color: color
}, pan3d_2).hide(true);

var graph_6_20 = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6], (r, c, a) => a / 2 + a / 2 * r),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.PI / 4 + (Math.atan(2) - Math.PI / 4) * c),
        grafar.map([r6_, c_, a6], (r, c, a) => a)
    ], color: color
}, pan3d_2).hide(true);

function updateParamater6_1() {
    var value = rangeInput6_1.val;
    grafar.constant(value).into(a6);
}

var rangeInput6_1 = new RangeInput(1, updateParamater6_1, 0, 3, 0.01, "h");
var checkbox6 = new Checkbox(true);

function showFigures6() {
    var value = checkbox6.val;
    if (value) {
        graph_6_0.hide(false);
        graph_6_1.hide(false);
        graph_6_2.hide(false);
        graph_6_3.hide(false);
        graph_6_4.hide(false);

        graph_6_11.hide(false);
        graph_6_12.hide(false);
        graph_6_13.hide(false);
        graph_6_14.hide(false);
        graph_6_15.hide(false);

        if (sections_on[0] === 1) {
            graph_6_2d_cut_limit_1.hide(false);
            graph_6_2d_cut_limit_2.hide(false);
            graph_6_2d_cut_limit_3.hide(false);
            graph_6_2d_cut_limit_4.hide(false);
            graph_6_2d_cut_limit_5.hide(false);
            graph_6_2d_cut_limit_6.hide(false);
            graph_6_2d_cut_limit_7.hide(false);
        }

        if (sections_on[1] === 1) {
            graph_6_2d_cut_y_limit_1.hide(false);
            graph_6_2d_cut_y_limit_2.hide(false);
            graph_6_2d_cut_y_limit_3.hide(false);
            graph_6_2d_cut_y_limit_4.hide(false);
            graph_6_2d_cut_y_limit_5.hide(false);
            graph_6_2d_cut_y_limit_6.hide(false);
            graph_6_2d_cut_y_limit_7.hide(false);
        }

        if (sections_on[2] === 1) {
            graph_6_2d_cut_z_limit_1.hide(false);
            graph_6_2d_cut_z_limit_2.hide(false);
            graph_6_2d_cut_z_limit_3.hide(false);
            graph_6_2d_cut_z_limit_4.hide(false);
        }
    } else {
        graph_6_0.hide(true);
        graph_6_1.hide(true);
        graph_6_2.hide(true);
        graph_6_3.hide(true);
        graph_6_4.hide(true);

        graph_6_11.hide(true);
        graph_6_12.hide(true);
        graph_6_13.hide(true);
        graph_6_14.hide(true);
        graph_6_15.hide(true);

        graph_6_2d_cut_limit_1.hide(true);
        graph_6_2d_cut_limit_2.hide(true);
        graph_6_2d_cut_limit_3.hide(true);
        graph_6_2d_cut_limit_4.hide(true);
        graph_6_2d_cut_limit_5.hide(true);
        graph_6_2d_cut_limit_6.hide(true);
        graph_6_2d_cut_limit_7.hide(true);

        graph_6_2d_cut_y_limit_1.hide(true);
        graph_6_2d_cut_y_limit_2.hide(true);
        graph_6_2d_cut_y_limit_3.hide(true);
        graph_6_2d_cut_y_limit_4.hide(true);
        graph_6_2d_cut_y_limit_5.hide(true);
        graph_6_2d_cut_y_limit_6.hide(true);
        graph_6_2d_cut_y_limit_7.hide(true);

        graph_6_2d_cut_z_limit_1.hide(true);
        graph_6_2d_cut_z_limit_2.hide(true);
        graph_6_2d_cut_z_limit_3.hide(true);
        graph_6_2d_cut_z_limit_4.hide(true);
    }
}

checkbox6.addEventListener('change', showFigures6);


var z6_cut = grafar.constant(1).select();

function get_z_(z, a) {
    return Math.min(z, a);
}

var graph_6_3d_cut_z_0 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => f6_x(x, y, get_z_(z, a))),
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => f6_x(x, y, get_z_(z, a)) + (Math.sqrt((get_z_(z, a) - f6_x(x, y, get_z_(z, a)) * f6_x(x, y, get_z_(z, a)))) - f6_x(x, y, get_z_(z, a))) * y),
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => get_z_(z, a))
    ], color: red
}, pan3d).hide(true);
colorize(graph_6_3d_cut_z_0);
var graph_6_3d_cut_z_1 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => f6_x_(x, y, get_z_(z, a))),
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => Math.min(Math.sqrt((get_z_(z, a) / 2 - f6_x_(x, y, get_z_(z, a)) * f6_x_(x, y, get_z_(z, a)))) + (f6_x_(x, y, get_z_(z, a)) * 2 - Math.sqrt((get_z_(z, a) / 2 - f6_x_(x, y, get_z_(z, a)) * f6_x_(x, y, get_z_(z, a))))) * y, Math.sqrt((get_z_(z, a) - f6_x_(x, y, get_z_(z, a)) * f6_x_(x, y, get_z_(z, a)))))),
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => get_z_(z, a))
    ], color: red
}, pan3d).hide(true);
colorize(graph_6_3d_cut_z_1);
var graph_6_2d_cut_z_0 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => f6_x(x, y, get_z_(z, a))),
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => f6_x(x, y, get_z_(z, a)) + (Math.sqrt((get_z_(z, a) - f6_x(x, y, get_z_(z, a)) * f6_x(x, y, get_z_(z, a)))) - f6_x(x, y, get_z_(z, a))) * y),
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_6_2d_cut_z_0);
var graph_6_2d_cut_z_1 = grafar.pin({
    axes: [
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => f6_x_(x, y, get_z_(z, a))),
        grafar.map([x6_, y6_, z6_cut, a6], (x, y, z, a) => Math.min(Math.sqrt((get_z_(z, a) / 2 - f6_x_(x, y, get_z_(z, a)) * f6_x_(x, y, get_z_(z, a)))) + (f6_x_(x, y, get_z_(z, a)) * 2 - Math.sqrt((get_z_(z, a) / 2 - f6_x_(x, y, get_z_(z, a)) * f6_x_(x, y, get_z_(z, a))))) * y, Math.sqrt((get_z_(z, a) - f6_x_(x, y, get_z_(z, a)) * f6_x_(x, y, get_z_(z, a)))))),
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_6_2d_cut_z_1);

var graph_6_2d_cut_z_limit_1 = grafar.pin({
    axes: [
        grafar.map([phi6, a6, z6_cut], (p, a, z) => Math.sqrt(z) * Math.cos(p)),
        grafar.map([phi6, a6, z6_cut], (p, a, z) => Math.sqrt(z) * Math.sin(p)),
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_z_limit_2 = grafar.pin({
    axes: [
        grafar.map([phi6, a6, z6_cut], (p, a, z) => Math.sqrt(z / 2) * Math.cos(p)),
        grafar.map([phi6, a6, z6_cut], (p, a, z) => Math.sqrt(z / 2) * Math.sin(p)),
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_z_limit_3 = grafar.pin({
    axes: [
        grafar.map([e6, a6, z6_cut], (e, a, z) => (e - 0.5) * 5),
        grafar.map([e6, a6, z6_cut], (e, a, z) => (e - 0.5) * 5),
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_z_limit_4 = grafar.pin({
    axes: [
        grafar.map([e6, a6, z6_cut], (e, a, z) => (e - 0.5) / 2 * 5),
        grafar.map([e6, a6, z6_cut], (e, a, z) => (e - 0.5) * 5),
    ], color: white
}, pan2d_1).hide(true);

function updateParamater6_cut_z() {
    var value = rangeInput6_cut_z.val;
    grafar.constant(value).into(z6_cut);
}

var rangeInput6_cut_z = new RangeInput(0, updateParamater6_cut_z, 0, 1, 0.01, "z");


var y6_cut = grafar.constant(1).select();
var e6 = grafar.range(0, 1, 20).select();
var e6_2 = grafar.range(0, 1, 20).select();
var e6_1 = grafar.range(0, 1, 40).select();

function get_z_cut_y_6(e2, y, a, e) {
    return Math.min(a, 1.25 * y * y) + e * (Math.min(a, 4 * y * y) - Math.min(a, 1.25 * y * y));
}

function get_x_cut_y_6(e2, y, a, e) {
    let z = get_z_cut_y_6(e2, y, a, e);
    if (z / 2 - y * y < 0) {
        return y / 2 + e2 * (Math.min(y, Math.sqrt(z - y * y)) - y / 2);
    }
    return Math.max(y / 2, Math.sqrt(z / 2 - y * y)) + e2 * (Math.min(y, Math.sqrt(z - y * y)) - Math.max(y / 2, Math.sqrt(z / 2 - y * y)));
}

var graph_6_3d_cut_y = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6], (e2, y, a, e) => get_x_cut_y_6(e2, y, a, e)),
        grafar.map([e6_2, y6_cut, a6, e6], (e2, y, a, e) => y),
        grafar.map([e6_2, y6_cut, a6, e6], (e2, y, a, e) => get_z_cut_y_6(e2, y, a, e))
    ], color: red
}, pan3d).hide(true);
colorize(graph_6_3d_cut_y);

var graph_6_2d_cut_y = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6], (e2, y, a, e) => get_x_cut_y_6(e2, y, a, e)),
        grafar.map([e6_2, y6_cut, a6, e6], (e2, y, a, e) => get_z_cut_y_6(e2, y, a, e))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_6_2d_cut_y);

var graph_6_2d_cut_y_limit_1 = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => Math.sqrt(x * x + e * e * 3 - x * x)),
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_y_limit_2 = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => -Math.sqrt(x * x + e * e * 3 - x * x)),
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_y_limit_3 = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => Math.sqrt(x * x + e * e * 3 / 2 - x * x)),
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => 2 * x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_y_limit_4 = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => -Math.sqrt(x * x + e * e * 3 / 2 - x * x)),
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => 2 * x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_y_limit_5 = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => x),
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => e * 5)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_y_limit_6 = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => x / 2),
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => e * 5)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_y_limit_7 = grafar.pin({
    axes: [
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => (e - 0.5) * 5),
        grafar.map([e6_2, y6_cut, a6, e6_1], (e2, x, a, e) => a)
    ], color: white
}, pan2d_1).hide(true);


function updateParamater6_cut_y() {
    var value = rangeInput6_cut_y.val;
    grafar.constant(value).into(y6_cut);
}

var rangeInput6_cut_y = new RangeInput(0, updateParamater6_cut_y, 0, Math.sqrt(1 / (1.25)), 0.01, "y");


var x6_cut = grafar.constant(0.3).select();

function get_z_cut_x_6(e2, x, a, e) {
    return Math.min(a, 2 * x * x) + e * (Math.min(a, 10 * x * x) - Math.min(a, 2 * x * x));
}

function get_y_cut_x_6(e2, x, a, e) {
    let z = get_z_cut_x_6(e2, x, a, e);
    if (z / 2 - x * x < 0) {
        return x * 2 + e2 * (Math.max(x, Math.sqrt(z - x * x)) - x * 2);
    }
    return Math.max(x, Math.sqrt(z / 2 - x * x)) + e2 * (Math.min(x * 2, Math.sqrt(z - x * x)) - Math.max(x, Math.sqrt(z / 2 - x * x)));
}

var graph_6_3d_cut_x = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6], (e2, x, a, e) => x),
        grafar.map([e6_2, x6_cut, a6, e6], (e2, x, a, e) => get_y_cut_x_6(e2, x, a, e)),
        grafar.map([e6_2, x6_cut, a6, e6], (e2, x, a, e) => get_z_cut_x_6(e2, x, a, e))
    ], color: red
}, pan3d).hide(true);
colorize(graph_6_3d_cut_x);

var graph_6_2d_cut_x = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6], (e2, x, a, e) => get_y_cut_x_6(e2, x, a, e)),
        grafar.map([e6_2, x6_cut, a6, e6], (e2, x, a, e) => get_z_cut_x_6(e2, x, a, e))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_6_2d_cut_x);

var graph_6_2d_cut_limit_1 = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => Math.sqrt(x * x + e * e * 3 - x * x)),
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_limit_2 = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => -Math.sqrt(x * x + e * e * 3 - x * x)),
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_limit_3 = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => Math.sqrt(x * x + e * e * 3 / 2 - x * x)),
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => 2 * x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_limit_4 = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => -Math.sqrt(x * x + e * e * 3 / 2 - x * x)),
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => 2 * x * x + e * e * 3)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_limit_5 = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => x),
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => (e - 0.5) * 5)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_limit_6 = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => 2 * x),
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => (e - 0.5) * 5)
    ], color: white
}, pan2d_1).hide(true);

var graph_6_2d_cut_limit_7 = grafar.pin({
    axes: [
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => (e - 0.5) * 5),
        grafar.map([e6_2, x6_cut, a6, e6_1], (e2, x, a, e) => a)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater6_cut_x() {
    var value = rangeInput6_cut_x.val;
    grafar.constant(value).into(x6_cut);
}

var rangeInput6_cut_x = new RangeInput(0.3, updateParamater6_cut_x, 0, Math.sqrt(1 / 2), 0.01, "x");


var p6_cut = grafar.constant(1).select();

var graph_6_3d_cut_p = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6], (r, c, a) => a * r),
        grafar.map([r6_, c_, a6, p6_cut], (r, c, a, p) => p),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.min(a * r + c * a * r, a))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_6_3d_cut_p);

var graph_6_2d_cut_p = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6], (r, c, a) => a * r),
        grafar.map([r6_, c_, a6], (r, c, a) => Math.min(a * r + c * a * r, a))
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_6_2d_cut_p);

function updateParamater6_cut_p() {
    var value = rangeInput6_cut_p.val;
    grafar.constant(value).into(p6_cut);
}

var rangeInput6_cut_p = new RangeInput(0, updateParamater6_cut_p, Math.PI / 4, Math.atan(2), 0.01, "x");


var z6_cut_2 = grafar.constant(1).select();

var graph_6_3d_cut_z_2 = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6, z6_cut_2], (r, c, a, z) => Math.min(z, a) / 2 + Math.min(z, a) / 2 * r),
        grafar.map([r6_, c_, a6, z6_cut_2], (r, c, a, z) => Math.PI / 4 + (Math.atan(2) - Math.PI / 4) * c),
        grafar.map([r6_, c_, a6, z6_cut_2], (r, c, a, z) => Math.min(z, a))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_6_3d_cut_z_2);

var graph_6_2d_cut_z_2 = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6, z6_cut_2], (r, c, a, z) => Math.min(z, a) / 2 + Math.min(z, a) / 2 * r),
        grafar.map([r6_, c_, a6, z6_cut_2], (r, c, a, z) => Math.PI / 4 + (Math.atan(2) - Math.PI / 4) * c),
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_6_2d_cut_z_2);

function updateParamater6_cut_z_2() {
    var value = rangeInput6_cut_z_2.val;
    grafar.constant(value).into(z6_cut_2);
}

var rangeInput6_cut_z_2 = new RangeInput(0, updateParamater6_cut_z_2, 0, 1, 0.01, "z");


var r6_cut = grafar.constant(1).select();

var graph_6_3d_cut_r = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6, r6_cut], (e, c, a, r) => r),
        grafar.map([r6_, c_, a6, r6_cut], (e, c, a, r) => Math.PI / 4 + (Math.atan(2) - Math.PI / 4) * c),
        grafar.map([r6_, c_, a6, r6_cut], (e, c, a, r) => r + (Math.min(2 * r, a) - r) * e)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_6_3d_cut_r);

var graph_6_2d_cut_r = grafar.pin({
    axes: [
        grafar.map([r6_, c_, a6, r6_cut], (e, c, a, r) => Math.PI / 4 + (Math.atan(2) - Math.PI / 4) * c),
        grafar.map([r6_, c_, a6, r6_cut], (e, c, a, r) => r + (Math.min(2 * r, a) - r) * e)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_6_2d_cut_r);


function updateParamater6_cut_r() {
    var value = rangeInput6_cut_r.val;
    grafar.constant(value).into(r6_cut);
}

var rangeInput6_cut_r = new RangeInput(0, updateParamater6_cut_r, 0, 1, 0.01, "r");


// ========================================================================= 7 =============================================================================

var phi7 = grafar.range(0, Math.PI, 20).select();
var theta7 = grafar.range(0, 2 * Math.PI, 20).select();
var theta7_1 = grafar.range(0, 2 * Math.PI, 30).select();
var a7 = grafar.constant(1).select();
var e7_1 = grafar.range(-1, 1, 20).select();
var e7_2 = grafar.range(-1, 1, 20).select();
var r7 = grafar.range(0, 1, 20).select();
var r7_ = grafar.range(0, 1, 20).select();
var phi7_1 = grafar.range(0, Math.PI / 2, 20).select();
var phi7_ = grafar.range(0, Math.PI / 2, 20).select();
var theta7_ = grafar.range(0, Math.PI / 2, 20).select();

var graph_7_0 = grafar.pin({
    axes: [
        grafar.map([a7, phi7_, theta7_], (a, p, t) => a * Math.cos(p) * Math.sin(t)),
        grafar.map([a7, phi7_, theta7_], (a, p, t) => a * Math.sin(p) * Math.sin(t)),
        grafar.map([a7, phi7_, theta7_], (a, p, t) => a * Math.cos(t))
    ], color: color
}, pan3d).hide(true);

var graph_7_5 = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7], (a, p, r) => 0),
        grafar.map([a7, phi7_1, r7], (a, p, r) => a * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7], (a, p, r) => a * r * Math.cos(p))
    ], color: color
}, pan3d).hide(true);

var graph_7_6 = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7], (a, p, r) => a * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7], (a, p, r) => 0),
        grafar.map([a7, phi7_1, r7], (a, p, r) => a * r * Math.cos(p))
    ], color: color
}, pan3d).hide(true);

var graph_7_7 = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7], (a, p, r) => a * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7], (a, p, r) => a * r * Math.cos(p)),
        grafar.map([a7, phi7_1, r7], (a, p, r) => 0)
    ], color: color
}, pan3d).hide(true);

var graph_7_1 = grafar.pin({
    axes: [
        grafar.map([a7, phi7, theta7, q1], (a, p, t) => a * Math.cos(p) * Math.sin(t)),
        grafar.map([a7, phi7, theta7], (a, p, t) => a * Math.sin(p) * Math.sin(t)),
        grafar.map([a7, phi7, theta7], (a, p, t) => a * Math.cos(t))
    ], color: white
}, pan3d).hide(true);

var graph_7_2 = grafar.pin({
    axes: [
        grafar.map([e7_1, e7_2, q1], (e1, e2) => 0),
        grafar.map([e7_1, e7_2], (e1, e2) => e1 * 5),
        grafar.map([e7_1, e7_2], (e1, e2) => e2 * 5)
    ], color: white
}, pan3d).hide(true);

var graph_7_3 = grafar.pin({
    axes: [
        grafar.map([e7_1, e7_2, q1], (e1, e2) => e1 * 5),
        grafar.map([e7_1, e7_2], (e1, e2) => 0),
        grafar.map([e7_1, e7_2], (e1, e2) => e2 * 5)
    ], color: white
}, pan3d).hide(true);

var graph_7_4 = grafar.pin({
    axes: [
        grafar.map([e7_1, e7_2, q1], (e1, e2) => e1 * 5),
        grafar.map([e7_1, e7_2], (e1, e2) => e2 * 5),
        grafar.map([e7_1, e7_2], (e1, e2) => 0)
    ], color: white
}, pan3d).hide(true);


var graph_7_8 = grafar.pin({
    axes: [
        grafar.map([a7, phi7, theta7], (a, p, t) => p),
        grafar.map([a7, phi7, theta7], (a, p, t) => t),
        grafar.map([a7, phi7, theta7], (a, p, t) => a)
    ], color: color
}, pan3d_2).hide(true);

var graph_7_9 = grafar.pin({
    axes: [
        grafar.map([a7, phi7, theta7], (a, p, t) => p),
        grafar.map([a7, phi7, theta7], (a, p, t) => t),
        grafar.map([a7, phi7, theta7], (a, p, t) => 0)
    ], color: color
}, pan3d_2).hide(true);

var graph_7_10 = grafar.pin({
    axes: [
        grafar.map([a7, phi7, r7], (a, p, r) => p),
        grafar.map([a7, phi7, r7], (a, p, r) => 0),
        grafar.map([a7, phi7, r7], (a, p, r) => a * r)
    ], color: color
}, pan3d_2).hide(true);

var graph_7_11 = grafar.pin({
    axes: [
        grafar.map([a7, phi7, r7], (a, p, r) => p),
        grafar.map([a7, phi7, r7], (a, p, r) => 2 * Math.PI),
        grafar.map([a7, phi7, r7], (a, p, r) => a * r)
    ], color: color
}, pan3d_2).hide(true);

var graph_7_12 = grafar.pin({
    axes: [
        grafar.map([a7, theta7, r7], (a, p, r) => 0),
        grafar.map([a7, theta7, r7], (a, p, r) => p),
        grafar.map([a7, theta7, r7], (a, p, r) => a * r)
    ], color: color
}, pan3d_2).hide(true);

var graph_7_13 = grafar.pin({
    axes: [
        grafar.map([a7, theta7, r7], (a, p, r) => Math.PI),
        grafar.map([a7, theta7, r7], (a, p, r) => p),
        grafar.map([a7, theta7, r7], (a, p, r) => a * r)
    ], color: color
}, pan3d_2).hide(true);

var r7_cut = grafar.constant(0).select();
var graph_7_3d_cut_r = grafar.pin({
    axes: [
        grafar.map([a7, r7_cut, phi7, theta7], (a, r, p, t) => p),
        grafar.map([a7, r7_cut, phi7, theta7], (a, r, p, t) => t),
        grafar.map([a7, r7_cut, phi7, theta7], (a, r, p, t) => Math.min(a, r))
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_7_3d_cut_r);

var graph_7_2d_cut_r = grafar.pin({
    axes: [
        grafar.map([a7, r7_cut, phi7, theta7], (a, r, p, t) => p),
        grafar.map([a7, r7_cut, phi7, theta7], (a, r, p, t) => t),
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_7_2d_cut_r);

function updateParamater7_cut_r() {
    var value = rangeInput7_cut_r.val;
    grafar.constant(value).into(r7_cut);
}

var rangeInput7_cut_r = new RangeInput(0, updateParamater7_cut_r, 0, 1, 0.01, "r");


var phi7_cut = grafar.constant(0).select();
var graph_7_3d_cut_phi = grafar.pin({
    axes: [
        grafar.map([a7, theta7, r7, phi7_cut], (a, p, r, t) => t),
        grafar.map([a7, theta7, r7], (a, p, r) => p),
        grafar.map([a7, theta7, r7], (a, p, r) => a * r)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_7_3d_cut_phi);

var graph_7_2d_cut_phi = grafar.pin({
    axes: [
        grafar.map([a7, theta7, r7], (a, p, r) => p),
        grafar.map([a7, theta7, r7], (a, p, r) => a * r)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_7_2d_cut_phi);

function updateParamater7_cut_phi() {
    var value = rangeInput7_cut_phi.val;
    grafar.constant(value).into(phi7_cut);
}

var rangeInput7_cut_phi = new RangeInput(0, updateParamater7_cut_phi, 0, Math.PI, 0.01, "φ");


var theta7_cut = grafar.constant(0).select();
var graph_7_3d_cut_theta = grafar.pin({
    axes: [
        grafar.map([a7, phi7, r7], (a, p, r) => p),
        grafar.map([a7, phi7, r7, theta7_cut], (a, p, r, t) => t),
        grafar.map([a7, phi7, r7], (a, p, r) => a * r)
    ], color: red
}, pan3d_2).hide(true);
colorize(graph_7_3d_cut_theta);

var graph_7_2d_cut_theta = grafar.pin({
    axes: [
        grafar.map([a7, phi7, r7], (a, p, r) => p),
        grafar.map([a7, phi7, r7], (a, p, r) => a * r)
    ], color: red
}, pan2d_2).hide(true);
colorize(graph_7_2d_cut_theta);

function updateParamater7_cut_theta() {
    var value = rangeInput7_cut_theta.val;
    grafar.constant(value).into(theta7_cut);
}

var rangeInput7_cut_theta = new RangeInput(0, updateParamater7_cut_theta, 0, 2 * Math.PI, 0.01, "θ");

var checkbox7 = new Checkbox(false);

function showFigures7() {
    var value = checkbox7.val;
    if (value) {
        graph_7_1.hide(false);
        graph_7_2.hide(false);
        graph_7_3.hide(false);
        graph_7_4.hide(false);

        if (sections_on[0] === 1) {
            graph_7_2d_cut_x_1.hide(false);
            graph_7_2d_cut_x_2.hide(false);
            graph_7_2d_cut_x_3.hide(false);
        }

        if (sections_on[1] === 1) {
            graph_7_2d_cut_y_1.hide(false);
            graph_7_2d_cut_y_2.hide(false);
            graph_7_2d_cut_y_3.hide(false);
        }

        if (sections_on[2] === 1) {
            graph_7_2d_cut_z_1.hide(false);
            graph_7_2d_cut_z_2.hide(false);
            graph_7_2d_cut_z_3.hide(false);
        }
    } else {
        graph_7_1.hide(true);
        graph_7_2.hide(true);
        graph_7_3.hide(true);
        graph_7_4.hide(true);

        graph_7_2d_cut_x_1.hide(true);
        graph_7_2d_cut_x_2.hide(true);
        graph_7_2d_cut_x_3.hide(true);

        graph_7_2d_cut_y_1.hide(true);
        graph_7_2d_cut_y_2.hide(true);
        graph_7_2d_cut_y_3.hide(true);

        graph_7_2d_cut_z_1.hide(true);
        graph_7_2d_cut_z_2.hide(true);
        graph_7_2d_cut_z_3.hide(true);
    }
}

checkbox7.addEventListener('change', showFigures1);

function updateParamater7() {
    var value = rangeInput7.val;
    grafar.constant(value).into(a7);
}

var rangeInput7 = new RangeInput(1, updateParamater7, 0, 3, 0.01, "a");


var x7_cut = grafar.constant(0).select();

var graph_7_3d_cut_x = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7, x7_cut], (a, p, r, x) => x),
        grafar.map([a7, phi7_1, r7, x7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7, x7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.cos(p))
    ], color: red
}, pan3d).hide(true);
colorize(graph_7_3d_cut_x);

var graph_7_2d_cut_x_0 = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7, x7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7, x7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.cos(p))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_7_2d_cut_x_0);

var graph_7_2d_cut_x_1 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_1, r7, x7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * Math.sin(p)),
        grafar.map([a7, theta7_1, r7, x7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * Math.cos(p))
    ], color: white
}, pan2d_1).hide(true);

var graph_7_2d_cut_x_2 = grafar.pin({
    axes: [
        grafar.map([e7_2], (e) => e * 5),
        grafar.map([e7_2], (e) => 0)
    ], color: white
}, pan2d_1).hide(true);

var graph_7_2d_cut_x_3 = grafar.pin({
    axes: [
        grafar.map([e7_2], (e) => 0),
        grafar.map([e7_2], (e) => e * 5)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater7_cut_x() {
    var value = rangeInput7_cut_x.val;
    grafar.constant(value).into(x7_cut);
}

var rangeInput7_cut_x = new RangeInput(0, updateParamater7_cut_x, 0, 1, 0.01, "x");


var y7_cut = grafar.constant(0).select();

var graph_7_3d_cut_y = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7, y7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7, y7_cut], (a, p, r, x) => x),
        grafar.map([a7, phi7_1, r7, y7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.cos(p))
    ], color: red
}, pan3d).hide(true);
colorize(graph_7_3d_cut_y);

var graph_7_2d_cut_y_0 = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7, y7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7, y7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.cos(p))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_7_2d_cut_y_0);

var graph_7_2d_cut_y_1 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_1, r7, y7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * Math.sin(p)),
        grafar.map([a7, theta7_1, r7, y7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * Math.cos(p))
    ], color: white
}, pan2d_1).hide(true);

var graph_7_2d_cut_y_2 = grafar.pin({
    axes: [
        grafar.map([e7_2], (e) => e * 5),
        grafar.map([e7_2], (e) => 0)
    ], color: white
}, pan2d_1).hide(true);

var graph_7_2d_cut_y_3 = grafar.pin({
    axes: [
        grafar.map([e7_2], (e) => 0),
        grafar.map([e7_2], (e) => e * 5)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater7_cut_y() {
    var value = rangeInput7_cut_y.val;
    grafar.constant(value).into(y7_cut);
}

var rangeInput7_cut_y = new RangeInput(0, updateParamater7_cut_y, 0, 1, 0.01, "y");

var z7_cut = grafar.constant(0).select();

var graph_7_3d_cut_z = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7, z7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7, z7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.cos(p)),
        grafar.map([a7, phi7_1, r7, z7_cut], (a, p, r, x) => x),
    ], color: red
}, pan3d).hide(true);
colorize(graph_7_3d_cut_z);

var graph_7_2d_cut_z_0 = grafar.pin({
    axes: [
        grafar.map([a7, phi7_1, r7, z7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.sin(p)),
        grafar.map([a7, phi7_1, r7, z7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * r * Math.cos(p))
    ], color: red
}, pan2d_1).hide(true);
colorize(graph_7_2d_cut_z_0);

var graph_7_2d_cut_z_1 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_1, r7, z7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * Math.sin(p)),
        grafar.map([a7, theta7_1, r7, z7_cut], (a, p, r, x) => Math.sqrt(a * a - x * x) * Math.cos(p))
    ], color: white
}, pan2d_1).hide(true);

var graph_7_2d_cut_z_2 = grafar.pin({
    axes: [
        grafar.map([e7_2], (e) => e * 5),
        grafar.map([e7_2], (e) => 0)
    ], color: white
}, pan2d_1).hide(true);

var graph_7_2d_cut_z_3 = grafar.pin({
    axes: [
        grafar.map([e7_2], (e) => 0),
        grafar.map([e7_2], (e) => e * 5)
    ], color: white
}, pan2d_1).hide(true);

function updateParamater7_cut_z() {
    var value = rangeInput7_cut_z.val;
    grafar.constant(value).into(z7_cut);
}

var rangeInput7_cut_z = new RangeInput(0, updateParamater7_cut_z, 0, 1, 0.01, "z");


var theta7_3 = grafar.range(0, Math.PI, 20).select();
var graph_7_3d_cut_third_1 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => a * r),
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => p),
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => Math.sqrt(a * a - a * a * r * r)),
    ], color: color
}, pan3d_3).hide(true);
var graph_7_3d_cut_third_2 = grafar.pin({
    axes: [
        grafar.map([a7, r7, r7_], (a, r, e) => a * r),
        grafar.map([a7, r7, r7_], (a, r, e) => 0),
        grafar.map([a7, r7, r7_], (a, r, e) => e * Math.sqrt(a * a - a * a * r * r)),
    ], color: color
}, pan3d_3).hide(true);
var graph_7_3d_cut_third_3 = grafar.pin({
    axes: [
        grafar.map([a7, r7, r7_], (a, r, e) => a * r),
        grafar.map([a7, r7], (a, r) => Math.PI),
        grafar.map([a7, r7, r7_], (a, r, e) => e * Math.sqrt(a * a - a * a * r * r)),
    ], color: color
}, pan3d_3).hide(true);
var graph_7_3d_cut_third_4 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => a * r),
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => p),
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => 0),
    ], color: color
}, pan3d_3).hide(true);
var graph_7_3d_cut_third_5 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => 0),
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => p),
        grafar.map([a7, theta7_3, r7], (a, p, r, x) => a * r),
    ], color: color
}, pan3d_3).hide(true);


var p7_cut_3 = grafar.constant(0).select();

var graph_7_3d_cut_p_3 = grafar.pin({
    axes: [
        grafar.map([a7, r7, r7_], (a, r, e) => a * r),
        grafar.map([a7, r7, r7_, p7_cut_3], (a, r, e, p) => p),
        grafar.map([a7, r7, r7_], (a, r, e) => e * Math.sqrt(a * a - a * a * r * r)),
    ], color: red
}, pan3d_3).hide(true);
colorize(graph_7_3d_cut_p_3);

var graph_7_2d_cut_p_3 = grafar.pin({
    axes: [
        grafar.map([a7, r7, r7_], (a, r, e) => a * r),
        grafar.map([a7, r7, r7_], (a, r, e) => e * Math.sqrt(a * a - a * a * r * r)),
    ], color: red
}, pan2d_3).hide(true);
colorize(graph_7_2d_cut_p_3);

function updateParamater7_cut_p_3() {
    var value = rangeInput7_cut_p_3.val;
    grafar.constant(value).into(p7_cut_3);
}

var rangeInput7_cut_p_3 = new RangeInput(0, updateParamater7_cut_p_3, 0, Math.PI, 0.01, "φ");


var r7_cut_3 = grafar.constant(0).select();

var graph_7_3d_cut_r_3 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_3, r7, r7_cut_3], (a, p, r, r_) => r_),
        grafar.map([a7, theta7_3, r7], (a, p, r) => p),
        grafar.map([a7, theta7_3, r7, r7_cut_3], (a, p, r, r_) => Math.sqrt(a * a - r_ * r_) * r),
    ], color: red
}, pan3d_3).hide(true);
colorize(graph_7_3d_cut_r_3);

var graph_7_2d_cut_r_3 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_3, r7], (a, p, r) => p),
        grafar.map([a7, theta7_3, r7, r7_cut_3], (a, p, r, r_) => Math.sqrt(a * a - r_ * r_) * r),
    ], color: red
}, pan2d_3).hide(true);
colorize(graph_7_2d_cut_r_3);

function updateParamater7_cut_r_3() {
    var value = rangeInput7_cut_r_3.val;
    grafar.constant(value).into(r7_cut_3);
}

var rangeInput7_cut_r_3 = new RangeInput(0, updateParamater7_cut_r_3, 0, 1, 0.01, "r");


var z7_cut_3 = grafar.constant(0).select();

var graph_7_3d_cut_z_3 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_3, r7, z7_cut_3], (a, p, r, r_) => Math.sqrt(a * a - r_ * r_) * r),
        grafar.map([a7, theta7_3, r7], (a, p, r) => p),
        grafar.map([a7, theta7_3, r7, z7_cut_3], (a, p, r, r_) => r_),
    ], color: red
}, pan3d_3).hide(true);
colorize(graph_7_3d_cut_z_3);

var graph_7_2d_cut_z_3 = grafar.pin({
    axes: [
        grafar.map([a7, theta7_3, r7, z7_cut_3], (a, p, r, r_) => Math.sqrt(a * a - r_ * r_) * r),
        grafar.map([a7, theta7_3, r7], (a, p, r) => p),
    ], color: red
}, pan2d_3).hide(true);
colorize(graph_7_2d_cut_z_3);

function updateParamater7_cut_z_3() {
    var value = rangeInput7_cut_z_3.val;
    grafar.constant(value).into(z7_cut_3);
}

var rangeInput7_cut_z_3 = new RangeInput(0, updateParamater7_cut_z_3, 0, 1, 0.01, "z");