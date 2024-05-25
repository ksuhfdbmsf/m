let oldElm = "AuBtn";
function prceBtn(id, colour) {
    document.getElementById(id).style.background = colour;
    document.getElementById(oldElm).style.background = 'powderblue';
  if(oldElm != null) {
    oldElm = id;
  }
}
