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
