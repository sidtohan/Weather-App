import { useDispatch } from "react-redux";
import getData from "../services/apiService";
import updateState from "../utils/stateUpdater";
import { getSearch } from "../utils/iconMapper";
import { toggleLoader } from "../reducers/loaderReducer";

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
    dispatch(toggleLoader());
    // Use name given by API for uniformity
    const { name, ...data } = await getData(city);
    updateState(name, data, dispatch);
    dispatch(toggleLoader());
  };
  
  return (
    <form onSubmit={handleCitySearch} className="city-search">
      <input type="text" name="city" placeholder="Search" />
      <button type="submit">{getSearch()}</button>
    </form>
  );
};

export default Search;
