let oldElm;
function prceBtn(id, colour) {
    document.getElementById(id).style.background = colour;
    document.getElementById(oldElm).style.background = '';
  if(oldElm != null) {
    oldElm = id;
  }
}
