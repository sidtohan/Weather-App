import { useDispatch } from "react-redux";
import getData from "../services/apiService";
import updateState from "../utils/stateUpdater";

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
    <form onSubmit={handleCitySearch}>
      <input type="text" name="city" placeholder="City Name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
