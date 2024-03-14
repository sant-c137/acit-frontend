export const Course = ({
  name,
  startDate,
  startEndTime,
  hours,
  students,
  lessons,
  price,
  rating,
  image,
}) => {
  return (
    <div className="course-container">
      <div className="courses">
        <div className="course-info-0">{name}</div>
        <div className="course-info-1">
          <div>
            <img src="LogoCalendar.svg" alt="" />
            {startDate}
          </div>
          <div>
            <img src="LogoClock.svg" alt="" />
            {startEndTime}
          </div>
        </div>
        <div className="course-info-2">
          <div>
            <img src="LogoBoard.svg" alt="" />
            {lessons}
          </div>
          <div>
            <img src="LogoStudent.svg" alt="" />
            {students}
          </div>
          <div>
            <img src="LogoClock.svg" alt="" />
            {hours}
          </div>
        </div>

        <br />

        <div className="btn-container">
          <button className="start-now-btn">ابدأ الآن</button>
          <button className="price">{`$${price}`}</button>
        </div>
      </div>

      <div
        className="course-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div>
          <img src={`Stars-${rating}.svg`} />

           ({rating}.0)
        </div>
      </div>
    </div>
  );
};
