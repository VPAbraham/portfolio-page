import React from 'react';
import './TestimonialsSection.scss';
import { testimonialImages }  from '../../data/testimonialImages';

const TestimonialsSection = () => {
  const imageCollection = () => {
    return (
    <>
      {
        testimonialImages.map(img => {
          return (<img className='test-img'
            src={img} 
            alt='UpWork testimonial screenshot.' 
            /> )
        })
      }
    </>
    )
  }

  return(
    <div className='testimonials'>
      <h2 className='testimonials__header'>TESTIMONIALS</h2>
      <a
        href='https://www.upwork.com/freelancers/~011fc54692d81440ba'
        target='_blank'>
          <span         
          className='testimonials__link' 
          >Click here to view my UpWork profile and reviews</span>
      </a>
      <div className='testimonials__imgs'>
        {imageCollection()}
      </div>
    </div>
  )
}
export default TestimonialsSection;