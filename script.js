        // Create floating particles
        function createParticles() {
            const particlesContainer = document.querySelector('.bg-particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Animate skill bars on scroll
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0%';
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 200);
                    }
                });
            });

            skillBars.forEach(bar => observer.observe(bar));
        }

        // Smooth scrolling for navigation links
        function setupSmoothScrolling() {
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // // Smooth scrolling for navigation footer links
        // function setupSmoothScrolling() {
        //     const navLinks = document.querySelectorAll('.nav-links a');
        //     navLinks.forEach(link => {
        //         link.addEventListener('click', (e) => {
        //             e.preventDefault();
        //             const targetId = link.getAttribute('href');
        //             const targetSection = document.querySelector(targetId);
        //             if (targetSection) {
        //                 targetSection.scrollIntoView({
        //                     behavior: 'smooth',
        //                     block: 'start'
        //                 });
        //             }
        //         });
        //     });
        // }


        // Header scroll effect
        function setupHeaderScroll() {
            const header = document.querySelector('header');
            let lastScroll = 0;

            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    header.style.background = 'rgba(26, 26, 46, 0.95)';
                    header.style.backdropFilter = 'blur(20px)';
                } else {
                    header.style.background = 'rgba(26, 26, 46, 0.9)';
                    header.style.backdropFilter = 'blur(10px)';
                }

                lastScroll = currentScroll;
            });
        }

        // Form submission
        function setupForm() {
            const form = document.querySelector('.contact-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Simulate form submission
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Message sent successfully!');
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            });
        }

        // Add hover effects to cards
        function addCardEffects() {
            const cards = document.querySelectorAll('.skill-card, .portfolio-card, .certificate-card, .timeline-content');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = card.classList.contains('timeline-content') ? 'scale(1.02)' : 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'none';
                });
            });
        }

        // Parallax effect for glowing orbs
        function setupParallax() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const orbs = document.querySelectorAll('.glow-orb');
                
                orbs.forEach((orb, index) => {
                    const speed = 0.2 + (index * 0.1);
                    orb.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        }

        // Active navigation highlight
        function setupActiveNavigation() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, { threshold: 0.3 });

            sections.forEach(section => observer.observe(section));
        }

        // Initialize all functions
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            animateSkillBars();
            setupSmoothScrolling();
            setupHeaderScroll();
            setupForm();
            addCardEffects();
            setupParallax();
            setupActiveNavigation();
        });

        // Add CSS for active navigation
        const style = document.createElement('style');
        style.textContent = `
            .nav-links a.active {
                color: #667eea !important;
            }
            .nav-links a.active::after {
                width: 100% !important;
            }
        `;
        document.head.appendChild(style);