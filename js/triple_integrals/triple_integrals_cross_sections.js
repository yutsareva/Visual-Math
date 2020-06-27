var radios = document.forms["formLeft"].elements["coordinate"];

function hide_sections_right(graph) {
    for (var j = 0; j < graph.graph_cut_r.graph.length; j++) {
        graph.graph_cut_r.graph[j].hide(true);
    }
    for (var j = 0; j < graph.graph_cut_phi.graph.length; j++) {
        graph.graph_cut_phi.graph[j].hide(true);
    }
    for (var j = 0; j < graph.graph_cut_psi.graph.length; j++) {
        graph.graph_cut_psi.graph[j].hide(true);
    }
    if (graph.hasOwnProperty('graph_cut_third_1')) {
        for (var j = 0; j < graph.graph_cut_third_1.graph.length; j++) {
            graph.graph_cut_third_1.graph[j].hide(true);
        }
    }
    if (graph.hasOwnProperty('graph_cut_third_2')) {
        for (var j = 0; j < graph.graph_cut_third_2.graph.length; j++) {
            graph.graph_cut_third_2.graph[j].hide(true);
        }
    }
    if (graph.hasOwnProperty('graph_cut_third_3')) {
        for (var j = 0; j < graph.graph_cut_third_3.graph.length; j++) {
            graph.graph_cut_third_3.graph[j].hide(true);
        }
    }
}

radios[0].onclick = function () {
    sections_on = [1, 0, 0, 0, 0, 0];
    pan2d_1.clearAxes();
    pan2d_1.setAxes(['y', 'z']);
    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].id === pr_id) {
            document.getElementById('system_1').textContent = "Декартова система координат";
            document.getElementById('system_2').textContent = "Сечение по оси x";

            if (graphs[i].graph_cut_x.hasOwnProperty('pan2d_1')) {
                lowerGraph(pan2d_1, graphs[i].graph_cut_x.pan2d_1);
            } else {
                centerGraph(pan2d_1);
            }
            if (graphs[i].graph_cut_x.hasOwnProperty('camera2d_1')) {
                pan2d_1.camera.position.set(graphs[i].graph_cut_x['camera2d_1'][0], graphs[i].graph_cut_x['camera2d_1'][1], graphs[i].graph_cut_x['camera2d_1'][2]);
            } else {
                pan2d_1.camera.position.set(0, 5, 0);
            }
            for (var j = 0; j < graphs[i].graph_cut_x.graph.length; j++) {
                graphs[i].graph_cut_x.graph[j].hide(false);
            }
            if (graphs[i].hasOwnProperty('show_figures')) {
                graphs[i].show_figures();
            }
            for (var j = 0; j < graphs[i].graph_cut_y.graph.length; j++)
                graphs[i].graph_cut_y.graph[j].hide(true);
            for (var j = 0; j < graphs[i].graph_cut_z.graph.length; j++)
                graphs[i].graph_cut_z.graph[j].hide(true);
            let r = document.getElementById('radio-left-range');
            while (r.hasChildNodes()) {
                r.removeChild(r.childNodes[0]);
            }
            r.appendChild(graphs[i].graph_cut_x.rangeInput);
            if (graphs[i].graph_cut_x.update_parameter) {
                graphs[i].graph_cut_x.update_parameter();
            }
        }
    }
};

radios[1].onclick = function () {
    pan2d_1.clearAxes();
    pan2d_1.setAxes(['x', 'z']);

    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].id === pr_id) {
            sections_on = [0, 1, 0, 0, 0, 0];
            document.getElementById('system_2').textContent = "Сечение по оси y";
            if (graphs[i].graph_cut_y.hasOwnProperty('pan2d_1')) {
                lowerGraph(pan2d_1, graphs[i].graph_cut_y.pan2d_1);
            } else {
                centerGraph(pan2d_1);
            }
            if (graphs[i].graph_cut_y.hasOwnProperty('camera2d_1')) {
                pan2d_1.camera.position.set(graphs[i].graph_cut_y['camera2d_1'][0], graphs[i].graph_cut_y['camera2d_1'][1], graphs[i].graph_cut_y['camera2d_1'][2]);
            } else {
                pan2d_1.camera.position.set(0, 5, 0);
            }
            for (var j = 0; j < graphs[i].graph_cut_y.graph.length; j++) {
                graphs[i].graph_cut_y.graph[j].hide(false);
            }
            if (graphs[i].hasOwnProperty('show_figures')) {
                graphs[i].show_figures();
            }
            for (var j = 0; j < graphs[i].graph_cut_x.graph.length; j++)
                graphs[i].graph_cut_x.graph[j].hide(true);
            for (var j = 0; j < graphs[i].graph_cut_z.graph.length; j++)
                graphs[i].graph_cut_z.graph[j].hide(true);
            let r = document.getElementById('radio-left-range');
            while (r.hasChildNodes()) {
                r.removeChild(r.childNodes[0]);
            }
            r.appendChild(graphs[i].graph_cut_y.rangeInput);
            if (graphs[i].graph_cut_y.update_parameter) {
                graphs[i].graph_cut_y.update_parameter();
            }
        }
    }
};
radios[2].onclick = function () {
    pan2d_1.clearAxes();
    pan2d_1.setAxes(['x', 'y']);

    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].id === pr_id) {
            sections_on = [0, 0, 1, 0, 0, 0];
            document.getElementById('system_2').textContent = "Сечение по оси z";
            if (graphs[i].graph_cut_z.hasOwnProperty('pan2d_1')) {
                lowerGraph(pan2d_1, graphs[i].graph_cut_z.pan2d_1);
            } else {
                centerGraph(pan2d_1);
            }
            if (graphs[i].graph_cut_z.hasOwnProperty('camera2d_1')) {
                pan2d_1.camera.position.set(graphs[i].graph_cut_z['camera2d_1'][0], graphs[i].graph_cut_z['camera2d_1'][1], graphs[i].graph_cut_z['camera2d_1'][2]);
            } else {
                pan2d_1.camera.position.set(0, 5, 0);
            }
            for (var j = 0; j < graphs[i].graph_cut_z.graph.length; j++) {
                graphs[i].graph_cut_z.graph[j].hide(false);
            }
            if (graphs[i].hasOwnProperty('show_figures')) {
                graphs[i].show_figures();
            }
            for (var j = 0; j < graphs[i].graph_cut_x.graph.length; j++)
                graphs[i].graph_cut_x.graph[j].hide(true);
            for (var j = 0; j < graphs[i].graph_cut_y.graph.length; j++)
                graphs[i].graph_cut_y.graph[j].hide(true);
            let r = document.getElementById('radio-left-range');
            while (r.hasChildNodes()) {
                r.removeChild(r.childNodes[0]);
            }
            r.appendChild(graphs[i].graph_cut_z.rangeInput);
            if (graphs[i].graph_cut_z.update_parameter) {
                graphs[i].graph_cut_z.update_parameter();
            }
        }
    }
};


// =======================================================================

var radios_ = document.forms["formRight"].elements["coordinate"];
radios_[0].onclick = function () {
    sections_on = [0, 0, 0, 1, 0, 0];
    // window.alert(pr_id);
    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].id === pr_id) {
            let r_ = document.getElementById('radio-right-range');
            while (r_.hasChildNodes()) {
                r_.removeChild(r_.childNodes[0]);
            }
            if (cut_btn_third_system_on) {
                document.getElementById('label_coord_r').textContent = "По " + graphs[i].graph_cut_third_1.name;
                document.getElementById('label_coord_phi').textContent = "По " + graphs[i].graph_cut_third_2.name;
                document.getElementById('label_coord_psi').textContent = "По " + graphs[i].graph_cut_third_3.name;

                pan2d_3.clearAxes();
                pan2d_3.setAxes([graphs[i].graph_cut_third_2.name, graphs[i].graph_cut_third_3.name]);
                document.getElementById('system_1').textContent = "Сечение по оси " + graphs[i].graph_cut_third_1.name;
                hide_sections_right(graphs[i]);
                r_.appendChild(graphs[i].graph_cut_third_1.rangeInput);
                for (var j = 0; j < graphs[i].graph_cut_third_1.graph.length; j++)
                    graphs[i].graph_cut_third_1.graph[j].hide(false);
                if (graphs[i].graph_cut_third_1.update_parameter) {
                    graphs[i].graph_cut_third_1.update_parameter();
                }

            } else {
                document.getElementById('label_coord_r').textContent = "По " + graphs[i].graph_cut_r.name;
                document.getElementById('label_coord_phi').textContent = "По " + graphs[i].graph_cut_phi.name;
                document.getElementById('label_coord_psi').textContent = "По " + graphs[i].graph_cut_psi.name;
                pan2d_2.clearAxes();
                pan2d_2.setAxes([graphs[i].graph_cut_psi.name, graphs[i].graph_cut_phi.name]);
                if (graphs[i].graph_cut_r.hasOwnProperty('pan2d_2')) {
                    lowerGraph(pan2d_2, graphs[i].graph_cut_r.pan2d_2);
                } else {
                    centerGraph(pan2d_2);
                }
                if (graphs[i].graph_cut_r.hasOwnProperty('camera2d_2')) {
                    pan2d_2.camera.position.set(graphs[i].graph_cut_r['camera2d_2'][0], graphs[i].graph_cut_r['camera2d_2'][1], graphs[i].graph_cut_r['camera2d_2'][2]);
                } else {
                    pan2d_2.camera.position.set(0, 5, 0);
                }
                if (graphs[i].spherical) {
                    document.getElementById('system_2').textContent = "Сферическая система координат";
                } else {
                    document.getElementById('system_2').textContent = "Цилиндрическая система координат";
                }
                document.getElementById('system_1').textContent = "Сечение по оси " + graphs[i].graph_cut_r.name;
                for (var j = 0; j < graphs[i].graph_cut_r.graph.length; j++) {
                    graphs[i].graph_cut_r.graph[j].hide(false);
                }
                if (graphs[i].hasOwnProperty('show_figures')) {
                    graphs[i].show_figures();
                }
                for (var j = 0; j < graphs[i].graph_cut_phi.graph.length; j++)
                    graphs[i].graph_cut_phi.graph[j].hide(true);
                for (var j = 0; j < graphs[i].graph_cut_psi.graph.length; j++)
                    graphs[i].graph_cut_psi.graph[j].hide(true);
                let r_ = document.getElementById('radio-right-range');
                while (r_.hasChildNodes()) {
                    r_.removeChild(r_.childNodes[0]);
                }
                r_.appendChild(graphs[i].graph_cut_r.rangeInput);

                if (graphs[i].graph_cut_r.update_parameter) {
                    graphs[i].graph_cut_r.update_parameter();
                }
            }
        }
    }
};

radios_[1].onclick = function () {
    sections_on = [0, 0, 0, 0, 1, 0];
    // window.alert(pr_id);
    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].id === pr_id) {
            let r_ = document.getElementById('radio-right-range');

            while (r_.hasChildNodes()) {
                r_.removeChild(r_.childNodes[0]);
            }
            if (cut_btn_third_system_on) {
                document.getElementById('label_coord_r').textContent = "По " + graphs[i].graph_cut_third_1.name;
                document.getElementById('label_coord_phi').textContent = "По " + graphs[i].graph_cut_third_2.name;
                document.getElementById('label_coord_psi').textContent = "По " + graphs[i].graph_cut_third_3.name;

                pan2d_3.clearAxes();
                pan2d_3.setAxes([graphs[i].graph_cut_third_1.name, graphs[i].graph_cut_third_3.name]);
                document.getElementById('system_1').textContent = "Сечение по оси " + graphs[i].graph_cut_third_2.name;
                hide_sections_right(graphs[i]);
                r_.appendChild(graphs[i].graph_cut_third_2.rangeInput);
                for (var j = 0; j < graphs[i].graph_cut_third_2.graph.length; j++)
                    graphs[i].graph_cut_third_2.graph[j].hide(false);
                if (graphs[i].graph_cut_third_2.update_parameter) {
                    graphs[i].graph_cut_third_2.update_parameter();
                }

            } else {
                document.getElementById('label_coord_r').textContent = "По " + graphs[i].graph_cut_r.name;
                document.getElementById('label_coord_phi').textContent = "По " + graphs[i].graph_cut_phi.name;
                document.getElementById('label_coord_psi').textContent = "По " + graphs[i].graph_cut_psi.name;

                pan2d_2.clearAxes();
                pan2d_2.setAxes([graphs[i].graph_cut_psi.name, graphs[i].graph_cut_r.name]);


                if (graphs[i].graph_cut_phi.hasOwnProperty('pan2d_2')) {
                    lowerGraph(pan2d_2, graphs[i].graph_cut_phi.pan2d_2);
                } else {
                    centerGraph(pan2d_2);
                }
                if (graphs[i].graph_cut_phi.hasOwnProperty('camera2d_2')) {
                    pan2d_2.camera.position.set(graphs[i].graph_cut_phi['camera2d_2'][0], graphs[i].graph_cut_phi['camera2d_2'][1], graphs[i].graph_cut_phi['camera2d_2'][2]);
                } else {
                    pan2d_2.camera.position.set(0, 5, 0);
                }
                document.getElementById('system_1').textContent = "Сечение по оси " + graphs[i].graph_cut_phi.name;
                for (var j = 0; j < graphs[i].graph_cut_phi.graph.length; j++)
                    graphs[i].graph_cut_phi.graph[j].hide(false);
                if (graphs[i].hasOwnProperty('show_figures')) {
                    graphs[i].show_figures();
                }
                for (var j = 0; j < graphs[i].graph_cut_r.graph.length; j++) {
                    graphs[i].graph_cut_r.graph[j].hide(true);
                }
                for (var j = 0; j < graphs[i].graph_cut_psi.graph.length; j++)
                    graphs[i].graph_cut_psi.graph[j].hide(true);
                let r_ = document.getElementById('radio-right-range');
                while (r_.hasChildNodes()) {
                    r_.removeChild(r_.childNodes[0]);
                }
                r_.appendChild(graphs[i].graph_cut_phi.rangeInput);
                // window.alert(i);
                if (graphs[i].graph_cut_phi.update_parameter) {
                    graphs[i].graph_cut_phi.update_parameter();
                }
            }
        }
    }
};
radios_[2].onclick = function () {
    sections_on = [0, 0, 0, 0, 0, 1];
    for (var i = 0; i < graphs.length; i++) {
        if (graphs[i].id === pr_id) {
            let r_ = document.getElementById('radio-right-range');

            while (r_.hasChildNodes()) {
                r_.removeChild(r_.childNodes[0]);
            }
            if (cut_btn_third_system_on) {
                document.getElementById('label_coord_r').textContent = "По " + graphs[i].graph_cut_third_1.name;
                document.getElementById('label_coord_phi').textContent = "По " + graphs[i].graph_cut_third_2.name;
                document.getElementById('label_coord_psi').textContent = "По " + graphs[i].graph_cut_third_3.name;

                pan2d_3.clearAxes();
                pan2d_3.setAxes([graphs[i].graph_cut_third_1.name, graphs[i].graph_cut_third_2.name]);
                document.getElementById('system_1').textContent = "Сечение по оси " + graphs[i].graph_cut_third_3.name;
                hide_sections_right(graphs[i]);
                r_.appendChild(graphs[i].graph_cut_third_3.rangeInput);
                for (var j = 0; j < graphs[i].graph_cut_third_3.graph.length; j++)
                    graphs[i].graph_cut_third_3.graph[j].hide(false);
                if (graphs[i].graph_cut_third_3.update_parameter) {
                    graphs[i].graph_cut_third_3.update_parameter();
                }

            } else {
                document.getElementById('label_coord_r').textContent = "По " + graphs[i].graph_cut_r.name;
                document.getElementById('label_coord_phi').textContent = "По " + graphs[i].graph_cut_phi.name;
                document.getElementById('label_coord_psi').textContent = "По " + graphs[i].graph_cut_psi.name;

                pan2d_2.clearAxes();
                pan2d_2.setAxes([graphs[i].graph_cut_r.name, graphs[i].graph_cut_phi.name]);
                if (graphs[i].graph_cut_psi.hasOwnProperty('pan2d_2')) {
                    lowerGraph(pan2d_2, graphs[i].graph_cut_psi.pan2d_2);
                } else {
                    centerGraph(pan2d_2);
                }
                if (graphs[i].graph_cut_psi.hasOwnProperty('camera2d_2')) {
                    pan2d_2.camera.position.set(graphs[i].graph_cut_psi['camera2d_2'][0], graphs[i].graph_cut_psi['camera2d_2'][1], graphs[i].graph_cut_psi['camera2d_2'][2]);
                } else {
                    pan2d_2.camera.position.set(0, 5, 0);
                }
                document.getElementById('system_1').textContent = "Сечение по оси " + graphs[i].graph_cut_psi.name;
                for (var j = 0; j < graphs[i].graph_cut_psi.graph.length; j++)
                    graphs[i].graph_cut_psi.graph[j].hide(false);
                if (graphs[i].hasOwnProperty('show_figures')) {
                    graphs[i].show_figures();
                }
                for (var j = 0; j < graphs[i].graph_cut_r.graph.length; j++) {
                    graphs[i].graph_cut_r.graph[j].hide(true);
                }
                for (var j = 0; j < graphs[i].graph_cut_phi.graph.length; j++)
                    graphs[i].graph_cut_phi.graph[j].hide(true);
                r_.appendChild(graphs[i].graph_cut_psi.rangeInput);
                if (graphs[i].graph_cut_psi.update_parameter) {
                    graphs[i].graph_cut_psi.update_parameter();
                }
            }
        }
    }
};