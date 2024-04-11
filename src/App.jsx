import './components/Header.css';
import './components/Card.css';
import './components/Course.css';
import './App.css';
import './components/FavCourse.css';
import './components/MissionVision.css';
import './components/Footer.css';
import './components/AcitBlogArticles.css';
import './components/AcitCourseListing.css';
import './components/AcitMainContent.css';
import './components/AcitMissionVision.css';
import './components/AcitOpinionsStudents.css';

import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Courses } from './screens/Courses';
import { Articles } from './screens/Articles';
import { AccreditationsAndPartners } from './screens/AccreditationsAndPartners';
import { CallUs } from './screens/CallUs';
import { Login } from './screens/Login';
import { CreateAccount } from './screens/CreateAccount';
import { NotFoundPage } from './screens/NotFoundPage';
import { Main2 } from './Main2';
import { EditAccount } from './screens/EditAccount';
import { StudentDashboard } from './screens/StudentDashboard';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/acit-frontend" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/sign-in" element={<Main2 />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/accreditations-and-partners"
          element={<AccreditationsAndPartners />}
        />
        <Route path="/call-us" element={<CallUs />} />
        <Route path="/dashboard/edit-account" element={<EditAccount />} />
        <Route path="/dashboard" element={<Main2 />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
