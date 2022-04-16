import { useDispatch, useSelector } from "react-redux";
import getData from "../services/apiService";
import updateState from "../utils/stateUpdater";
import { getSearch } from "../utils/iconMapper";
import { loaderOn, loaderOff } from "../reducers/loaderReducer";
import { toggleError } from "../reducers/errorReducer";
import { applyCityFilter } from "../reducers/cityListReducer";

const Search = () => {
  // Form for city search
  const dispatch = useDispatch();
  const cityList = useSelector((state) => state.cityList);
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
    } catch (error) {
      dispatch(toggleError("Please enter a valid city"));
      dispatch(loaderOff());
    }
  };

  const filterCity = (e) => {
    const cityName = e.target.value;
    dispatch(applyCityFilter(cityName));
  };

  return (
    <form onSubmit={handleCitySearch} className="city-search">
      <input
        list="city-list"
        name="city"
        placeholder="Search"
        onChange={filterCity}
      />
      <datalist id="city-list">
        {cityList.slice(0, 10).map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </datalist>

      <button type="submit">{getSearch()}</button>
    </form>
  );
};

export default Search;
