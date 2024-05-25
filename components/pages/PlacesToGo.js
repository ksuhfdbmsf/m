let oldElm;
function prceBtn(id, colour) {
    document.getElementById(id).style.background = colour;
  if (oldElm != null) {
    document.getElementById(oldElm).style.background = '';
  }
    oldElm = id;
}
