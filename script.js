
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
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Prevent default form submission initially
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
            // If form is valid, submit it
            this.submit();
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
                'Images/UniHack.jpg',
                'Images/UniHackTEAM.jpg',
                'Images/UniHack1.jpg',
                'Images/CareerCompassLogo.jpg'
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
                
                'Images/Sanren.jpg'
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
                'Images/OutreachGardeniaPrim.jpg',
                'Images/OutreachTeam.jpg'
                
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
                'Images/Sais2024.jpg',
                'Images/SaisBuilding.jpg',
                'Images/SaisVR.jpg',
                'Images/SaisBuilding.jpg',
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

//
// PROJECT SECTION
// Project Modal and Carousel Functionality - Separate from Extracurricular Activities
document.addEventListener('DOMContentLoaded', function() {
    // Project data with images and descriptions
    const projectData = {
        'fintion-banking': {
            title: 'Fintion Banking',
            status: 'Public',
            
            
            images: [
                'Images/FintionLogo.png',
                
            ],
            description: `
                <p>Fintion Banking is a full-stack banking application that provides secure transactions and comprehensive account management features.</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>Secure user authentication and authorization</li>
                    <li>Account creation and management</li>
                    <li>Deposits, withdrawals, and fund transfers between accounts</li>
                    <li>Transaction history and account statements</li>
                    <li>Bill payments and scheduled transfers</li>
                    <li>Real-time balance updates and notifications</li>
                    <li>Admin dashboard for account management and oversight</li>
                </ul>
                
                <p><strong>Technical Implementation:</strong></p>
                <ul>
                    <li>PHP backend with MVC architecture</li>
                    <li>MySQL database for secure data storage</li>
                    <li>JavaScript for dynamic frontend interactions</li>
                    <li>AJAX for asynchronous data loading</li>
                    <li>Responsive design for all device sizes</li>
                    <li>Security features including prepared statements, input validation, and CSRF protection</li>
                </ul>
                
                <p>This project demonstrates my ability to create secure, full-stack applications with complex business logic and database interactions.</p>
            `,
            technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'AJAX', 'jQuery', 'Bootstrap']
        },
        'immersive-tech': {
            title: 'Immersive Technologies',
            status: 'Public',
            
            
            images: [
                'Images/ArcadeScene.png',
                
            ],
            description: `
                <p>This portfolio showcases my work in Virtual Reality (VR) and Augmented Reality (AR) technologies, demonstrating immersive experiences and interactive applications.</p>
                
                <p><strong>Project Highlights:</strong></p>
                <ul>
                    <li>AR educational application that brings textbook content to life</li>
                    <li>VR campus tour for prospective university students</li>
                    <li>Interactive AR product visualization for e-commerce</li>
                    <li>VR training simulation for industrial safety procedures</li>
                    <li>AR navigation system for indoor spaces</li>
                </ul>
                
                <p><strong>Technical Details:</strong></p>
                <ul>
                    <li>Developed using Unity3D with C# scripting</li>
                    <li>AR implementations using ARCore and ARKit</li>
                    <li>VR experiences optimized for Oculus and SteamVR platforms</li>
                    <li>3D modeling and texturing using Blender and 3ds Max</li>
                    <li>Performance optimization for mobile AR applications</li>
                </ul>
                
                <p>This collection demonstrates my skills in creating engaging and interactive immersive experiences across multiple platforms and use cases.</p>
            `,
            technologies: ['Unity', 'C#', 'AR', 'VR', 'ARCore', 'ARKit', 'Blender', '3ds Max', 'Oculus SDK']
        },
        'feedem-now': {
            title: 'Feedem Now',
            status: 'Public',
            
            
            images: [
                'Images/FeedeemNowHomePage.png',
                'Images/FeedeemNowLogin.png',
                'Images/FeedeemNowCheckOut.png',
                'Images/FeedeemNowDB.png',
                
            ],
            description: `
                <p>Feedem Now is a web-based food ordering platform designed specifically for university students, helping them save time by pre-ordering meals and avoiding long cafeteria lines.</p>
                
                <p><strong>Key Features:</strong></p>
                <ul>
                    <li>User-friendly menu browsing with filtering options</li>
                    <li>Secure account creation and management</li>
                    <li>Order customization and special instructions</li>
                    <li>Multiple payment options including student card integration</li>
                    <li>Order tracking and notifications</li>
                    <li>Scheduled orders for regular meal planning</li>
                    <li>Vendor dashboard for order management</li>
                    <li>Analytics for popular items and peak ordering times</li>
                </ul>
                
                <p><strong>Technical Implementation:</strong></p>
                <ul>
                    <li>PHP backend with RESTful API architecture</li>
                    <li>MySQL database for data storage</li>
                    <li>JavaScript frontend with responsive design</li>
                    <li>Real-time notifications using WebSockets</li>
                    <li>Payment gateway integration</li>
                    <li>Mobile-first approach for optimal user experience</li>
                </ul>
                
                <p>This project addresses a real need in the university community and demonstrates my ability to create practical, user-centered web applications.</p>
            `,
            technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'AJAX', 'WebSockets', 'Responsive Design']
        },
        'traffic-lights': {
            title: 'Traffic Lights Simulator',
            status: 'Public',
            
            images: [
                'Images/RasPi.jpg',
                
            ],
            description: `
                <p>This project implements a practical traffic light control system using a Raspberry Pi, integrating networking concepts to simulate real-world traffic management scenarios.</p>
                
                <p><strong>Project Features:</strong></p>
                <ul>
                    <li>Physical traffic light model with LED indicators</li>
                    <li>Programmable timing sequences for different traffic patterns</li>
                    <li>Sensor integration for vehicle detection simulation</li>
                    <li>Network communication between multiple traffic light nodes</li>
                    <li>Web interface for monitoring and controlling the system</li>
                    <li>Data logging and traffic pattern analysis</li>
                    <li>Emergency vehicle priority simulation</li>
                </ul>
                
                <p><strong>Technical Implementation:</strong></p>
                <ul>
                    <li>Python programming for Raspberry Pi GPIO control</li>
                    <li>Socket programming for network communication</li>
                    <li>Flask web server for the control interface</li>
                    <li>SQLite database for logging and data analysis</li>
                    <li>Hardware integration with LEDs, buttons, and sensors</li>
                    <li>Multithreading for concurrent operations</li>
                </ul>
                
                <p>This project demonstrates my skills in hardware-software integration, IoT concepts, and practical application of networking principles in a physical computing context.</p>
            `,
            technologies: ['Python', 'Raspberry Pi', 'GPIO', 'Flask', 'SQLite', 'Socket Programming', 'IoT', 'Hardware Integration']
        },
        
        'SmartCityAR': {
            title: 'SmartCityAR',
            status: 'Public',
            
            images: [
                'Images/InfoSmartCityAR.png',
                
            ],
            description: `
        <p>SmartCity AR is an interactive Augmented Reality application designed to visualize sustainable urban planning concepts for city infrastructure and public transport improvements.</p>

        <p><strong>Key Features:</strong></p>
        <ul>
            <li>AR visualization of proposed city upgrades using 3D models</li>
            <li>Toggle between sustainable and unsustainable urban layouts</li>
            <li>Interactive layers to explore traffic, public transport, and pedestrian zones</li>
            <li>Touch-based object interaction and educational tooltips</li>
            <li>Designed for urban planners, students, and educators</li>
        </ul>

        <p><strong>Technical Implementation:</strong></p>
        <ul>
            <li>Unity engine with AR Foundation</li>
            <li>3D modeling with optimized low-poly assets</li>
            <li>UI system for scene interaction and toggling</li>
            <li>Surface detection and plane tracking for accurate placement</li>
            <li>Performance optimized for mobile devices</li>
        </ul>
                
                <p>This website demonstrates my front-end development skills and attention to detail in creating engaging user interfaces.</p>
            `,
            technologies: ['Unity', 'AR Foundation', 'C#', '3D Modelling', 'Mobile AR', 'UI/UX Design']
        }
    };

    
    

    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    const projectModalContainer = document.querySelector('#project-modal');
    const projectModal = projectModalContainer.querySelector('.project-modal');
    const projectModalClose = projectModalContainer.querySelector('.project-modal-close');
    const projectCarouselContainer = projectModalContainer.querySelector('.project-carousel-container');
    const projectCarouselIndicators = projectModalContainer.querySelector('.project-carousel-indicators');
    const projectModalTitle = projectModalContainer.querySelector('.project-modal-title');
    const projectModalStatus = projectModalContainer.querySelector('.project-modal-status');
    const projectGithubLink = projectModalContainer.querySelector('.github-link');
    const projectDemoLink = projectModalContainer.querySelector('.demo-link');
    const projectModalDescription = projectModalContainer.querySelector('.project-modal-description');
    const projectModalTechTags = projectModalContainer.querySelector('.project-modal-tech-tags');

    // Add click event to each project card
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get project ID from data attribute
            const projectId = this.getAttribute('data-project');
            const data = projectData[projectId];
            
            if (!data) return;

            // Populate modal with data
            projectModalTitle.textContent = data.title;
            projectModalStatus.textContent = data.status;
            projectModalDescription.innerHTML = data.description;
            
            // Set GitHub link
            if (data.github) {
                projectGithubLink.href = data.github;
                projectGithubLink.style.display = 'inline-flex';
            } else {
                projectGithubLink.style.display = 'none';
            }
            
            // Set demo link
            if (data.demo) {
                projectDemoLink.href = data.demo;
                projectDemoLink.style.display = 'inline-flex';
            } else {
                projectDemoLink.style.display = 'none';
            }

            // Clear existing tech tags and add new ones
            projectModalTechTags.innerHTML = '';
            data.technologies.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'project-modal-tech-tag';
                tag.textContent = tech;
                projectModalTechTags.appendChild(tag);
            });

            // Clear existing carousel slides and indicators
            projectCarouselContainer.innerHTML = '';
            projectCarouselIndicators.innerHTML = '';

            // Create carousel slides and indicators
            data.images.forEach((image, index) => {
                // Create slide
                const slide = document.createElement('div');
                slide.className = `project-carousel-slide ${index === 0 ? 'active' : ''}`;
                slide.innerHTML = `<img src="${image}" alt="${data.title} - Screenshot ${index + 1}">`;
                projectCarouselContainer.appendChild(slide);

                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = `project-carousel-indicator ${index === 0 ? 'active' : ''}`;
                indicator.dataset.index = index;
                projectCarouselIndicators.appendChild(indicator);

                // Add click event to indicator
                indicator.addEventListener('click', function() {
                    const slideIndex = parseInt(this.dataset.index);
                    activateProjectSlide(slideIndex);
                });
            });

            // Show the modal
            projectModalContainer.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling

            // Start the carousel
            startProjectCarousel();
        });
    });

    // Close modal when clicking the close button
    projectModalClose.addEventListener('click', function() {
        closeProjectModal();
    });

    // Close modal when clicking outside the modal content
    projectModalContainer.addEventListener('click', function(e) {
        if (e.target === projectModalContainer) {
            closeProjectModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModalContainer.classList.contains('active')) {
            closeProjectModal();
        }
    });

    function closeProjectModal() {
        projectModalContainer.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        stopProjectCarousel();
    }

    // Carousel functionality
    let projectCarouselInterval;
    let currentProjectSlide = 0;

    function startProjectCarousel() {
        // Reset current slide
        currentProjectSlide = 0;
        
        // Start automatic sliding
        projectCarouselInterval = setInterval(() => {
            const slides = document.querySelectorAll('.project-carousel-slide');
            currentProjectSlide = (currentProjectSlide + 1) % slides.length;
            activateProjectSlide(currentProjectSlide);
        }, 5000); // Change slide every 5 seconds
    }

    function stopProjectCarousel() {
        clearInterval(projectCarouselInterval);
    }

    function activateProjectSlide(index) {
        const slides = document.querySelectorAll('.project-carousel-slide');
        const indicators = document.querySelectorAll('.project-carousel-indicator');
        
        // Deactivate all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Activate the selected slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Update current slide
        currentProjectSlide = index;
    }
});