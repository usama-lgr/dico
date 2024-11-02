document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.transition = "opacity 1s";
        container.style.opacity = 1;
    }, 100);
});
