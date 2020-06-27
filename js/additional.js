function RangeInput(val, bind, min, max, step, name) {
    var wrapper = document.createElement('div')
        , valcont = document.createElement('span')
        , temp = document.createElement('input')
        , step = step || 0.01;
    temp.type = 'range';
    temp.value = val;
    temp.min = min;
    temp.max = max;
    temp.step = step;
    temp.onmousemove = function (evt) {
        triggerEvent('change', temp);
    }
    ;
    if (bind)
        temp.addEventListener('change', bind);
    wrapper.__defineGetter__('val', function () {
        return parseFloat(temp.value);
    });
    showValue = function () {
        var val = parseFloat(temp.value);
        valcont.innerHTML = name + ": " + val.toFixed(1).toString() + "\t";
        valcont.style.fontWeight = 'bold';
    };

    temp.addEventListener('change', showValue);
    showValue();

    wrapper.appendChild(valcont);
    wrapper.appendChild(temp);
    wrapper.style.position = 'relative';
    return wrapper;
}


function triggerEvent(type, element) {
    if ('createEvent' in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(type, false, true);
        element.dispatchEvent(evt);
    } else {
        element.fireEvent('on' + type);
    }
}

function Checkbox(val) {
    var temp = document.createElement('input');
    temp.type = 'checkbox';
    temp.checked = val;
    temp.__defineGetter__('val', function () {
        return this.checked;
    });
    return temp;
}
