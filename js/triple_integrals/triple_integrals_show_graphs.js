current_index = 0;
var graphs = [
    {
        id: '0',
        graph: [graph_0_1, graph_0_2, graph_0_3, graph_0_4, graph_0_5, graph_0_6, graph_0_7, graph_0_8, graph_0_9,
            graph_0_10, graph_0_11, graph_0_12, graph_0_13, graph_0_14, graph_0_15, graph_0_16,
            graph_0_2_1, graph_0_2_2, graph_0_2_3, graph_0_2_4, graph_0_2_5, graph_0_2_6, graph_0_2_7, graph_0_2_8,
            graph_0_2_9, graph_0_2_10, graph_0_2_11, graph_0_2_12, graph_0_2_13],
        show_figures: showFigures0,
        checkbox: checkbox0,
        spherical: false,
        camera_3d_2: [3.5, 3.5, -6],
        pan3d_2: 0.2,
        camera_3d: [-9, 3, -1.5],
        pan3d: 0.5
    },
    {
        id: '1', graph: [graph_1_1_, graph_1_2_], rangeInput: rangeInput1,
        camera_3d_2: [-4, 5, -12], pan3d_2: 0.5
    },
    {
        id: '2',
        graph: [graph_2_1, graph_2_2, graph_2_3, graph_2_4, graph_2_5, graph_2_6, graph_2_7, graph_2_8, graph_2_9, graph_2_10, graph_2_11],
        show_figures: showFigures2,
        checkbox: checkbox2,
        spherical: false,
        camera_3d_2: [-17, 5, 7],
        pan3d_2: 0.2,
        camera_3d: [-17, 5, 7],
        pan3d: 0.2,
        graph_cut_x: {
            graph: [graph_2_10_cut, graph_2_1_cut_left, graph_2_2_cut_left, graph_2_3_cut_left],
            rangeInput: rangeInput2_cut_x,
            update_parameter: updateParamater2_cut_x,
            pan2d_1: 0.2,
            camera2d_1: [0, 16, 0],
            name: "x"
        },
        graph_cut_y: {
            graph: [graph_2_10_cut_y, graph_2_1_cut_left_y, graph_2_2_cut_left_y, graph_2_3_cut_left_y],
            rangeInput: rangeInput2_cut_y,
            update_parameter: updateParamater2_cut_y,
            pan2d_1: 0.2,
            camera2d_1: [0, 16, 0],
            name: "y"
        },
        graph_cut_z: {
            graph: [graph_2_10_cut_z, graph_2_10_cut_left_z],
            rangeInput: rangeInput2_cut_z,
            update_parameter: updateParamater2_cut_z,
            name: "z"
        },
        graph_cut_r: {
            graph: [graph_2_10_cut_r, graph_2_10_right_cut_r],
            rangeInput: rangeInput2_cut_r,
            update_parameter: updateParamater2_cut_r,
            pan2d_2: 0.2,
            camera2d_2: [0, 30, 0],
            name: "r"
        },
        graph_cut_phi: {
            graph: [graph_2_10_cut_phi, graph_2_10_right_cut_phi, graph_2_10_cut_phi_right, graph_2_11_cut_phi_right],
            rangeInput: rangeInput2_cut_phi,
            update_parameter: updateParamater2_cut_phi,
            pan2d_2: 0.2,
            camera2d_2: [0, 16, 0],
            name: "φ"
        },
        graph_cut_psi: {
            graph: [graph_2_10_cut_z_right, graph_2_10_right_cut_z],
            rangeInput: rangeInput2_cut_z_right,
            update_parameter: updateParamater2_cut_z_right,
            pan2d_2: 0.2,
            camera2d_2: [0, 16, 0],
            name: "z"
        },
    },
    {
        id: '3',
        graph: [graph_3_1, graph_3_2, graph_3_3, graph_3_4, graph_3_5, graph_3_6, graph_3_7, graph_3_8, graph_3_9],
        show_figures: showFigures3,
        rangeInput: rangeInput3,
        checkbox: checkbox3,
        update_parameters: updateParamater3,
        spherical: false,
        camera_3d_2: [-7.5, 2.5, 4],
        pan3d_2: 0.3,
        camera_3d: [-7.5, 2.5, 4],
        pan3d: 0.3,
        graph_cut_x: {
            graph: [graph_3_3d_cut_x, graph_3_2d_cut_x, graph_3_3d_cut_x_limit_1, graph_3_3d_cut_x_limit_2, graph_3_3d_cut_x_limit_3],
            rangeInput: rangeInput3_cut_x,
            update_parameter: updateParamater3_cut_x,
            name: "x"
        },
        graph_cut_y: {
            graph: [graph_3_3d_cut_y, graph_3_2d_cut_y, graph_3_3d_cut_y_limit_1, graph_3_3d_cut_y_limit_2, graph_3_3d_cut_y_limit_3],
            rangeInput: rangeInput3_cut_y,
            update_parameter: updateParamater3_cut_y,
            name: "y"
        },
        graph_cut_z: {
            graph: [graph_3_3d_cut_z, graph_3_2d_cut_z],
            rangeInput: rangeInput3_cut_z,
            update_parameter: updateParamater3_cut_z,
            name: "z"
        },
        graph_cut_phi: {
            graph: [graph_3_3d_cut_phi, graph_3_2d_cut_phi],
            rangeInput: rangeInput3_cut_phi,
            update_parameter: updateParamater3_cut_phi,
            name: "φ"
        },
        graph_cut_r: {
            graph: [graph_3_3d_cut_r, graph_3_2d_cut_r],
            rangeInput: rangeInput3_cut_r,
            update_parameter: updateParamater3_cut_r,
            name: "r"
        },
        graph_cut_psi: {
            graph: [graph_3_3d_cut_y_, graph_3_2d_cut_y_],
            rangeInput: rangeInput3_cut_y_,
            update_parameter: updateParamater3_cut_y_,
            name: "y"
        },
    },
    {
        id: '4',
        graph: [graph_4_1, graph_4_2, graph_4_3, graph_4_4, graph_4_5, graph_4_6, graph_4_7, graph_4_8, graph_4_9, graph_4_10, graph_4_11],
        show_figures: showFigures4,
        rangeInput: rangeInput4,
        rangeInput_2: rangeInput4_1,
        checkbox: checkbox4,
        spherical: false,
        camera_3d_2: [-7.5, 2.5, 4],
        pan3d_2: 0.3,
        camera_3d: [-7.5, 2.5, 4],
        pan3d: 0.3,
        graph_cut_x: {
            graph: [graph_4_2d_cut_x_limit_1, graph_4_2d_cut_x_limit_2, graph_4_2d_cut_x_limit_3, graph_4_2d_cut_x_limit_4, graph_4_3d_cut_x, graph_4_3d_cut_x_2, graph_4_2d_cut_x, graph_4_2d_cut_x_2],
            rangeInput: rangeInput4_cut_x,
            update_parameter: updateParamater4_cut_x,
            name: "x"
        },
        graph_cut_y: {
            graph: [graph_4_2d_cut_y_limit_1, graph_4_2d_cut_y_limit_2, graph_4_2d_cut_y_limit_3, graph_4_2d_cut_y_limit_4, graph_4_3d_cut_y_, graph_4_3d_cut_y_2_, graph_4_2d_cut_y_, graph_4_2d_cut_y_2_],
            rangeInput: rangeInput4_cut_y_,
            update_parameter: updateParamater4_cut_y_,
            name: "y"
        },
        graph_cut_z: {
            graph: [graph_4_3d_cut_z_0, graph_4_3d_cut_z_1, graph_4_3d_cut_z_2, graph_4_3d_cut_z_3, graph_4_2d_cut_z_0, graph_4_2d_cut_z_1, graph_4_2d_cut_z_2, graph_4_2d_cut_z_3],
            rangeInput: rangeInput4_cut_z,
            update_parameter: updateParamater4_cut_z,
            name: "z"
        },
        graph_cut_phi: {
            graph: [graph_4_3d_cut_phi, graph_4_2d_cut_phi],
            rangeInput: rangeInput4_cut_phi,
            update_parameter: updateParamater4_cut_phi,
            name: "φ"
        },
        graph_cut_psi: {
            graph: [graph_4_3d_cut_r, graph_4_2d_cut_r],
            rangeInput: rangeInput4_cut_r,
            update_parameter: updateParamater4_cut_r,
            name: "r"
        },
        graph_cut_r: {
            graph: [graph_4_3d_cut_y, graph_4_2d_cut_y],
            rangeInput: rangeInput4_cut_y,
            update_parameter: updateParamater4_cut_y,
            name: "z"
        },
    },
    {
        id: '5', graph: [graph_5_1, graph_5_2, graph_5_3, graph_5_4, graph_5_5],
        rangeInput: rangeInput5, spherical: true, camera_3d_2: [-5, 5, -7], pan3d_2: 0.3, camera_3d: [3.5, 0.5, 2.3],
        graph_cut_x: {
            graph: [graph_5_cut_x, graph_5_left_cut_x],
            rangeInput: rangeInput5_cut_x,
            update_parameter: updateParamater5_cut_x,
            name: "x"
        },
        graph_cut_y: {
            graph: [graph_5_left_cut_y_1, graph_5_left_cut_y_2, graph_5_cut_y_1, graph_5_cut_y_2],
            rangeInput: rangeInput5_cut_y,
            update_parameter: updateParamater5_cut_y,
            name: "y"
        },
        graph_cut_z: {
            graph: [graph_5_left_cut_z_1, graph_5_left_cut_z_2, graph_5_cut_z_1, graph_5_cut_z_2],
            rangeInput: rangeInput5_cut_z,
            update_parameter: updateParamater5_cut_z,
            name: "z"
        },
        graph_cut_phi: {
            graph: [graph_5_cut_theta_1, graph_5_2d_cut_theta_1],
            rangeInput: rangeInput5_cut_theta,
            update_parameter: updateParamater5_cut_theta,
            name: "θ"
        },
        graph_cut_r: {
            graph: [graph_5_3d_cut_r_1_0, graph_5_3d_cut_r_1_1, graph_5_3d_cut_r_1_2, graph_5_3d_cut_r_1_3, graph_5_2d_cut_r_1_0, graph_5_2d_cut_r_1_1, graph_5_2d_cut_r_1_2, graph_5_2d_cut_r_1_3],
            rangeInput: rangeInput5_cut_r,
            update_parameter: updateParamater5_cut_r,
            name: "r"
        },
        graph_cut_psi: {
            graph: [graph_5_3d_cut_phi_1, graph_5_2d_cut_phi_1],
            rangeInput: rangeInput5_cut_phi,
            update_parameter: updateParamater5_cut_phi,
            name: "φ"
        },
    },
    {
        id: '6',
        graph: [graph_6_0, graph_6_1, graph_6_2, graph_6_3, graph_6_4, graph_6_6, graph_6_7, graph_6_8, graph_6_9, graph_6_10, graph_6_10_1, graph_6_11, graph_6_12,
            graph_6_13, graph_6_14, graph_6_15, graph_6_16, graph_6_17, graph_6_18, graph_6_19, graph_6_20],
        rangeInput: rangeInput6_1,
        show_figures: showFigures6,
        checkbox: checkbox6,
        spherical: false,
        camera_3d_2: [-7.5, 2.5, 4],
        pan3d_2: 0.3,
        camera_3d: [-7.5, 2.5, 4],
        pan3d: 0.3,
        graph_cut_x: {
            graph: [graph_6_2d_cut_limit_1, graph_6_2d_cut_limit_2, graph_6_2d_cut_limit_3, graph_6_2d_cut_limit_4, graph_6_2d_cut_limit_5, graph_6_2d_cut_limit_6, graph_6_2d_cut_limit_7, graph_6_3d_cut_x, graph_6_2d_cut_x],
            rangeInput: rangeInput6_cut_x,
            update_parameter: updateParamater6_cut_x,
            name: "x"
        },
        graph_cut_y: {
            graph: [graph_6_2d_cut_y_limit_1, graph_6_2d_cut_y_limit_2, graph_6_2d_cut_y_limit_3, graph_6_2d_cut_y_limit_4, graph_6_2d_cut_y_limit_5, graph_6_2d_cut_y_limit_6, graph_6_2d_cut_y_limit_7, graph_6_3d_cut_y, graph_6_2d_cut_y],
            rangeInput: rangeInput6_cut_y,
            update_parameter: updateParamater6_cut_y,
            name: "y"
        },
        graph_cut_z: {
            graph: [graph_6_2d_cut_z_limit_1, graph_6_2d_cut_z_limit_2, graph_6_2d_cut_z_limit_3, graph_6_2d_cut_z_limit_4, graph_6_3d_cut_z_0, graph_6_3d_cut_z_1, graph_6_2d_cut_z_0, graph_6_2d_cut_z_1],
            rangeInput: rangeInput6_cut_z,
            update_parameter: updateParamater6_cut_z,
            name: "z"
        },
        graph_cut_phi: {
            graph: [graph_6_3d_cut_p, graph_6_2d_cut_p],
            rangeInput: rangeInput6_cut_p,
            update_parameter: updateParamater6_cut_p,
            name: "φ"
        },
        graph_cut_r: {
            graph: [graph_6_2d_cut_z_2, graph_6_3d_cut_z_2],
            rangeInput: rangeInput6_cut_z_2,
            update_parameter: updateParamater6_cut_z_2,
            name: "z"
        },
        graph_cut_psi: {
            graph: [graph_6_3d_cut_r, graph_6_2d_cut_r],
            rangeInput: rangeInput6_cut_r,
            update_parameter: updateParamater6_cut_r,
            name: "r"
        },
    },
    {
        id: '7',
        graph: [graph_7_0, graph_7_1, graph_7_2, graph_7_3, graph_7_4, graph_7_5, graph_7_6, graph_7_7,
            graph_7_8, graph_7_9, graph_7_10, graph_7_11, graph_7_12, graph_7_13, graph_7_3d_cut_third_1, graph_7_3d_cut_third_2, graph_7_3d_cut_third_3, graph_7_3d_cut_third_4, graph_7_3d_cut_third_5],
        rangeInput: rangeInput7,
        show_figures: showFigures7,
        checkbox: checkbox7,
        spherical: true,
        update_parameters: updateParamater7,
        three_systems: true,
        graph_cut_x: {
            graph: [graph_7_3d_cut_x, graph_7_2d_cut_x_0, graph_7_2d_cut_x_1, graph_7_2d_cut_x_2, graph_7_2d_cut_x_3],
            rangeInput: rangeInput7_cut_x,
            update_parameter: updateParamater7_cut_x,
            name: "x"
        },
        graph_cut_y: {
            graph: [graph_7_3d_cut_y, graph_7_2d_cut_y_0, graph_7_2d_cut_y_1, graph_7_2d_cut_y_2, graph_7_2d_cut_y_3],
            rangeInput: rangeInput7_cut_y,
            update_parameter: updateParamater7_cut_y,
            name: "y"
        },
        graph_cut_z: {
            graph: [graph_7_3d_cut_z, graph_7_2d_cut_z_0, graph_7_2d_cut_z_1, graph_7_2d_cut_z_2, graph_7_2d_cut_z_3],
            rangeInput: rangeInput7_cut_z,
            update_parameter: updateParamater7_cut_z,
            name: "z"
        },
        graph_cut_psi: {
            graph: [graph_7_3d_cut_theta, graph_7_2d_cut_theta],
            rangeInput: rangeInput7_cut_theta,
            update_parameter: updateParamater7_cut_theta,
            name: "θ"
        },
        graph_cut_r: {
            graph: [graph_7_3d_cut_r, graph_7_2d_cut_r],
            rangeInput: rangeInput7_cut_r,
            update_parameter: updateParamater7_cut_r,
            name: "r"
        },
        graph_cut_phi: {
            graph: [graph_7_3d_cut_phi, graph_7_2d_cut_phi],
            rangeInput: rangeInput7_cut_phi,
            update_parameter: updateParamater7_cut_phi,
            name: "φ"
        },
        graph_cut_third_3: {
            graph: [graph_7_3d_cut_z_3, graph_7_2d_cut_z_3],
            rangeInput: rangeInput7_cut_z_3,
            update_parameter: updateParamater7_cut_z_3,
            name: "z"
        },
        graph_cut_third_2: {
            graph: [graph_7_3d_cut_p_3, graph_7_2d_cut_p_3],
            rangeInput: rangeInput7_cut_p_3,
            update_parameter: updateParamater7_cut_p_3,
            name: "φ"
        },
        graph_cut_third_1: {
            graph: [graph_7_3d_cut_r_3, graph_7_2d_cut_r_3],
            rangeInput: rangeInput7_cut_r_3,
            update_parameter: updateParamater7_cut_r_3,
            name: "r"
        },
    },
];

var checkbox_demonstrate_1 = new Checkbox(false);
var checkbox_demonstrate_2 = new Checkbox(false);

function animate_1() {
    var value = checkbox_demonstrate_1.val;
    if (value) {
        let position = pan3d.camera.position;
        let len = Math.sqrt(position.x * position.x + position.z * position.z);
        let new_angle = Math.atan2(position.x, position.z);
        new_angle += 0.008;
        let new_pos_z = len * Math.cos(new_angle);
        let new_pos_x = len * Math.sin(new_angle);
        pan3d.camera.position.set(new_pos_x, position.y, new_pos_z);
    }
    window.requestAnimationFrame(animate_1)
}

animate_1();

function animate_2() {
    var value = checkbox_demonstrate_2.val;
    if (value) {
        var f = pan3d_2.camera.position;
        f1 = f.x;
        f2 = f.y;
        f3 = f.z;
        len = Math.sqrt(f1 * f1 + f3 * f3);
        t2 = Math.atan2(f1, f3);
        t2 += 0.008;
        f3 = len * Math.cos(t2);
        f1 = len * Math.sin(t2);
        pan3d_2.camera.position.set(f1, f2, f3);
        if (t2 > Math.PI * 2)
            t2 -= Math.PI * 2;
    }
    window.requestAnimationFrame(animate_2)
}

animate_2();

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

function lowerGraph(pan, a = 0.3) {
    var width = parseInt(w);
    var height = parseInt(h);
    pan.camera.clearViewOffset();
    pan.camera.setViewOffset(width * 3, height * 2, width, height * a, width, height);
}

function centerGraph(pan) {
    var width = parseInt(w);
    var height = parseInt(h);
    pan.camera.clearViewOffset();
    pan.camera.setViewOffset(width, height, 0, 0, width, height);
}

function updateProblem(index) {
    pr_id = index;
    var container = document.getElementById('params');
    var container_2 = document.getElementById('params_2');
    while (container.hasChildNodes()) {
        container.removeChild(container.childNodes[0]);
    }
    while (container_2.hasChildNodes()) {
        container_2.removeChild(container_2.childNodes[0]);
    }
    updateRadioBtns(false);
    updateRadioBtnsRight(false);
    pan3d.camera.updateProjectionMatrix();
    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].id === pr_id) {
            if (i == 0 || i == 1) {
                document.getElementById('header-system-btn').style.visibility = "hidden";
            } else {
                document.getElementById('header-system-btn').style.visibility = "visible";
            }
            if (graphs[i].hasOwnProperty('three_systems')) {
                document.getElementById('third').style.display = '';
                if (graphs[i].spherical == false) {
                    document.getElementById('third').textContent = "Сферическая система";
                } else {
                    document.getElementById('third').textContent = "Цилиндрическая система";
                }
            } else {
                document.getElementById('third').style.display = 'none';
            }
            if (i != 2) {
                document.getElementById('cross_section').style.display = 'none';
                document.getElementById('cross_section_2').style.display = 'none';
            } else {
                document.getElementById('cross_section').style.display = '';
                document.getElementById('cross_section_2').style.display = '';
            }
            document.getElementById('system_1').textContent = "Декартова система координат";
            if (graphs[i].spherical == false) {
                pan3d_2.setAxes(['r', 'φ', 'y']);
                if (i == 0 || i == 2) {
                    pan3d_2.setAxes(['r', 'φ', 'z']);
                }
                document.getElementById('system_2').textContent = "Цилиндрическая система координат";
                document.getElementById('second').textContent = "Цилиндрическая система";
            } else {
                document.getElementById('system_2').textContent = "Сферическая система координат";
                document.getElementById('second').textContent = "Сферическая система";
                pan3d_2.setAxes(['r', 'φ', 'θ']);
                if (i == 5) {
                    pan3d_2.setAxes(['θ', 'φ', 'r']);
                }
            }
            if (graphs[i].hasOwnProperty('graph_cut_phi')) {
                pan3d_2.setAxes([graphs[i].graph_cut_psi.name, graphs[i].graph_cut_phi.name, graphs[i].graph_cut_r.name]);
            }
            if (graphs[i].hasOwnProperty('graph_cut_third_1')) {
                pan3d_3.setAxes([graphs[i].graph_cut_third_1.name, graphs[i].graph_cut_third_2.name, graphs[i].graph_cut_third_3.name]);
            }
            document.getElementById('cylyndric_system').style.display = 'block';
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

            if (graphs[i].hasOwnProperty('camera_3d_2')) {
                pan3d_2.camera.position.set(graphs[i]['camera_3d_2'][0], graphs[i]['camera_3d_2'][1], graphs[i]['camera_3d_2'][2]);
            } else {
                pan3d_2.camera.position.set(-4, 4, 5);
            }
            if (graphs[i].hasOwnProperty('pan3d_2')) {
                lowerGraph(pan3d_2, graphs[i].pan3d_2);
            } else {
                centerGraph(pan3d_2);
            }

            if (graphs[i].hasOwnProperty('camera_3d')) {
                pan3d.camera.position.set(graphs[i]['camera_3d'][0], graphs[i]['camera_3d'][1], graphs[i]['camera_3d'][2]);
            } else {
                pan3d.camera.position.set(-4, 4, 5);
            }
            if (graphs[i].hasOwnProperty('pan3d')) {
                lowerGraph(pan3d, graphs[i].pan3d);
            } else {
                centerGraph(pan3d);
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
    document.getElementById('two_systems').click();
}

updateProblem('2');
document.getElementById('two_systems').click();


