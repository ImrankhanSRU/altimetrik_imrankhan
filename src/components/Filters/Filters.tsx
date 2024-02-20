import Filter from "../Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { applyFilters } from "../../reducers/carsReducer"

type FilterType = {
    label: string,
    type: string,
    key: string,
    options?: any[]
}

const Filters = ({filters}: any) => {
    const entries = useSelector((state: any) => state.cars.entries);
    const dispatch = useDispatch();

    const [filterValues, setFilters] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState<any>({});

    useEffect(() => {
        generateFilters()
    }, [entries, filters])

    const generateFilters = () => {
        let filterValues = filters;
        let brands: any[] = [];
        let locations: any[] = [];
        entries.forEach((detail: any) => {
            brands.push(detail.brand);
            locations.push(detail.location);
        })
        filterValues[0].options = locations.map(item => {return {label: item, value: item}});
        filterValues[1].options = brands.map(item => {return {label: item, value: item}});
        setFilters(filterValues);
        setSelectedFilters({location: {value: locations[0]}});
        dispatch(applyFilters({location: {value: locations[0]}}));
    }

    const getData = (key: string, value: string, type: string, checked: boolean, min: number, max: number) => {
        let filters = selectedFilters;
        if(type === "min_max") {
            filters[key] = {checkType: type, value : {min, max}}
        }
        else if(value) {
            filters[key] = {checkType: type === "checkbox" ? "array" : "string", value: type === "checkbox" ? {...filters?.[key]?.value || {}, [value]: value} : value}
        }
        if(type === "checkbox" && !checked) {
            delete filters[key].value[value];
        }
        setSelectedFilters(filters);
        dispatch(applyFilters(filters));

    }


    return(
        <div>
            {
                filterValues.map((item: FilterType) => (
                    <Filter key={item.label} item={item} getData={getData} />
                ))
            }
        </div>
    );
}

export default Filters;