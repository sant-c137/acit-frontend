import "./components/Header.css";
import "./components/Card.css";
import "./components/Course.css";
import "./App.css";
import "./components/FavCourse.css";
import "./components/MissionVision.css";
import "./components/Footer.css";
import "./components/AcitBlogArticles.css";
import "./components/AcitCourseListing.css";
import "./components/AcitMainContent.css";
import "./components/AcitMissionVision.css";
import "./components/AcitOpinionsStudents.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Courses } from "./screens/Courses";
import { Articles } from "./screens/Articles";
import { AccreditationsAndPartners } from "./screens/AccreditationsAndPartners";
import { CallUs } from "./screens/CallUs";
import { Login } from "./screens/Login";
import { CreateAccount } from "./screens/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/accreditations-and-partners"
          element={<AccreditationsAndPartners />}
        />
        <Route path="/call-us" element={<CallUs />} />
      </Routes>
    </>
  );
}

export default App;
