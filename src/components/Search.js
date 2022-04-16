import { useDispatch } from "react-redux";
import getData from "../services/apiService";
import updateState from "../utils/stateUpdater";
import { getSearch } from "../utils/iconMapper";
import { loaderOn, loaderOff } from "../reducers/loaderReducer";
import { toggleError } from "../reducers/errorReducer";

const Search = () => {
  // Form for city search
  const dispatch = useDispatch();
  const handleCitySearch = async (e) => {
    e.preventDefault();
    // Get City Name
    const city = e.target.city.value;
    if (city === "") {
      return;
    }

    e.target.city.value = "";
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

  return (
    <form onSubmit={handleCitySearch} className="city-search">
      <input type="text" name="city" placeholder="Search" />
      <button type="submit">{getSearch()}</button>
    </form>
  );
};

export default Search;
