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
