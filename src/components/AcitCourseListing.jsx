import { Course } from "../components/Course";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export const AcitCourseListing = () => {
  const [categories, setListCategories] = useState([]);
  const [courses, setListCourses] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const url = "http://26.95.135.143:8000/api/getAllCategories";
      const result = await axios.get(url);

      setListCategories(result.data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      const url = "http://26.95.135.143:8000/api/getAllCourses";
      const result = await axios.get(url);

      setListCourses(result.data);
    };
    getCourses();
  }, []);
  
  return (
    <>
      <div className="info-courses">
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="info-courses-description">ماذا نقدم ؟</p>

        <h1 className="info-courses-title">تعلم مهارات جديدة</h1>
        <br />
        <br />
        <br />

        <div className="cards-container">
          {categories.length == 0 && (
            <Card title="Loading..." numOfCourses="Loading..." />
          )}

          {categories.map((category) => {
            return (
              <Card
                key={category.id}
                title={category.category_name}
                numOfCourses={category.courses.length}
                cardKey={category.id}
              />
            );
          })}

          <Card title="أمن المعلومات" numOfCourses="4 كورسات" />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="info-courses-description">ما هي دوراتنا ؟</p>

        <h1 className="info-courses-title">تعرف على دوراتنا المفضلة</h1>
        <br />
        <br />
        <br />

        <div className="courses-container">
          <ul>
            {courses.length == 0 && (
              <Course
                name="Loading..."
                startEndTime="Loading..."
                startDate="Loading..."
                hours="Loading..."
                students="Loading..."
                lessons="Loading..."
                price="Loading..."
              />
            )}
            {courses.map((course) => {
              return (
                <Course
                  key={course.id}
                  name={course.title}
                  startEndTime={course.end_time + " " + course.start_time}
                  startDate={course.start_date}
                  hours={course.number_hours + " Hours"}
                  students={course.number_student + " Students"}
                  lessons={course.number_lessons + " Lessons"}
                  price={course.price}
                  rating={course.rating}
                  image={`http://26.95.135.143:8000/getImage/3/2m.png`}
                />
              );
            })}
          </ul>

          <Course
            name="شهادة سيسكو خبير مركز البيانات CCIE Data Center (v3.0)"
            startEndTime="من 07:30 حتى 10:00مسـاًء"
            startDate="الأحد  12/11/2023"
            hours="33 ساعة"
            students="12 طالب"
            lessons="12 درس"
            price="4,500.00"
          />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
