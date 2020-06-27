const parameters_panel = document.getElementById('parameters-panel');
const header_parameters_btn = document.getElementById('header-parameters-btn');

parameters_panel.style.display = 'none';

let parameters_panel_visible = false;

function parametersPanelMakeInvisible() {
    parameters_panel_visible = false;
    setTimeout(
        () => {
            if (!parameters_panel_visible) parameters_panel.style.display = 'none'
        },
        150
    );
}

parameters_panel.addEventListener('mouseout', function (e) {
    parametersPanelMakeInvisible();
});

parameters_panel.addEventListener('mouseover', function (e) {
    parameters_panel_visible = true;
    parameters_panel.style.display = '';
});

header_parameters_btn.addEventListener('click', function (e) {
    if (parameters_panel.style.display === '') {
        parameters_panel.style.display = 'none';
    } else {
        parameters_panel.style.display = '';

        function headerDataListBtnMousout(e) {
            dataListPanelMakeInvisible();
            header_parameters_btn.removeEventListener('mouseout', headerDataListBtnMousout);
        }

        header_parameters_btn.addEventListener('mouseout', headerDataListBtnMousout);
    }
});


// ============================================================ cross section button (cut) ====================================================


let cut_btn_left_on = false;
let cut_btn_right_on = false;
let cut_btn_third_system_on = false;

function removeCrossSections() {
    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].graph_cut_x) {
            for (var j = 0; j < graphs[i].graph_cut_x.graph.length; j++) {
                graphs[i].graph_cut_x.graph[j].hide(true);
            }
        }
        if (graphs[i].graph_cut_y) {
            for (var j = 0; j < graphs[i].graph_cut_y.graph.length; j++)
                graphs[i].graph_cut_y.graph[j].hide(true);
        }
        if (graphs[i].graph_cut_z) {
            for (var j = 0; j < graphs[i].graph_cut_z.graph.length; j++)
                graphs[i].graph_cut_z.graph[j].hide(true);

        }
        if (graphs[i].graph_cut_r) {
            for (var j = 0; j < graphs[i].graph_cut_r.graph.length; j++) {
                graphs[i].graph_cut_r.graph[j].hide(true);
            }
        }
        if (graphs[i].graph_cut_phi) {
            for (var j = 0; j < graphs[i].graph_cut_phi.graph.length; j++)
                graphs[i].graph_cut_phi.graph[j].hide(true);
        }
        if (graphs[i].graph_cut_psi) {
            for (var j = 0; j < graphs[i].graph_cut_psi.graph.length; j++)
                graphs[i].graph_cut_psi.graph[j].hide(true);
        }
        // }
    }
}

function updateRadioBtns(val) {
    cut_btn_left_on = val;
    if (val) {
        updateRadioBtnsRight(false);
        two_systems_on = false;
        cut_btn_third_system_on = false;
        two_systems.style.backgroundColor = "";
        document.getElementById('radio-left-input-1').style.display = 'inline';
        document.getElementById('radio-left-input-2').style.display = 'inline';
        document.getElementById('radio-left-input-3').style.display = 'inline';

        document.getElementById('coord_x').checked = false;
        document.getElementById('coord_y').checked = false;
        document.getElementById('coord_z').checked = false;

        document.getElementById('radio-left-range').style.display = '';
        document.getElementById('plot3d_2').style.display = 'none';
        document.getElementById('plot2d_1').style.display = '';

        document.getElementById('cross_section_2').style.display = 'none';
        document.getElementById('cross_section').style.display = '';

        pan2d_1.clearAxes();
        cut_btn.style.backgroundColor = "rgb(144, 181, 217)";
        document.getElementById('coord_x').click();


    } else {
        document.getElementById('radio-left-input-1').style.display = 'none';
        document.getElementById('radio-left-input-2').style.display = 'none';
        document.getElementById('radio-left-input-3').style.display = 'none';

        document.getElementById('coord_x').checked = false;
        document.getElementById('coord_y').checked = false;
        document.getElementById('coord_z').checked = false;

        document.getElementById('radio-left-range').style.display = 'none';
        document.getElementById('plot3d_2').style.display = '';
        document.getElementById('plot2d_1').style.display = 'none';

        document.getElementById('cross_section_2').style.display = '';
        // document.getElementById('cross_section').style.display = 'none';
        cut_btn.style.backgroundColor = "";
        removeCrossSections();
    }
}

const cut_btn = document.getElementById('first');
cut_btn.addEventListener('click', function (e) {
    if (!cut_btn_left_on) {
        updateRadioBtns(true);
    }
});


// -----------------------------------------------------

function updateRadioBtnsRight(val) {
    cut_btn_right_on = val;
    if (val) {
        updateRadioBtns(false);
        two_systems_on = false;
        cut_btn_third_system_on = false;
        two_systems.style.backgroundColor = "";
        document.getElementById('radio-right-input-1').style.display = 'inline';
        document.getElementById('radio-right-input-2').style.display = 'inline';
        document.getElementById('radio-right-input-3').style.display = 'inline';

        document.getElementById('coord_r').checked = false;
        document.getElementById('coord_phi').checked = false;
        document.getElementById('coord_psi').checked = false;

        document.getElementById('radio-right-range').style.display = '';
        document.getElementById('plot3d_3').style.display = 'none';
        document.getElementById('plot2d_3').style.display = 'none';
        document.getElementById('plot3d_1').style.display = 'none';
        document.getElementById('plot2d_2').style.display = '';

        document.getElementById('cross_section_2').style.display = '';
        document.getElementById('cross_section').style.display = 'none';

        pan2d_1.clearAxes();
        cut_btn_right.style.backgroundColor = "rgb(144, 181, 217)";
        document.getElementById('coord_r').click();


    } else {
        document.getElementById('radio-right-input-1').style.display = 'none';
        document.getElementById('radio-right-input-2').style.display = 'none';
        document.getElementById('radio-right-input-3').style.display = 'none';

        document.getElementById('coord_r').checked = false;
        document.getElementById('coord_phi').checked = false;
        document.getElementById('coord_psi').checked = false;

        document.getElementById('radio-right-range').style.display = 'none';
        document.getElementById('plot3d_3').style.display = 'none';
        document.getElementById('plot2d_3').style.display = 'none';
        document.getElementById('plot3d_1').style.display = '';
        document.getElementById('plot2d_2').style.display = 'none';

        document.getElementById('cross_section').style.display = '';
        cut_btn_right.style.backgroundColor = "";
        removeCrossSections();
    }
}

const cut_btn_right = document.getElementById('second');
cut_btn_right.addEventListener('click', function (e) {
    if (!cut_btn_right_on) {
        updateRadioThirdSystem(false);
        updateRadioBtnsRight(true);
    }
});

function updateRadioThirdSystem(val) {
    cut_btn_third_system_on = val;
    if (val) {
        updateRadioBtns(false);
        two_systems_on = false;
        cut_btn_right_on = false;
        two_systems.style.backgroundColor = "";
        cut_btn_right.style.backgroundColor = "";
        document.getElementById('radio-right-input-1').style.display = 'inline';
        document.getElementById('radio-right-input-2').style.display = 'inline';
        document.getElementById('radio-right-input-3').style.display = 'inline';

        document.getElementById('coord_r').checked = false;
        document.getElementById('coord_phi').checked = false;
        document.getElementById('coord_psi').checked = false;

        document.getElementById('radio-right-range').style.display = '';
        document.getElementById('plot3d_1').style.display = 'none';
        document.getElementById('plot3d_2').style.display = 'none';
        document.getElementById('plot2d_1').style.display = 'none';
        document.getElementById('plot2d_2').style.display = 'none';
        document.getElementById('plot3d_3').style.display = '';
        document.getElementById('plot2d_3').style.display = '';

        document.getElementById('cross_section_2').style.display = '';
        document.getElementById('cross_section').style.display = 'none';

        pan2d_2.clearAxes();
        cut_btn_third_system.style.backgroundColor = "rgb(144, 181, 217)";
        document.getElementById('coord_r').click();


    } else {
        document.getElementById('radio-right-input-1').style.display = 'none';
        document.getElementById('radio-right-input-2').style.display = 'none';
        document.getElementById('radio-right-input-3').style.display = 'none';

        document.getElementById('coord_r').checked = false;
        document.getElementById('coord_phi').checked = false;
        document.getElementById('coord_psi').checked = false;

        document.getElementById('radio-right-range').style.display = 'none';
        document.getElementById('plot3d_3').style.display = 'none';
        document.getElementById('plot2d_3').style.display = 'none';

        document.getElementById('cross_section_2').style.display = 'none';
        cut_btn_third_system.style.backgroundColor = "";
        removeCrossSections();
    }
}

const cut_btn_third_system = document.getElementById('third');
cut_btn_third_system.addEventListener('click', function (e) {
    if (!cut_btn_third_system_on) {
        updateRadioThirdSystem(true);
    }
    if (!graphs[parseInt(pr_id)].spherical) {
        document.getElementById('system_2').textContent = "Сферическая система координат";
    } else {
        document.getElementById('system_2').textContent = "Цилиндрическая система координат";
    }
});

const two_systems = document.getElementById('two_systems');
var two_systems_on = false;
two_systems.addEventListener('click', function (e) {
    if (!two_systems_on) {
        updateRadioBtnsRight(false);
        updateRadioBtns(false);
        updateRadioThirdSystem(false);
        document.getElementById('system_1').textContent = "Декартова система координат";
        if (graphs[parseInt(pr_id)].spherical) {
            document.getElementById('system_2').textContent = "Сферическая система координат";
        } else {
            document.getElementById('system_2').textContent = "Цилиндрическая система координат";
        }
        two_systems.style.backgroundColor = "rgb(144, 181, 217)";
        two_systems_on = true;
    }
});


const systems_panel = document.getElementById('systems-panel');
const header_system_btn = document.getElementById('header-system-btn');

systems_panel.style.display = 'none';

let systems_panel_visible = false;

function parametersPanelMakeInvisible_() {
    systems_panel_visible = false;
    setTimeout(
        () => {
            if (!systems_panel_visible) systems_panel.style.display = 'none'
        },
        150
    );
}

systems_panel.addEventListener('mouseout', function (e) {
    parametersPanelMakeInvisible_();
});

systems_panel.addEventListener('mouseover', function (e) {
    systems_panel_visible = true;
    systems_panel.style.display = '';
});

header_system_btn.addEventListener('click', function (e) {
    if (systems_panel.style.display === '') {
        systems_panel.style.display = 'none';
    } else {
        systems_panel.style.display = '';

        function headerDataListBtnMousout(e) {
            dataListPanelMakeInvisible();
            header_system_btn.removeEventListener('mouseout', headerDataListBtnMousout);
        }

        header_system_btn.addEventListener('mouseout', headerDataListBtnMousout);
    }
});