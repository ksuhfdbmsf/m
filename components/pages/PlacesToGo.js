var oldElm;
function prceBtn(id, colour) {
    document.getElementById(id).style.background = colour;
    document.getElementById(id).innerHTML = oldElm;
    oldElm = id;
}
