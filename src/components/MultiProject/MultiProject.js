import React from 'react';
import '../Project/Project.scss';

const MultiProject = (props) => {
  let { name, description, felink, apilink, ghlink1, ghlink2, previewImg } = props;
  return (
    <div className='project'>
      <h3>{name}</h3>
      <img src={previewImg} alt={name}/>
      <p className='project__description'>{description}</p>
      <a href={felink} className='project__link' target="_blank"><p>Click to view application</p></a>
      <a href={apilink} className='project__link' target="_blank"><p>Click to view API</p></a>
      <a href={ghlink1} className='project__repo' target="_blank"><p>Frontend Github repository</p></a>
      <a href={ghlink2} className='project__repo' target="_blank"><p>Backend Github repository</p></a>

    </div>
  )
}

export default MultiProject;