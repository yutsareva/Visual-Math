const dataList_panel = document.getElementById('dataList-panel');
const header_dataList_btn = document.getElementById('header-dataList-btn');

dataList_panel.style.display = 'none';

let dataList_panel_visible = false;

function dataListPanelMakeInvisible() {
    dataList_panel_visible = false;
    setTimeout(
        () => {
            if (!dataList_panel_visible) dataList_panel.style.display = 'none'
        },
        150
    );
}

dataList_panel.addEventListener('mouseout', function (e) {
    dataListPanelMakeInvisible();
});

dataList_panel.addEventListener('mouseover', function (e) {
    dataList_panel_visible = true;
    dataList_panel.style.display = '';
});

header_dataList_btn.addEventListener('click', function (e) {
    if (dataList_panel.style.display === '') {
        dataList_panel.style.display = 'none';
    } else {
        dataList_panel.style.display = '';

        function headerDataListBtnMousout(e) {
            dataListPanelMakeInvisible();
            header_dataList_btn.removeEventListener('mouseout', headerDataListBtnMousout);
        }

        header_dataList_btn.addEventListener('mouseout', headerDataListBtnMousout);
    }
});


function dataListItemClick(item, index) {
    if (!item.classList.contains('active')) {
        const dataList = document.getElementById('dataList');
        const header_dataList = document.getElementsByClassName('problem');
        for (var i = 0; i < header_dataList.length; ++i) {
            header_dataList[i].style.display = 'none';
            header_dataList[i].classList.remove('active-header');
        }
        dataList.querySelector('.active').classList.remove('active');
        item.classList.add('active');
        header_problem = document.getElementById('header-problem-' + index.toString());
        header_problem.classList.add('active-header');
        header_problem.style.display = 'flex';
        updateProblem(index.toString());
    }
}

var children = document.getElementById('dataList').children;
for (var i = 0; i < children.length; i++)
    children[i].addEventListener('click', dataListItemClick.bind(null, children[i], i));
