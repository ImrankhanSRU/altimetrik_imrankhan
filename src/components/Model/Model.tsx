import "./Model.css"

type Car = {
  logo_url: string;
  model: string;
};

const Model = (props: any) => {
  const car: Car = props.car;
  return (
    <div className="logo flex flex_column" onClick={()=> props.setSelectedLogo(car.model)} >
      <img className="car_logo" src={car.logo_url} alt={`${car.model} logo`} />
      <p className="text-center">{car.model}</p>
    </div>
  );
};

export default Model;
