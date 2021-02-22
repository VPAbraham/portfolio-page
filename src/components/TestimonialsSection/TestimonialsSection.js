import React from 'react';
import './TestimonialsSection.scss';
import { testimonialImages }  from '../../data/testimonialImages';

const TestimonialsSection = () => {
  const imageCollection = () => {
    return (
    <>
      {
        testimonialImages.map(img => {
          return (<img src={img} alt='UpWork testimonial screenshot.' /> )
        })
      }
    </>
    )
  }

  return(
    <div className='testimonials'>
      <h2 className='testimonials__header'>TESTIMONIALS</h2>
      <div className='testimonal__imgs'>
        {imageCollection()}
      </div>
    </div>
  )
}
export default TestimonialsSection;