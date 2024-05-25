var oldElm;
function prceBtn(element, colour) {
//    oldElm.style.background = transparent;
    element.style.background = colour;
    element.innerHTML = oldElm;
    oldElm = element;
}
