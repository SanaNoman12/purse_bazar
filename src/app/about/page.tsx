import React from 'react';

const About = () => {
  return (
    <div>
      <section className='about' style={{
        backgroundImage:"url(about.png)"
      }}>
        <div className='about-content'>
          <h2 className='fade-in'>About Us</h2>
          <p>Welcome to Purse Bazar! <br />
            At Purse Bazar, we believe that a purse is more than just an accessory. it is a statement of style, a practical companion, and a reflection of your unique personality. Our mission is to bring you the finest collection of purses that combine elegance, functionality, and affordability. Join our growing community of purse lovers and discover the perfect accessory to elevate your wardrobe. At Purse Bazar, we do not just sell purses; we help you carry confidence with every step.

          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
