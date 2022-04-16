import trie from "../utils/trie";
const cityListReducer = (cityList = [], action) => {
  switch (action.type) {
    case "UPDATE_CITY_LIST":
      return trie.search(action.data);
    default:
      return cityList;
  }
};

export const applyCityFilter = (data) => {
  return {
    type: "UPDATE_CITY_LIST",
    data,
  };
};

export default cityListReducer;
