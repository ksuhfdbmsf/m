let oldId;
let oldInfo;
function prceBtn(id, colour, info) {
    document.getElementById(id).style.background = colour;
    document.getElementById(info).style.display = 'block';
  if (oldId != null) {
    document.getElementById(oldId).style.background = '';
    document.getElementById(oldInfo).style.display = '';
  } 
    oldId = id;
    oldInfo = info;
}
