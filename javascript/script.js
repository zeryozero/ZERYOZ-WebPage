/**
 * Zeryoz Webpage - Main JavaScript File
 * Handles interactivity and smooth user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== FLOATING NAVBAR CONTROLLER ==========
    const floatingNav = document.getElementById('floatingNav');
    const navCompactBar = document.getElementById('navCompactBar');
    const navToggleBtn = document.getElementById('navToggleBtn');
    const navCloseBtn = document.getElementById('navCloseBtn');
    const navBackdrop = document.getElementById('navBackdrop');
    const langOptions = document.querySelectorAll('.lang-option');
    const allNavAnchors = document.querySelectorAll('.nav-link-item, .nav-cta-card, .expanded-logo-link');

    // Open floating navbar
    function openNavbar() {
        if (!floatingNav) return;
        floatingNav.classList.add('is-expanded');
        if (navBackdrop) navBackdrop.classList.add('is-active');
        if (navToggleBtn) navToggleBtn.setAttribute('aria-expanded', 'true');
    }

    // Close floating navbar
    function closeNavbar() {
        if (!floatingNav) return;
        floatingNav.classList.remove('is-expanded');
        if (navBackdrop) navBackdrop.classList.remove('is-active');
        if (navToggleBtn) navToggleBtn.setAttribute('aria-expanded', 'false');
    }

    // Toggle event listeners
    if (navCompactBar) {
        navCompactBar.addEventListener('click', (e) => {
            e.stopPropagation();
            openNavbar();
        });
    }

    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeNavbar();
        });
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeNavbar);
    }

    // Keyboard dismissal (Escape key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && floatingNav && floatingNav.classList.contains('is-expanded')) {
            closeNavbar();
        }
    });

    // Language selector interactivity
    langOptions.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            langOptions.forEach(opt => opt.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Smooth navigation & auto-close on link click
    allNavAnchors.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    closeNavbar();
                    setTimeout(() => {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 200);
                }
            }
        });
    });

    // ========== PROJECT CARD INTERACTION ==========

    // ========== LOAD PROJECTS DYNAMICALLY (TEMPLATE) ==========
    /**
     * Uncomment and customize below to load projects from an array
     * 
     * const projects = [
     *     {
     *         title: 'Nombre del Proyecto 1',
     *         description: 'Descripción del proyecto...',
     *         icon: '🚀',
     *         link: '#'
     *     },
     *     {
     *         title: 'Nombre del Proyecto 2',
     *         description: 'Descripción del proyecto...',
     *         icon: '💻',
     *         link: '#'
     *     }
     * ];
     * 
     * function renderProjects(projects) {
     *     const container = document.querySelector('.projects-grid');
     *     projects.forEach(project => {
     *         const card = document.createElement('article');
     *         card.className = 'project-card';
     *         card.innerHTML = `
     *             <div class="project-image">
     *                 <span class="placeholder-icon">${project.icon}</span>
     *             </div>
     *             <h3>${project.title}</h3>
     *             <p>${project.description}</p>
     *             <a href="${project.link}" class="project-link">Ver más →</a>
     *         `;
     *         container.appendChild(card);
     *     });
     * }
     * 
     * renderProjects(projects);
     */

    // ========== CONSOLE GREETING ==========
    console.log('%c¡Hola desde Zeryoz! 🚀', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cTu sitio web está listo para ser personalizado.', 'color: #7c3aed; font-size: 14px;');
});

/**
 * Helper Functions
 */

/**
 * Format date for footer (auto-updates)
 */
function formatCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear.toString();
}

// Uncomment to use dynamic year in footer
// document.querySelector('footer p').innerHTML = 
//     `© ${formatCurrentYear()} Zeryoz. Todos los derechos reservados.`;

/**
 * Simple animation utility for elements
 */
function animateOnScroll(element) {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    observer.observe(element);
}

/**
 * Initialize animation on elements with .animate-on-scroll class
 */
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.animate-on-scroll').forEach(animateOnScroll);
// });
