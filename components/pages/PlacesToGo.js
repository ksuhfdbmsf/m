let oldElm = "auBtn";
function prceBtn(id, colour) {
    document.getElementById(id).style.background = colour;
    document.getElementById(oldElm).style.background = red;
    oldElm = id;
}
