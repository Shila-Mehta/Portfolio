import '../styles/skills.css';

export default  function Skills(){

const skills=[
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Responsive Design",
    "Node.js",
    "Figma"
]


return(
    <section  className='skills' id='skills'>
     <div  className='skills-container'>
     <h2>Skills</h2>

     <ul  className='skills-list'>
     {skills.map((skill,index)=>
        <li  key={index}  className='skill-badge'>
            {skill}
        </li>
     )

     }
         
     </ul>

     </div>

    </section>
)


}