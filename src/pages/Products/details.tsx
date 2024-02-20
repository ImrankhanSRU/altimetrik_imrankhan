import { useSelector } from "react-redux";

const Details = () => {
    const filteredCars = useSelector((state: any) => state.cars.filteredCars)

    return(
        <div>
            {
                filteredCars.map((car: any) => (
                    <div className="flex" key={car.id}>
                        <img className="car_image" src={car.image_url} alt={`${car.brand} image`} />
                        <div>
                            <ul>
                                <li>{car.brand}</li>
                                <li>{car.transmission}</li>
                                <li>Insurance upto - {car.ins_date}</li>
                                <li>{car.ext_fit}</li>
                                <li>{car.kms} Kms</li>
                                <li>Year - {car.manufacture_year}</li>
                                <li>{car.price} L</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Details;