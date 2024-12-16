import React from 'react';

function Projects() {
  const projects = ['Проєкт 1', 'Проєкт 2', 'Проєкт 3'];

  return (
    <div>
      <h1>Мої проєкти</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
