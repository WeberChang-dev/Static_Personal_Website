gsap.registerPlugin(ScrollTrigger);

const navFunction = () => {
    const hamburgerToggle = document.querySelector(".hamburger-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    hamburgerToggle.addEventListener("click", () => {

        navbarLinks.classList.toggle("active");

        hamburgerToggle.classList.toggle("toggle");
    })
}

const icon_animation = () => {
    const homeLink = document.querySelector(".home-link");
    const aboutLink = document.querySelector(".about-link");
    const portfolioLink = document.querySelector(".portfolio-link");
    let translateX = -40;

    homeLink.addEventListener("mouseenter", () => {
        gsap.to("#home-icon", {opacity: 1, x: -40, duration: 0.6, ease: "power3.out"});
        gsap.to(".home-text", {color: "hsl(212, 52%, 82%)", x: 10, duration: 0.6, ease: "power3.out"});
    });
    homeLink.addEventListener("mouseleave", () => {
        gsap.to("#home-icon", {opacity: 0, x: 0, duration: 0.6, ease: "power3.in"});
        gsap.to(".home-text", {color: "white", x: 0, duration: 0.6, ease: "power3.in"});
    });

    aboutLink.addEventListener("mouseenter", () => {
        gsap.to("#about-icon", {opacity: 1, x: -40, duration: 0.6, ease: "power3.out"});
        gsap.to(".about-text", {color: "hsl(212, 52%, 82%)", x: 10, duration: 0.6, ease: "power3.out"});
    });
    aboutLink.addEventListener("mouseleave", () => {
        gsap.to("#about-icon", {opacity: 0, x: 0, duration: 0.6, ease: "power3.in"});
        gsap.to(".about-text", {color: "white", x: 0, duration: 0.6, ease: "power3.in"});
    });

    portfolioLink.addEventListener("mouseenter", () => {
        if(document.body.offsetWidth < 600) translateX = -55;
        else translateX = -40;
        gsap.to("#portfolio-icon", {opacity: 1, x: translateX, duration: 0.6, ease: "power3.out"});
        gsap.to(".portfolio-text", {color: "hsl(212, 52%, 82%)", x: 10, duration: 0.6, ease: "power3.out"});
    });
    portfolioLink.addEventListener("mouseleave", () => {
        gsap.to("#portfolio-icon", {opacity: 0, x: 0, duration: 0.6, ease: "power3.in"});
        gsap.to(".portfolio-text", {color: "white", x: 0, duration: 0.6, ease: "power3.in"});
    });
}

const topic_image_animation = () => {
    tl = gsap.timeline({repeat: -1});
    tl.to(".magnify_glass", {x: "-20px", y: "-30px", duration: 1, ease: "power1.out"})
      .to(".magnify_glass", {x: "-30px", y: "10px", duration: 1, ease: "power1.out"})
      .to(".magnify_glass", {x: "-50px", y: "-35px", duration: 1, ease: "power1.out"})
      .to(".magnify_glass", {x : 0, y: 0, duration: 1, ease: "power1.out"});
}

const timeline_animation = () => {
    const lists = document.querySelectorAll(".content-container li");
    for(list of lists) {
        gsap.from(list, {scrollTrigger: {trigger: list, start: "top 90%", end: "bottom top", toggleActions: "restart resume resume reverse"}, y: 10, duration: 1, opacity: 0});
    }
}

const project_content_animation = () => {
    gsap.from(".Project-content", {scrollTrigger: {trigger:".Project-content", start: "bottom 90%", end: "bottom top", toggleActions: "restart resume resume reverse"}, x: -8, duration: 1, opacity: 0});
}

navFunction();
icon_animation();
topic_image_animation();
timeline_animation();
project_content_animation();