import { useDispatch, useSelector } from "react-redux";
import getData from "../services/apiService";
import updateState from "../utils/stateUpdater";
import { getSearch } from "../utils/iconMapper";
import { loaderOn, loaderOff } from "../reducers/loaderReducer";
import { toggleError } from "../reducers/errorReducer";
import { applyCityFilter } from "../reducers/cityListReducer";
import { useRef } from "react";

const Search = () => {
  // Form for city search
  const dispatch = useDispatch();
  const cityList = useSelector((state) => state.cityList);
  const inputRef = useRef(null);
  const handleCitySearch = async (e) => {
    e.preventDefault();
    // Get City Name
    const city = e.target.city.value;
    if (city === "") {
      return;
    }

    e.target.city.value = "";
    e.target.city.blur();
    dispatch(loaderOn());
    // Use name given by API for uniformity
    try {
      const { name, ...data } = await getData(city);
      updateState(name, data, dispatch);
      dispatch(loaderOff());
      dispatch(applyCityFilter(""));
    } catch (error) {
      dispatch(toggleError("Invalid City"));
      dispatch(loaderOff());
    }
  };

  const filterCity = (e) => {
    const cityName = e.target.value;
    dispatch(applyCityFilter(cityName));
  };

  const changeCityName = (city) => {
    inputRef.current.value = city;
    dispatch(applyCityFilter(""));
  };
  return (
    <form
      onSubmit={handleCitySearch}
      className="city-search"
      autoComplete="off"
    >
      <input
        list="city-list"
        name="city"
        placeholder="Search"
        onChange={filterCity}
        ref={inputRef}
      />
      <div className="city-list">
        {cityList.slice(0, 5).map((city) => (
          <div
            className="city-list-option"
            onClick={() => changeCityName(city)}
          >
            {city}
          </div>
        ))}
      </div>
      <button type="submit">{getSearch()}</button>
    </form>
  );
};

export default Search;
