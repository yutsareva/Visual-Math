const parameters_panel = document.getElementById('parameters-panel');
const header_parameters_btn = document.getElementById('header-parameters-btn');

parameters_panel.style.display = 'none';

let parameters_panel_visible = false;

function parametersPanelMakeInvisible() {
    parameters_panel_visible = false;
    setTimeout(
        () => {if (!parameters_panel_visible) parameters_panel.style.display = 'none'},
        150
    );
}

parameters_panel.addEventListener('mouseout', function (e) {
    parametersPanelMakeInvisible();
});

parameters_panel.addEventListener('mouseover', function(e) {
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



// function paramItemClick(item, index) {
//     if (!item.classList.contains('active')) {
//         const dataList = document.getElementById('dataList');
//         const header_dataList = document.getElementsByClassName('problem');
//         // w.querySelector('.active').classList.remove('active');
//         for (var i = 0; i < header_dataList.length; ++i) {
//             header_dataList[i].style.display = 'none';
//             header_dataList[i].classList.remove('active-header');
//         }
//         dataList.querySelector('.active').classList.remove('active');
//         // header_dataList.querySelector('.active-header').classList.remove('active-header');
//         item.classList.add('active');
//         header_problem = document.getElementById('header-problem-' + index.toString());
//         header_problem.classList.add('active-header');
//         header_problem.style.display = 'block';
//         updateProblem(index.toString());
//     }
// }
// var children = document.getElementById('dataList').children;
// for (var i = 0; i < children.length; i++)
//     children[i].addEventListener('click', dataListItemClick.bind(null, children[i], i));
