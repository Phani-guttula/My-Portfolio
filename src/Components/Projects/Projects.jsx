import React from 'react'
import './Projects.css'

const projects = [

    {
      title: 'Employee Management System',
      description: 'A Spring Boot project for managing employee data.',
      link: 'https://github.com/Phani-guttula/Employee-Management-System-using-Spring-boot'
    },
    {
      title: 'Student Performance Prediction',
      description: 'A machine learning model predicting student performance.',
      link: 'https://github.com/Phani-guttula/Student-Performance-Prediction'
    },
    {
        title: 'To-Do List App',
        description: 'A React app for managing daily tasks with add and delete features.',
        link: 'https://github.com/Phani-guttula/To-Do-List-App'
    },

  ];

export default function Projects() {
  return (
    <div className='projects'>
        <h2>Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className='project-card'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} className='project-link' target='_blank'>View Project</a>
                </div>
            ) )}
        </div>
    </div>
  )
}
