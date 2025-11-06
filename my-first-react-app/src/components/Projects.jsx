import { useState, useEffect, useRef } from 'react';
import '../styles/projects.css';

const projects = [
  {
    title: 'E-Commerce Website',
    description: "A full-stack MERN e-commerce platform featuring secure user authentication, product management, cart functionality, Stripe payments, and an admin dashboard. Built with modern UI and RESTful API architecture.",
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Tailwind', "JWT", "NodeMailer", "Multer", "bcrypt", "pdfkit","chartjs"],
    image: '/Images/ecommerce-website-homePage.png',
    liveLink: 'https://github.com/Shila-Mehta/ecommerce-website.git',
    githubLink: 'https://github.com/Shila-Mehta/ecommerce-website.git',
    featured: true,
  },
  {
    title: 'Inventory Management System',
    description: "A full-stack inventory management application built with Node.js, Express, and EJS. Users can efficiently track products, manage stock levels, and update inventory through a responsive, user-friendly interface. The app uses PostgreSQL for data storage.",
    technologies: ['Node.js', 'Express', 'EJS', 'CSS', 'JavaScript', 'PostgreSQL'],
    image: "/Images/Inventry.png",
    liveLink: 'https://github.com/Shila-Mehta/Inventry-Application.git',
    githubLink:'https://github.com/Shila-Mehta/Inventry-Application.git',
    featured: true,
  },
  {
    title: 'Shopping Cart',
    description: "A dynamic e-commerce shopping cart application that allows users to browse products, add items to the cart, update quantities, and calculate totals in real-time. Features include product filtering, cart persistence, and responsive design.",
    technologies: ['React', 'Tailwind', "fakeClothing Api"],
    image: "/Images/Shopping Cart.png",
    liveLink: 'https://shopping-cart-nimra.netlify.app/',
    githubLink: 'https://github.com/Shila-Mehta/Shopping-Cart.git',
    featured: true,
  },
  {
    title: 'Memory Card Game',
    description: "An interactive memory matching game where users flip cards to find matching pairs. The game tracks score, best score, and includes dynamic content fetched from external APIs (e.g., Pokémon or Giphy).",
    technologies: ['HTML', 'webpack', 'CSS', 'React', 'Pokemon Api'],
    image: "/Images/memory-card-game.png",
    liveLink: 'https://github.com/Shila-Mehta/memory-card-game',
    githubLink: 'https://github.com/Shila-Mehta/memory-card-game',
  },
  {
    title: 'CV Builder',
    description: "A dynamic CV builder application that allows users to create, preview, and print professional resumes. Features include live editing, customizable sections, and real-time preview of the CV layout.",
    technologies: ['HTML', 'webpack', 'CSS', 'React'],
    image: "/Images/cv-builder-nimra.netlify.app_ (1).png",
    liveLink: 'https://cv-builder-nimra.netlify.app/',
    githubLink: 'https://github.com/Shila-Mehta/CV-Builder.git',
    featured: true,
  },
  {
    title: 'BattleShip Game',
    description: "A two-player turn-based Battleship game built with JavaScript and DOM manipulation. Includes drag-and-drop ship placement, hit detection, and game state management with comprehensive Jest testing.",
    technologies: ['HTML', 'webpack', 'CSS', 'Jest', 'Javascript'],
    image: "/Images/BattleShip.png",
    liveLink: 'https://shila-mehta.github.io/Battleship/',
    githubLink: 'https://github.com/Shila-Mehta/Battleship.git',
  },
  {
    title: 'Weather App',
    description: 'A responsive weather application that fetches real-time weather data from Visual Crossing API. Features include location search, loading states, animated weather icons, and detailed forecast information.',
    technologies: ['HTML', 'webpack', 'CSS', 'API', 'Javascript'],
    image: "/Images/Weather.png",
    liveLink: 'https://shila-mehta.github.io/WeatherApp/',
    githubLink: 'https://github.com/Shila-Mehta/WeatherApp.git',
  },
  {
    title: 'Todo List',
    description: 'A feature-rich todo list application with task management capabilities. Users can add, edit, delete, and mark tasks as complete. Includes local storage persistence and priority organization.',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/TodoList.png',
    liveLink: 'https://shila-mehta.github.io/Todo-List/',
    githubLink: 'https://github.com/Shila-Mehta/Todo-List.git',
  },
  {
    title: 'Restaurant Page',
    description: 'A beautifully designed restaurant website with dynamic menu navigation, smooth scrolling sections, and an elegant layout. Built with modular JavaScript and responsive CSS for optimal viewing on all devices.',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Restaurant.png',
    liveLink: 'https://shila-mehta.github.io/Restaurant/',
    githubLink: 'https://github.com/Shila-Mehta/Restaurant.git',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A classic Tic Tac Toe game with a modern interface. Features include turn indicators, win detection, game reset functionality, and smooth animations for an engaging user experience.',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Tic Tac Toe.png',
    liveLink: 'https://shila-mehta.github.io/TicTacToe/',
    githubLink: 'https://github.com/Shila-Mehta/TicTacToe.git',
  },
  {
    title: 'Library',
    description: 'A digital library management system that allows users to add, remove, and track books. Features include form validation, book status tracking, and data persistence using local storage.',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Library.png',
    liveLink: 'https://shila-mehta.github.io/Libraray/',
    githubLink: 'https://github.com/Shila-Mehta/Libraray.git',
  },
  {
    title: 'Admin Dashboard',
    description: 'A modern admin dashboard interface with responsive design, interactive charts, and data visualization components. Features grid layouts, card-based UI elements, and smooth transitions.',
    technologies: ['HTML', 'webpack', 'CSS'],
    image: '/Images/Admin Dashboard.png',
    liveLink: 'https://shila-mehta.github.io/my_dashboard/',
    githubLink: 'https://github.com/Shila-Mehta/my_dashboard.git',
  },
  {
    title: 'Sign Up Form',
    description: 'A polished sign-up form with comprehensive form validation, error handling, and user feedback. Features include real-time validation, password strength indicators, and responsive design.',
    technologies: ['HTML', 'CSS'],
    image: '/Images/Sign-up.png',
    liveLink: 'https://shila-mehta.github.io/Sign-up-form/',
    githubLink: 'https://github.com/Shila-Mehta/Sign-up-form.git',
  },
  {
    title: 'Calculator',
    description: 'A fully functional calculator application with support for basic arithmetic operations. Features include clear functionality, keyboard support, and a clean, intuitive interface.',
    technologies: ['HTML', 'CSS'],
    image: '/Images/Calculator.png',
    liveLink: 'https://shila-mehta.github.io/Calculator/',
    githubLink: 'https://github.com/Shila-Mehta/Calculator.git',
  },
  {
    title: 'Drop Down Menu',
    description: 'An interactive dropdown menu component with smooth animations and hover effects. Features include keyboard navigation, accessibility improvements, and modern CSS transitions.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    image: '/Images/DropDownMenu.png',
    liveLink: 'https://shila-mehta.github.io/DropDown-Menu/',
    githubLink: 'https://github.com/Shila-Mehta/DropDown-Menu.git',
  },
  {
    title: 'Image Carousel',
    description: 'A smooth image carousel component with navigation controls, auto-play functionality, and transition effects. Features include responsive design and touch/swipe support for mobile devices.',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Image-carousel.png',
    liveLink: 'https://shila-mehta.github.io/Image-carousel/',
    githubLink: 'https://github.com/Shila-Mehta/Image-carousel.git',
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const categories = ['all', 'fullstack', 'frontend', 'game'];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, [visibleProjects]);

  // Filter and search logic
  useEffect(() => {
    let filtered = projects;
    
    // Apply category filter
    if (filter === 'fullstack') {
      filtered = projects.filter(p => 
        p.technologies.some(t => ['MongoDB', 'Express', 'Node.js', 'PostgreSQL', 'EJS'].includes(t))
      );
    } else if (filter === 'frontend') {
      filtered = projects.filter(p => 
        p.technologies.some(t => ['React', 'HTML', 'CSS', 'Javascript'].includes(t)) &&
        !p.technologies.some(t => ['MongoDB', 'Express', 'Node.js', 'PostgreSQL'].includes(t))
      );
    } else if (filter === 'game') {
      filtered = projects.filter(p => 
        p.title.toLowerCase().includes('game') || 
        p.title.toLowerCase().includes('battleship') ||
        p.title.toLowerCase().includes('tic tac')
      );
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query))
      );
    }
    
    setVisibleProjects(filtered);
  }, [filter, searchQuery]);

  useEffect(() => {
    setVisibleProjects(projects);
  }, []);

  return (
    <section className='projects' id='projects' ref={sectionRef}>
      <div className='projects-header'>
        <h2>
          <span className={`section-title ${isVisible ? 'animate-title' : ''}`}>
            Featured Projects
          </span>
          <span className={`section-subtitle ${isVisible ? 'animate-subtitle' : ''}`}>
            A showcase of my work
          </span>
        </h2>
        
        <div className='search-filter-container'>
          <div className='search-box'>
            <svg className='search-icon' width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='search-input'
            />
            {searchQuery && (
              <button
                className='clear-search'
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
          
          <div className='filter-buttons'>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='project-count'>
          <span className='count-number'>{visibleProjects.length}</span>
          <span className='count-text'>
            {visibleProjects.length === 1 ? 'project' : 'projects'} 
            {searchQuery && ` found`}
          </span>
        </div>
      </div>

      {visibleProjects.length === 0 ? (
        <div className='empty-state'>
          <svg className='empty-icon' width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <h3>No projects found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button 
            className='reset-filters-btn'
            onClick={() => {
              setSearchQuery('');
              setFilter('all');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className='projects-grid'>
          {visibleProjects.map((project, index) => (
            <div 
              ref={(el) => (cardRefs.current[index] = el)}
              className={`project-card ${project.featured ? 'featured' : ''}`} 
              key={`${project.title}-${index}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
            <div className='project-image-container'>
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
              <div className='project-overlay'>
                <div className='project-links'>
                  <a 
                    href={project.liveLink} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className='link-btn live-link'
                    aria-label={`View ${project.title} live demo`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className='link-btn github-link'
                    aria-label={`View ${project.title} source code`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
            
            <div className='project-info'>
              <div className='project-header'>
                <h3>{project.title}</h3>
                {project.featured && <span className='featured-badge'>Featured</span>}
              </div>
              <p>{project.description}</p>
              <ul className='project-tech'>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      )}
    </section>
  );
}
