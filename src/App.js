// import React, { useState } from 'react';

// const App = () => {
//   const aboutSections = [
//     'About Section 1: This is the first about section.',
//     'About Section 2: This is the second about section.',
//     'About Section 3: This is the third about section.',
//   ];

//   const paragraphSections = [
//     'Paragraph Section 1: This is the first paragraph section.',
//     'Paragraph Section 2: This is the second paragraph section.',
//     'Paragraph Section 3: This is the third paragraph section.',
//   ];

//   const testimonialSections = [
//     'Testimonial Section 1: This is the first testimonial section.',
//     'Testimonial Section 2: This is the second testimonial section.',
//     'Testimonial Section 3: This is the third testimonial section.',
//   ];

//   const getRandomSection = (sections) => {
//     const randomIndex = Math.floor(Math.random() * sections.length);
//     return sections[randomIndex];
//   };

//   const [aboutSection, setAboutSection] = useState(getRandomSection(aboutSections));
//   const [paragraphSection, setParagraphSection] = useState(getRandomSection(paragraphSections));
//   const [testimonialSection, setTestimonialSection] = useState(getRandomSection(testimonialSections));

//   const handleGetStarted = () => {
//     setAboutSection(getRandomSection(aboutSections));
//     setParagraphSection(getRandomSection(paragraphSections));
//     setTestimonialSection(getRandomSection(testimonialSections));
//   };

//   return (
//     <div className="App">
//       <h1>Random Sections</h1>
//       <button onClick={handleGetStarted}>Get Started</button>
//       <div className="section">
//         <h2>About Section</h2>
//         <p>{aboutSection}</p>
//       </div>
//       <div className="section">
//         <h2>Paragraph Section</h2>
//         <p>{paragraphSection}</p>
//       </div>
//       <div className="section">
//         <h2>Testimonial Section</h2>
//         <p>{testimonialSection}</p>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import Testimonial1 from './Testimonial1';
import Testimonial2 from './Testimonial2';
import Testimonial3 from './Testimonial3';
import Testimonial4 from './Testimonial4';
import './App.css';
import ContactFormContainer from './contactForms/ContactFormContainer';


const testimonialComponents = [Testimonial1, Testimonial2, Testimonial3, Testimonial4];

const App = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const changeTestimonial = () => {
    const randomIndex = Math.floor(Math.random() * testimonialComponents.length);
    setCurrentTestimonialIndex(randomIndex);
  };

  return (
    <div className="App">
      <div className='testi-monial'>
      <h1>Random Testimonials</h1>
      <div className='change-container'>
      <div className="testimonial-container">
        {React.createElement(testimonialComponents[currentTestimonialIndex])}
      </div>
      <button className="change-button" onClick={changeTestimonial}>
        Change
      </button>
      </div>
      </div>
      <div className='contact-sections'>
      <ContactFormContainer />

      </div>

    </div>
  );
};

export default App;


