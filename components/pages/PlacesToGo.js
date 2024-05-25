var oldElm = "auBtn";
function prceBtn(id, colour) {
    document.getElementById(oldElm).innerHTML = id;
    document.getElementById(id).style.background = colour;
    document.getElementById(id).innerHTML = oldElm;
    oldElm = id;
}
