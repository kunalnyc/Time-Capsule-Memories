// OnboardingScreen.tsx
import React from 'react';
import './style/onBoarding.css';

function OnboardingScreen() {
  const imageCount = 5; // Number of images
  const images = Array.from(Array(imageCount).keys()).map((index) => `image${index + 1}.avif`);

  return (
    <div className="onboarding-container">
      <h1 className="welcome-heading">Welcome to Time Capsule</h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={`images/${image}`} alt={`Onboarding ${index + 1}`} className="onboarding-image" />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnboardingScreen;
