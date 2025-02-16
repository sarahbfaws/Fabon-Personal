document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const toggle_btn = document.querySelector(".toggle-btn");
    const big_wrapper = document.querySelector(".big-wrapper");
    const hamburger_menu = document.querySelector(".hamburger-menu");

    // Ensure the elements exist before adding event listeners
    if (toggle_btn) {
        toggle_btn.addEventListener("click", () => {
            big_wrapper.classList.toggle("dark");
        });
    }

    if (hamburger_menu) {
        hamburger_menu.addEventListener("click", () => {
            big_wrapper.classList.toggle("active");
        });
    }

    

    // Initialize Typed.js
    new Typed('#intro', {
        strings: ['Cloud Support Associate', 'Web Developer', 'Creative'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true, // Adds looping effect
    });

    // Initialize AOS
    AOS.init({
        once: true, // Animation happens only once and stays
    });
  });
