import React, { useState, useEffect } from "react";

function Country({ Data, setFormData }) {
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(""); // Track selected country
  const [selectedState, setSelectedState] = useState(""); // Track selected state
  const [selectedCity, setSelectedCity] = useState(""); // Track selected city

  // This effect is used to handle changes when a country, state, or city is selected
  // console.log(Data);

  useEffect(() => {
    if (selectedCountry) {
      const newCountryData = Data.filter(
        (country) => country.name === selectedCountry
      );
      setStateData(newCountryData?.[0]?.states);
    }
  }, [selectedCountry, Data]);

  useEffect(() => {
    if (selectedState) {
      const newStateData = stateData.filter(
        (state) => state.name === selectedState
      );
      // console.log(newStateData?.[0]?.cities);
      setCityData(newStateData?.[0]?.cities);
    }
  }, [selectedState, stateData]);

  const handleChangeCountry = (e) => {
    const { value } = e.target;
    setSelectedCountry(value);
    setFormData((prevForm) => {
      return { ...prevForm, country: value };
    });
  };

  const handleChangeState = (e) => {
    const { value } = e.target;
    setSelectedState(value);
    setFormData((prevForm) => {
      return { ...prevForm, state: value };
    });
  };

  const handleChangeCity = (e) => {
    const { value } = e.target;
    setSelectedCity(value);
    setFormData((prevForm) => {
      return { ...prevForm, city: value };
    });
  };

  return (
    <div>
      <label htmlFor="country" className="text-sm font-medium leading-6 text-gray-900">
        Country
      </label>
      <select
        required
        name="country"
        value={selectedCountry}
        onChange={handleChangeCountry}
        className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
      >
        <option value="">Select Country</option>
        {Data?.map((country) => {
          return (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>

      <label htmlFor="states" className="text-sm font-medium leading-6 text-gray-900">
        State / Province
      </label>
      <select
        required
        name="state"
        value={selectedState}
        onChange={handleChangeState}
        className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
      >
        <option value="">Select State</option>
        {stateData?.map((state) => {
          return (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          );
        })}
      </select>

      <label htmlFor="city" className="text-sm font-medium leading-6 text-gray-900">
        City
      </label>
      <select
        required
        name="city"
        value={selectedCity}
        onChange={handleChangeCity}
        className="my-1 w-[100%] rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
      >
        <option value="">Select City</option>
        {cityData?.map((city) => {
          return (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Country;
