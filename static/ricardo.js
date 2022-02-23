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

navFunction();
icon_animation();