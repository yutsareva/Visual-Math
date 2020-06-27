current_index = 1;

var graphs = [{id: '1', graph: [graph_1]},
    {id: '2', graph: [graph_2], rangeInput: rangeInput2, update_parameters: updateParamater2},
    {id: '3', graph: [graph_3], rangeInput: rangeInput3, update_parameters: updateParamater3},
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
hideAllBut = function (container, visible) {
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
    pr_id = index;
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

updateProblem('1');

