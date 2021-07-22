Object.prototype.init = function(config) {
    const keys = Object.keys(config);
    for (let i = 0; i < keys.length; i++) {
        this[keys[i]] = config[keys[i]];
    }
    return this;
};
// Initialize an object without having to create it and then assigning properties

Object.defineProperty(HTMLElement.prototype, "children", {
    set: function(val) {
        val.forEach(value => this.appendChild(value));
    }
});
// Defining a setter for html elements to be able to add children


(function() {
    function addHeader() {
        let header = document.createElement("header").init({
            id: "header",
            children: [
                document.createElement("a").init({href: "/", innerText: "Homepage"}),
                document.createElement("a").init({href: "/help/roadmap", innerText: "Roadmap"})
            ]
        });
        document.body.insertBefore(header, document.querySelector("#main"));
    }

    function wrapMain() {
        document.body.innerHTML = '<main id="main">' + document.body.innerHTML + "</main>";
    }

    function addFooter() {
        let footer = document.createElement("footer").init({
            id: "footer",
            children: [
                document.createElement("a").init({
                    href: "https://github.com/gosoccerboy5/gosoccerboy5.github.io",
                    children: [
                        document.createElement("img").init({
                            src: "/resources/GitHub-Mark-64px.png", 
                            title: "Source code on Github", width: "30", height: "30"
                        })
                    ]
                }),
                document.createElement("a").init({
                    href: "https://scratch.mit.edu/users/gosoccerboy5",
                    children: [
                        document.createElement("img").init({
                            src: "https://cdn2.scratch.mit.edu/get_image/user/13633428_60x60.png", 
                            title: "My Scratch profile", width: "30", height: "30"
                        })
                    ]
                })
            ]
        });
        document.body.appendChild(footer);
        // Now I see why people use React
    }

    function addStylesheet() {
        let stylesheet = document.createElement("link").init({
            rel: "stylesheet", href: "/resources/stylesheet.css"
        });
        document.head.appendChild(stylesheet);
    }

    function addFavicon() {
        let favicon = document.createElement("link").init({
            rel: "icon", href: "/resources/favicon.ico"
        });
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
})();