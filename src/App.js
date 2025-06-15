import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Notes from "./pages/Notes";
import NoteDetail from "./components/NoteDetail";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact="true" />
        <Route path="/signin" element={<Signin />} exact="true" />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
              <Categories />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />

        <Route path="/signup" element={<Signup />} exact="true" />
        <Route path="/notes/:id" element={<NoteDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
