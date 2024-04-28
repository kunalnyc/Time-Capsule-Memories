import React from 'react';
import image1 from '../images/image1.jpg'; // Import the image
import './style/onBoarding.css';
import { Link } from 'react-router-dom';
import './style/button.css';
function OnboardingScreen() {
  const imageCount = 5; // Number of images
  const images = Array.from(Array(imageCount).keys()).map((index) => `image${index + 1}.jpg`);

  return (
    <div className="onboarding-container">
      <h1 className="welcome-heading">Welcome to Time Capsule</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image1} alt={`Onboarding ${index + 1}`} className="onboarding-image" />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
      <div>
       <br></br>
       <Link to="/HomeScreen">
        <button className="btn">Get Started</button>
      </Link>
      </div>
    </div>
  );
}

export default OnboardingScreen;
