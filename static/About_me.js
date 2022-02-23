gsap.registerPlugin(ScrollTrigger);

const count_x = () => {
    return 35 + document.body.offsetWidth / 90;
} 

const count_y = () => {
    return 10 + document.body.offsetWidth / 90;
}

const computerScrollFunction = () => { 

    const hobbyElements = [
        { name: "keyboard", x: 1 * 1.73, y: 1 },
        { name: "window1", x: -1 / 2 * 1.73, y: 1 },
        { name: "window2", x: 1 / 2 * 1.73, y: -1},
        { name: "screen", x: -1 / 2 * 1.73, y: -1},
    ];

    const computer = document.querySelector(".hobby-image");

    for(hobbyElement of hobbyElements) {
        gsap.from(`.${hobbyElement.name}`, {
            scrollTrigger: {
                trigger: `.${hobbyElement.name}`,
                start: () => `top ${window.screen.availHeight * 0.3 + computer.offsetTop * 0.8}`,
                end: () => `+=${computer.getBoundingClientRect().height * 0.3}`,
                scrub: true,
                toggleActions: "restart pause reverse pause",
            },
            opacity: 0,
            x: count_x() * hobbyElement.x, 
            y: count_y() * hobbyElement.y
        });
    }
};

const imageScrollFunction = () => {
    const image = document.querySelector(".my-image");

    gsap.from(".personal-photo", {
        scrollTrigger: {
            trigger: ".personal-photo",
            start: () => `top ${window.screen.availHeight * 0.3 + image.offsetTop * 0.8}`,
            toggleActions: "restart pause resume reverse"
        },
        ease: "expo.out",
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        y: 50,
        duration: 3
    });
}

const navFunction = () => {
    const hamburgerToggle = document.querySelector(".hamburger-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    hamburgerToggle.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");

        hamburgerToggle.classList.toggle("toggle");
    });
};

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

const things_I_like_animation = () => {
    const image = document.querySelector(".things_I_like");

    gsap.from(".things_I_like-heart", {
        scrollTrigger: {
            trigger: ".things_I_like-heart", 
            start: `top 50%`,
            toggleActions: "restart pause reverse reverse",
        }, 
        opacity: 0, 
        scale: 0.96, 
        duration: 1, 
        ease: "power2.out"
    });
}

const resolution_animation = () => {
    const tl = gsap.timeline();
    const image = document.querySelector(".resolution-image")
    ScrollTrigger.create({
        trigger: ".big-bubble",
        animation: tl,
        start: () => `top ${window.screen.availHeight * 0.4 + image.offsetTop * 0.8}`,
        toggleActions: "restart pause reverse reverse"
    });

    tl.from(".smol-bubble", {x: -3, y: -3, opacity: 0, duration: 0.4})
      .from(".big-bubble", {x: -3, y: -3, opacity: 0, duration: 0.4});
}

computerScrollFunction();
imageScrollFunction();
navFunction();
icon_animation();
things_I_like_animation();
resolution_animation();
