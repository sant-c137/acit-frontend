import './Card.css';

export const Card = ({ title, numOfCourses, cardKey}) => {
  const colors = {
    background1: "#4583832B",
    background2: "#EFF4FC",
    background3: "#FFF1F1",
    background4: "#FAEFFA",
    background5: "#FFF3EE",
    background6: "#13A3D91F",
  };

  const icons = {
    security: "LogoSecurity.svg",
    network: "LogoNetwork.svg",
    programming: "LogoProgramming.svg",
    business: "LogoBagBusiness.svg",
  };

  const color = colors[`background${cardKey}`] || '#e7e7e7';

  return (
    <>
      <div className="card" style={{ backgroundColor: color }}>
        <div className="circle-frame">
          <img src={icons[title]} alt="" />
        </div>
        <h1>{title}</h1>
        <p>{numOfCourses + " كورسات"}</p>
      </div>
    </>
  );
};

