import './Courses.css';
import { CoursesCard } from '../components/CoursesCard';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Courses = () => {
  return (
    <>
      <div className="header-courses">
        <Header />

        <div className="header-courses-container">
          <h1>الدورات</h1>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفـس المســـاحة، لقد تم توليد
            هذا ا...
          </p>
        </div>

        <div className="Search-container">
          <form id="Search-courses">
            <img src="/LogoSearch.svg" alt="" />
            <input type="text" id="search-input" placeholder="بحث"></input>
          </form>

          <h4>search</h4>
          <h4>navigation</h4>
        </div>
      </div>
      <section className="Courses">
        <img
          src="/CoursesDecoration.svg"
          alt=""
          className="Courses-decoration"
        />

        <div className="Courses-div-container">
          <CoursesCard
            price="20"
            name="Melo"
            lessons="12"
            students="20"
            hours="5"
          />
          <CoursesCard
            price="20"
            name="Melo"
            lessons="12"
            students="20"
            hours="5"
          />
          <CoursesCard
            price="20"
            name="Melo"
            lessons="12"
            students="20"
            hours="5"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};
