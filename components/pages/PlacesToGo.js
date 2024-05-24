var oldElm;
function prceBtn(element, colour) {
  if (oldElm != null) {
    oldElm.style.background = transparent;
  }
    element.style.background = colour;
    oldElm = element;
}
