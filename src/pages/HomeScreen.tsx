// HomeScreen.tsx
import React from 'react';
import { GreetMessage } from '../components/Greet';

function HomeScreen() {
  return (
    <div className="home-container">
      <h1>Welcome to Time Capsule</h1>
      <p>This is the Home Screen</p>
      <div>
        <GreetMessage name={'Kunal'} age={12}/>
      </div>
    </div>
  
  );
}

export default HomeScreen;
