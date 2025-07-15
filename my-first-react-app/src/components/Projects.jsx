import '../styles/projects.css';


const projects=[

    {
        title:'BattleShip  Game',
        description: "A two-player turn-based Battleship game built with JavaScript and DOM manipulation. Includes drag-and-drop ship placement and hit detection.",
        technologies:['HTML','webpack','CSS','Jest','Javascript'],
        image: "/Images/BattleShip.png"  ,
        liveLink:'https://shila-mehta.github.io/Battleship/',
        githubLink:'https://github.com/Shila-Mehta/Battleship.git',  
    },

    {
        title:'Weather App',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: "/Images/Weather.png"  ,
        liveLink:'https://shila-mehta.github.io/WeatherApp/',
        githubLink:'https://github.com/Shila-Mehta/WeatherApp.git',
    }
    ,

    {
        title:'Todo List',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/TodoList.png'  , 
        liveLink:'https://shila-mehta.github.io/Todo-List/',
        githubLink:'https://github.com/Shila-Mehta/Todo-List.git',
    }
    ,
    {
        title:'Restaurant Page',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Restaurant.png' ,
        liveLink:'https://shila-mehta.github.io/Restaurant/',
        githubLink:'https://github.com/Shila-Mehta/Restaurant.git',
    },

    {
        title:'Tic  Tac Toe',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Tic Tac Toe.png'  ,
        liveLink:'https://shila-mehta.github.io/TicTacToe/',
        githubLink:'https://github.com/Shila-Mehta/TicTacToe.git',
    },

    {
        title:'Library',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Library.png'  ,
        liveLink:'https://shila-mehta.github.io/Libraray/',
        githubLink:'https://github.com/Shila-Mehta/Libraray.git',
    },

    {
        title:'Admin Dashboard',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Admin Dashboard.png'  ,
        liveLink:'https://shila-mehta.github.io/my_dashboard/',
        githubLink:'https://github.com/Shila-Mehta/my_dashboard.git',
    },

    {
        title:'Sign Up Form',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image:  '/Images/Sign-up.png' ,
        liveLink:'https://shila-mehta.github.io/Sign-up-form/',
        githubLink:'https://github.com/Shila-Mehta/Sign-up-form.git',
    }
    ,
    {
        title:'Rock Paper  Scissor',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Rock-Paper-Scissor.png'  ,
        liveLink:'https://shila-mehta.github.io/RPS/',
        githubLink:'https://github.com/Shila-Mehta/RPS.git',
    },

    {
        title:'Recipe Page',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Recipes Page.png'  ,
        liveLink:'https://shila-mehta.github.io/odin_recipes/',
        githubLink:'https://github.com/Shila-Mehta/odin_recipes.git',
    },

    {
        title:'Calculator',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Calculator.png'  ,
        liveLink:'https://shila-mehta.github.io/Calculator/',
        githubLink:'https://github.com/Shila-Mehta/Calculator.git',
    },

    {
        title:'Etch-a-Sketch',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/sketch.png'  ,
        liveLink:'https://shila-mehta.github.io/Etch-a-Sketch/',
        githubLink:'https://github.com/Shila-Mehta/Etch-a-Sketch.git',
    },

    {
        title:'Landing Page',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image:'/Images/Landing-Page.png'   ,
        liveLink:'https://shila-mehta.github.io/Landing-Page/',
        githubLink:'https://github.com/Shila-Mehta/Landing-Page.git',
    },

    {
        title:'Drop Down Menu',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/DropDownMenu.png'  ,
        liveLink:'https://shila-mehta.github.io/DropDown-Menu/',
        githubLink:'https://github.com/Shila-Mehta/DropDown-Menu.git',
    },

    {
        title:'Image Carousel',
        description:'A  responsive app  built    that fetches real-time weather data  from visual-crossing Includes search,loading state and animated icons',
        technologies:['HTML','webpack','CSS','API','Javascript'],
        image: '/Images/Image-carousel.png'  ,
        liveLink:'https://shila-mehta.github.io/Image-carousel/',
        githubLink:'https://github.com/Shila-Mehta/Image-carousel.git',
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
