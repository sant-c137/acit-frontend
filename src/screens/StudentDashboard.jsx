import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './StudentDashboard.css';

export const StudentDashboard = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>

      <div className="student-dashboard-container">
        <div className="student-dashboard-account-info">
          <img src="Account.svg" alt="" />
          <h1> {localStorage.getItem('username')}
          </h1>
          <strong href="#">{localStorage.getItem('email')}</strong>
          <h2>#{localStorage.getItem('id')}</h2>
          <a href="">Edit account</a>
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

