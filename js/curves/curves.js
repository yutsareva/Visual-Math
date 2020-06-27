var pan3d = new grafar.Panel(document.getElementById('plot3d_1'));

var show_solution = false;
const solution_button = document.getElementById('header-solution');

function updateSolutionButton() {
    show_solution = false;
    solution_button.style.backgroundColor = "";
    solution_button.classList.remove('inner_shadow');
    solution_button.classList.add('shadow');
    document.getElementById('graphs').style.visibility = 'visible';
    document.getElementById('solution').style.display = 'none';
}

function changeSolutionButton() {
    if (!show_solution) {
        show_solution = true;
        solution_button.style.backgroundColor = "rgb(134, 171, 207)";
        solution_button.classList.add('inner_shadow');
        solution_button.classList.remove('shadow');
        document.getElementById('graphs').style.visibility = 'hidden';
        document.getElementById('solution').style.display = 'block';
    } else {
        show_solution = false;
        solution_button.style.backgroundColor = "";
        solution_button.classList.remove('inner_shadow');
        solution_button.classList.add('shadow');
        document.getElementById('graphs').style.visibility = 'visible';
        document.getElementById('solution').style.display = 'none';
    }
}

solution_button.addEventListener('click', changeSolutionButton);


function updatePlayButton() {
    checkbox_demonstrate_1.checked = false;
    play_button.style.backgroundColor = "";
    play_button.classList.remove('inner_shadow');
    play_button.classList.add('shadow');

}

function changePlayButton(update_only = false) {
    if (checkbox_demonstrate_1.val) {
        checkbox_demonstrate_1.checked = false;
        play_button.style.backgroundColor = "";
        play_button.classList.remove('inner_shadow');
        play_button.classList.add('shadow');
    } else {
        checkbox_demonstrate_1.checked = true;
        play_button.style.backgroundColor = "rgb(134, 171, 207)";
        play_button.classList.add('inner_shadow');
        play_button.classList.remove('shadow');
    }

}

const play_button = document.getElementById('header-play');
play_button.addEventListener('click', changePlayButton);


function updateConfinesButton() {
    if (show_confines_checkbox) {
        show_confines_checkbox.checked = false;
        confines_button.style.backgroundColor = "";
        confines_button.classList.remove('inner_shadow');
        confines_button.classList.add('shadow');
    }
}

function changeConfinesButton() {
    if (show_confines_checkbox) {
        if (show_confines_checkbox.val) {
            show_confines_checkbox.checked = false;
            confines_button.style.backgroundColor = "";
            confines_button.classList.remove('inner_shadow');
            confines_button.classList.add('shadow');
        } else {
            show_confines_checkbox.checked = true;
            confines_button.style.backgroundColor = "rgb(134, 171, 207)";
            confines_button.classList.add('inner_shadow');
            confines_button.classList.remove('shadow');
        }
        show_figures();
    }
}

const confines_button = document.getElementById('header-confines');
confines_button.addEventListener('click', changeConfinesButton);

function colorize(graph) {
    graph.glinstance.object.children[0].material.opacity = 0.6;
    graph.glinstance.object.children[1].material.opacity = 0.6;
    graph.glinstance.object.children[2].material.opacity = 0.6;
}


