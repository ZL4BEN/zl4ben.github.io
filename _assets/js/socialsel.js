
// An object to prevent hair-pulling in the future
var tgrSocial = new Object()

// Event function for mouse on
tgrSocial["mouseOver"] = (ev) =>
{
    tgrSocial.textEl.innerHTML = ev.target.attributes["data-title"].textContent
    tgrSocial.textEl.classList.add("active")
}

// Event function for mouse on
tgrSocial["mouseOut"] = (ev) =>
{
    tgrSocial.textEl.classList.remove("active")
}

// Event function of DOM loading
tgrSocial["domReady"] = () => {
    // Look for the social links and attach events to them
    var socialLinks = document.querySelectorAll("#links a")
    for (var i = 0; i < socialLinks.length; i++)
    {
        socialLinks[i].addEventListener("mouseenter", tgrSocial.mouseOver)
        socialLinks[i].addEventListener("mouseleave", tgrSocial.mouseOut )
    }

    // Reference the query selector for later use
    tgrSocial["textEl"] = document.querySelector("#links .text")
}

// When the document is ready
document.addEventListener("DOMContentLoaded", tgrSocial.domReady)
