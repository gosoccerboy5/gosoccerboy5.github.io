function wrapMain() {
  document.body.innerHTML = '<div id = "main">' + document.body.innerHTML + "</div";
}

function addFooter () {
  let footer = document.createElement("div");
  footer.id = "footer";
  footer.innerHTML = '<a href="https://github.com/gosoccerboy5/gosoccerboy5.github.io"><img src="https://github.com/favicon.ico"></a> <a href="https://scratch.mit.edu/users/gosoccerboy5"><img src="https://avatars.githubusercontent.com/u/82768218" width="30" height="30"></a>';
  document.body.appendChild(footer);
}

function addStylesheet () {
  let stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "https://gosoccerboy5.github.io/index.css";
  document.head.appendChild(stylesheet);
}

function addFavicon () {
  let favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "https://gosoccerboy5.github.io/favicon.ico";
  document.head.appendChild(favicon);
}

wrapMain();
addFooter();
addStylesheet();
addFavicon();
// Hey. It's cringey code, but it works.
