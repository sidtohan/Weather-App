// Uses trie to implement drop down functionality
const TrieSearch = require("trie-search/src/TrieSearch");
const cityList = require("./cities.json");

const helperSet = new Set();
const trie = new TrieSearch();
for (let country in cityList) {
  for (let city of cityList[country]) {
    city = city.split(" ")[0].toLowerCase();
    city = city[0].toUpperCase() + city.slice(1);
    if (helperSet.has(city)) continue;
    trie.map(city, city);
    helperSet.add(city);
  }
}

export default trie;
