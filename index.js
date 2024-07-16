// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // ScrollReveal animations configuration
    const scrollRevealOption = {
        distance: "50px",
        duration: 1000,
        easing: "ease-in-out",
        interval: 200,
    };

    // Apply animations to specific elements
    ScrollReveal().reveal(".group-icon", { ...scrollRevealOption, origin: "left" });
    ScrollReveal().reveal(".group-icon1", { ...scrollRevealOption, origin: "left", delay: 500 });
    ScrollReveal().reveal(".frame-container", { ...scrollRevealOption, origin: "top", delay: 1000 });
    ScrollReveal().reveal(".button-sign-in", { ...scrollRevealOption, origin: "top", delay: 1500 });
    ScrollReveal().reveal(".button-sign-up", { ...scrollRevealOption, origin: "top", delay: 2000 });
    ScrollReveal().reveal(".hero-left", { ...scrollRevealOption, origin: "left", delay: 2500 });
    ScrollReveal().reveal(".hero-right-content-inner", { ...scrollRevealOption, origin: "right", delay: 3000 });
    ScrollReveal().reveal(".hero-image", { ...scrollRevealOption, origin: "bottom", delay: 3500 });
    ScrollReveal().reveal(".hero-right-bottom img", { ...scrollRevealOption, origin: "bottom", delay: 4000 });
});
