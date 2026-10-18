import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';


const MySkills =[
  {
    title:'Databases',
    items :[ 
      {name: 'MySQL' , icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
      {name:'PLSQL', icon:null},
    ]
  },
  {
    title:'Back End',
    items:[
      {name:'PHP',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'}
    ]
  },
  {
    title:'Front End',
    items :[
      
        {name:'HTML' , icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
        {name:'CSS' , icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
        {name:'React' , icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
        {name:'Javascript' , icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
      ]
  },
  {
    title:'tools',
    items: [
        {name:'Git', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
        {name:'Docker', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'},
        {name:'Latex', icon:null}, 
        {name:'Wordpress' , icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'},
        {name:'OMNET++',icon:null},
        {name:'Nmap',icon:null},
        {name:'Metasploit',icon:null},
        {name:'NetDiscover',icon:null},
     ]
  },
  {
    title:'Operating Systems',
    items: [
        {name:'Debian', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
        {name:'Kali',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
        {name:'Parrot',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
        {name:'FreeBSD',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
        {name:'Arch',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
        {name:'Fedora', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'},
        {name:'Windows/DOS',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'},
      ]
  },
  {
    title:'Developing',
    items:[
        {name:'Python',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
        {name:'C',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'},
        {name:'C++', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'},
        {name:'Java',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
      ]
  },
]



function Photo(){
  return(
    <div className='photo'>
      <img src="photo.jpg" width="600" height="600" alt="profile" />
    </div>
  );
}


function Bio(){
  return(
    <>
    <h3>I enjoy building intelligent systems and AI-driven solutions, <br />
      with a strong interest in networking, cybersecurity, and application security.
      I also develop modern websites and focus on solving programming challenges
      efficiently to deliver reliable and effective results.</h3>
    </>
  )
}

function Button(){
  const [show, setShow] = useState("")

  function resultbutton(){
    setShow(prev => !prev);
  }
  return(
    <>
    <div>
    <button className='ConButton' onClick={resultbutton}>
      Contact Me
    </button>
      {show && <div className='links'>
      <a href='mailto:giannistamoulakatos@gmail.com'>My e-mail</a>
      <br />
      <a href='https://www.linkedin.com/in/γιάννης-σταμουλακάτος-a46364341'>linkedin</a>
      <br />
      <a href='https://github.com/giannistamoulakatos'>GitHub</a>
      </div>}
    </div>
    </>
    
  )
}


function ButtonBio(){
    return(
      <>
      <button className='BioButton'>
        <a className='BioButton' href='/mybio.pdf' download>
        Download my Bio
        </a>
      </button>
      </>
    )
}


function NavigationBar(){
  return(
    <div className='NavigationBar'>
    <>
    <ul>
      <li><a href="#skills">My Skills</a></li>
      <li><a href="#projects">Selected Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    </>
    </div>
  );
}


function Skills(){
  return(
    <div className='Skills'> 
      <h1>My Skills</h1>

      <div className='container'>
        {MySkills.map((group, index) => (
          <div className='card' key={index}>
            
            <h2>{group.title}</h2>

            <div className='grid'>
              {group.items.map((skill, i) => (
                <div className='item' key={i}>
                  {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} />
                        ) : (<div className="fallback-icon">⚙️</div>)}
                    <span>{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
function Projects(){
  return(
    <div className='Projects'>
    <>
    <h1>Selected Projects</h1>
    <div className='Projectbox'>
    <a href='https://github.com/giannistamoulakatos/Avoiding_trafic_system_with_iot'>Avoiding Traffic System With IoT</a>
    <p>The project is my thesis. The goal is to avoid traffic accidents.</p>
    <img src='2.jpg' width="200" height="200" />
    </div>
    <div className='Projectbox2'>
    <a href='https://github.com/giannistamoulakatos/Detection_dangerous_items_with_AI'>Detection Dangerous items with AI</a>
    <p>The project is one idea for one seminar. The goal is detection dangerous items for safety kids and other people.</p>
    <img src="s1.png" width="200" height="200" />
    <img src="s2.png" width="200" height="200" />
    </div>
    </>
    </div>
  )
}


function App() {
  return(
    <div className='App'>
    <>
    <NavigationBar />
    <h1>Giannis Stamoulakatos</h1>
    <p>AI CyberSecyrity IoT and web developer</p>
    <div id='bio' className='bio'>
      <Photo />
      <Bio />
    </div>
    <div id='skills' className='skills'>
      <Skills />
    </div>
    <div id='projects' className='projects'>
      <Projects />
    </div>
    <div id='buttons' className='buttons'>
      <div id='contact' className='contact'>
      <Button />
      </div>
    <div id='BioFile' className='BioFile'>
      <ButtonBio />
      </div>
    </div>
    </>
    </div>
  )
}

export default App;

