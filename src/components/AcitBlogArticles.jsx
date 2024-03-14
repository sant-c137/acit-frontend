import { FavCourse } from "../components/FavCourse";

export const AcitBlogArticles = () => {
  return (
    <>
      <div className="fav-courses-container">
        <br />
        <br />
        <br />
        <br />
        <br />

        <p className="info-courses-description">مدونتنا</p>

        <h1 className="info-courses-title">تعرف على دوراتنا المفضلة</h1>

        <br />
        <br />
        <br />

        <div className="fav-courses-container-cards">
          <div className="course-card-big">
            <p>Hola</p>
          </div>

          <div className="course-card-small">
            <FavCourse />
            <FavCourse />
            <FavCourse />
            <FavCourse />
          </div>
        </div>
      </div>
    </>
  );
};
