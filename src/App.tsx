import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ProfilePage />}
        />
        <Route
          path="/skill"
          element={<SkillPage />}
        />
        <Route
          path="/project"
          element={<ProjectPage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>
    </>
  );
}

export default App;
