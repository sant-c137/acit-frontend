import { AcitMainContent } from '../components/AcitMainContent';
import { AcitCourseListing } from '../components/AcitCourseListing';
import { AcitOpinionsStudents } from '../components/AcitOpinionsStudents';
import { AcitMissionVision } from '../components/AcitMissionVision';
import { AcitBlogArticles } from '../components/AcitBlogArticles';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Login } from '../screens/Login';
import {Main2} from '../Main2'
import './Login.css';
import { StudentDashboard } from './StudentDashboard';
import {UpdateUserForm} from '../components/UpdateUserForm'
import { EditAccount } from './EditAccount';

export const Home = () => {
  return (
    <>
      <AcitMainContent />
      <AcitCourseListing />
      <AcitOpinionsStudents />
      <AcitBlogArticles />
      <AcitMissionVision />
      <Footer />
      <Main2/>
      {/* <UpdateUserForm/> */}

      {/* <StudentDashboard/> */}

      {/* <EditAccount></EditAccount> */}
    </>
  );
};
