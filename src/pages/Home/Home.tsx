import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/Data.json";
import Form from "../../components/Form/Form";
import Links from "../../components/Links/Links";
import Model from "../../components/Model/Model";
import "./Home.css";

const Home = () => {
  const formFields: any[] = data.formFields;
  const logos: any[] = data.logos;

  const [selectedLogo, setSelectedLogo] = useState(null);

  return (
    <>
    <div className="flex justify-center align-center flex_column">
    <Link className="btn_primary text-center" to={"/home"}>View Products</Link>
</div>
      <div className="container logos_container flex">
        {logos.map((car) => (
          <Model key={car.id} car={car} setSelectedLogo={setSelectedLogo} />
        ))}
      </div>
      {selectedLogo && <Form selected={selectedLogo} formFields={formFields} />}
    </>
  );
};

export default Home;
