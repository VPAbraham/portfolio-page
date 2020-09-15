import React from 'react';
import './Project.scss';

const Project = (props) => {
  let { name, description, ghlink, deplink, previewImg } = props;
  return (
    <div class='project'>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={previewImg} alt={name}/>
      <a href={deplink}><p>Click to view application</p></a>
      <p>Github repository: <span>{ghlink}</span></p>
    </div>
  )
}

export default Project;