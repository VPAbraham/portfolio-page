import React from 'react';
import './Project.scss';

const MultiProject = (props) => {
  let { name, description, ghlink, deplink, previewImg } = props;
  return (
    <div className='project'>
      <h3>{name}</h3>
      <img src={previewImg} alt={name}/>
      <p className='project__description'>{description}</p>
      <a href={deplink} className='project__link'><p>Click to view application</p></a>
      <a href={deplink} className='project__link'><p>Click to view API</p></a>
      <a href={ghlink} className='project__repo'><p>Frontend Github repository</p></a>
      <a href={ghlink} className='project__repo'><p>Frontend Github repository</p></a>

    </div>
  )
}

export default MultiProject;