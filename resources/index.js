// Thank you a lot to @Accio1 on Github for this technique!
function reference(link) {
    function addHeader() {
        var header = document.createElement("header");
        header.id = "header";
        header.innerHTML = '<a href="' + link + '">Homepage</a>\n<a href="' + link + 'help/roadmap">Roadmap</a>';
        document.body.insertBefore(header, document.querySelector("#main"));
    }

    function wrapMain() {
        document.body.innerHTML = '<main id="main">' + document.body.innerHTML + "</main>";
    }

    function addFooter() {
        let footer = document.createElement("footer");
        footer.id = "footer";
        footer.innerHTML = '<a href="https://github.com/gosoccerboy5/gosoccerboy5.github.io"><img src="' + link + 'resources/GitHub-Mark-64px.png" title = "Source code on Github" width = "30" height = "30"></a> <a href="https://scratch.mit.edu/users/gosoccerboy5"><img src="https://cdn2.scratch.mit.edu/get_image/user/13633428_60x60.png" width="30" height="30" title="My Scratch profile"></a>';
        document.body.appendChild(footer);
    }

    function addStylesheet() {
        let stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = link + "resources/stylesheet.css";
        document.head.appendChild(stylesheet);
    }

    function addFavicon() {
        let favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = link + "resources/favicon.ico";
        document.head.appendChild(favicon);
    }

    function addCharEncoding() {
        let meta = document.createElement("meta");
        meta.setAttribute("charset", "UTF-8");
        document.head.appendChild(meta);
    }
    addFavicon();
    wrapMain();
    addFooter();
    addStylesheet();
    addHeader();
    addCharEncoding();
    // Hey. It's cringey code, but it works.
}

const pattern = /file:\/\/\/Users\/\w+\/Documents\/GitHub\/gosoccerboy5\.github\.io\//;
// I have used a RegExp to represent my filesystem. If you're doing local development, 
// make sure to change this to match your filesystem!!!!
// (This should be the base of gosoccerboy5.github.io on your file system)
// I used a regex so I don't reveal my computer username
// I should probably make a better, more customizable system but it works for now

if (pattern.test(window.location.href)) {
    reference(window.location.href.match(pattern)[0]);
} else {
    reference("https://gosoccerboy5.github.io/");
}


