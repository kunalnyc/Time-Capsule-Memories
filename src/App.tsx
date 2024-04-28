import logo from './logo.svg';
import './App.css';
import OnboardingScreen from './pages/onBoarding';
import HomeScreen from './pages/HomeScreen'; // Import the HomeScreen component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OnboardingScreen />} />
          <Route path="/home" element={<HomeScreen />} /> {/* Define route for HomeScreen */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

