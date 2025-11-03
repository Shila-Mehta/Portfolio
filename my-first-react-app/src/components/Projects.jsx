import '../styles/projects.css';


const projects = [


  {
    title: 'E-Commerce Website',
    description: "A full-stack MERN e-commerce platform featuring secure user authentication, product management, cart functionality, Stripe payments, and an admin dashboard. Built with modern UI and RESTful API architecture.",
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Tailwind', "JWT", "NodeMailer", "Multer", "bcrypt", "pdfkit"],
    image: '/Images/ecommerce-website-homePage.png',
    liveLink: 'https://github.com/Shila-Mehta/ecommerce-website.git',
    githubLink: 'https://github.com/Shila-Mehta/ecommerce-website.git',
  },


  {
    title: 'Inventory Management System',
    description: "A full-stack inventory management application built with Node.js, Express, and EJS. Users can efficiently track products, manage stock levels, and update inventory through a responsive, user-friendly interface. The app uses PostgreSQL for data storage.",
    technologies: ['Node.js', 'Express', 'EJS', 'CSS', 'JavaScript', 'PostgreSQL'],
    image: "/Images/Inventry.png",
    liveLink: 'https://github.com/Shila-Mehta/Inventry-Application.git', // replace with deployed link if available
    githubLink:'https://github.com/Shila-Mehta/Inventry-Application.git',
  },


  {
    title: 'Shopping Cart',
    description: "A dynamic e-commerce shopping cart application that allows users to browse products, add items to the cart, update quantities, and calculate totals in real-time.",
    technologies: ['React', 'Tailwind', "fakeClothing Api"],
    image: "/Images/Shopping Cart.png",
    liveLink: 'https://shopping-cart-nimra.netlify.app/',
    githubLink: 'https://github.com/Shila-Mehta/Shopping-Cart.git',
  },

  {
    title: 'Memory Card Game',
    description: "An interactive memory matching game where users flip cards to find matching pairs. The game tracks score, best score, and includes dynamic content fetched from external APIs (e.g., Pokémon or Giphy).",
    technologies: ['HTML', 'webpack', 'CSS', 'React', 'Pokemon Api'],
    image: "/Images/memory-card-game.png",
    liveLink: 'https://shopping-cart-nimra.netlify.app/',
    githubLink: 'https://github.com/Shila-Mehta/Shopping-Cart.git',
  },

  {
    title: 'CV Builder',
    description: "A dynamic CV builder application that allows users to create, preview, and print professional resumes. Features include live editing, customizable sections, and real-time preview of the CV layout.",
    technologies: ['HTML', 'webpack', 'CSS', 'React'],
    image: "/Images/cv-builder-nimra.netlify.app_ (1).png",
    liveLink: 'https://cv-builder-nimra.netlify.app/',
    githubLink: 'https://github.com/Shila-Mehta/CV-Builder.git',
  },

  {
    title: 'BattleShip  Game',
    description: "A two-player turn-based Battleship game built with JavaScript and DOM manipulation. Includes drag-and-drop ship placement and hit detection.",
    technologies: ['HTML', 'webpack', 'CSS', 'Jest', 'Javascript'],
    image: "/Images/BattleShip.png",
    liveLink: 'https://shila-mehta.github.io/Battleship/',
    githubLink: 'https://github.com/Shila-Mehta/Battleship.git',
  },

  {
    title: 'Weather App',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'webpack', 'CSS', 'API', 'Javascript'],
    image: "/Images/Weather.png",
    liveLink: 'https://shila-mehta.github.io/WeatherApp/',
    githubLink: 'https://github.com/Shila-Mehta/WeatherApp.git',
  }
  ,

  {
    title: 'Todo List',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/TodoList.png',
    liveLink: 'https://shila-mehta.github.io/Todo-List/',
    githubLink: 'https://github.com/Shila-Mehta/Todo-List.git',
  }
  ,
  {
    title: 'Restaurant Page',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Restaurant.png',
    liveLink: 'https://shila-mehta.github.io/Restaurant/',
    githubLink: 'https://github.com/Shila-Mehta/Restaurant.git',
  },

  {
    title: 'Tic  Tac Toe',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Tic Tac Toe.png',
    liveLink: 'https://shila-mehta.github.io/TicTacToe/',
    githubLink: 'https://github.com/Shila-Mehta/TicTacToe.git',
  },

  {
    title: 'Library',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Library.png',
    liveLink: 'https://shila-mehta.github.io/Libraray/',
    githubLink: 'https://github.com/Shila-Mehta/Libraray.git',
  },

  {
    title: 'Admin Dashboard',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'webpack', 'CSS'],
    image: '/Images/Admin Dashboard.png',
    liveLink: 'https://shila-mehta.github.io/my_dashboard/',
    githubLink: 'https://github.com/Shila-Mehta/my_dashboard.git',
  },

  {
    title: 'Sign Up Form',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'CSS'],
    image: '/Images/Sign-up.png',
    liveLink: 'https://shila-mehta.github.io/Sign-up-form/',
    githubLink: 'https://github.com/Shila-Mehta/Sign-up-form.git',
  }
  ,

  {
    title: 'Calculator',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'CSS'],
    image: '/Images/Calculator.png',
    liveLink: 'https://shila-mehta.github.io/Calculator/',
    githubLink: 'https://github.com/Shila-Mehta/Calculator.git',
  },

  {
    title: 'Drop Down Menu',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'CSS', 'Javascript'],
    image: '/Images/DropDownMenu.png',
    liveLink: 'https://shila-mehta.github.io/DropDown-Menu/',
    githubLink: 'https://github.com/Shila-Mehta/DropDown-Menu.git',
  },

  {
    title: 'Image Carousel',
    description: 'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
    technologies: ['HTML', 'webpack', 'CSS', 'Javascript'],
    image: '/Images/Image-carousel.png',
    liveLink: 'https://shila-mehta.github.io/Image-carousel/',
    githubLink: 'https://github.com/Shila-Mehta/Image-carousel.git',
  }

]



export default function Projects() {
  return (
    <section className='projects' id='projects'>
      <h2>Projects</h2>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div className='project-card' key={index}>
            <img src={project.image} alt={`${project.title} screenshot`} />
            <div className='project-info'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className='project-tech'>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <div className='project-links'>
                <a href={project.liveLink} target='_blank' rel="noopener noreferrer">Live</a>
                <a href={project.githubLink} target='_blank' rel="noopener noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
