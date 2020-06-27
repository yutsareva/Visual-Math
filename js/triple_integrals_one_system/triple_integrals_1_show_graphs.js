
current_index = 1;

var graphs = [
	{id: '0', graph: [graph_0_1, graph_0_2], rangeInput: rangeInput0_1, rangeInput_2: rangeInput0_2, rangeInput_3: rangeInput0_3, rangeInput_4: rangeInput0_4, update_parameters: updateParamater0},
	{id: '1', graph: [graph_1_1, graph_1_2, graph_1_3, graph_1_4, graph_1_5, graph_1_6, graph_1_7, graph_1_2_1, graph_1_2_2, graph_1_2_3], checkbox: checkbox1, show_figures: showFigures1},
	{id: '2', graph: [graph_2_1, graph_2_2, graph_2_5, graph_2_6, graph_2_7, graph_2_8, graph_2_9, graph_2_1_1], checkbox: checkbox2, show_figures: showFigures2},
	{id: '3', graph: [graph_3_1_1, graph_3_1, graph_3_2_1, graph_3_2_2, graph_3_3_1, graph_3_3_2, graph_3_4, graph_3_5, graph_3_6, graph_3_6_, graph_3_7, graph_3_7_,
			graph_3_8, graph_3_8_,	graph_3_9, graph_3_9_, graph_3_10, graph_3_10_, graph_3_11, graph_3_11_], checkbox: checkbox3, rangeInput: rangeInput3, show_figures: showFigures3, update_parameters: updateParamater3},
	{id: '4', graph: [graph_4_2_1, graph_4_1, graph_4_2, graph_4_3, graph_4_4, graph_4_5, graph_4_6], checkbox: checkbox4, rangeInput: rangeInput4_1, rangeInput_2: rangeInput4_2, rangeInput_3: rangeInput4_3, show_figures: showFigures4, update_parameters: updateParamater4}
];


var checkbox_demonstrate_1 = new Checkbox(false);
function animate_1() {
	var value = checkbox_demonstrate_1.val;
	if (value) {
		var f = pan3d.camera.position;
		f1 = f.x;
		f2 = f.y;
		f3 = f.z;
		len = Math.sqrt(f1 * f1 + f3 * f3);
		t2 = Math.atan2(f1, f3);
		t2 += 0.015;
		f3 = len * Math.cos(t2);
		f1 = len * Math.sin(t2);
		pan3d.camera.position.set(f1, f2, f3);
		if (t2 > Math.PI * 2)
			t2 -= Math.PI * 2;
	}
	window.requestAnimationFrame(animate_1)
}
animate_1();
hideAllBut = function(container, visible) {
	var children = container.children;
	for (var i = 0; i < children.length; i++)
		children[i].style.display = 'none';
	visible.style.display = 'block';
};
function removeElement(id) {
	var elem = document.getElementById(id);
	return elem.parentNode.removeChild(elem);
}
var show_confines_checkbox;
var show_figures;
var pr_id = '1';
function updateProblem(index) {
	pr_id  = index;
	var container = document.getElementById('params');
	var container_2 = document.getElementById('params_2');
	var container_3 = document.getElementById('params_3');
	var container_4 = document.getElementById('params_4');
	while (container.hasChildNodes()) {
		container.removeChild(container.childNodes[0]);
	}
	while (container_2.hasChildNodes()) {
		container_2.removeChild(container_2.childNodes[0]);
	}
	while (container_3.hasChildNodes()) {
		container_3.removeChild(container_3.childNodes[0]);
	}
	while (container_4.hasChildNodes()) {
		container_4.removeChild(container_4.childNodes[0]);
	}
	for (var i = 0; i < graphs.length; i++) {
		if (graphs[i].id === pr_id) {
			document.getElementById('graphs').classList.add('visualFlex');
			document.getElementById('graphs').classList.remove('visual');
			for (var j = 0; j < graphs[i].graph.length; j++)
				graphs[i].graph[j].hide(false);
			if (graphs[i].hasOwnProperty('rangeInput')) {
				container.appendChild(graphs[i].rangeInput);
				container.style.display = '';
				document.getElementById('no_params').style.display = 'none';
			} else {
				container.style.display = 'none';
				document.getElementById('no_params').style.display = '';
			}
			if (graphs[i].hasOwnProperty('rangeInput_2')) {
				container_2.style.display = '';
				container_2.appendChild(graphs[i].rangeInput_2);
				document.getElementById('no_params').style.display = 'none';
			} else {
				container_2.style.display = 'none';
			}
			if (graphs[i].hasOwnProperty('rangeInput_3')) {
				container_3.style.display = '';
				container_3.appendChild(graphs[i].rangeInput_3);
				document.getElementById('no_params').style.display = 'none';
			} else {
				container_3.style.display = 'none';
			}
			if (graphs[i].hasOwnProperty('rangeInput_4')) {
				container_4.style.display = '';
				container_4.appendChild(graphs[i].rangeInput_4);
				document.getElementById('no_params').style.display = 'none';
			} else {
				container_4.style.display = 'none';
			}
			show_confines_checkbox = null;
			if (graphs[i].hasOwnProperty('checkbox')) {
				show_confines_checkbox = graphs[i].checkbox;
				show_confines_checkbox.checked = false;
			}
			show_figures = null;
			if (graphs[i].hasOwnProperty('show_figures')) {
				show_figures = graphs[i].show_figures;
				show_figures();
			}
			if (graphs[i].hasOwnProperty('update_parameters')) {
				graphs[i].update_parameters()
			}
		} else {
			for (var j = 0; j < graphs[i].graph.length; j++)
				graphs[i].graph[j].hide(true);
		}
	}
	updateConfinesButton();
	updatePlayButton();
	updateSolutionButton();
	hideAllBut(
		document.getElementById('solution'),
		document.getElementById('solution-' + pr_id));
}
updateProblem('0');

