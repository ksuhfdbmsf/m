let oldElm = "AuBtn";
function prceBtn(id, colour) {
    document.getElementById(id).style.background = colour;
    document.getElementById(oldElm).style.background = white;
  if (document.getElementById(oldElm).style.background == white) {
    oldElm = id;
    }
}
