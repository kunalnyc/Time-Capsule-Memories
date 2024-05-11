// HomeScreen.tsx
import React from 'react';
import { GreetMessage } from '../components/Greet';
import { Person } from '../components/person';
import './style/homeScreen.css';
import { PersonList } from '../components/person_list';
function HomeScreen() {
  const personNames = {
    first: 'Kunal',
    last: 'California'
  }
 const nameList = [
  {
    first: 'Babe',
    last: 'NYC'
  },
  {
    first: 'Amanda',
    last: 'Dimple'
  },
  {
    first: 'Bruh',
    last: 'Barbie'
  },
 ]
  return (
    <div className="home-container">
      <h1>Welcome to Time Capsule</h1>
      <h3>This is the Home Screen</h3>
      <div>
        <GreetMessage name={'Kunal'} _messageCount={20} isLoggedin={false} />
        <Person name={personNames} />
        <PersonList names={nameList}  />
      </div>
    </div>

  );
}

export default HomeScreen;
