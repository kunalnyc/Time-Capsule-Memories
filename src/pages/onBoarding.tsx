import React from 'react';
import { Link } from 'react-router-dom';
import './style/onBoarding.css';
import './style/button.css';

const images: string[] = [];
const imageContext = (require as any).context('!!file-loader!../images', false, /\.(png|jpe?g|gif|svg|avif)$/);
imageContext.keys().forEach((key: string) => {
  images.push(imageContext(key).default);
});


function OnboardingScreen() {
  return (
    <div className="onboarding-container">
      <h1 className="welcome-heading">Welcome to Time Capsule</h1>
      <div className="image-container">
        {images.map((image: string, index: number) => (
          <div className="image-wrapper" key={index}>
            <img src={image} alt={`Onboarding ${index + 1}`} className="onboarding-image" />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
      <div>
        <br></br>
        <Link to="/home">
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default OnboardingScreen;
