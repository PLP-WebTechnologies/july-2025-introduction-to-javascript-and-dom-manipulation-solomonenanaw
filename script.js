/*
===============================================
PART 1: VARIABLE DECLARATIONS AND CONDITIONALS
===============================================
*/

// Variable declarations
const currentHour = new Date().getHours();
const isMobile = window.innerWidth < 768;
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
const cards = document.querySelectorAll('.card');
const navLinks = document.querySelectorAll('.nav-link');

// Conditional logic based on time of day
let greeting;
if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

// Conditional styling based on device type
if (isMobile) {
    document.body.classList.add('mobile-view');
} else {
    document.body.classList.add('desktop-view');
}

// Conditional content modification
if (document.querySelector('.content h1')) {
    const heading = document.querySelector('.content h1');
    heading.textContent = `${greeting} Welcome to Target Integrated Solution PLC`;
}

/*
===============================================
PART 2: CUSTOM FUNCTIONS
===============================================
*/

// Function 1: Theme toggler
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Function 2: Product interaction handler
function handleProductInteraction(event) {
    const card = event.currentTarget;
    const productTitle = card.querySelector('h2').textContent;
    
    // Toggle expanded state
    card.classList.toggle('expanded');
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `You viewed: ${productTitle}`;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.backgroundColor = primaryColor;
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

/*
===============================================
PART 3: LOOP EXAMPLES
===============================================
*/

// Loop 1: Process navigation links
navLinks.forEach((link, index) => {
    // Add hover effect with delay based on index
    link.style.transitionDelay = `${index * 0.1}s`;
    
    // Add click event
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Navigation link clicked: ${link.textContent}`);
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
    });
});

// Loop 2: Enhance product cards with dynamic content
cards.forEach((card, index) => {
    // Add unique data attribute
    card.setAttribute('data-product-id', index + 1);
    
    // Create and append badge
    const badge = document.createElement('span');
    badge.className = 'product-badge';
    badge.textContent = `#${index + 1}`;
    badge.style.position = 'absolute';
    badge.style.top = '10px';
    badge.style.right = '10px';
    badge.style.backgroundColor = primaryColor;
    badge.style.color = 'white';
    badge.style.padding = '5px 10px';
    badge.style.borderRadius = '15px';
    badge.style.fontSize = '0.8rem';
    
    card.style.position = 'relative';
    card.appendChild(badge);
    
    // Add interaction event
    card.addEventListener('click', handleProductInteraction);
});

/*
===============================================
PART 4: DOM INTERACTIONS
===============================================
*/

// DOM Interaction 1: Create theme toggle button
const themeToggleBtn = document.createElement('button');
themeToggleBtn.textContent = 'Toggle Theme';
themeToggleBtn.className = 'theme-toggle';
themeToggleBtn.style.position = 'fixed';
themeToggleBtn.style.bottom = '20px';
themeToggleBtn.style.left = '20px';
themeToggleBtn.style.padding = '10px 20px';
themeToggleBtn.style.backgroundColor = primaryColor;
themeToggleBtn.style.color = 'white';
themeToggleBtn.style.border = 'none';
themeToggleBtn.style.borderRadius = '5px';
themeToggleBtn.style.cursor = 'pointer';
themeToggleBtn.style.zIndex = '1000';

document.body.appendChild(themeToggleBtn);
themeToggleBtn.addEventListener('click', toggleTheme);

// DOM Interaction 2: Add scroll effect to header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        header.style.backgroundColor = '#1a252f'; // Darker shade
    } else {
        header.style.boxShadow = 'none';
        header.style.backgroundColor = ''; // Reset to default
    }
});

// DOM Interaction 3: Create and manage "Back to Top" button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '&uarr;';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.left = '50%';
backToTopBtn.style.transform = 'translateX(-50%)';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.backgroundColor = primaryColor;
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.fontSize = '1.2rem';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '1000';

document.body.appendChild(backToTopBtn);

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// Add CSS for dark theme (dynamically injected)
const darkThemeStyles = `
    [data-theme="dark"] {
        --primary-color: #27ae60;
        --secondary-color: #1a252f;
        --light-color: #34495e;
        --text-color: #ecf0f1;
        background-color: #121212;
        color: #ecf0f1;
    }
    
    [data-theme="dark"] .card,
    [data-theme="dark"] .sidebar-widget {
        background-color: #2c3e50;
        color: #ecf0f1;
    }
    
    [data-theme="dark"] .footer {
        background-color: #1a252f;
    }
    
    [data-theme="dark"] .nav {
        background-color: #1a252f;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = darkThemeStyles;
document.head.appendChild(styleSheet);

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});
