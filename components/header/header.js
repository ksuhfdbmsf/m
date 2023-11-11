function onLoad() {
  var header = `
  <div class="container">
    <div class="contents">
      <div>
        <img src="../components/imgs/cat1.png" alt="..." width="50px" height="50px">
      </div>
      <div class="links">
        <p>ABCDE</p>
      </div>
      <div class="links">
        <p>FGHIJ</p>
      </div>
      <div class="links">
        <p>KLMNO</p>
      </div>
      <div class="search">
        <p>Search</p>
      </div>
    </div>
  </div>`;
  document.getElementById("header").innerHTML = header;
}
