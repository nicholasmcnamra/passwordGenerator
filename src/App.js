import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordGenerator from './PasswordGenerator';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
          <Route path="/" element={<PasswordGenerator/>}></Route>
          </Routes>

          </Router>
    </div>
  );
}

export default App;
