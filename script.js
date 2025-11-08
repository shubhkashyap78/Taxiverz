// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const stickyNav = document.getElementById('sticky-nav');
    const carouselSection = document.querySelector('.carousel-section');
    const carouselHeight = carouselSection.offsetHeight;
    
    if (window.scrollY > carouselHeight - 100) {
        stickyNav.classList.add('show');
    } else {
        stickyNav.classList.remove('show');
    }
});

// Mobile menu for sticky nav
const mobileMenuSticky = document.getElementById('mobile-menu-sticky');
const navMenuSticky = document.getElementById('nav-menu-sticky');

if (mobileMenuSticky && navMenuSticky) {
    mobileMenuSticky.addEventListener('click', () => {
        mobileMenuSticky.classList.toggle('active');
        navMenuSticky.classList.toggle('active');
    });
}

// Form Submission Handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.nav-dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Auto slide every 4 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Trip Type Toggle
document.querySelectorAll('.trip-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.trip-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Booking Form Handler
document.querySelector('.booking-form .btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    
    const from = document.querySelector('.booking-form input[placeholder="Pickup Location"]').value;
    const to = document.querySelector('.booking-form input[placeholder="Drop Location"]').value;
    const datetime = document.querySelector('.booking-form input[type="datetime-local"]').value;
    const carType = document.querySelector('.booking-form select').value;
    
    if (from && to && datetime && carType !== 'Select Car Type') {
        alert(`Fare Quote Request!\nFrom: ${from}\nTo: ${to}\nDate & Time: ${new Date(datetime).toLocaleString()}\nCar Type: ${carType}\n\nEstimated fare will be sent via SMS/WhatsApp`);
    } else {
        alert('Please fill in all booking details.');
    }
});

// Scroll Animation for Service Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to service cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Auto-update current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${currentYear} Taxiverz. All rights reserved.`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}