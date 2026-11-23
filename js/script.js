const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

// Marca o item do menu conforme a seção visível.
const sections = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll(".menu a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            menuLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        }
    });
}, { threshold: 0.35 });

sections.forEach(section => observer.observe(section));

// Evita que os links "Ver projeto" levem a página para o topo.
document.querySelectorAll('.project-link[href="#"]').forEach(link => {
    link.addEventListener("click", event => event.preventDefault());
});


/*// Anima os elementos conforme entram na area visivel da tela. */
document.documentElement.classList.add("js-reveal-ready");

const revealSelectors = [
    ".hero-content > *",
    ".hero-art",
    ".hero-info .info-pill",
    ".about-grid > *",
    ".section-heading",
    ".project-card",
    ".skills-grid > *",
    ".skill",
    ".education-heading",
    ".education-item",
    ".contact-box > *"
];

const revealElements = document.querySelectorAll(revealSelectors.join(", "));

revealElements.forEach((element, index) => {
    element.setAttribute("data-reveal", "");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}
