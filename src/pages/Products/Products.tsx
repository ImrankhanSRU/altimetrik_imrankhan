import React, { useEffect } from "react";
import data from "../../assets/Data.json";
import Filters from "../../components/Filters/Filters";
import { useSelector } from "react-redux";
import Details from "./details";
import "./Products.css"

const Products = () => {
  const filters: any = data.filters;

  const details = useSelector((state: any) => state.cars.filteredCars)

  useEffect(() => {

  }, [])

  return (
    <div className="flex justify-center gap-2">
      <Filters filters={filters} />
      <Details />
    </div>
  );
};

export default Products;
