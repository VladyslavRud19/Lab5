import React from 'react';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <div>
      <h1>Мої навички</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
