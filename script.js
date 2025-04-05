
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    document.addEventListener('mousedown', function() {
        cursor.style.width = '15px';
        cursor.style.height = '15px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });

    document.addEventListener('mouseup', function() {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });

    // Sticky Header
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('sticky');
            backToTop.classList.remove('active');
        }
        
        // Reveal animations on scroll
        revealElements();
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Typing Animation
    const typingElement = document.querySelector('.typing');
    const words = ['Software Engineering', 'Problem Solving', 'Technology','Full Stack Development'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        typingElement.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            // Typing
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            charIndex--;
            setTimeout(type, 50);
        } else {
            // Switch words
            isDeleting = !isDeleting;
            
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            setTimeout(type, isDeleting ? 1000 : 500);
        }
    }

    if (typingElement) {
        setTimeout(type, 1000);
    }

    // Reveal animations on scroll
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    // Animate skill bars when in viewport
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        
        skillBars.forEach(bar => {
            const windowHeight = window.innerHeight;
            const elementTop = bar.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                const width = bar.getAttribute('data-width') + '%';
                bar.style.width = width;
            }
        });
    }

    // Call animations on load and scroll
    window.addEventListener('load', function() {
        revealElements();
        animateSkillBars();
    });
    
    window.addEventListener('scroll', animateSkillBars);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link based on scroll position
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    
    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            if (nameInput.value.trim() === '') {
                isValid = false;
                nameInput.style.borderColor = 'red';
            } else {
                nameInput.style.borderColor = '';
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '';
            }
            
            if (subjectInput.value.trim() === '') {
                isValid = false;
                subjectInput.style.borderColor = 'red';
            } else {
                subjectInput.style.borderColor = '';
            }
            
            if (messageInput.value.trim() === '') {
                isValid = false;
                messageInput.style.borderColor = 'red';
            } else {
                messageInput.style.borderColor = '';
            }
            
            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Message sent successfully!');
                contactForm.reset();
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Modal and Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Extracurricular activity data with images and descriptions
    const extracurricularData = {
        'standard-bank-unihack': {
            title: 'Standard Bank UniHack 2025',
            organization: 'Standard Bank',
            date: '2025',
            images: [
                'images/standard-bank-event.jpg',
                'images/standard-bank-event-2.jpg',
                'images/standard-bank-event-3.jpg'
            ],
            description: `
                <p>The Standard Bank UniHack 2025 was an intensive 48-hour hackathon that brought together talented students from universities across South Africa to develop innovative solutions addressing youth unemployment.</p>
                
                <p>Our team of four developed a real-time career guidance platform that uses AI to match students' skills and interests with market demands and educational pathways. The platform included features such as:</p>
                
                <ul>
                    <li>Personalized skill assessment and career path recommendations</li>
                    <li>Real-time labor market insights and demand forecasting</li>
                    <li>Direct connections to relevant training programs and job opportunities</li>
                    <li>Mentorship matching with industry professionals</li>
                </ul>
                
                <p>We conducted extensive market research, designed the solution architecture, developed a working prototype, and presented our final pitch to a panel of industry professionals and Standard Bank executives.</p>
                
                <p>This experience enhanced my teamwork, problem-solving, and presentation skills while providing valuable insights into the financial technology sector and Standard Bank's innovation initiatives.</p>
            `
        },
        'sanren-cyber-challenge': {
            title: 'SANReN Cyber Security Challenge 2024',
            organization: 'SANReN',
            date: '2024',
            images: [
                'images/sanren-event.jpg',
                'images/sanren-event-2.jpg',
                'images/sanren-event-3.jpg'
            ],
            description: `
                <p>The SANReN Cyber Security Challenge is South Africa's premier cybersecurity competition for university students, designed to test and enhance skills in various security domains.</p>
                
                <p>I participated in this intensive Capture the Flag (CTF) competition, solving real-world cybersecurity problems through:</p>
                
                <ul>
                    <li>Cryptography challenges that required breaking various encryption schemes</li>
                    <li>Digital forensics investigations to recover and analyze evidence</li>
                    <li>Web exploitation exercises to identify and exploit vulnerabilities</li>
                    <li>Reverse engineering of software to understand functionality and find weaknesses</li>
                </ul>
                
                <p>The competition provided hands-on experience with industry-standard security tools and methodologies, significantly enhancing my technical skills and problem-solving abilities in cybersecurity contexts.</p>
                
                <p>This experience deepened my understanding of security principles and best practices while connecting me with the broader cybersecurity community in South Africa.</p>
            `
        },
        'school-outreach': {
            title: 'School Outreach Program',
            organization: 'WebMax x Enactus',
            date: 'Sept 2024 - Present',
            images: [
                'images/webmax-event.jpg',
                'images/webmax-event-2.jpg',
                'images/webmax-event-3.jpg'
            ],
            description: `
                <p>The School Outreach Program is a collaborative initiative between WebMax and Enactus aimed at introducing technology concepts to high school students in underserved communities around Cape Town.</p>
                
                <p>As a volunteer educator, I:</p>
                
                <ul>
                    <li>Conducted interactive workshops introducing students to computer science fundamentals, artificial intelligence concepts, and cybersecurity awareness</li>
                    <li>Developed age-appropriate learning materials that make complex technical concepts accessible and engaging</li>
                    <li>Led problem-solving workshops using educational games like Tanks by Tangabl, encouraging logical thinking and computational reasoning</li>
                    <li>Mentored students interested in pursuing technology-related careers, providing guidance on educational pathways and opportunities</li>
                </ul>
                
                <p>This ongoing volunteer work has been incredibly rewarding, allowing me to share my passion for technology while developing my communication and leadership skills. Seeing students' excitement when they grasp new concepts or successfully complete a coding challenge has been one of the most fulfilling aspects of my university experience.</p>
            `
        },
        'sais-volunteer': {
            title: 'SAIS \'2024 Volunteer',
            organization: 'South African Innovation Summit',
            date: 'Aug 2024 - Sept 2024',
            images: [
                'images/sais-event.jpg',
                'images/sais-event-2.jpg',
                'images/sais-event-3.jpg'
            ],
            description: `
                <p>The South African Innovation Summit (SAIS) is Africa's largest startup event, bringing together entrepreneurs, investors, and innovation enablers from across the continent and beyond.</p>
                
                <p>As a technical volunteer, I:</p>
                
                <ul>
                    <li>Supported the technical operations team in setting up and maintaining AV equipment for presentations and workshops</li>
                    <li>Assisted with workshop facilitation, helping participants navigate technical challenges during hands-on sessions</li>
                    <li>Provided technical demonstrations of emerging technologies at the innovation showcase</li>
                    <li>Engaged with industry professionals and startups, building valuable connections in the technology sector</li>
                </ul>
                
                <p>This experience provided unique insights into South Africa's innovation ecosystem and exposed me to cutting-edge technologies and business models. Working alongside industry leaders and innovative startups expanded my understanding of how technology can address real-world challenges across various sectors.</p>
                
                <p>The connections made during this event have been invaluable for my professional network and have opened doors to potential future opportunities.</p>
            `
        },
        'uwc-it-mentor': {
            title: 'Mentor',
            organization: 'UWC IT Society',
            date: 'July 2024 - Apr 2025',
            images: [
                'images/uwc-it-event.jpg',
                'images/uwc-it-event-2.jpg',
                'images/uwc-it-event-3.jpg'
            ],
            description: `
                <p>As a mentor with the UWC IT Society, I provide guidance and support to junior students navigating their computer science and information technology studies.</p>
                
                <p>My responsibilities include:</p>
                
                <ul>
                    <li>Conducting weekly mentoring sessions where students can ask questions about coursework, programming challenges, or career planning</li>
                    <li>Explaining complex IT concepts in accessible ways, helping students build a strong foundation in technical subjects</li>
                    <li>Reviewing code and providing constructive feedback to help students improve their programming skills</li>
                    <li>Creating a supportive and collaborative learning environment where students feel comfortable asking questions and sharing ideas</li>
                </ul>
                
                <p>This mentoring role has not only allowed me to give back to the university community but has also deepened my own understanding of computer science concepts. Explaining technical topics to others has reinforced my knowledge and improved my communication skills.</p>
                
                <p>Seeing mentees grow in confidence and ability has been extremely rewarding and has confirmed my interest in potentially pursuing teaching or training roles in the future.</p>
            `
        }
    };

    // Get all extracurricular cards
    const extracurricularCards = document.querySelectorAll('.extracurricular-card');
    const modalContainer = document.querySelector('.modal-container');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const modalTitle = document.querySelector('.modal-title');
    const modalOrganization = document.querySelector('.modal-organization');
    const modalDate = document.querySelector('.modal-date');
    const modalDescription = document.querySelector('.modal-description');

    // Add click event to each extracurricular card
    extracurricularCards.forEach(card => {
        card.addEventListener('click', function() {
            // Determine which card was clicked
            let cardId;
            if (this.querySelector('h3').textContent.includes('Standard Bank UniHack')) {
                cardId = 'standard-bank-unihack';
            } else if (this.querySelector('h3').textContent.includes('SANReN')) {
                cardId = 'sanren-cyber-challenge';
            } else if (this.querySelector('h3').textContent.includes('School Outreach')) {
                cardId = 'school-outreach';
            } else if (this.querySelector('h3').textContent.includes('SAIS')) {
                cardId = 'sais-volunteer';
            } else if (this.querySelector('h3').textContent.includes('Mentor')) {
                cardId = 'uwc-it-mentor';
            }

            // Get the data for this card
            const data = extracurricularData[cardId];
            if (!data) return;

            // Populate modal with data
            modalTitle.textContent = data.title;
            modalOrganization.textContent = data.organization;
            modalDate.textContent = data.date;
            modalDescription.innerHTML = data.description;

            // Clear existing carousel slides and indicators
            carouselContainer.innerHTML = '';
            carouselIndicators.innerHTML = '';

            // Create carousel slides and indicators
            data.images.forEach((image, index) => {
                // Create slide
                const slide = document.createElement('div');
                slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
                slide.innerHTML = `<img src="${image}" alt="${data.title} - Image ${index + 1}">`;
                carouselContainer.appendChild(slide);

                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
                indicator.dataset.index = index;
                carouselIndicators.appendChild(indicator);

                // Add click event to indicator
                indicator.addEventListener('click', function() {
                    const slideIndex = parseInt(this.dataset.index);
                    activateSlide(slideIndex);
                });
            });

            // Show the modal
            modalContainer.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling

            // Start the carousel
            startCarousel();
        });
    });

    // Close modal when clicking the close button
    modalClose.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside the modal content
    modalContainer.addEventListener('click', function(e) {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modalContainer.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        stopCarousel();
    }

    // Carousel functionality
    let carouselInterval;
    let currentSlide = 0;

    function startCarousel() {
        // Reset current slide
        currentSlide = 0;
        
        // Start automatic sliding
        carouselInterval = setInterval(() => {
            const slides = document.querySelectorAll('.carousel-slide');
            currentSlide = (currentSlide + 1) % slides.length;
            activateSlide(currentSlide);
        }, 5000); // Change slide every 5 seconds
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    function activateSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');
        
        // Deactivate all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Activate the selected slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Update current slide
        currentSlide = index;
    }
});