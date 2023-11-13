// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MovieAllcard from './components/MovieAllcard';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='Sign In' element={<SignIn />} />
          <Route path='Sign Up' element={<SignUp />} />
          <Route path='Movie' element={<MovieAllcard  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
