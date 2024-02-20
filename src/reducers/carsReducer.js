import { createSlice } from "@reduxjs/toolkit";

const filterTypes = (type, payload, item) => {
  if(type === "array") {
    return Object.values(payload)?.includes(item)
  }
  else if(type === "min_max") {
    return Number(item) >= payload.min && Number(item) <= payload.max
  }
  return payload == item
}

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    entries: [],
    filteredCars: [],
  },
  reducers: {
    addDetail: (state, { payload }) => {
      state.entries.push(payload);
    },
    applyFilters: (state, { payload }) => {
      let filters = {};
      for (let key in payload) {
        if(payload[key]?.checkType !== "array" || Object.keys(payload[key]?.value)?.length) {
          filters[key] = (item) => filterTypes(payload[key]?.checkType, payload[key]?.value, item[key])
        }
      }
      const selected = Object.values(filters);
      state.filteredCars = state.entries.filter((item) =>
        selected.every((f) => f(item))
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDetail, applyFilters } = carsSlice.actions;

export default carsSlice.reducer;
