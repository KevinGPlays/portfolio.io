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
