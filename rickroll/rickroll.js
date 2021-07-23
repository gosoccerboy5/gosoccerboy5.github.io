const rickroll = function (event) { 
    event.preventDefault(); 
    document.write("Get 'rolled lol"); 
    window.setTimeout(function() {
        document.body.innerHTML = '<iframe width="966" height="543" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1" frameborder="0"></iframe>';
        console.info("https://scratch.mit.edu/discuss/post/5069102/");
    }, 500);
}
document.querySelectorAll(".rickroll").forEach(el => el.addEventListener("click", rickroll));