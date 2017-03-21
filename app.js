var TimelineMax = new TimelineMax();
//sun figure
//anticipacion por el opacity
TimelineMax.from('#sun-figure', 7, {opacity:0.5,yPercent: +100, ease:Power2.easeInOut});
//aparece txt
TimelineMax.from("#happy-text", 5, {opacity:0, xPercent: +130,ease:Power2.easeInOut});

//error de la linea del sol atrasada.
TimelineMax.from('#sun-line', 6.8, {yPercent: +150, ease:Power1.easeOut});
//exageracion
TweenMax.from('#sun-line', 8,{scale:0.7, repeat:-1, yoyo:true});


//nubes
TweenMax.from(".Cloud", 10, {xPercent: +150});
TweenMax.from("#left-Cloud", 10, {xPercent: -90});
