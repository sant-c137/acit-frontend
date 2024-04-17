import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './StudentDashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [userData, setUserData] = useState({});
  const [userProfilePicture, setUserProfilePicture] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id_student = sessionStorage.getItem('id');
        const url = `http://localhost:3000/dashboard?id=${id_student}`;
        const response = await axios.get(url);
        setUserData(response.data);

        const urlProfilePicture = `http://localhost:3000/profile-picture/${id_student}`;
        const responseProfilePicture = await axios.get(urlProfilePicture, {
          responseType: 'arraybuffer' // Solicita la respuesta como datos binarios
        });

        const userProfilePictureDataUrl = `data:image/png;base64,${btoa(
          new Uint8Array(responseProfilePicture.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        )}`;
        setUserProfilePicture(userProfilePictureDataUrl);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const { id, username, email } = userData;

  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="student-dashboard-container">
        <div key={id} className="student-dashboard-account-info">
          {userProfilePicture && <img src={userProfilePicture} alt="" />}
          <h1>{username}</h1>
          <strong>
            <a href={`mailto:${email}`}>{email}</a>
          </strong>
          <h2>#{id}</h2>
          <Link to="/dashboard/edit-account">Edit account</Link>
        </div>

        <div className="student-dashboard-account-info-2">
          <h1>Courses</h1>
          <br />
          <div className="student-dashboard-account-info-online-courses">
            <img src="Headphone.svg" alt="" />
            Online Courses (1)
          </div>

          <table className="custom-table">
            <thead>
              <tr>
                <th>N</th>
                <th>Course</th>
                <th>Date</th>
                <th>Price</th>
                <th>State</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Safe information period</td>
                <td>22/02/2023</td>
                <td>200.000$</td>
                <td>
                  <div className="payment-status">The payment was made</div>
                </td>

                <td>
                  <div className="s-d-join-course">
                    <a href="">Join the course</a>
                    <img src="Whatsapp.svg" alt="" />
                  </div>
                </td>
                <td> 
                  <button className="btn-lectures">Lectures</button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;