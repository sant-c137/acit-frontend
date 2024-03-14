import { AcitMainContent } from '../components/AcitMainContent';
import { AcitCourseListing } from '../components/AcitCourseListing';
import { AcitOpinionsStudents } from '../components/AcitOpinionsStudents';
import { AcitMissionVision } from '../components/AcitMissionVision';
import { AcitBlogArticles } from '../components/AcitBlogArticles';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import './Login.css';

export const Home = () => {
  return (
    <>
      <AcitMainContent />
      <AcitCourseListing />
      <AcitOpinionsStudents />
      <AcitBlogArticles />
      <AcitMissionVision />
      <Footer />
    </>
  );
};
