const rickroll = function (event) { 
  event.preventDefault(); 
  document.write("Get 'rolled lol"); 
  window.setTimeout(function() {
    document.body.innerHTML = '<iframe width="966" height="543" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1" frameborder="0"></iframe>';
    console.info("https://scratch.mit.edu/discuss/post/5069102/");
  }, 500)
}

const rickrollLinks = document.getElementsByClassName("rickroll");
for (let i = 0; i < rickrollLinks.length; i++) {
  rickrollLinks[i].addEventListener("click", rickroll);
  rickrollLinks[i].addEventListener("contextmenu", rickroll);
}
