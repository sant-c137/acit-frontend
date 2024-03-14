import './CoursesCard.css';

export const CoursesCard = ({ price, name, lessons, students, hours }) => {
  return (
    <>
      <div className="Courses-card">
        <div className="Courses-card-bg-image">
          <h1 className="Courses-card-name">$ {price} USD</h1>
          <div className="Courses-card-most-subscribed">الأكثر اشتراك</div>
        </div>
        <div className="Courses-card-info">
          <h1>{name}</h1>
          <div className="Courses-card-info-0">
            <button className="Courses-start-now-btn">اشترك</button>

            <div className="Courses-card-info-1">
              <div>
                <img src="/LogoBoard.svg" alt="" />
                {lessons} lessons
              </div>
              <div>
                <img src="/LogoStudent.svg" alt="" />
                {students} students
              </div>
              <div>
                <img src="/LogoClock.svg" alt="" />
                {hours} hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
