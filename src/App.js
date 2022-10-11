import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:name" exact element={<Home />} />
        <Route path="/" exact element={<Navigate to="/login" />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
