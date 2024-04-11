import './Login.css';
import { AcitMainContent } from '../components/AcitMainContent';
import { AcitCourseListing } from '../components/AcitCourseListing';
import { AcitOpinionsStudents } from '../components/AcitOpinionsStudents';
import { AcitMissionVision } from '../components/AcitMissionVision';
import { AcitBlogArticles } from '../components/AcitBlogArticles';
import { Footer } from '../components/Footer';

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
