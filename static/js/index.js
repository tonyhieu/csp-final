function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (getCookie("visited") == "") {
    // toggle css class for top animation
    let title = document.getElementById("title");
    let scrollDown = document.getElementById("scroll-down");

    title.classList.add("play-animation");
    scrollDown.classList.add("play-animation");

    // javascript animation for 2nd section
    var greetingsTimeline = new TimelineMax();

    const controller = new ScrollMagic.Controller();

    greetingsTimeline.from("#greetings", 1, {opacity: 0, x: 200});
    greetingsTimeline.to("#greetings", 0.25, {scaleX: 1.25, scaleY: 1.25})
        .to("#greetings", 0.25, {scaleX: 1, scaleY: 1});
    greetingsTimeline.from("#main-text", 1, {opacity: 0, y: 50});
    greetingsTimeline.from(".links", 1, {opacity: 0, y: 50});

    const greetingsScene = new ScrollMagic.Scene({
        triggerElement: ".section-one"
        })
        .setTween(greetingsTimeline)
        .addTo(controller);
} else {
    let scrollDown = document.getElementById("scroll-down");
    scrollDown.style.opacity = "1";
}

setCookie("visited", "yes", 1);
