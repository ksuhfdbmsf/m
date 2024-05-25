var oldElm;
function prceBtn(id, colour) {
    document.getElementById(id).style.background = colour;
    document.getElementById(id).innerHTML = id;
    document.getElementById(oldElm).innerHTML = id;
    oldElm = id;
}
