// Twirwaneho Tech - App Interactivity logic

// 1. Navigation Scrolled State
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// 3. Ultra-Smooth Parallax Effects
const parallaxElements = document.querySelectorAll('.hero-parallax');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2);
    const y = (e.clientY - window.innerHeight / 2);

    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 0.05;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// 4. Refined Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => observer.observe(el));

// 5. Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
             // Close nav before scrolling (for mobile)
             if (navLinks && navLinks.classList.contains('active')) {
                 navLinks.classList.remove('active');
             }

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
