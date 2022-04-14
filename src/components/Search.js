import { useDispatch } from "react-redux";
import getData from "../services/apiService";
import updateState from "../utils/stateUpdater";
import { getSearch} from "../utils/iconMapper";

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
    // Use name given by API for uniformity
    const { name, ...data } = await getData(city);
    updateState(name, data, dispatch);
  };
  return (
    <form onSubmit={handleCitySearch} className="city-search">
      <input type="text" name="city" placeholder="Search" />
      <button type="submit">{getSearch()}</button>
    </form>
  );
};

export default Search;
