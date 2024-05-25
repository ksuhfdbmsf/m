var oldElm;
function prceBtn(id, colour) {
//    oldElm.style.background = transparent;
    document.getElementById(id).style.background = colour;
    document.getElementById(id).innerHTML = oldElm;
    oldElm = id;
}
