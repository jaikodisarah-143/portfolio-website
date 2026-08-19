document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Background Change
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 3. Contact Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            if (name && email && subject && message) {
                // Show success state
                formFeedback.className = 'form-feedback success';
                formFeedback.style.display = 'block';
                formFeedback.innerHTML = `<i class="fas fa-check-circle"></i> Thank you, ${name}! Your message has been sent successfully. Velayudhan will get back to you soon.`;
                
                contactForm.reset();

                // Auto hide feedback after 6 seconds
                setTimeout(() => {
                    formFeedback.style.display = 'none';
                }, 6000);
            }
        });
    }

    // 4. Update Current Year in Footer
    const yearSpan = document.getElementById('year-span');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
