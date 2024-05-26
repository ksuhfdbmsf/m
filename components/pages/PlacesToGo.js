let oldElm;
let oldInfo;
function prceBtn(id, colour, info) {
    document.getElementById(id).style.background = colour;
  if (oldElm != null) {
    document.getElementById(oldElm).style.background = '';
    document.getElementById(oldInfo).style.display = '';
  }
    document.getElementById(info).style.display = 'block';
    
    oldElm = id;
    oldInfo = info;
}
