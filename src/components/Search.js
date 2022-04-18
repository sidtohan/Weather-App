import { useDispatch, useSelector } from "react-redux";
import getData from "../services/apiService";
import updateState from "../utils/stateUpdater";
import { updateDay } from "../reducers/dayReducer";
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
      dispatch(updateDay(0));

      // Also swipe switcher to left most
      document.querySelector(".switcher").scrollLeft = 0;
      
    } catch (error) {
      dispatch(toggleError("Invalid City"));
      dispatch(loaderOff());
    }
  };

  const filterCity = (e) => {
    let cityName = e.target.value;
    cityName = cityName.split(" ").join("").toLowerCase();
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
      {cityList.length != 0 && (
        <div className="city-list">
          {cityList.slice(0, 5).map((city) => (
            <div
              key={city}
              className="city-list-option"
              onClick={() => changeCityName(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
      <button type="submit">{getSearch()}</button>
    </form>
  );
};

export default Search;
