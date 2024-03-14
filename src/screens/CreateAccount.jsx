import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./CreateAccount.css";

export const CreateAccount = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <section className="section-create-account">
        <img src="/DecorationLines.svg" alt="" className="decoration-lines" />
        <img
          src="/DecorationLinesR.svg"
          alt=""
          className="decoration-lines-r"
        />
        <div className="create-account-container">
          <h1>سجل بياناتك لإنشاء حساب</h1>
          <br />
          <br />

          <div className="formulary">
            <div className="formulary-left">
              <p>الاسم الرباعي بالانكليزي*</p>
              <input type="text" />
              <p>الهاتف</p>
              <input type="text" />
              <p>الجنس</p>
              <input type="text" />
              <p>مدينة*</p>
              <input type="text" />
              <p>تأكيد كلمة المرور</p>
              <input type="text" />
            </div>

            <div className="formulary-right">
              <p>الاسم الرباعي بالعربي *</p>
              <input type="text" />
              <p>البريد الإلكتروني*</p>
              <input type="text" />
              <p>تاريخ الميلاد</p>
              <input type="text" />
              <p>المؤهل العلمي</p>
              <input type="text" />
              <p>كلمة المرور</p>
              <input type="text" />
            </div>
          </div>
          <br />
          <br />

          <button className="create-account-btn">إنشاء حساب </button>

          <div className="separation-line">
            <hr />
            <h6>او</h6>
            <hr />
          </div>
          <button className="sign-in-btn">تسجيل الدخول</button>

          <br />
        </div>
      </section>

      <Footer/>

    </>
  );
};
