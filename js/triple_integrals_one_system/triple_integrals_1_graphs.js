var color = [0, .55, .8];
var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

// ================================================================== 0 ==============================================================


var color = [0, .55, .8];

var white = [210 / 255.0, 210 / 255.0, 210 / 255.0];

var rangeInput0_1 = new RangeInput(0.5, updateParamater0,0, 3, 0.0001, "a");
var rangeInput0_2 = new RangeInput(1, updateParamater0,0, 3, 0.0001, "b");
var rangeInput0_3 = new RangeInput(2, updateParamater0,0, 3, 0.0001, "c");
var rangeInput0_4 = new RangeInput(2, updateParamater0,0, 3, 1, "k");

var psi0 = grafar.range(0, 2*Math.PI, 50).select();
var a0 = grafar.constant(rangeInput0_1.val).select();
var b0 = grafar.constant(rangeInput0_2.val).select();
var c0 = grafar.constant(rangeInput0_3.val).select();
var k0 = grafar.constant(rangeInput0_4.val).select();
var r0 = grafar.range(0, 1, 50).select();
var r0_1 = grafar.range(0, 1, 10).select();
var q0 = grafar.range(0, 1, 2).select();


function f_x_0_1(psi, a, b, r) {
	return r * a * Math.cos(psi);
}
function f_y_0_1(psi, a, b, r) {
	return r * b * Math.sin(psi);
}

var graph_0_1 = grafar.pin({axes: [
		grafar.map([psi0, a0, b0, k0, r0], (psi, a, b, k, r) => f_x_0_1(psi, a, b, k + r)),
		grafar.map([psi0, a0, b0, k0, r0], (psi, a, b, k, r) => f_y_0_1(psi, a, b, k + r)),
		grafar.map([psi0, a0, b0, c0, k0, r0], (psi, a, b, c, k, r) => c*Math.sin(Math.PI * (k + r)))
	], color: color}, pan3d).hide(true);

var graph_0_2 = grafar.pin({axes: [
		grafar.map([psi0, a0, b0, k0, r0_1], (psi, a, b, k, r) => f_x_0_1(psi, a, b, k + r)),
		grafar.map([psi0, a0, b0, k0, r0_1], (psi, a, b, k, r) => f_y_0_1(psi, a, b, k + r)),
		grafar.map([psi0, a0, b0, c0, k0, r0_1], (psi, a, b, c, k, r) => 0)
	], color: color}, pan3d).hide(true);

function updateParamater0() {
	var a = rangeInput0_1.val;
	grafar.constant(a).into(a0);
	var b = rangeInput0_2.val;
	grafar.constant(b).into(b0);
	var c = rangeInput0_3.val;
	grafar.constant(c).into(c0);
	var k = rangeInput0_4.val;
	grafar.constant(k).into(k0);
}

// ================================================================== 1 ==============================================================


var x1 = grafar.range(-4, 4, 100).select();
var x1_ = grafar.range(-2, 4, 100).select();
var y1 = grafar.range(-4, 4, 100).select();
var z1 = grafar.range(-4, 4, 100).select();
var q1 = grafar.range(-2, 2, 2).select();
var x_1 = grafar.range(0, 1, 20).select();
var z_1 = grafar.range(0, 1, 20).select();
var t1 = grafar.range(-5, 5, 50).select();
var t2 = grafar.range(-5, 5, 50).select();


var graph_1_1 = grafar.pin({axes: [
		grafar.map([x1, y1, q1], (x, y) => x),
		grafar.map([x1, y1], (x, y) => y),
		grafar.map([x1, y1], (x, y)=> Math.pow(Math.abs(x), 3/2) + Math.pow(Math.abs(y), 3/2))
	], color: white}, pan3d).hide(true);

var graph_1_2 = grafar.pin({axes: [
		grafar.map([x1_, z1, q1], (x, z) => x),
		grafar.map([x1_, z1], (x, z) => 1-x),
		grafar.map([x1_, z1], (x, z) => z)
	], color: white}, pan3d).hide(true);

var graph_1_2_1 = grafar.pin({axes: [
		grafar.map([t1, t2,  q1], (t1, t2) => t1),
		grafar.map([t1, t2,  q1], (t1, t2) => t2),
		grafar.map([t1, t2,  q1], (t1, t2) => 0)
	], color: white}, pan3d).hide(true);
var graph_1_2_2 = grafar.pin({axes: [
		grafar.map([t1, t2,  q1], (t1, t2) => t1),
		grafar.map([t1, t2,  q1], (t1, t2) => 0),
		grafar.map([t1, t2,  q1], (t1, t2) => t2)
	], color: white}, pan3d).hide(true);
var graph_1_2_3 = grafar.pin({axes: [
		grafar.map([t1, t2,  q1], (t1, t2) => 0),
		grafar.map([t1, t2,  q1], (t1, t2) => t1),
		grafar.map([t1, t2,  q1], (t1, t2) => t2)
	], color: white}, pan3d).hide(true);

var graph_1_3 = grafar.pin({axes: [
		grafar.map([x_1, z_1], (x, z) => x),
		grafar.map([x_1, z_1], (x, z) => 0),
		grafar.map([x_1, z_1], (x, z) => z*Math.pow(x, 3/2))
	], color: color}, pan3d).hide(true);

var graph_1_4 = grafar.pin({axes: [
		grafar.map([x_1, z_1], (x, z) => 0),
		grafar.map([x_1, z_1], (x, z) => x),
		grafar.map([x_1, z_1], (x, z) => z*Math.pow(x, 3/2))
	], color: color}, pan3d).hide(true);

var graph_1_5 = grafar.pin({axes: [
		grafar.map([x_1, z_1], (x, z) => x),
		grafar.map([x_1, z_1], (x, z) => z*(1-x)),
		grafar.map([x_1, z_1], (x, z) => Math.pow(x, 3/2) + Math.pow(z*(1-x), 3/2))
	], color: color}, pan3d).hide(true);

var graph_1_6 = grafar.pin({axes: [
		grafar.map([x_1, z_1], (x, z) => x),
		grafar.map([x_1, z_1], (x, z) => 1-x),
		grafar.map([x_1, z_1], (x, z) => z*(Math.pow(x, 3/2) + Math.pow((1-x), 3/2)))
	], color: color}, pan3d).hide(true);

var graph_1_7 = grafar.pin({axes: [
		grafar.map([x_1, z_1], (x, z) => x),
		grafar.map([x_1, z_1], (x, z) => z*(1-x)),
		grafar.map([x_1, z_1], (x, z) => 0)
	], color: color}, pan3d).hide(true);

var checkbox1 = new Checkbox(true);
function showFigures1() {
	var value = checkbox1.val;
	if (value) {
		graph_1_1.hide(false);
		graph_1_2.hide(false);
		graph_1_2_1.hide(false);
		graph_1_2_2.hide(false);
		graph_1_2_3.hide(false);
	} else {
		graph_1_1.hide(true);
		graph_1_2.hide(true);
		graph_1_2_1.hide(true);
		graph_1_2_2.hide(true);
		graph_1_2_3.hide(true);
	}
}
checkbox1.addEventListener('change', showFigures1);


// ================================================================== 2 ==============================================================


var x2 = grafar.range(-4, 4, 100).select();
var y2 = grafar.range(-4, 4, 100).select();
var z2 = grafar.range(-4, 4, 100).select();
// var z1 = grafar.range(-3, 3, 20).select();
var q1 = grafar.range(-2, 2, 2).select();

var graph_2_1 = grafar.pin({axes: [
		grafar.map([x2, y2, q1], (x, y) => x),
		grafar.map([x2, y2, q1], (x, y) => y),
		grafar.map([x2, y2, q1], (x, y)=> x*y)
	], color: white}, pan3d).hide(true);

var graph_2_1_1 = grafar.pin({axes: [
		grafar.map([x2, y2, q1], (x, y) => x),
		grafar.map([x2, y2, q1], (x, y) => y),
		grafar.map([x2, y2, q1], (x, y)=> 0)
	], color: white}, pan3d).hide(true);

var graph_2_2 = grafar.pin({axes: [
		grafar.map([x2, z2, q1], (x, z) => x),
		grafar.map([x2, z2, q1], (x, z) => x*x),
		grafar.map([x2, z2, q1], (x, z) => z)
	], color: white}, pan3d).hide(true);

var graph_2_5 = grafar.pin({axes: [
		grafar.map([x2, z2, q1], (x, z) => x*x/2),
		grafar.map([x2, z2, q1], (x, z) => x),
		grafar.map([x2, z2, q1], (x, z) => z)
	], color: white}, pan3d).hide(true);

var x_2 = grafar.range(0, 1, 20).select();
var z_2 = grafar.range(0, 1, 20).select();
var c2 = grafar.range(0, 1, 20).select();

function fx_4(x) {
	return  x*Math.pow(2, 1/3);
}
var graph_2_6 = grafar.pin({axes: [
		grafar.map([x_2, c2], (x, c) => fx_4(x)),
		grafar.map([x_2, c2], (x, c) => fx_4(x)*fx_4(x)+c*(Math.sqrt(2*fx_4(x))-fx_4(x)*fx_4(x))),
		grafar.map([x_2, c2], (x, c) => 0)
	], color: color}, pan3d).hide(true);

var graph_2_7 = grafar.pin({axes: [
		grafar.map([x_2, c2], (x, c) => fx_4(x)),
		grafar.map([x_2, c2], (x, c) => fx_4(x)*fx_4(x)),
		grafar.map([x_2, c2], (x, c) => c*fx_4(x)*fx_4(x)*fx_4(x))
	], color: color}, pan3d).hide(true);

var graph_2_8 = grafar.pin({axes: [
		grafar.map([x_2, c2], (x, c) => fx_4(x)),
		grafar.map([x_2, c2], (x, c) => Math.sqrt(2*fx_4(x))),
		grafar.map([x_2, c2], (x, c) => c*Math.sqrt(2*fx_4(x))*fx_4(x))
	], color: color}, pan3d).hide(true);

var graph_2_9 = grafar.pin({axes: [
		grafar.map([x_2, c2], (x, c) => fx_4(x)),
		grafar.map([x_2, c2], (x, c) => fx_4(x)*fx_4(x)+c*(Math.sqrt(2*fx_4(x))-fx_4(x)*fx_4(x))),
		grafar.map([x_2, c2], (x, c) => (fx_4(x)*fx_4(x)+c*(Math.sqrt(2*fx_4(x))-fx_4(x)*fx_4(x)))*fx_4(x))
	], color: color}, pan3d).hide(true);


var checkbox2 = new Checkbox(true);
function showFigures2() {
	var value = checkbox2.val;
	if (value) {
		graph_2_1.hide(false);
		graph_2_2.hide(false);
		graph_2_5.hide(false);
		graph_2_1_1.hide(false);
	} else {
		graph_2_1.hide(true);
		graph_2_2.hide(true);
		graph_2_5.hide(true);
		graph_2_1_1.hide(true);
	}
}
checkbox2.addEventListener('change', showFigures2);


// ================================================================== 3 ==============================================================



var x3 = grafar.range(-4, 4, 100).select();
var x3_1 = grafar.range(-6, -0.01, 50).select();
var x3_2 = grafar.range(0.01, 6, 50).select();
var y3 = grafar.range(-4, 4, 100).select();
var z3 = grafar.range(-8, 8, 100).select();

var q1 = grafar.range(-2, 2, 2).select();
var a3 = grafar.constant(1).select();

var graph_3_1 = grafar.pin({axes: [
		grafar.map([x3, y3, q1], (x, y) => x),
		grafar.map([x3, y3, q1], (x, y) => y),
		grafar.map([x3, y3, q1], (x, y) => x*x + y*y)
	], color: white}, pan3d).hide(true);
var graph_3_1_1 = grafar.pin({axes: [
		grafar.map([x3, y3, q1], (x, y) => x),
		grafar.map([x3, y3, q1], (x, y) => y),
		grafar.map([x3, y3, q1], (x, y) => 0)
	], color: white}, pan3d).hide(true);

var graph_3_2_1 = grafar.pin({axes: [
		grafar.map([x3_1, z3, q1, a3], (x, z, a) => x),
		grafar.map([x3_1, z3, q1, a3], (x, z, q, a) => a*a/x),
		grafar.map([x3_1, z3, q1, a3], (x, z, q, a) => a*a*z)
	], color: white}, pan3d).hide(true);

var graph_3_2_2 = grafar.pin({axes: [
		grafar.map([x3_2, z3, q1, a3], (x, z, a) => x),
		grafar.map([x3_2, z3, q1, a3], (x, z, q, a) => a*a/x),
		grafar.map([x3_2, z3, q1, a3], (x, z, q, a) => a*a*z)
	], color: white}, pan3d).hide(true);

var graph_3_3_1 = grafar.pin({axes: [
		grafar.map([x3_1, z3, q1, a3], (x, z, a) => x),
		grafar.map([x3_1, z3, q1, a3], (x, z, q, a) => 2*a*a/x),
		grafar.map([x3_1, z3, q1, a3], (x, z, q, a) => a*a*z)
	], color: white}, pan3d).hide(true);

var graph_3_3_2 = grafar.pin({axes: [
		grafar.map([x3_2, z3, q1, a3], (x, z, a) => x),
		grafar.map([x3_2, z3, q1, a3], (x, z, q, a) => 2*a*a/x),
		grafar.map([x3_2, z3, q1, a3], (x, z, q, a) => a*a*z)
	], color: white}, pan3d).hide(true);

var graph_3_4 = grafar.pin({axes: [
		grafar.map([x3, z3, a3, q1], (x, y, a) => a*x),
		grafar.map([x3, z3, a3, q1], (x, y, a) => a*x/2),
		grafar.map([x3, z3, a3, q1], (x, y, a) => a*y)
	], color: white}, pan3d).hide(true);

var graph_3_5 = grafar.pin({axes: [
		grafar.map([x3, z3, a3, q1], (x, y, a) => a*x),
		grafar.map([x3, z3, a3, q1], (x, y, a) => a*x*2),
		grafar.map([x3, z3, a3, q1], (x, y, a) => a*y)
	], color: white}, pan3d).hide(true);

var x3_ = grafar.range(0, 1, 20).select();
var y3_ = grafar.range(0, 1, 20).select();
var z3 = grafar.range(-8, 8, 100).select();

function fx_3(x, a) {
	return a/Math.sqrt(2) + x*(2*a - a/Math.sqrt(2));
}
function fy_3(x, y, a) {
	return Math.max(a*a/fx_3(x, a), fx_3(x, a)/2) + y*(Math.min(2*fx_3(x, a), 2*a*a/fx_3(x, a)) -  Math.max(a*a/fx_3(x, a), fx_3(x, a)/2));
}
var graph_3_6 = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => fx_3(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3(x, y, a)),
		grafar.map([x3_, y3_], (x, y) => 0)
	], color: color}, pan3d).hide(true);

var graph_3_7 = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => fx_3(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3(x, y, a)*fy_3(x, y, a)+fx_3(x, a) * fx_3(x, a) )
	], color: color}, pan3d).hide(true);
var graph_3_6_ = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => -fx_3(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => -fy_3(x, y, a)),
		grafar.map([x3_, y3_], (x, y) => 0)
	], color: color}, pan3d).hide(true);

var graph_3_7_ = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => -fx_3(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => -fy_3(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3(x, y, a)*fy_3(x, y, a)+fx_3(x, a) * fx_3(x, a) )
	], color: color}, pan3d).hide(true);


function fx_3_(x, a) {
	return a/Math.sqrt(2) + x*(Math.sqrt(2)*a - a/Math.sqrt(2));
}
function fy_3_(x, y, a) {
	return a * a / fx_3_(x, a);
}
var graph_3_8 = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => fx_3_(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3_(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_(x, y, a)*fy_3_(x, y, a)+fx_3_(x, a) * fx_3_(x, a)) )
	], color: color}, pan3d).hide(true);
var graph_3_8_ = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => -fx_3_(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => -fy_3_(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_(x, y, a)*fy_3_(x, y, a)+fx_3_(x, a) * fx_3_(x, a)) )
	], color: color}, pan3d).hide(true);
function fx_3_1(x, a) {
	return a + x*(a);
}
function fy_3_1(x, y, a) {
	return 2* a * a / fx_3_1(x, a);
}
var graph_3_9 = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => fx_3_1(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3_1(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_1(x, y, a)*fy_3_1(x, y, a)+fx_3_1(x, a) * fx_3_1(x, a)) )
	], color: color}, pan3d).hide(true);
var graph_3_9_ = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => -fx_3_1(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => -fy_3_1(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_1(x, y, a)*fy_3_1(x, y, a)+fx_3_1(x, a) * fx_3_1(x, a)) )
	], color: color}, pan3d).hide(true);
function fx_3_2(x, a) {
	return Math.sqrt(2)*a + x*(2*a-Math.sqrt(2)*a);
}
function fy_3_2(x, y, a) {
	return fx_3_2(x, a)/2;
}
var graph_3_10 = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => fx_3_2(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3_2(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_2(x, y, a)*fy_3_2(x, y, a)+fx_3_2(x, a) * fx_3_2(x, a)) )
	], color: color}, pan3d).hide(true);
var graph_3_10_ = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => -fx_3_2(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => -fy_3_2(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_2(x, y, a)*fy_3_2(x, y, a)+fx_3_2(x, a) * fx_3_2(x, a)) )
	], color: color}, pan3d).hide(true);
function fx_3_3(x, a) {
	return a/Math.sqrt(2) + x*(a-a/Math.sqrt(2) );
}
function fy_3_3(x, y, a) {
	return fx_3_3(x, a)*2;
}
var graph_3_11 = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => fx_3_3(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => fy_3_3(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_3(x, y, a)*fy_3_3(x, y, a)+fx_3_3(x, a) * fx_3_3(x, a)) )
	], color: color}, pan3d).hide(true);
var graph_3_11_ = grafar.pin({axes: [
		grafar.map([x3_, y3_, a3], (x, y, a) => -fx_3_3(x, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => -fy_3_3(x, y, a)),
		grafar.map([x3_, y3_, a3], (x, y, a) => y*(fy_3_3(x, y, a)*fy_3_3(x, y, a)+fx_3_3(x, a) * fx_3_3(x, a)) )
	], color: color}, pan3d).hide(true);


var checkbox3 = new Checkbox(true);
function showFigures3() {
	var value = checkbox3.val;
	if (value) {
		graph_3_1.hide(false);
		graph_3_4.hide(false);
		graph_3_3_1.hide(false);
		graph_3_2_1.hide(false);
		graph_3_3_2.hide(false);
		graph_3_2_2.hide(false);
		graph_3_5.hide(false);
		graph_3_1_1.hide(false);
	} else {
		graph_3_1.hide(true);
		graph_3_4.hide(true);
		graph_3_3_1.hide(true);
		graph_3_2_1.hide(true);
		graph_3_3_2.hide(true);
		graph_3_2_2.hide(true);
		graph_3_5.hide(true);
		graph_3_1_1.hide(true);
	}
}
checkbox3.addEventListener('change', showFigures3);
function updateParamater3() {
	var value = rangeInput3.val;
	grafar.constant(value).into(a3);
}
var rangeInput3 = new RangeInput(1, updateParamater3,0, 3, 0.0001, "a");


// ================================================================== 4 ==============================================================



var phi4 = grafar.range(0, Math.PI, 60).select();
var psi4 = grafar.range(0, 2*Math.PI, 60).select();
var r4 = grafar.range(0, 5, 60).select();
var a4 = grafar.constant(1.5).select();
var b4 = grafar.constant(0.5).select();
var c4 = grafar.constant(2).select();

function f_x_4(phi, psi, a, b, c) {
	return a * Math.sin(phi) * Math.cos(psi);
}
function f_y_4(phi, psi, a, b, c) {
	return b * Math.sin(phi) * Math.sin(psi);
}
function f_z_4(phi, psi, a, b, c) {
	return c * Math.cos(phi);
}

function f_x_4_1(psi, a, b, c, r) {
	return r * a * Math.cos(psi);
}
function f_y_4_1(psi, a, b, c, r) {
	return r * b * Math.sin(psi);
}
var phi4_1 = grafar.range(0, Math.acos(1/Math.sqrt(2)), 40).select();
var r4_1 = grafar.range(0, 1/Math.sqrt(2), 40).select();

var graph_4_1 = grafar.pin({axes: [
		grafar.map([phi4, psi4, a4, b4, c4, q1], (phi, psi, a, b, c) => f_x_4(phi, psi, a, b, c)),
		grafar.map([phi4, psi4, a4, b4, c4], (phi, psi, a, b, c) => f_y_4(phi, psi, a, b, c)),
		grafar.map([phi4, psi4, a4, b4, c4], (phi, psi, a, b, c) => f_z_4(phi, psi, a, b, c))
	], color: white}, pan3d).hide(true);

var graph_4_2 = grafar.pin({axes: [
		grafar.map([psi4, a4, b4, c4, r4, q1], (psi, a, b, c, r) => f_x_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4], (psi, a, b, c, r) => f_y_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4], (psi, a, b, c, r) => r*c)
	], color: white}, pan3d).hide(true);

var graph_4_2_1 = grafar.pin({axes: [
		grafar.map([psi4, a4, b4, c4, r4, q1], (psi, a, b, c, r) => f_x_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4], (psi, a, b, c, r) => f_y_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4], (psi, a, b, c, r) => -r*c)
	], color: white}, pan3d).hide(true);

var graph_4_3 = grafar.pin({axes: [
		grafar.map([phi4_1, psi4, a4, b4, c4], (phi, psi, a, b, c) => f_x_4(phi, psi, a, b, c)),
		grafar.map([phi4_1, psi4, a4, b4, c4], (phi, psi, a, b, c) => f_y_4(phi, psi, a, b, c)),
		grafar.map([phi4_1, psi4, a4, b4, c4], (phi, psi, a, b, c) => f_z_4(phi, psi, a, b, c))
	], color: color}, pan3d).hide(true);

var graph_4_4 = grafar.pin({axes: [
		grafar.map([psi4, a4, b4, c4, r4_1], (psi, a, b, c, r) => f_x_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4_1], (psi, a, b, c, r) => f_y_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4_1], (psi, a, b, c, r) => r*c)
	], color: color}, pan3d).hide(true);

var graph_4_5 = grafar.pin({axes: [
		grafar.map([phi4_1, psi4, a4, b4, c4], (phi, psi, a, b, c) => f_x_4(phi, psi, a, b, c)),
		grafar.map([phi4_1, psi4, a4, b4, c4], (phi, psi, a, b, c) => f_y_4(phi, psi, a, b, c)),
		grafar.map([phi4_1, psi4, a4, b4, c4], (phi, psi, a, b, c) => - f_z_4(phi, psi, a, b, c))
	], color: color}, pan3d).hide(true);

var graph_4_6 = grafar.pin({axes: [
		grafar.map([psi4, a4, b4, c4, r4_1], (psi, a, b, c, r) => f_x_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4_1], (psi, a, b, c, r) => f_y_4_1(psi, a, b, c, r)),
		grafar.map([psi4, a4, b4, c4, r4_1], (psi, a, b, c, r) => - r*c)
	], color: color}, pan3d).hide(true);

var checkbox4 = new Checkbox(true);
function showFigures4() {
	var value = checkbox4.val;
	if (value) {
		// graph_4_0.hide(false);
		graph_4_1.hide(false);
		graph_4_2.hide(false);
		graph_4_2_1.hide(false);
	} else {
		// graph_4_0.hide(true);
		graph_4_1.hide(true);
		graph_4_2.hide(true);
		graph_4_2_1.hide(true);
	}
}
checkbox4.addEventListener('change', showFigures4);
function updateParamater4() {
	var a = rangeInput4_1.val;
	grafar.constant(a).into(a4);
	var b = rangeInput4_2.val;
	grafar.constant(b).into(b4);
	var c = rangeInput4_3.val;
	grafar.constant(c).into(c4);
}
var rangeInput4_1 = new RangeInput(1.5, updateParamater4,0, 3, 0.0001, "a");
var rangeInput4_2 = new RangeInput(0.5, updateParamater4,0, 3, 0.0001, "b");
var rangeInput4_3 = new RangeInput(2, updateParamater4,0, 3, 0.0001, "c");
