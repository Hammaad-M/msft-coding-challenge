// Animations using GSAP: https://greensock.com/gsap/

gsap.from("section > *", {
    delay: 0.25,
    duration: 0.35, 
    y: 100,
    opacity: 0,
    scale: 0.5,
    stagger: 0.15
});